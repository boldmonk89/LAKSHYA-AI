import { supabase } from "@/integrations/supabase/client";

interface RetryOptions {
  maxRetries?: number;
  retryDelay?: number;
  onRetry?: (attempt: number) => void;
}

export async function invokeWithRetry<T>(
  functionName: string,
  body: any,
  options: RetryOptions = {}
): Promise<{ data: T | null; error: Error | null }> {
  const { maxRetries = 3, retryDelay = 2000, onRetry } = options;
  
  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Get the session to pass the auth token, or fallback to the anon key
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/${functionName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });
      
      let responseData;
      const text = await response.text();
      try {
        responseData = JSON.parse(text);
      } catch (e) {
        responseData = null;
      }
      
      if (!response.ok) {
        // Find the real error message from the backend response body
        const errorMessage = responseData?.error || responseData?.message || text || 'Error from Edge Function';
        const error = new Error(errorMessage);
        
        // Handle Wake-up timeouts (502, 503, 504)
        if ((response.status >= 502 && response.status <= 504) && attempt < maxRetries) {
          console.log(`Backend waking up, retry ${attempt}/${maxRetries}...`);
          onRetry?.(attempt);
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          continue;
        }
        
        throw error;
      }
      
      return { data: responseData as T, error: null };
    } catch (err: any) {
      lastError = err;
      
      const isNetworkError = err.name === 'TypeError' && err.message === 'Failed to fetch';
      
      // Only retry on network errors, don't retry on structured errors like 402 or 429
      if (isNetworkError && attempt < maxRetries) {
        console.log(`Retry attempt ${attempt}/${maxRetries} after error:`, err.message);
        onRetry?.(attempt);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      } else {
        // If it's not a network error to retry, break the loop
        break;
      }
    }
  }
  
  return { data: null, error: lastError };
}

// Ping health check to wake up backend
export async function wakeUpBackend(): Promise<boolean> {
  try {
    const { data, error } = await supabase.functions.invoke('health-check', {});
    return !error && data?.status === 'active';
  } catch {
    return false;
  }
}

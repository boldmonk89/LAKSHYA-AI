import { supabase } from "@/integrations/supabase/client";

interface RetryOptions {
  maxRetries?: number;
  retryDelay?: number;
}

export async function invokeWithRetry<T>(
  functionName: string,
  options: any = {},
  retryOptions: RetryOptions = {}
): Promise<{ data: T | null; error: any }> {
  const { maxRetries = 3, retryDelay = 1000 } = retryOptions;
  let lastError: any;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const { data, error } = await supabase.functions.invoke(functionName, options);
      if (!error) return { data, error: null };
      
      lastError = error;
      console.warn(`Attempt ${attempt + 1} failed for ${functionName}:`, error);
      
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
      }
    } catch (err) {
      lastError = err;
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
      }
    }
  }

  return { data: null, error: lastError };
}

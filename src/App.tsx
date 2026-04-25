import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const DefenceAnalysis = lazy(() => import("./pages/DefenceAnalysis"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const ResearchPapers = lazy(() => import("./pages/ResearchPapers"));
const Tools = lazy(() => import("./pages/Tools"));
const Materials = lazy(() => import("./pages/Materials"));
const Community = lazy(() => import("./pages/Community"));

const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/community" element={<Community />} />
              <Route path="/analysis" element={<DefenceAnalysis />} />
              <Route path="/analysis/:slug" element={<ArticlePage />} />
              <Route path="/research" element={<ResearchPapers />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

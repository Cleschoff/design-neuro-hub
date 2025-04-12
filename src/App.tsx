
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NeuroDetail from "./pages/NeuroDetail";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import StartProject from "./pages/StartProject";
import DesignTools from "./pages/DesignTools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/community" element={<Community />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/neuro/:id" element={<NeuroDetail />} />
            <Route path="/dashboard/start-project" element={<StartProject />} />
            <Route path="/dashboard/design-tools" element={<DesignTools />} />
            <Route path="/tools/:toolId" element={<DesignTools />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

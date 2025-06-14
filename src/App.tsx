import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LocaleProvider } from "@/context/LocaleContext";

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
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import TypographySelection from "./pages/TypographySelection";
import ColorPalette from "./pages/ColorPalette";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <LocaleProvider defaultLocale="ru">
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
              <Route path="/tools/typography" element={<TypographySelection />} />
              <Route path="/tools/colors" element={<ColorPalette />} />
              <Route path="/dashboard/projects" element={<Projects />} />
              <Route path="/dashboard/tasks" element={<Tasks />} />
              <Route path="/dashboard/resources" element={<Resources />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/notifications" element={<Notifications />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LocaleProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

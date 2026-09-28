import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Scroll to top on in-place page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Get initial route from any legacy hash link, then strip hash from the URL bar
function getInitialRoute(): string {
  if (typeof window !== "undefined" && window.location.hash) {
    const raw = window.location.hash.replace(/^#\/?/, "");
    const cleanedRoute = raw ? `/${raw}` : "/";
    try {
      window.history.replaceState(null, "", window.location.pathname);
    } catch (_) {}
    return cleanedRoute;
  }
  return "/";
}

const initialRoute = getInitialRoute();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* MemoryRouter keeps the browser URL 100% static while maintaining full in-place multi-page navigation */}
        <MemoryRouter initialEntries={[initialRoute]}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

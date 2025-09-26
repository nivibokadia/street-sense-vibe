import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issues";
import Analytics from "./pages/Analytics";
import MapView from "./pages/MapView";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import { DashboardLayout } from "./components/DashboardLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/dashboard" 
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/issues" 
            element={
              <DashboardLayout>
                <Issues />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/map" 
            element={
              <DashboardLayout>
                <MapView />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/users" 
            element={
              <DashboardLayout>
                <Users />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

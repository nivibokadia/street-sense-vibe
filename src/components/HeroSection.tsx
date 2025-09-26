import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroCity from "@/assets/hero-city.png";

const AnimatedStats = () => {
  const stats = [
    { icon: Zap, value: "2,847", label: "Issues Resolved", color: "text-success" },
    { icon: Users, value: "156", label: "Active Wards", color: "text-primary" },
    { icon: TrendingUp, value: "98%", label: "SLA Compliance", color: "text-accent" },
    { icon: MapPin, value: "24h", label: "Avg Response", color: "text-urgent" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-gradient-card backdrop-blur-sm rounded-lg p-4 border border-white/20 hover-lift animate-bounce-in"
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
            <span className="text-xs text-muted-foreground font-medium">
              {stat.label}
            </span>
          </div>
          <div className={`text-2xl font-bold ${stat.color}`}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
};

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-success/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-32 w-10 h-10 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/dashboard");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Professional overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>
      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/10 rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/15 rounded-lg rotate-45"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Professional Badge */}
            <Badge variant="outline" className="mb-8 bg-white/5 text-white border-white/20 hover:bg-white/10">
              <Zap className="h-4 w-4 mr-2" />
              Municipal Management Platform
            </Badge>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">StreetSense</span>
              <span className="block text-slate-300 text-3xl md:text-5xl font-medium mt-2">
                Civic Administration
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Streamlined municipal issue management system for efficient civic administration. 
              Monitor, track, and resolve community concerns with data-driven insights.
            </p>
            
            {/* CTA Button */}
            <div className="mb-12">
              <Button 
                variant="default" 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-slate-900 hover:bg-slate-100"
                onClick={handleAdminLogin}
              >
                <MapPin className="h-5 w-5 mr-2" />
                Access Dashboard
              </Button>
            </div>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2,847</div>
                <div className="text-sm text-slate-400">Issues Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">156</div>
                <div className="text-sm text-slate-400">Active Wards</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-slate-400">SLA Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm text-slate-400">Avg Response</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Professional Showcase */}
          <div className="relative">
            <div className="relative bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <img
                src={heroCity}
                alt="StreetSense Dashboard Preview"
                className="w-full h-auto rounded-lg opacity-90"
              />
              
              {/* Status indicators */}
              <div className="absolute top-12 right-12">
                <div className="bg-green-600/90 text-white px-3 py-1 rounded text-sm">
                  System Online
                </div>
              </div>
              
              <div className="absolute bottom-12 left-12">
                <div className="bg-blue-600/90 text-white px-3 py-1 rounded text-sm">
                  Real-time Monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
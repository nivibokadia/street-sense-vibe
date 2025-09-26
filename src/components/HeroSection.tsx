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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 animate-bounce-in bg-white/20 text-white border-white/30">
              <Zap className="h-4 w-4 mr-2" />
              Transparency & Results
            </Badge>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block animate-bounce-in">Civic Issues,</span>
              <span className="block animate-bounce-in text-primary-glow" style={{ animationDelay: '0.2s' }}>
                Sorted.
              </span>
              <span className="block animate-bounce-in text-accent" style={{ animationDelay: '0.4s' }}>
                Together.
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-white/90 mb-8 max-w-lg animate-bounce-in" style={{ animationDelay: '0.6s' }}>
              Transform civic engagement with StreetSense - where community issues meet lightning-fast resolution through colorful, intelligent admin tools.
            </p>
            
            {/* CTA Button */}
            <div className="animate-bounce-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={handleAdminLogin}
              >
                <MapPin className="h-5 w-5 mr-2" />
                Login as Admin
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12">
              <AnimatedStats />
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative animate-bounce-in" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <img
                src={heroCity}
                alt="StreetSense City Dashboard"
                className="w-full h-auto rounded-2xl shadow-glow"
              />
              
              {/* Overlay Elements */}
              <div className="absolute top-4 right-4">
                <div className="bg-success/90 text-white px-3 py-2 rounded-lg text-sm font-medium animate-pulse-glow">
                  ✅ Issue Resolved!
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4">
                <div className="bg-urgent/90 text-white px-3 py-2 rounded-lg text-sm font-medium animate-pulse-glow">
                  🚨 SLA Warning
                </div>
              </div>
              
              {/* Floating pins */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse-glow shadow-glow"></div>
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-accent rounded-full animate-pulse-glow shadow-accent"></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-success rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, Users } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: React.ElementType;
  color: string;
  description?: string;
}

const StatCard = ({ title, value, change, trend, icon: Icon, color, description }: StatCardProps) => {
  const trendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : null;
  const trendColor = trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground";

  return (
    <Card className="hover-lift bg-gradient-card border border-border/50 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          {change && trendIcon && (
            <Badge variant="outline" className={`${trendColor} gap-1`}>
              {React.createElement(trendIcon, { className: "h-3 w-3" })}
              {change}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-foreground">{value}</h3>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const DashboardStats = () => {
  const stats = [
    {
      title: "Open Issues",
      value: 23,
      change: "+12%",
      trend: "up" as const,
      icon: AlertTriangle,
      color: "bg-urgent",
      description: "3 critical, 8 high priority"
    },
    {
      title: "Resolved Today",
      value: 47,
      change: "+8%",
      trend: "up" as const,
      icon: CheckCircle,
      color: "bg-success",
      description: "Average resolution: 4.2h"
    },
    {
      title: "Avg Response Time",
      value: "2.4h",
      change: "-15%",
      trend: "down" as const,
      icon: Clock,
      color: "bg-primary",
      description: "SLA target: 4h"
    },
    {
      title: "Active Workers",
      value: 12,
      change: "+2",
      trend: "up" as const,
      icon: Users,
      color: "bg-accent",
      description: "8 field, 4 remote"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className="animate-bounce-in"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  );
};
import { useState } from "react";
import {
  Home,
  Ticket,
  BarChart3,
  Map,
  Users,
  Settings,
  Bell,
  Zap,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navigation = [
  { title: "Dashboard", url: "/dashboard", icon: Home, color: "text-primary" },
  { title: "Issues", url: "/issues", icon: Ticket, color: "text-urgent", badge: "23" },
  { title: "Analytics", url: "/analytics", icon: BarChart3, color: "text-success" },
  { title: "Map View", url: "/map", icon: Map, color: "text-accent" },
  { title: "Users", url: "/users", icon: Users, color: "text-secondary" },
  { title: "Settings", url: "/settings", icon: Settings, color: "text-muted-foreground" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  const getNavCls = (isActive: boolean) =>
    isActive
      ? "bg-primary/10 text-primary font-semibold border-r-2 border-primary"
      : "hover:bg-muted/50 transition-colors";

  return (
    <Sidebar
      className="bg-gradient-card border-r border-border/50"
      collapsible="icon"
    >
      <SidebarContent>
        {/* Header */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg text-foreground">StreetSense</h2>
                <p className="text-xs text-muted-foreground">Admin Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Main Navigation
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-all duration-200 ${getNavCls(
                          isActive
                        )}`
                      }
                    >
                      <item.icon className={`h-5 w-5 ${item.color} transition-colors`} />
                      {!isCollapsed && (
                        <div className="flex items-center justify-between flex-1">
                          <span className="font-medium">{item.title}</span>
                          {item.badge && (
                            <Badge variant="destructive" className="ml-auto text-xs px-2 py-1">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Actions */}
        {!isCollapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Quick Actions
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-4">
              <div className="space-y-2">
                <div className="bg-urgent/10 border border-urgent/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Bell className="h-4 w-4 text-urgent" />
                    <span className="text-sm font-medium text-urgent">SLA Alerts</span>
                  </div>
                  <p className="text-xs text-muted-foreground">3 issues need attention</p>
                </div>
                
                <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium text-success">Today's Stats</span>
                  </div>
                  <p className="text-xs text-muted-foreground">47 issues resolved</p>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
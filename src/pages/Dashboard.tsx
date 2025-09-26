import { DashboardStats } from "@/components/DashboardStats";
import { TicketCard } from "@/components/TicketCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plus, Filter } from "lucide-react";

const mockTickets = [
  {
    id: "1",
    title: "Pothole on Main Street",
    description: "Large pothole causing traffic issues and potential vehicle damage",
    status: "urgent" as const,
    location: "Main St & 5th Ave",
    assignedTo: "John Smith",
    priority: "high" as const,
    createdAt: "2 hours ago",
    slaHours: 4
  },
  {
    id: "2", 
    title: "Broken Streetlight",
    description: "Streetlight not working, creating safety concerns for pedestrians",
    status: "pending" as const,
    location: "Park Ave & 12th St",
    priority: "medium" as const,
    createdAt: "5 hours ago",
    slaHours: 24
  },
  {
    id: "3",
    title: "Graffiti Cleanup Request",
    description: "Multiple graffiti tags on public building requiring removal",
    status: "resolved" as const,
    location: "City Hall Building",
    assignedTo: "Maria Garcia",
    priority: "low" as const,
    createdAt: "1 day ago",
    slaHours: 72
  },
  {
    id: "4",
    title: "Water Main Issue",
    description: "Suspected water main leak causing flooding on residential street",
    status: "escalated" as const,
    location: "Oak St & 3rd Ave",
    assignedTo: "Emergency Team",
    priority: "high" as const,
    createdAt: "30 minutes ago",
    slaHours: 2
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Monitor and manage civic issues across the city</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="hero">
            <Plus className="h-4 w-4 mr-2" />
            New Issue
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Recent Issues */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-gradient-card border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Recent Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {mockTickets.map((ticket) => (
                  <TicketCard key={ticket.id} {...ticket} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Analytics Preview */}
        <div className="space-y-6">
          <Card className="bg-gradient-card border border-border/50">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="accent" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Create New Issue
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                View Map
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Filter className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-border/50">
            <CardHeader>
              <CardTitle>SLA Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Within SLA</span>
                  <span className="font-semibold text-success">94%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-success">47</div>
                    <div className="text-xs text-muted-foreground">On Time</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-urgent">3</div>
                    <div className="text-xs text-muted-foreground">Overdue</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
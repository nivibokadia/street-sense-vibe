import { useState } from "react";
import { TicketCard } from "@/components/TicketCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Filter, Search, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockIssues = [
  {
    id: "1",
    title: "Pothole on S.V. Road, Bandra",
    description: "Large pothole causing traffic issues and potential vehicle damage near Bandra Railway Station",
    status: "urgent" as const,
    location: "S.V. Road, Bandra West, Mumbai",
    assignedTo: "Priya Sharma",
    priority: "high" as const,
    createdAt: "2 hours ago",
    slaHours: 4
  },
  {
    id: "2", 
    title: "Broken Streetlight - Marine Drive",
    description: "Streetlight not working, creating safety concerns for pedestrians near Queen's Necklace",
    status: "pending" as const,
    location: "Marine Drive, Mumbai",
    priority: "medium" as const,
    createdAt: "5 hours ago",
    slaHours: 24
  },
  {
    id: "3",
    title: "Graffiti Cleanup - CST Building",
    description: "Multiple graffiti tags on heritage building requiring immediate removal",
    status: "resolved" as const,
    location: "Chhatrapati Shivaji Terminus, Mumbai",
    assignedTo: "Rajesh Patil",
    priority: "low" as const,
    createdAt: "1 day ago",
    slaHours: 72
  },
  {
    id: "4",
    title: "Water Main Issue - Colaba",
    description: "Suspected water main leak causing flooding on residential street near Gateway of India",
    status: "escalated" as const,
    location: "Colaba Causeway, Mumbai",
    assignedTo: "Emergency Team",
    priority: "high" as const,
    createdAt: "30 minutes ago",
    slaHours: 2
  },
  {
    id: "5",
    title: "Traffic Signal Malfunction - Andheri",
    description: "Traffic signal stuck on red, causing major traffic congestion during peak hours",
    status: "urgent" as const,
    location: "Andheri West Junction, Mumbai",
    assignedTo: "Mumbai Traffic Police",
    priority: "high" as const,
    createdAt: "1 hour ago",
    slaHours: 2
  },
  {
    id: "6",
    title: "Garbage Collection Delay - Dadar",
    description: "Garbage not collected for 3 days, creating sanitation issues in residential area",
    status: "pending" as const,
    location: "Dadar East, Mumbai",
    priority: "medium" as const,
    createdAt: "3 hours ago",
    slaHours: 48
  }
];

export default function Issues() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredIssues = mockIssues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || issue.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || issue.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleCreateIssue = () => {
    // Navigate to create issue form (can be implemented later)
    console.log("Create new issue");
  };

  const handleExportReport = () => {
    console.log("Export issues report");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Issues Management</h1>
          <p className="text-muted-foreground">Track and manage civic issues across Mumbai</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleExportReport}>
            <FileText className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="hero" onClick={handleCreateIssue}>
            <Plus className="h-4 w-4 mr-2" />
            New Issue
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-card border border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            Filters & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="escalated">Escalated</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Issues</p>
                <p className="text-2xl font-bold text-foreground">{mockIssues.length}</p>
              </div>
              <Badge variant="secondary">{mockIssues.length}</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Urgent</p>
                <p className="text-2xl font-bold text-urgent">{mockIssues.filter(i => i.status === 'urgent').length}</p>
              </div>
              <Badge className="bg-urgent text-urgent-foreground">{mockIssues.filter(i => i.status === 'urgent').length}</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-warning">{mockIssues.filter(i => i.status === 'pending').length}</p>
              </div>
              <Badge className="bg-warning text-warning-foreground">{mockIssues.filter(i => i.status === 'pending').length}</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Resolved</p>
                <p className="text-2xl font-bold text-success">{mockIssues.filter(i => i.status === 'resolved').length}</p>
              </div>
              <Badge className="bg-success text-success-foreground">{mockIssues.filter(i => i.status === 'resolved').length}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Issues List */}
      <Card className="bg-gradient-card border border-border/50">
        <CardHeader>
          <CardTitle>Issues ({filteredIssues.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {filteredIssues.map((issue) => (
              <TicketCard key={issue.id} {...issue} />
            ))}
          </div>
          {filteredIssues.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No issues found matching your filters.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
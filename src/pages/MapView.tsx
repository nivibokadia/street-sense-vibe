import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MapPin, Filter, Search, Layers, Maximize } from "lucide-react";

const mapIssues = [
  {
    id: "1",
    title: "Pothole on S.V. Road",
    location: "S.V. Road, Bandra West",
    lat: 19.0543,
    lng: 72.8322,
    status: "urgent",
    type: "road"
  },
  {
    id: "2",
    title: "Streetlight Issue",
    location: "Marine Drive",
    lat: 18.9434,
    lng: 72.8232,
    status: "pending",
    type: "lighting"
  },
  {
    id: "3",
    title: "Water Leak",
    location: "Colaba Causeway",
    lat: 18.9067,
    lng: 72.8147,
    status: "escalated",
    type: "water"
  },
  {
    id: "4",
    title: "Traffic Signal Down",
    location: "Andheri West Junction",
    lat: 19.1197,
    lng: 72.8464,
    status: "urgent",
    type: "traffic"
  },
  {
    id: "5",
    title: "Garbage Collection",
    location: "Dadar East",
    lat: 19.0178,
    lng: 72.8478,
    status: "pending",
    type: "sanitation"
  }
];

const wardBoundaries = [
  { name: "Bandra West", issues: 12, resolved: 8 },
  { name: "Andheri East", issues: 15, resolved: 11 },
  { name: "Colaba", issues: 8, resolved: 6 },
  { name: "Marine Drive", issues: 6, resolved: 5 },
  { name: "Dadar East", issues: 9, resolved: 7 },
  { name: "CST Area", issues: 4, resolved: 4 }
];

export default function MapView() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [mapFilter, setMapFilter] = useState("all");
  const [searchLocation, setSearchLocation] = useState("");

  const filteredIssues = mapIssues.filter(issue => {
    const matchesFilter = mapFilter === "all" || issue.status === mapFilter;
    const matchesSearch = issue.location.toLowerCase().includes(searchLocation.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent": return "bg-urgent";
      case "escalated": return "bg-warning";
      case "pending": return "bg-primary";
      case "resolved": return "bg-success";
      default: return "bg-muted";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "road": return "🛣️";
      case "lighting": return "💡";
      case "water": return "💧";
      case "traffic": return "🚦";
      case "sanitation": return "🗑️";
      default: return "📍";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Map View</h1>
          <p className="text-muted-foreground">Geographic visualization of civic issues across Mumbai</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Layers className="h-4 w-4 mr-2" />
            Layers
          </Button>
          <Button variant="outline">
            <Maximize className="h-4 w-4 mr-2" />
            Fullscreen
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-card border border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            Map Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={mapFilter} onValueChange={setMapFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Issues</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="escalated">Escalated</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Container */}
        <div className="lg:col-span-3">
          <Card className="bg-gradient-card border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Mumbai Civic Issues Map
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Mock Map Container */}
              <div className="relative h-[600px] bg-slate-100 rounded-b-lg overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-slate-300">
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>
                </div>

                {/* Issue Pins */}
                {filteredIssues.map((issue, index) => (
                  <div
                    key={issue.id}
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 ${
                      selectedIssue === issue.id ? 'scale-125 z-10' : ''
                    }`}
                    style={{
                      left: `${20 + index * 15}%`,
                      top: `${30 + index * 12}%`
                    }}
                    onClick={() => setSelectedIssue(selectedIssue === issue.id ? null : issue.id)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg ${getStatusColor(issue.status)} animate-pulse-glow`}>
                      <span className="text-xs">{getTypeIcon(issue.type)}</span>
                    </div>
                    {selectedIssue === issue.id && (
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg p-3 shadow-lg z-20 min-w-48">
                        <h4 className="font-semibold text-sm">{issue.title}</h4>
                        <p className="text-xs text-muted-foreground">{issue.location}</p>
                        <Badge className={`${getStatusColor(issue.status)} text-white mt-2`}>
                          {issue.status}
                        </Badge>
                      </div>
                    )}
                  </div>
                ))}

                {/* Mumbai Label */}
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
                  <h3 className="font-semibold text-sm">Mumbai, Maharashtra</h3>
                  <p className="text-xs text-muted-foreground">{filteredIssues.length} active issues</p>
                </div>

                {/* Legend */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2">Legend</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-urgent"></div>
                      <span className="text-xs">Urgent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning"></div>
                      <span className="text-xs">Escalated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-xs">Pending</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                      <span className="text-xs">Resolved</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Ward Statistics */}
          <Card className="bg-gradient-card border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Ward Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {wardBoundaries.map((ward, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded bg-muted/20">
                  <div>
                    <div className="font-medium text-sm">{ward.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {ward.resolved}/{ward.issues} resolved
                    </div>
                  </div>
                  <Badge variant="outline">
                    {Math.round((ward.resolved / ward.issues) * 100)}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-gradient-card border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-3 rounded bg-urgent/10">
                <div className="text-2xl font-bold text-urgent">{mapIssues.filter(i => i.status === 'urgent').length}</div>
                <div className="text-sm text-muted-foreground">Urgent Issues</div>
              </div>
              <div className="text-center p-3 rounded bg-warning/10">
                <div className="text-2xl font-bold text-warning">{mapIssues.filter(i => i.status === 'escalated').length}</div>
                <div className="text-sm text-muted-foreground">Escalated</div>
              </div>
              <div className="text-center p-3 rounded bg-primary/10">
                <div className="text-2xl font-bold text-primary">{mapIssues.filter(i => i.status === 'pending').length}</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gradient-card border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">New issue reported</div>
                <div className="text-xs text-muted-foreground">Andheri West - 5 min ago</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Issue resolved</div>
                <div className="text-xs text-muted-foreground">Colaba - 15 min ago</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Issue escalated</div>
                <div className="text-xs text-muted-foreground">Bandra West - 1 hour ago</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
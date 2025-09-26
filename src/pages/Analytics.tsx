import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from "recharts";
import { TrendingUp, TrendingDown, Clock, MapPin, Users, FileBarChart, Download } from "lucide-react";

const monthlyData = [
  { month: "Jan", resolved: 245, pending: 32, urgent: 8 },
  { month: "Feb", resolved: 198, pending: 28, urgent: 12 },
  { month: "Mar", resolved: 287, pending: 45, urgent: 15 },
  { month: "Apr", resolved: 334, pending: 38, urgent: 9 },
  { month: "May", resolved: 312, pending: 41, urgent: 11 },
  { month: "Jun", resolved: 289, pending: 35, urgent: 7 }
];

const wardData = [
  { ward: "Bandra West", issues: 145, resolved: 128 },
  { ward: "Andheri East", issues: 132, resolved: 119 },
  { ward: "Colaba", issues: 98, resolved: 89 },
  { ward: "Dadar East", issues: 87, resolved: 76 },
  { ward: "Marine Drive", issues: 76, resolved: 71 },
  { ward: "CST Area", issues: 65, resolved: 62 }
];

const issueTypeData = [
  { type: "Potholes", count: 145, color: "#8b5cf6" },
  { type: "Streetlights", count: 98, color: "#06b6d4" },
  { type: "Garbage", count: 87, color: "#10b981" },
  { type: "Traffic", count: 76, color: "#f59e0b" },
  { type: "Water", count: 54, color: "#ef4444" },
  { type: "Others", count: 43, color: "#6b7280" }
];

const responseTimeData = [
  { time: "0-2h", count: 156, percentage: 31 },
  { time: "2-6h", count: 134, percentage: 27 },
  { time: "6-12h", count: 98, percentage: 20 },
  { time: "12-24h", count: 76, percentage: 15 },
  { time: "24h+", count: 34, percentage: 7 }
];

const slaPerformance = [
  { week: "Week 1", compliance: 94 },
  { week: "Week 2", compliance: 96 },
  { week: "Week 3", compliance: 92 },
  { week: "Week 4", compliance: 98 },
  { week: "Week 5", compliance: 95 },
  { week: "Week 6", compliance: 97 }
];

export default function Analytics() {
  const handleExportReport = () => {
    console.log("Export analytics report");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Performance insights and trends for Mumbai civic issues</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="6months">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleExportReport}>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Resolved</p>
                <p className="text-3xl font-bold text-success">1,965</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-success mr-1" />
                  <span className="text-sm text-success">+12%</span>
                </div>
              </div>
              <Badge className="bg-success text-success-foreground">↗</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response Time</p>
                <p className="text-3xl font-bold text-primary">4.2h</p>
                <div className="flex items-center mt-2">
                  <TrendingDown className="h-4 w-4 text-success mr-1" />
                  <span className="text-sm text-success">-8%</span>
                </div>
              </div>
              <Badge className="bg-primary text-primary-foreground">
                <Clock className="h-4 w-4" />
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">SLA Compliance</p>
                <p className="text-3xl font-bold text-accent">95.4%</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-success mr-1" />
                  <span className="text-sm text-success">+3%</span>
                </div>
              </div>
              <Badge className="bg-accent text-accent-foreground">✓</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Wards</p>
                <p className="text-3xl font-bold text-foreground">24</p>
                <div className="flex items-center mt-2">
                  <MapPin className="h-4 w-4 text-primary mr-1" />
                  <span className="text-sm text-muted-foreground">Mumbai</span>
                </div>
              </div>
              <Badge variant="outline">
                <Users className="h-4 w-4" />
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <Card className="bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly Issue Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Area type="monotone" dataKey="resolved" stackId="1" stroke="hsl(var(--success))" fill="hsl(var(--success))" fillOpacity={0.6} />
                <Area type="monotone" dataKey="pending" stackId="1" stroke="hsl(var(--warning))" fill="hsl(var(--warning))" fillOpacity={0.6} />
                <Area type="monotone" dataKey="urgent" stackId="1" stroke="hsl(var(--urgent))" fill="hsl(var(--urgent))" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Issue Types */}
        <Card className="bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileBarChart className="h-5 w-5 text-primary" />
              Issues by Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={issueTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="count"
                >
                  {issueTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {issueTypeData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm">{item.type}: {item.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ward Performance */}
        <Card className="bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Ward Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wardData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="ward" type="category" width={100} stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Bar dataKey="issues" fill="hsl(var(--primary))" />
                <Bar dataKey="resolved" fill="hsl(var(--success))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* SLA Performance */}
        <Card className="bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              SLA Compliance Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={slaPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[85, 100]} stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="compliance" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Response Time Distribution */}
      <Card className="bg-gradient-card border border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Response Time Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {responseTimeData.map((item, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-muted/20">
                <div className="text-2xl font-bold text-foreground">{item.count}</div>
                <div className="text-sm text-muted-foreground">{item.time}</div>
                <div className="text-xs text-primary">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Filter, UserPlus, Mail, Phone, MapPin, Shield, Users as UsersIcon, Edit, Trash2 } from "lucide-react";

const mockUsers = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya.sharma@mumbai.gov.in",
    phone: "+91 98765 43210",
    role: "Field Officer",
    ward: "Bandra West",
    status: "active",
    issuesAssigned: 12,
    issuesResolved: 8,
    joinDate: "2023-06-15",
    avatar: ""
  },
  {
    id: "2",
    name: "Rajesh Patil",
    email: "rajesh.patil@mumbai.gov.in",
    phone: "+91 98765 43211",
    role: "Ward Supervisor",
    ward: "Andheri East",
    status: "active",
    issuesAssigned: 28,
    issuesResolved: 24,
    joinDate: "2022-03-20",
    avatar: ""
  },
  {
    id: "3",
    name: "Anita Desai",
    email: "anita.desai@mumbai.gov.in",
    phone: "+91 98765 43212",
    role: "Admin",
    ward: "All Wards",
    status: "active",
    issuesAssigned: 0,
    issuesResolved: 0,
    joinDate: "2021-01-10",
    avatar: ""
  },
  {
    id: "4",
    name: "Suresh Kumar",
    email: "suresh.kumar@mumbai.gov.in",
    phone: "+91 98765 43213",
    role: "Field Officer",
    ward: "Colaba",
    status: "inactive",
    issuesAssigned: 5,
    issuesResolved: 5,
    joinDate: "2023-08-12",
    avatar: ""
  },
  {
    id: "5",
    name: "Meera Joshi",
    email: "meera.joshi@mumbai.gov.in",
    phone: "+91 98765 43214",
    role: "Emergency Response",
    ward: "Marine Drive",
    status: "active",
    issuesAssigned: 15,
    issuesResolved: 12,
    joinDate: "2022-11-05",
    avatar: ""
  },
  {
    id: "6",
    name: "Vikram Singh",
    email: "vikram.singh@mumbai.gov.in",
    phone: "+91 98765 43215",
    role: "Field Officer",
    ward: "Dadar East",
    status: "active",
    issuesAssigned: 9,
    issuesResolved: 7,
    joinDate: "2023-04-18",
    avatar: ""
  }
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.ward.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleAddUser = () => {
    console.log("Add new user");
  };

  const handleEditUser = (userId: string) => {
    console.log("Edit user:", userId);
  };

  const handleDeleteUser = (userId: string) => {
    console.log("Delete user:", userId);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin": return "bg-primary text-primary-foreground";
      case "Ward Supervisor": return "bg-accent text-accent-foreground";
      case "Field Officer": return "bg-success text-success-foreground";
      case "Emergency Response": return "bg-urgent text-urgent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground";
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground">Manage field officers, supervisors and administrators</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setViewMode(viewMode === "table" ? "cards" : "table")}>
            <UsersIcon className="h-4 w-4 mr-2" />
            {viewMode === "table" ? "Card View" : "Table View"}
          </Button>
          <Button variant="hero" onClick={handleAddUser}>
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold text-foreground">{mockUsers.length}</p>
              </div>
              <Badge variant="secondary">{mockUsers.length}</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold text-success">{mockUsers.filter(u => u.status === 'active').length}</p>
              </div>
              <Badge className="bg-success text-success-foreground">{mockUsers.filter(u => u.status === 'active').length}</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Field Officers</p>
                <p className="text-2xl font-bold text-primary">{mockUsers.filter(u => u.role === 'Field Officer').length}</p>
              </div>
              <Badge className="bg-primary text-primary-foreground">{mockUsers.filter(u => u.role === 'Field Officer').length}</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Supervisors</p>
                <p className="text-2xl font-bold text-accent">{mockUsers.filter(u => u.role === 'Ward Supervisor').length}</p>
              </div>
              <Badge className="bg-accent text-accent-foreground">{mockUsers.filter(u => u.role === 'Ward Supervisor').length}</Badge>
            </div>
          </CardContent>
        </Card>
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
                  placeholder="Search by name, email, or ward..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Ward Supervisor">Ward Supervisor</SelectItem>
                <SelectItem value="Field Officer">Field Officer</SelectItem>
                <SelectItem value="Emergency Response">Emergency Response</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      {viewMode === "table" ? (
        <Card className="bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle>Users ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Ward</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {user.email}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {user.phone}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>
                        <Shield className="h-3 w-3 mr-1" />
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        {user.ward}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{user.issuesResolved}/{user.issuesAssigned} resolved</div>
                        <div className="text-muted-foreground">
                          {user.issuesAssigned > 0 ? Math.round((user.issuesResolved / user.issuesAssigned) * 100) : 0}% success rate
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEditUser(user.id)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(user.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="bg-gradient-card border border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <Badge className={getRoleColor(user.role)}>
                        {user.role}
                      </Badge>
                    </div>
                  </div>
                  <Badge className={getStatusColor(user.status)}>
                    {user.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{user.ward}</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-border/50">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Issues Resolved:</span>
                    <span className="font-medium">{user.issuesResolved}/{user.issuesAssigned}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Success Rate:</span>
                    <span className="font-medium">
                      {user.issuesAssigned > 0 ? Math.round((user.issuesResolved / user.issuesAssigned) * 100) : 0}%
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEditUser(user.id)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDeleteUser(user.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredUsers.length === 0 && (
        <Card className="bg-gradient-card border border-border/50">
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No users found matching your filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
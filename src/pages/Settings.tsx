import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Save, Bell, Shield, Database, Mail, MapPin, Clock, Users } from "lucide-react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    urgent: true,
    resolved: false,
    daily: true
  });

  const [system, setSystem] = useState({
    autoAssign: true,
    escalationTime: "4",
    workingHours: "09:00-18:00",
    timezone: "Asia/Kolkata",
    defaultPriority: "medium"
  });

  const handleSaveSettings = () => {
    console.log("Save settings");
  };

  const handleExportData = () => {
    console.log("Export system data");
  };

  const handleImportData = () => {
    console.log("Import system data");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
          <p className="text-muted-foreground">Configure system preferences and administrative settings</p>
        </div>
        <Button variant="hero" onClick={handleSaveSettings}>
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notification Settings */}
        <Card className="bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive urgent alerts via SMS</p>
                </div>
                <Switch
                  id="sms-notifications"
                  checked={notifications.sms}
                  onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Browser push notifications</p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="urgent-alerts">Urgent Issue Alerts</Label>
                  <p className="text-sm text-muted-foreground">Immediate alerts for urgent issues</p>
                </div>
                <Switch
                  id="urgent-alerts"
                  checked={notifications.urgent}
                  onCheckedChange={(checked) => setNotifications({...notifications, urgent: checked})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="resolved-notifications">Resolution Updates</Label>
                  <p className="text-sm text-muted-foreground">Notifications when issues are resolved</p>
                </div>
                <Switch
                  id="resolved-notifications"
                  checked={notifications.resolved}
                  onCheckedChange={(checked) => setNotifications({...notifications, resolved: checked})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="daily-summary">Daily Summary</Label>
                  <p className="text-sm text-muted-foreground">Daily report of system activity</p>
                </div>
                <Switch
                  id="daily-summary"
                  checked={notifications.daily}
                  onCheckedChange={(checked) => setNotifications({...notifications, daily: checked})}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Configuration */}
        <Card className="bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              System Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label htmlFor="auto-assign">Auto-assign Issues</Label>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-muted-foreground">Automatically assign issues to available officers</p>
                  <Switch
                    id="auto-assign"
                    checked={system.autoAssign}
                    onCheckedChange={(checked) => setSystem({...system, autoAssign: checked})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="escalation-time">Escalation Time (hours)</Label>
                <Input
                  id="escalation-time"
                  type="number"
                  value={system.escalationTime}
                  onChange={(e) => setSystem({...system, escalationTime: e.target.value})}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="working-hours">Working Hours</Label>
                <Input
                  id="working-hours"
                  value={system.workingHours}
                  onChange={(e) => setSystem({...system, workingHours: e.target.value})}
                  className="mt-1"
                  placeholder="09:00-18:00"
                />
              </div>

              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select value={system.timezone} onValueChange={(value) => setSystem({...system, timezone: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Asia/Kolkata">Asia/Kolkata (IST)</SelectItem>
                    <SelectItem value="UTC">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="default-priority">Default Issue Priority</Label>
                <Select value={system.defaultPriority} onValueChange={(value) => setSystem({...system, defaultPriority: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Settings */}
        <Card className="bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Location Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" value="Mumbai" readOnly className="mt-1" />
            </div>

            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" value="Maharashtra" readOnly className="mt-1" />
            </div>

            <div>
              <Label htmlFor="ward-count">Number of Wards</Label>
              <Input id="ward-count" value="24" readOnly className="mt-1" />
            </div>

            <div>
              <Label htmlFor="coverage-area">Coverage Area</Label>
              <Textarea
                id="coverage-area"
                value="Greater Mumbai Municipal Corporation area including all 24 administrative wards from Colaba to Mulund"
                readOnly
                className="mt-1"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Ward A</Badge>
              <Badge variant="outline">Ward B</Badge>
              <Badge variant="outline">Ward C</Badge>
              <Badge variant="outline">Ward D</Badge>
              <Badge variant="outline">+20 more</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Database Statistics</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="text-center p-3 rounded bg-muted/20">
                    <div className="text-2xl font-bold text-primary">2,847</div>
                    <div className="text-sm text-muted-foreground">Total Issues</div>
                  </div>
                  <div className="text-center p-3 rounded bg-muted/20">
                    <div className="text-2xl font-bold text-success">156</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Button variant="outline" className="w-full" onClick={handleExportData}>
                  <Database className="h-4 w-4 mr-2" />
                  Export System Data
                </Button>
                <Button variant="outline" className="w-full" onClick={handleImportData}>
                  <Database className="h-4 w-4 mr-2" />
                  Import Data
                </Button>
              </div>

              <div className="p-3 rounded bg-warning/10 border border-warning/20">
                <h5 className="font-medium text-warning mb-1">Data Retention</h5>
                <p className="text-sm text-muted-foreground">
                  Issue data is retained for 7 years as per municipal regulations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Information */}
      <Card className="bg-gradient-card border border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            System Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Application Version</h4>
              <Badge variant="outline">v2.1.3</Badge>
              <p className="text-sm text-muted-foreground">Last updated: March 15, 2024</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Database Status</h4>
              <Badge className="bg-success text-success-foreground">Healthy</Badge>
              <p className="text-sm text-muted-foreground">All systems operational</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Backup Status</h4>
              <Badge className="bg-success text-success-foreground">Up to date</Badge>
              <p className="text-sm text-muted-foreground">Last backup: 2 hours ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
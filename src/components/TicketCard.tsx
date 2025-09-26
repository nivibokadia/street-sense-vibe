import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, MapPin, User, AlertCircle, CheckCircle, Timer } from "lucide-react";

interface TicketCardProps {
  id: string;
  title: string;
  description: string;
  status: "urgent" | "pending" | "resolved" | "escalated";
  location: string;
  assignedTo?: string;
  priority: "high" | "medium" | "low";
  createdAt: string;
  slaHours: number;
}

const statusConfig = {
  urgent: {
    color: "status-urgent",
    icon: AlertCircle,
    label: "Urgent",
    glow: "animate-pulse-glow"
  },
  pending: {
    color: "status-pending",
    icon: Timer,
    label: "Pending",
    glow: ""
  },
  resolved: {
    color: "status-success",
    icon: CheckCircle,
    label: "Resolved",
    glow: ""
  },
  escalated: {
    color: "bg-destructive text-destructive-foreground",
    icon: AlertCircle,
    label: "Escalated",
    glow: "animate-pulse-glow"
  }
};

export const TicketCard = ({
  id,
  title,
  description,
  status,
  location,
  assignedTo,
  priority,
  createdAt,
  slaHours
}: TicketCardProps) => {
  const config = statusConfig[status];
  const StatusIcon = config.icon;
  
  const priorityColor = {
    high: "text-urgent",
    medium: "text-pending",
    low: "text-success"
  };

  return (
    <Card className="hover-lift bg-gradient-card border border-border/50 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
          <Badge className={`${config.color} ${config.glow} ml-3`}>
            <StatusIcon className="h-3 w-3 mr-1" />
            {config.label}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Location and Priority */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <Badge variant="outline" className={priorityColor[priority]}>
              {priority.toUpperCase()}
            </Badge>
          </div>
          
          {/* Assignment and Time */}
          <div className="flex items-center justify-between text-sm">
            {assignedTo ? (
              <div className="flex items-center gap-1 text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{assignedTo}</span>
              </div>
            ) : (
              <span className="text-muted-foreground italic">Unassigned</span>
            )}
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{slaHours}h SLA</span>
            </div>
          </div>
          
          {/* Created time */}
          <div className="text-xs text-muted-foreground border-t border-border/50 pt-2">
            Created: {createdAt}
          </div>
          
          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button size="sm" variant="outline" className="flex-1" onClick={() => console.log("View details:", id)}>
              View Details
            </Button>
            {status !== "resolved" && (
              <Button size="sm" variant="default" className="flex-1" onClick={() => console.log(status === "urgent" ? "Resolve" : "Assign", id)}>
                {status === "urgent" ? "Resolve" : "Assign"}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
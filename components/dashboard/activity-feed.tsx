"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Activity {
  id: string
  user: {
    name: string
    avatar?: string
    initials: string
  }
  action: string
  target: string
  timestamp: string
  type: "create" | "update" | "delete" | "comment" | "milestone"
}

const activities: Activity[] = [
  {
    id: "1",
    user: { name: "Alex Chen", initials: "AC" },
    action: "completed milestone",
    target: "MVP Launch",
    timestamp: "2 min ago",
    type: "milestone",
  },
  {
    id: "2",
    user: { name: "Sarah Kim", initials: "SK" },
    action: "added new feature",
    target: "User Authentication",
    timestamp: "15 min ago",
    type: "create",
  },
  {
    id: "3",
    user: { name: "Mike Johnson", initials: "MJ" },
    action: "commented on",
    target: "Pitch Deck v2",
    timestamp: "1 hour ago",
    type: "comment",
  },
  {
    id: "4",
    user: { name: "Emma Davis", initials: "ED" },
    action: "updated task",
    target: "Market Research",
    timestamp: "2 hours ago",
    type: "update",
  },
  {
    id: "5",
    user: { name: "James Wilson", initials: "JW" },
    action: "closed issue",
    target: "Bug #42",
    timestamp: "3 hours ago",
    type: "delete",
  },
  {
    id: "6",
    user: { name: "Lisa Wang", initials: "LW" },
    action: "created project",
    target: "Marketing Campaign",
    timestamp: "5 hours ago",
    type: "create",
  },
]

const typeColors: Record<Activity["type"], string> = {
  create: "bg-primary",
  update: "bg-chart-3",
  delete: "bg-destructive",
  comment: "bg-chart-2",
  milestone: "bg-chart-4",
}

export function ActivityFeed() {
  return (
    <Card className="bg-card border-border h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <ScrollArea className="h-[400px] px-6">
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={activity.id} className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <Avatar className="size-9 border-2 border-background">
                    <AvatarImage src={activity.user.avatar} />
                    <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                      {activity.user.initials}
                    </AvatarFallback>
                  </Avatar>
                  {index !== activities.length - 1 && (
                    <div className="absolute top-10 w-px h-[calc(100%+8px)] bg-border" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground text-sm">
                      {activity.user.name}
                    </span>
                    <span
                      className={`size-2 rounded-full ${typeColors[activity.type]}`}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {activity.action}{" "}
                    <span className="text-foreground font-medium">
                      {activity.target}
                    </span>
                  </p>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {activity.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

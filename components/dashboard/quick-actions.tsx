"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Plus, Send, Video } from "lucide-react"

const actions = [
  {
    title: "New Project",
    description: "Start a new venture",
    icon: Plus,
  },
  {
    title: "Create Pitch",
    description: "Draft your pitch deck",
    icon: FileText,
  },
  {
    title: "Schedule Demo",
    description: "Book a product demo",
    icon: Video,
  },
  {
    title: "Send Update",
    description: "Share with investors",
    icon: Send,
  },
]

export function QuickActions() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto flex-col items-start gap-2 p-4 bg-secondary/50 border-border hover:bg-secondary hover:border-primary/30"
            >
              <action.icon className="size-5 text-primary" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-foreground">{action.title}</span>
                <span className="text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

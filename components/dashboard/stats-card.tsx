"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
  description?: string
}

export function StatsCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  description,
}: StatsCardProps) {
  return (
    <Card className="bg-card border-border hover:border-primary/30 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {(change || description) && (
          <p className="text-xs text-muted-foreground mt-1">
            {change && (
              <span
                className={cn(
                  "font-medium",
                  changeType === "positive" && "text-primary",
                  changeType === "negative" && "text-destructive"
                )}
              >
                {change}
              </span>
            )}
            {change && description && " "}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

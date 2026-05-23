"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { month: "Jan", users: 120, revenue: 2400 },
  { month: "Feb", users: 180, revenue: 3200 },
  { month: "Mar", users: 250, revenue: 4100 },
  { month: "Apr", users: 320, revenue: 5200 },
  { month: "May", users: 450, revenue: 7100 },
  { month: "Jun", users: 580, revenue: 9200 },
]

export function ProgressChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Growth Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.72 0.18 180)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.72 0.18 180)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.17 0.01 260)",
                border: "1px solid oklch(0.28 0.01 260)",
                borderRadius: "8px",
                color: "oklch(0.95 0 0)",
              }}
              labelStyle={{ color: "oklch(0.65 0 0)" }}
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke="oklch(0.72 0.18 180)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUsers)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

"use client"

import { DollarSign, Rocket, TrendingUp, Users } from "lucide-react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { ProgressChart } from "@/components/dashboard/progress-chart"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground">Welcome back, Jordan</h1>
            <p className="text-muted-foreground mt-1">
              {"Here's what's happening with your startup today."}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <StatsCard
              title="Total Users"
              value="2,847"
              change="+12.5%"
              changeType="positive"
              description="from last month"
              icon={Users}
            />
            <StatsCard
              title="Revenue"
              value="$12,456"
              change="+8.2%"
              changeType="positive"
              description="from last month"
              icon={DollarSign}
            />
            <StatsCard
              title="Growth Rate"
              value="24.3%"
              change="+4.1%"
              changeType="positive"
              description="MoM growth"
              icon={TrendingUp}
            />
            <StatsCard
              title="Active Projects"
              value="7"
              change="2 new"
              changeType="neutral"
              description="this week"
              icon={Rocket}
            />
            <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
            <p className="text-sm text-gray-400">Developer</p>
            <p className="text-2xl font-bold text-white mt-2">Shriti Gupta</p>
            <p className="text-sm text-green-400 mt-1">EDC Technical Team</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Chart and Quick Actions */}
            <div className="lg:col-span-2 space-y-6">
              <ProgressChart />
              <QuickActions />
            </div>

            {/* Activity Feed */}
            <div className="lg:col-span-1">
              <ActivityFeed />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

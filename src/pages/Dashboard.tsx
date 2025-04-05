
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import QuickAccess from "@/components/QuickAccess";
import RecentProjects from "@/components/RecentProjects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, change, isPositive, icon }: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className={`flex items-center text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
        {change}
      </p>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className={`flex-1 overflow-y-auto p-4 md:p-6 transition-all`}>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Welcome back, Designer</h1>
            <p className="text-muted-foreground">Here's what's happening with your design projects today.</p>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard 
                title="Total Projects" 
                value="12" 
                change="20% from last month" 
                isPositive={true} 
                icon={<BarChart className="h-4 w-4 text-muted-foreground" />} 
              />
              <StatCard 
                title="Active Projects" 
                value="4" 
                change="10% from last month" 
                isPositive={true} 
                icon={<LineChart className="h-4 w-4 text-muted-foreground" />} 
              />
              <StatCard 
                title="Completed This Week" 
                value="2" 
                change="5% from last week" 
                isPositive={false} 
                icon={<PieChart className="h-4 w-4 text-muted-foreground" />} 
              />
              <StatCard 
                title="AI Assists Used" 
                value="45/50" 
                change="90% of quota used" 
                isPositive={true} 
                icon={<BrainChart className="h-4 w-4 text-muted-foreground" />} 
              />
            </div>
            
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <QuickAccess />
                <RecentProjects />
              </TabsContent>
              <TabsContent value="analytics">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Design Analytics</h3>
                  <p className="text-muted-foreground">Detailed analytics will appear here.</p>
                </Card>
              </TabsContent>
              <TabsContent value="reports">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Design Reports</h3>
                  <p className="text-muted-foreground">Your design report summaries will appear here.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

// Custom icon
const BrainChart = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2a8 8 0 0 0-8 8v12h16V10a8 8 0 0 0-8-8z" />
    <path d="M8 12h8" />
    <path d="M8 16h4" />
    <path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

export default Dashboard;

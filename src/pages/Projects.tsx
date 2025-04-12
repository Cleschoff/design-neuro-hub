
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FolderOpen, PlusCircle, Clock, Calendar, Users, MoreVertical } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brand Redesign for TechX",
    description: "Complete brand identity redesign including logo, colors, and guidelines",
    progress: 65,
    status: "In Progress",
    dueDate: "Apr 15, 2025",
    team: ["John D.", "Sarah M."],
    lastUpdated: "2 hours ago"
  },
  {
    id: 2,
    title: "E-commerce Website Mockups",
    description: "Design mockups for a new online store with 15+ page templates",
    progress: 35,
    status: "In Progress",
    dueDate: "May 3, 2025",
    team: ["Michael K.", "Emma L."],
    lastUpdated: "Yesterday"
  },
  {
    id: 3,
    title: "Mobile App UI Kit",
    description: "Complete UI component library for iOS and Android applications",
    progress: 90,
    status: "Review",
    dueDate: "Apr 20, 2025",
    team: ["Alex R.", "David T."],
    lastUpdated: "3 days ago"
  },
  {
    id: 4,
    title: "Social Media Campaign",
    description: "Design templates for an upcoming product launch campaign",
    progress: 100,
    status: "Completed",
    dueDate: "Apr 8, 2025",
    team: ["Jessica P."],
    lastUpdated: "5 days ago"
  }
];

const Projects = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Review":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Projects</h1>
                <p className="text-muted-foreground">Manage and track all your design projects</p>
              </div>
              <Button className="bg-primary">
                <PlusCircle className="mr-2 h-4 w-4" /> New Project
              </Button>
            </div>
            
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardHeader className="p-4 pb-2 flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <Badge 
                            variant="outline" 
                            className={`mt-1 ${getStatusColor(project.status)}`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="-mr-2 -mt-2">
                              <MoreVertical size={16} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Project options</TooltipContent>
                        </Tooltip>
                      </CardHeader>
                      
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar size={14} className="mr-1" />
                              <span>Due {project.dueDate}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock size={14} className="mr-1" />
                              <span>{project.lastUpdated}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users size={14} className="mr-1" />
                            <span>{project.team.join(", ")}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Card className="flex h-full items-center justify-center p-6 border-dashed">
                    <div className="text-center">
                      <FolderOpen className="mx-auto h-10 w-10 text-muted-foreground opacity-50" />
                      <h3 className="mt-4 text-lg font-medium">Create a new project</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Get started with a new design project
                      </p>
                      <Button className="mt-4">
                        <PlusCircle className="mr-2 h-4 w-4" /> New Project
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="active">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Active Projects</h3>
                  <p className="text-muted-foreground">Filter view showing only active projects.</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="completed">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Completed Projects</h3>
                  <p className="text-muted-foreground">Filter view showing only completed projects.</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="archived">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Archived Projects</h3>
                  <p className="text-muted-foreground">Filter view showing only archived projects.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;

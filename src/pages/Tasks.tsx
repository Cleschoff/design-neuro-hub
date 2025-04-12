
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PlusCircle, Calendar, Clock, ChevronDown, Tag, Flag } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Sketch wireframes for homepage",
    project: "Website Redesign",
    priority: "High",
    dueDate: "Apr 14, 2025",
    completed: false,
    tags: ["Design", "UI/UX"]
  },
  {
    id: 2,
    title: "Select color palette for branding",
    project: "Brand Redesign for TechX",
    priority: "Medium",
    dueDate: "Apr 15, 2025",
    completed: false,
    tags: ["Branding"]
  },
  {
    id: 3,
    title: "Create logo mockups",
    project: "Brand Redesign for TechX",
    priority: "High",
    dueDate: "Apr 16, 2025",
    completed: false,
    tags: ["Logo", "Branding"]
  },
  {
    id: 4,
    title: "Design mobile app icons",
    project: "Mobile App UI Kit",
    priority: "Medium",
    dueDate: "Apr 18, 2025",
    completed: false,
    tags: ["Mobile", "Icons"]
  },
  {
    id: 5,
    title: "Review client feedback on mock-ups",
    project: "E-commerce Website",
    priority: "Low",
    dueDate: "Apr 13, 2025",
    completed: true,
    tags: ["Feedback", "Review"]
  },
  {
    id: 6,
    title: "Submit final design files",
    project: "Social Media Campaign",
    priority: "High",
    dueDate: "Apr 10, 2025",
    completed: true,
    tags: ["Delivery", "Social Media"]
  }
];

const Tasks = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [taskList, setTaskList] = useState(tasks);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTaskCompletion = (id: number) => {
    setTaskList(taskList.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200";
      case "Medium":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "Low":
        return "bg-green-100 text-green-700 border-green-200";
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
                <h1 className="text-2xl font-bold">Tasks</h1>
                <p className="text-muted-foreground">Track and manage your design tasks</p>
              </div>
              <Button className="bg-primary">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Task
              </Button>
            </div>
            
            <Tabs defaultValue="all" className="space-y-4">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="all">All Tasks</TabsTrigger>
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Flag className="mr-2 h-4 w-4" /> Priority
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Tag className="mr-2 h-4 w-4" /> Filter
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <TabsContent value="all" className="space-y-4">
                <Card>
                  <CardHeader className="px-6 py-4">
                    <CardTitle className="text-lg">Your Tasks</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-0">
                    <div className="divide-y">
                      {taskList.map((task) => (
                        <div 
                          key={task.id} 
                          className={`py-3 flex items-start gap-3 ${task.completed ? 'opacity-60' : ''}`}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Checkbox 
                                id={`task-${task.id}`} 
                                checked={task.completed}
                                onCheckedChange={() => toggleTaskCompletion(task.id)}
                                className="mt-1"
                              />
                            </TooltipTrigger>
                            <TooltipContent>Mark as {task.completed ? 'incomplete' : 'complete'}</TooltipContent>
                          </Tooltip>
                          
                          <div className="flex-1">
                            <div className="flex items-center">
                              <label 
                                htmlFor={`task-${task.id}`}
                                className={`font-medium text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}
                              >
                                {task.title}
                              </label>
                              <Badge 
                                variant="outline" 
                                className={`ml-2 ${getPriorityColor(task.priority)}`}
                              >
                                {task.priority}
                              </Badge>
                            </div>
                            
                            <div className="mt-1 text-xs text-muted-foreground">
                              Project: {task.project}
                            </div>
                            
                            <div className="mt-2 flex flex-wrap gap-1">
                              {task.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                            <Calendar size={12} className="mr-1" />
                            <span>{task.dueDate}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="today">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Today's Tasks</h3>
                  <p className="text-muted-foreground">Tasks that need to be completed today.</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="upcoming">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Upcoming Tasks</h3>
                  <p className="text-muted-foreground">Tasks scheduled for the future.</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="completed">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Completed Tasks</h3>
                  <p className="text-muted-foreground">Tasks you've already completed.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tasks;


import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, User, Mail, Phone, Edit2, Camera, Check, FileText, Briefcase } from "lucide-react";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">My Profile</h1>
              <p className="text-muted-foreground">Manage your personal information and preferences</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-[300px_1fr]">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src="https://i.pravatar.cc/150?img=28" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="icon" className="absolute bottom-0 right-0 rounded-full bg-background shadow">
                          <Camera size={16} />
                        </Button>
                      </div>
                      <h2 className="text-xl font-semibold">John Doe</h2>
                      <p className="text-sm text-muted-foreground">Product Designer</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <Badge variant="secondary">Pro Member</Badge>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <Edit2 size={16} className="mr-2" /> Edit Profile
                      </Button>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-2 text-muted-foreground" />
                        <span className="text-sm">John Doe</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={16} className="mr-2 text-muted-foreground" />
                        <span className="text-sm">john.doe@example.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2 text-muted-foreground" />
                        <span className="text-sm">+1 555-123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-2 text-muted-foreground" />
                        <span className="text-sm">DesignCo Inc.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Subscription</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Monthly quota usage</span>
                          <span>45/50 projects</span>
                        </div>
                        <Progress value={90} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">Renews on Apr 30, 2025</p>
                      </div>
                      
                      <Button className="w-full">Upgrade Plan</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Tabs defaultValue="overview">
                  <TabsList className="grid grid-cols-4 mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Account Overview</CardTitle>
                        <CardDescription>View your account activity and information</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h3 className="text-base font-medium mb-2">Design Stats</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Total Projects</span>
                                <span className="text-sm font-medium">12</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Active Projects</span>
                                <span className="text-sm font-medium">4</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Completed Projects</span>
                                <span className="text-sm font-medium">8</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">AI Assists Used</span>
                                <span className="text-sm font-medium">45/50</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-base font-medium mb-2">Recent Activity</h3>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                                  <FileText size={14} />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Project Created</p>
                                  <p className="text-xs text-muted-foreground">Brand Redesign for TechX</p>
                                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                                  <Check size={14} />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Task Completed</p>
                                  <p className="text-xs text-muted-foreground">Create logo mockups</p>
                                  <p className="text-xs text-muted-foreground">Yesterday</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Project Stats</CardTitle>
                        <CardDescription>Track your design project activity</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center border rounded-md">
                          <div className="text-center">
                            <BarChart className="h-10 w-10 text-muted-foreground opacity-50 mx-auto" />
                            <p className="mt-2 text-sm text-muted-foreground">
                              Project statistics chart will appear here
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="activity">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your recent actions and updates</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Your activity history will appear here.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="projects">
                    <Card>
                      <CardHeader>
                        <CardTitle>My Projects</CardTitle>
                        <CardDescription>Projects you've created or collaborated on</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Your projects will appear here.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="settings">
                    <Card>
                      <CardHeader>
                        <CardTitle>Profile Settings</CardTitle>
                        <CardDescription>Update your personal information</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name</label>
                          <Input defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <Input defaultValue="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone</label>
                          <Input defaultValue="+1 555-123-4567" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Company</label>
                          <Input defaultValue="DesignCo Inc." />
                        </div>
                        <Button>Save Changes</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;

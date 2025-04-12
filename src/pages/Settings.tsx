
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Database, Files, Bell, Shield, Download, Upload, History } from "lucide-react";

const Settings = () => {
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
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-muted-foreground">Manage your account and application preferences</p>
            </div>
            
            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid grid-cols-5 mb-6">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="export">Export</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Account Settings</CardTitle>
                    <CardDescription>Update your account information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input defaultValue="john.doe@example.com" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company</label>
                      <Input defaultValue="DesignCo Inc." />
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Appearance</CardTitle>
                    <CardDescription>Customize how diz.space looks and feels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-sm text-muted-foreground">Toggle between light and dark mode</p>
                      </div>
                      <Switch id="dark-mode" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Compact View</p>
                        <p className="text-sm text-muted-foreground">Display more content with less spacing</p>
                      </div>
                      <Switch id="compact-view" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Accent Color</label>
                      <Select defaultValue="purple">
                        <SelectTrigger>
                          <SelectValue placeholder="Select accent color" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="purple">Purple</SelectItem>
                          <SelectItem value="blue">Blue</SelectItem>
                          <SelectItem value="green">Green</SelectItem>
                          <SelectItem value="orange">Orange</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="export" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">File Formats</CardTitle>
                    <CardDescription>Manage your export and import preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <Files className="w-8 h-8 text-primary" />
                        <div>
                          <p className="font-medium">Default Export Format</p>
                          <p className="text-sm text-muted-foreground">
                            Choose your preferred file format for project exports
                          </p>
                        </div>
                      </div>
                      <Select defaultValue="pdf">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF (.pdf)</SelectItem>
                          <SelectItem value="png">PNG (.png)</SelectItem>
                          <SelectItem value="jpg">JPEG (.jpg)</SelectItem>
                          <SelectItem value="svg">SVG (.svg)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <Database className="w-8 h-8 text-primary" />
                        <div>
                          <p className="font-medium">Export Quality</p>
                          <p className="text-sm text-muted-foreground">
                            Set default quality for raster image exports
                          </p>
                        </div>
                      </div>
                      <Select defaultValue="high">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select quality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low (72 DPI)</SelectItem>
                          <SelectItem value="medium">Medium (150 DPI)</SelectItem>
                          <SelectItem value="high">High (300 DPI)</SelectItem>
                          <SelectItem value="ultra">Ultra (600 DPI)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Export All Projects
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Upload className="mr-2 h-4 w-4" /> Import Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Supported Formats</CardTitle>
                    <CardDescription>File formats available for import and export</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">Design Files</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">.ai</Badge>
                          <Badge variant="secondary">.psd</Badge>
                          <Badge variant="secondary">.sketch</Badge>
                          <Badge variant="secondary">.fig</Badge>
                          <Badge variant="secondary">.xd</Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">Image Formats</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">.jpg</Badge>
                          <Badge variant="secondary">.png</Badge>
                          <Badge variant="secondary">.gif</Badge>
                          <Badge variant="secondary">.svg</Badge>
                          <Badge variant="secondary">.webp</Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">Document Formats</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">.pdf</Badge>
                          <Badge variant="secondary">.docx</Badge>
                          <Badge variant="secondary">.pptx</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Notification Settings</CardTitle>
                    <CardDescription>Configure when you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Project Updates</p>
                        <p className="text-sm text-muted-foreground">Get notified about project status changes</p>
                      </div>
                      <Switch id="project-updates" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Checkpoint Reminders</p>
                        <p className="text-sm text-muted-foreground">Get reminded about upcoming project checkpoints</p>
                      </div>
                      <Switch id="checkpoint-reminders" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Task Deadlines</p>
                        <p className="text-sm text-muted-foreground">Get notified about approaching task deadlines</p>
                      </div>
                      <Switch id="task-deadlines" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Mention Notifications</p>
                        <p className="text-sm text-muted-foreground">Get notified when someone mentions you</p>
                      </div>
                      <Switch id="mention-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch id="email-notifications" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Project History</CardTitle>
                    <CardDescription>View and manage your project history</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <History className="w-8 h-8 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Project Version History</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          We keep a history of your project versions for recovery and reference
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm">Store history for</p>
                          </div>
                          <Select defaultValue="90">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="30">30 days</SelectItem>
                              <SelectItem value="60">60 days</SelectItem>
                              <SelectItem value="90">90 days</SelectItem>
                              <SelectItem value="180">180 days</SelectItem>
                              <SelectItem value="365">1 year</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button variant="outline">View Project History</Button>
                    </div>
                    
                    <div className="border rounded-md p-4 mt-4">
                      <h3 className="text-sm font-medium mb-2">Clear History</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Permanently delete your project history. This action cannot be undone.
                      </p>
                      <Button variant="destructive">Clear All History</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Security Settings</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary mt-1" />
                      <div className="flex-1 space-y-4">
                        <div>
                          <p className="font-medium">Change Password</p>
                          <p className="text-sm text-muted-foreground mb-2">
                            Update your password regularly to keep your account secure
                          </p>
                          <div className="space-y-2 mt-2">
                            <Input type="password" placeholder="Current password" />
                            <Input type="password" placeholder="New password" />
                            <Input type="password" placeholder="Confirm new password" />
                            <Button className="mt-2">Update Password</Button>
                          </div>
                        </div>
                        
                        <div className="pt-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Two-Factor Authentication</p>
                              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                            </div>
                            <Switch id="two-factor" />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Session Timeout</p>
                              <p className="text-sm text-muted-foreground">Automatically log out after period of inactivity</p>
                            </div>
                            <Select defaultValue="30">
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select timeout" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="15">15 minutes</SelectItem>
                                <SelectItem value="30">30 minutes</SelectItem>
                                <SelectItem value="60">1 hour</SelectItem>
                                <SelectItem value="120">2 hours</SelectItem>
                                <SelectItem value="never">Never</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;

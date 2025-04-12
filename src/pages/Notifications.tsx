import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, CheckCircle, Clock, AlertCircle, MessageCircle, FileText } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Project Checkpoint Approaching",
    description: "Brand Redesign for TechX has a checkpoint in 2 days",
    time: "2 hours ago",
    type: "checkpoint",
    read: false
  },
  {
    id: 2,
    title: "Task Deadline Tomorrow",
    description: "Create logo mockups for Brand Redesign project",
    time: "Yesterday",
    type: "task",
    read: false
  },
  {
    id: 3,
    title: "New Design Resource Available",
    description: "Color Theory Guide has been added to Resources",
    time: "2 days ago",
    type: "resource",
    read: true
  },
  {
    id: 4,
    title: "Project Completed",
    description: "Social Media Campaign has been marked as completed",
    time: "3 days ago",
    type: "project",
    read: true
  },
  {
    id: 5,
    title: "Checkpoint Completed",
    description: "Initial mockups for Website Redesign approved",
    time: "5 days ago",
    type: "checkpoint",
    read: true
  }
];

const Notifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationList, setNotificationList] = useState(notifications);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const markAllAsRead = () => {
    setNotificationList(notificationList.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const markAsRead = (id: number) => {
    setNotificationList(notificationList.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "checkpoint":
        return <Calendar className="h-6 w-6 text-blue-500" />;
      case "task":
        return <Clock className="h-6 w-6 text-amber-500" />;
      case "resource":
        return <FileText className="h-6 w-6 text-green-500" />;
      case "project":
        return <CheckCircle className="h-6 w-6 text-purple-500" />;
      case "message":
        return <MessageCircle className="h-6 w-6 text-cyan-500" />;
      default:
        return <Bell className="h-6 w-6 text-gray-500" />;
    }
  };
  
  const unreadCount = notificationList.filter(notification => !notification.read).length;
  
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Notifications</h1>
                <p className="text-muted-foreground">Keep track of important updates and reminders</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={markAllAsRead}>
                  Mark All as Read
                </Button>
                <Button variant="outline">
                  <Bell className="mr-2 h-4 w-4" /> Settings
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">
                  All 
                  {unreadCount > 0 && (
                    <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">
                      {unreadCount}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="checkpoints">Checkpoints</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Recent Notifications</CardTitle>
                    <CardDescription>You have {unreadCount} unread notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {notificationList.map((notification) => (
                        <div 
                          key={notification.id} 
                          className={`flex gap-4 p-4 hover:bg-muted/50 ${notification.read ? "" : "bg-primary/5"}`}
                        >
                          <div className="mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className={`text-sm font-medium ${notification.read ? "" : "font-semibold"}`}>
                                {notification.title}
                                {!notification.read && (
                                  <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">
                                    New
                                  </Badge>
                                )}
                              </h4>
                              <p className="text-xs text-muted-foreground">{notification.time}</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.description}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="link" className="h-auto p-0 text-xs">View Details</Button>
                              {!notification.read && (
                                <Button variant="link" className="h-auto p-0 text-xs" onClick={() => markAsRead(notification.id)}>
                                  Mark as Read
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {notificationList.length === 0 && (
                        <div className="py-12 text-center">
                          <Bell className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                          <h3 className="text-lg font-medium">No notifications</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            You're all caught up! We'll notify you when there's something new.
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="unread">
                <Card>
                  <CardHeader>
                    <CardTitle>Unread Notifications</CardTitle>
                    <CardDescription>Notifications you haven't seen yet</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {unreadCount === 0 ? (
                      <div className="py-8 text-center">
                        <CheckCircle className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                        <h3 className="text-lg font-medium">All caught up!</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          You have no unread notifications.
                        </p>
                      </div>
                    ) : (
                      <div className="divide-y">
                        {notificationList
                          .filter(notification => !notification.read)
                          .map((notification) => (
                            <div 
                              key={notification.id} 
                              className="flex gap-4 py-4 hover:bg-muted/50"
                            >
                              <div className="mt-1">
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h4 className="text-sm font-semibold">
                                    {notification.title}
                                    <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">
                                      New
                                    </Badge>
                                  </h4>
                                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {notification.description}
                                </p>
                                <div className="flex gap-2 mt-2">
                                  <Button variant="link" className="h-auto p-0 text-xs">View Details</Button>
                                  <Button variant="link" className="h-auto p-0 text-xs" onClick={() => markAsRead(notification.id)}>
                                    Mark as Read
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="checkpoints">
                <Card>
                  <CardHeader>
                    <CardTitle>Checkpoint Notifications</CardTitle>
                    <CardDescription>Updates related to project checkpoints</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Checkpoint notifications will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tasks">
                <Card>
                  <CardHeader>
                    <CardTitle>Task Notifications</CardTitle>
                    <CardDescription>Updates related to your assigned tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Task notifications will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <CardTitle>Resource Notifications</CardTitle>
                    <CardDescription>Updates about new design resources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Resource notifications will appear here.</p>
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

export default Notifications;

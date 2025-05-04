
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, CheckCircle, Clock, AlertCircle, MessageCircle, FileText } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const notifications = [
  {
    id: 1,
    title: "Приближается контрольная точка проекта",
    description: "Ребрендинг для TechX имеет контрольную точку через 2 дня",
    time: "2 часа назад",
    type: "checkpoint",
    read: false
  },
  {
    id: 2,
    title: "Срок выполнения задачи завтра",
    description: "Создать макеты логотипа для проекта ребрендинга",
    time: "Вчера",
    type: "task",
    read: false
  },
  {
    id: 3,
    title: "Новый ресурс по дизайну доступен",
    description: "Руководство по теории цвета было добавлено в Ресурсы",
    time: "2 дня назад",
    type: "resource",
    read: true
  },
  {
    id: 4,
    title: "Проект завершен",
    description: "Кампания в социальных сетях была отмечена как завершенная",
    time: "3 дня назад",
    type: "project",
    read: true
  },
  {
    id: 5,
    title: "Контрольная точка завершена",
    description: "Начальные макеты для редизайна веб-сайта утверждены",
    time: "5 дней назад",
    type: "checkpoint",
    read: true
  }
];

const Notifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationList, setNotificationList] = useState(notifications);
  const { t } = useLocale();

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
                <h1 className="text-2xl font-bold">{t('notifications.title')}</h1>
                <p className="text-muted-foreground">{t('notifications.subtitle')}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={markAllAsRead}>
                  {t('notifications.markAllAsRead')}
                </Button>
                <Button variant="outline">
                  <Bell className="mr-2 h-4 w-4" /> {t('notifications.settings')}
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">
                  {t('notifications.all')} 
                  {unreadCount > 0 && (
                    <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">
                      {unreadCount}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="unread">{t('notifications.unread')}</TabsTrigger>
                <TabsTrigger value="checkpoints">{t('notifications.checkpoints')}</TabsTrigger>
                <TabsTrigger value="tasks">{t('notifications.tasks')}</TabsTrigger>
                <TabsTrigger value="resources">{t('notifications.resources')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>{t('notifications.recentNotifications')}</CardTitle>
                    <CardDescription>{t('notifications.unreadCount', { count: unreadCount })}</CardDescription>
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
                                    {t('notifications.new')}
                                  </Badge>
                                )}
                              </h4>
                              <p className="text-xs text-muted-foreground">{notification.time}</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.description}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="link" className="h-auto p-0 text-xs">{t('notifications.viewDetails')}</Button>
                              {!notification.read && (
                                <Button variant="link" className="h-auto p-0 text-xs" onClick={() => markAsRead(notification.id)}>
                                  {t('notifications.markAsRead')}
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {notificationList.length === 0 && (
                        <div className="py-12 text-center">
                          <Bell className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                          <h3 className="text-lg font-medium">{t('notifications.noNotifications')}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {t('notifications.noNotificationsDesc')}
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
                    <CardTitle>{t('notifications.unread')}</CardTitle>
                    <CardDescription>{t('notifications.unread')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {unreadCount === 0 ? (
                      <div className="py-8 text-center">
                        <CheckCircle className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                        <h3 className="text-lg font-medium">{t('notifications.allCaughtUp')}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {t('notifications.noUnreadNotifications')}
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
                                      {t('notifications.new')}
                                    </Badge>
                                  </h4>
                                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {notification.description}
                                </p>
                                <div className="flex gap-2 mt-2">
                                  <Button variant="link" className="h-auto p-0 text-xs">{t('notifications.viewDetails')}</Button>
                                  <Button variant="link" className="h-auto p-0 text-xs" onClick={() => markAsRead(notification.id)}>
                                    {t('notifications.markAsRead')}
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
                    <CardTitle>{t('notifications.checkpointNotifications')}</CardTitle>
                    <CardDescription>{t('notifications.checkpointDesc')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Уведомления о контрольных точках будут отображаться здесь.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tasks">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('notifications.taskNotifications')}</CardTitle>
                    <CardDescription>{t('notifications.taskDesc')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Уведомления о задачах будут отображаться здесь.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('notifications.resourceNotifications')}</CardTitle>
                    <CardDescription>{t('notifications.resourceDesc')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Уведомления о ресурсах будут отображаться здесь.</p>
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

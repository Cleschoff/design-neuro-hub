
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Shield, LogOut } from "lucide-react";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Здесь будет логика выхода из системы
    console.log("Logout clicked");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Настройки</h1>
              <p className="text-muted-foreground">Управление аккаунтом и предпочтениями</p>
            </div>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Профиль пользователя
                  </CardTitle>
                  <CardDescription>Основная информация о вашем аккаунте</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/lovable-uploads/21499f82-6fe9-4421-bfca-e6e6187eea06.png" alt="Oleg" />
                      <AvatarFallback>O</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Oleg</h3>
                      <p className="text-sm text-muted-foreground">oleg@example.com</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя</label>
                      <Input defaultValue="Oleg" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Фамилия</label>
                      <Input placeholder="Введите фамилию" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="oleg@example.com" type="email" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Компания</label>
                    <Input placeholder="Название компании (необязательно)" />
                  </div>
                  
                  <Button>Сохранить изменения</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Внешний вид</CardTitle>
                  <CardDescription>Настройки отображения приложения</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Темная тема</p>
                      <p className="text-sm text-muted-foreground">Переключение между светлой и темной темой</p>
                    </div>
                    <Switch id="dark-mode" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Язык интерфейса</label>
                    <Select defaultValue="ru">
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите язык" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ru">Русский</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Безопасность
                  </CardTitle>
                  <CardDescription>Управление безопасностью аккаунта</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Смена пароля</p>
                    <div className="space-y-2">
                      <Input type="password" placeholder="Текущий пароль" />
                      <Input type="password" placeholder="Новый пароль" />
                      <Input type="password" placeholder="Подтвердите новый пароль" />
                      <Button variant="outline">Обновить пароль</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-medium">Двухфакторная аутентификация</p>
                      <p className="text-sm text-muted-foreground">Дополнительная защита аккаунта</p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-destructive">
                    <LogOut className="h-5 w-5" />
                    Выход из системы
                  </CardTitle>
                  <CardDescription>Завершить текущий сеанс работы</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive" onClick={handleLogout}>
                    Выйти из аккаунта
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;

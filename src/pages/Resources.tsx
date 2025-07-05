
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink, Palette, Image, Type, Layout, Lightbulb } from "lucide-react";

const designResources = [
  {
    id: 1,
    title: "Unsplash",
    category: "Фотографии",
    description: "Бесплатные высококачественные фотографии для любых проектов",
    url: "https://unsplash.com",
    icon: Image,
    featured: true
  },
  {
    id: 2,
    title: "Coolors",
    category: "Цвета",
    description: "Генератор цветовых палитр и инструменты для работы с цветом",
    url: "https://coolors.co",
    icon: Palette,
    featured: true
  },
  {
    id: 3,
    title: "Google Fonts",
    category: "Шрифты",
    description: "Библиотека бесплатных веб-шрифтов от Google",
    url: "https://fonts.google.com",
    icon: Type,
    featured: true
  },
  {
    id: 4,
    title: "Dribbble",
    category: "Вдохновение",
    description: "Платформа для поиска дизайнерского вдохновения",
    url: "https://dribbble.com",
    icon: Lightbulb,
    featured: false
  },
  {
    id: 5,
    title: "Figma",
    category: "Инструменты",
    description: "Профессиональный инструмент для UI/UX дизайна",
    url: "https://figma.com",
    icon: Layout,
    featured: true
  },
  {
    id: 6,
    title: "Behance",
    category: "Вдохновение",
    description: "Портфолио креативных проектов от Adobe",
    url: "https://behance.net",
    icon: Lightbulb,
    featured: false
  }
];

const Resources = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const filteredResources = designResources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredResources = filteredResources.filter(resource => resource.featured);
  const colorResources = filteredResources.filter(resource => resource.category === "Цвета");
  const fontResources = filteredResources.filter(resource => resource.category === "Шрифты");
  const imageResources = filteredResources.filter(resource => resource.category === "Фотографии");
  const inspirationResources = filteredResources.filter(resource => resource.category === "Вдохновение");
  const toolResources = filteredResources.filter(resource => resource.category === "Инструменты");

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Дизайнерские ресурсы</h1>
                <p className="text-muted-foreground">Полезные инструменты и ресурсы для дизайнеров</p>
              </div>
            </div>
            
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Поиск ресурсов..." 
                className="pl-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">Все ресурсы</TabsTrigger>
                <TabsTrigger value="colors">Цвета</TabsTrigger>
                <TabsTrigger value="fonts">Шрифты</TabsTrigger>
                <TabsTrigger value="images">Изображения</TabsTrigger>
                <TabsTrigger value="inspiration">Вдохновение</TabsTrigger>
                <TabsTrigger value="tools">Инструменты</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                {featuredResources.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Рекомендуемые ресурсы</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {featuredResources.map(resource => (
                        <Card key={resource.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                                <resource.icon size={18} />
                              </div>
                            </div>
                            <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                            <CardDescription className="text-xs uppercase">
                              {resource.category}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                              {resource.description}
                            </p>
                            <Button 
                              variant="outline" 
                              className="w-full" 
                              onClick={() => window.open(resource.url, '_blank')}
                            >
                              Открыть <ExternalLink size={14} className="ml-2" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Все ресурсы</h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredResources.map(resource => (
                      <Card key={resource.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                            <resource.icon size={18} />
                          </div>
                          <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                          <CardDescription className="text-xs uppercase">
                            {resource.category}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            {resource.description}
                          </p>
                          <Button 
                            variant="outline" 
                            className="w-full" 
                            onClick={() => window.open(resource.url, '_blank')}
                          >
                            Открыть <ExternalLink size={14} className="ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="colors">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {colorResources.map(resource => (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                          <resource.icon size={18} />
                        </div>
                        <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {resource.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full" 
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          Открыть <ExternalLink size={14} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="fonts">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {fontResources.map(resource => (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                          <resource.icon size={18} />
                        </div>
                        <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {resource.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full" 
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          Открыть <ExternalLink size={14} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="images">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {imageResources.map(resource => (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                          <resource.icon size={18} />
                        </div>
                        <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {resource.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full" 
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          Открыть <ExternalLink size={14} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="inspiration">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {inspirationResources.map(resource => (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                          <resource.icon size={18} />
                        </div>
                        <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {resource.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full" 
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          Открыть <ExternalLink size={14} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tools">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {toolResources.map(resource => (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                          <resource.icon size={18} />
                        </div>
                        <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {resource.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full" 
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          Открыть <ExternalLink size={14} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resources;


import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, FileText, Lightbulb, Star, ArrowRight } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "How to Fill Out a Design Brief",
    category: "Instructions",
    description: "A comprehensive guide on how to properly fill out a design brief to get the best results from your design project.",
    icon: FileText,
    featured: true
  },
  {
    id: 2,
    title: "Understanding Color Theory",
    category: "Design Tips",
    description: "Learn how to use color theory principles to create harmonious and effective color palettes for your design projects.",
    icon: Lightbulb,
    featured: true
  },
  {
    id: 3,
    title: "Typography Best Practices",
    category: "Design Tips",
    description: "Explore the fundamentals of typography and how to select and pair fonts for maximum impact in your designs.",
    icon: Lightbulb,
    featured: false
  },
  {
    id: 4,
    title: "How to Use Design Tools",
    category: "Instructions",
    description: "Step-by-step instructions on how to use our design tools to generate mockups, select colors, and more.",
    icon: FileText,
    featured: false
  },
  {
    id: 5,
    title: "Logo Design Principles",
    category: "Design Tips",
    description: "Essential guidelines for creating effective, memorable, and versatile logo designs.",
    icon: Lightbulb,
    featured: true
  },
  {
    id: 6,
    title: "Working with Project Checkpoints",
    category: "Instructions",
    description: "Learn how to use project checkpoints to track progress and ensure your design project stays on course.",
    icon: FileText,
    featured: false
  }
];

const Resources = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredResources = filteredResources.filter(resource => resource.featured);
  const instructionalResources = filteredResources.filter(resource => resource.category === "Instructions");
  const designTips = filteredResources.filter(resource => resource.category === "Design Tips");

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Resources</h1>
                <p className="text-muted-foreground">Tutorials, guides, and design tips to help you succeed</p>
              </div>
            </div>
            
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search resources..." 
                className="pl-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                <TabsTrigger value="design-tips">Design Tips</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                {featuredResources.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Featured Resources</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {featuredResources.map(resource => (
                        <Card key={resource.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                                <resource.icon size={18} />
                              </div>
                              <Button variant="ghost" size="icon">
                                <Star size={16} className="text-muted-foreground" />
                              </Button>
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
                            <Button variant="link" className="px-0 h-auto font-medium" size="sm">
                              Read more <ArrowRight size={14} className="ml-1" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">All Resources</h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredResources.map(resource => (
                      <Card key={resource.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                              <resource.icon size={18} />
                            </div>
                            <Button variant="ghost" size="icon">
                              <Star size={16} className="text-muted-foreground" />
                            </Button>
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
                          <Button variant="link" className="px-0 h-auto font-medium" size="sm">
                            Read more <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="instructions" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Instructions & Guides</h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {instructionalResources.map(resource => (
                      <Card key={resource.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                              <resource.icon size={18} />
                            </div>
                            <Button variant="ghost" size="icon">
                              <Star size={16} className="text-muted-foreground" />
                            </Button>
                          </div>
                          <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            {resource.description}
                          </p>
                          <Button variant="link" className="px-0 h-auto font-medium" size="sm">
                            Read more <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="design-tips" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Design Tips & Techniques</h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {designTips.map(resource => (
                      <Card key={resource.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                              <resource.icon size={18} />
                            </div>
                            <Button variant="ghost" size="icon">
                              <Star size={16} className="text-muted-foreground" />
                            </Button>
                          </div>
                          <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            {resource.description}
                          </p>
                          <Button variant="link" className="px-0 h-auto font-medium" size="sm">
                            Read more <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="favorites" className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Favorites</h3>
                  <p className="text-muted-foreground mb-6">You haven't saved any resources as favorites yet.</p>
                  <Button>Browse Resources</Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resources;

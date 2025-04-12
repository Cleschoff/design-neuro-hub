
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle, 
  CardFooter 
} from "@/components/ui/card";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { 
  ImageIcon, 
  Type, 
  Palette, 
  Layers, 
  Search, 
  BookOpen,
  Download,
  Share2,
  Grid3X3
} from "lucide-react";
import { Link } from "react-router-dom";

const DesignTools = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const tools = [
    {
      id: "references",
      name: "Find References",
      description: "Discover inspiration and references for your design projects",
      icon: <Search className="h-8 w-8 text-neuro-teal" />,
      shortDesc: "Find visual inspiration"
    },
    {
      id: "typography",
      name: "Typography Selection",
      description: "Find the perfect font pairings for your brand or project",
      icon: <Type className="h-8 w-8 text-neuro-mint" />,
      shortDesc: "Choose fonts and typography"
    },
    {
      id: "colors",
      name: "Color Palette",
      description: "Generate harmonious color schemes for your designs",
      icon: <Palette className="h-8 w-8 text-neuro-coral" />,
      shortDesc: "Create color palettes"
    },
    {
      id: "imageGen",
      name: "Image Generation",
      description: "Create custom images, illustrations, and graphics",
      icon: <ImageIcon className="h-8 w-8 text-neuro-lavender" />,
      shortDesc: "Generate custom images"
    },
    {
      id: "composition",
      name: "Layout Assistance",
      description: "Get help with composition and visual hierarchy",
      icon: <Grid3X3 className="h-8 w-8 text-neuro-sand" />,
      shortDesc: "Optimize layout and structure"
    },
    {
      id: "assets",
      name: "Asset Library",
      description: "Access our collection of design assets and templates",
      icon: <Layers className="h-8 w-8 text-neuro-teal" />,
      shortDesc: "Use pre-made assets"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Design Tools</h1>
              <p className="text-muted-foreground">
                Select a specific tool to solve your design challenge
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Card key={tool.id} className="overflow-hidden border border-muted/60 transition-all hover:border-muted hover:shadow-md">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-6 pt-2 flex justify-between">
                    <Link to={`/tools/${tool.id}`}>
                      <Button>Use Tool</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-semibold mb-4">Need a full project instead?</h2>
              <p className="text-muted-foreground mb-6">
                If you need a complete design project from scratch, our turnkey solution can help.
              </p>
              <Link to="/dashboard/start-project">
                <Button size="lg" className="gap-2">
                  Start a Full Project
                  <BookOpen size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DesignTools;

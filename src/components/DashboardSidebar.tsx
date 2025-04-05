
import { cn } from "@/lib/utils";
import { 
  BrainCircuit, Palette, Layout, Lightbulb, 
  BarChart, Search, FileText, Layers, Compass, MountainSnow,
  Folder, Home, Plus, Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const neuros = [
  {
    id: "chief",
    title: "Chief Neuro-Designer",
    icon: BrainCircuit,
    color: "text-neuro-teal"
  },
  {
    id: "tor",
    title: "TOR Analyst",
    icon: FileText,
    color: "text-neuro-coral"
  },
  {
    id: "guidebook",
    title: "Guidebook Expert",
    icon: Compass,
    color: "text-neuro-navy"
  },
  {
    id: "trend",
    title: "Trend Analyst",
    icon: BarChart,
    color: "text-neuro-lavender"
  },
  {
    id: "research",
    title: "Competitive Researcher",
    icon: Search,
    color: "text-neuro-mint"
  },
  {
    id: "visual",
    title: "Visual Referencer",
    icon: MountainSnow,
    color: "text-neuro-coral"
  },
  {
    id: "composition",
    title: "Composition Analyzer",
    icon: Layout,
    color: "text-neuro-teal"
  },
  {
    id: "color",
    title: "Color & Font Assistant",
    icon: Palette,
    color: "text-neuro-lavender"
  },
  {
    id: "concept",
    title: "Concept Generator",
    icon: Lightbulb,
    color: "text-neuro-navy"
  },
  {
    id: "structural",
    title: "Structural Assistant",
    icon: Layers,
    color: "text-neuro-mint"
  }
];

interface DashboardSidebarProps {
  sidebarOpen: boolean;
}

const DashboardSidebar = ({ sidebarOpen }: DashboardSidebarProps) => {
  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 border-r bg-card flex flex-col transition-transform duration-300 md:relative md:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center h-16 px-4 border-b">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent neuro-gradient mr-2">D</span>
          <span className="text-lg font-semibold">DesignNeuroHub</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="space-y-1">
          <Link to="/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <Home size={18} className="mr-2" />
              Dashboard
            </Button>
          </Link>
          <Link to="/dashboard/projects">
            <Button variant="ghost" className="w-full justify-start">
              <Folder size={18} className="mr-2" />
              Projects
            </Button>
          </Link>
        </div>
        
        <div>
          <h3 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2 px-3">
            NEURO ASSISTANTS
          </h3>
          <div className="space-y-1">
            {neuros.map((neuro) => (
              <Link key={neuro.id} to={`/dashboard/neuro/${neuro.id}`}>
                <Button variant="ghost" className="w-full justify-start">
                  <neuro.icon size={18} className={`mr-2 ${neuro.color}`} />
                  {neuro.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t">
        <Link to="/dashboard/settings">
          <Button variant="ghost" className="w-full justify-start">
            <Settings size={18} className="mr-2" />
            Settings
          </Button>
        </Link>
        <Link to="/dashboard/new-project">
          <Button className="w-full mt-2 bg-primary">
            <Plus size={18} className="mr-2" />
            New Project
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;

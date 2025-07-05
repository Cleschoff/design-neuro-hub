
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Bell, Search, Settings, Menu, X, Brain
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const DashboardHeader = ({ toggleSidebar, sidebarOpen }: { toggleSidebar: () => void; sidebarOpen: boolean }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="h-16 border-b flex items-center justify-between px-4 md:px-6 bg-background">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="md:hidden"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-neuro-teal flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neuro-teal to-neuro-lavender">
            DIZ.SPACE
          </span>
        </Link>
      </div>
      
      <div className="w-full max-w-md hidden md:flex items-center">
        <div className="relative w-full">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input 
            placeholder="Поиск проектов или задач..." 
            className="pl-10 w-full" 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell size={20} />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
        <div className="flex items-center gap-2 ml-2">
          <Avatar>
            <AvatarImage src="/lovable-uploads/21499f82-6fe9-4421-bfca-e6e6187eea06.png" alt="Oleg" />
            <AvatarFallback>O</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium hidden sm:block">Oleg</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

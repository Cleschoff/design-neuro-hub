
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Bell, Search, Settings, Menu, X 
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocale } from "@/context/LocaleContext";

const DashboardHeader = ({ toggleSidebar, sidebarOpen }: { toggleSidebar: () => void; sidebarOpen: boolean }) => {
  const [searchValue, setSearchValue] = useState("");
  const { t } = useLocale();

  return (
    <header className="h-16 border-b flex items-center justify-between px-4 md:px-6 bg-background">
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="md:hidden"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        
        <h1 className="text-lg font-semibold hidden md:block">{t('navigation.dashboard')}</h1>
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
        <Avatar className="ml-2">
          <AvatarImage src="https://i.pravatar.cc/150?img=28" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default DashboardHeader;

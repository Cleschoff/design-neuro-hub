
import { cn } from "@/lib/utils";
import { 
  Settings, LogOut, BookOpen, User
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
}

const SidebarLink = ({ href, icon, text, isActive }: SidebarLinkProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
        isActive 
          ? "bg-secondary/80 text-foreground" 
          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className="py-2">
      <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">{title}</h3>
      <div className="space-y-1 px-1">{children}</div>
    </div>
  );
};

interface DashboardSidebarProps {
  sidebarOpen: boolean;
}

const DashboardSidebar = ({ sidebarOpen }: DashboardSidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // If the sidebar is closed, return a minimized version that only shows icons
  if (!sidebarOpen) {
    return (
      <aside className="h-screen border-r w-[60px] py-4 hidden md:block shrink-0">
        <div className="flex justify-center mb-6 h-12">
          <Link to="/" className="flex items-center justify-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent neuro-gradient">D</span>
          </Link>
        </div>
        
        <div className="flex flex-col items-center gap-4 px-1">
          <Link
            to="/dashboard/resources"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg text-sm transition-all",
              currentPath.includes("/resources") 
                ? "bg-secondary/80 text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <BookOpen size={20} />
          </Link>
          
          <Link
            to="/dashboard/settings"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg text-sm transition-all",
              currentPath.includes("/settings") 
                ? "bg-secondary/80 text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <Settings size={20} />
          </Link>
        </div>
      </aside>
    );
  }
  
  return (
    <aside className="h-screen border-r w-[250px] py-4 hidden md:block shrink-0 overflow-y-auto">
      <div className="flex items-center h-16 px-4 border-b">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent neuro-gradient mr-2">D</span>
          <span className="text-lg font-semibold">DIZ.SPACE</span>
        </Link>
      </div>
      
      <div className="px-3 py-2">
        <SidebarSection title="РЕСУРСЫ ПОЛЬЗОВАТЕЛЯ">
          <SidebarLink 
            href="/dashboard/resources" 
            icon={<BookOpen size={18} />} 
            text="Ресурсы" 
            isActive={currentPath.includes("/resources")} 
          />
        </SidebarSection>
        
        <SidebarSection title="АККАУНТ">
          <SidebarLink 
            href="/dashboard/settings" 
            icon={<Settings size={18} />} 
            text="Настройки" 
            isActive={currentPath.includes("/settings")} 
          />
          <SidebarLink 
            href="/logout" 
            icon={<LogOut size={18} />} 
            text="Выйти" 
            isActive={false} 
          />
        </SidebarSection>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

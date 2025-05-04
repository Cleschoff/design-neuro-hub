
import { cn } from "@/lib/utils";
import { 
  BrainCircuit, Palette, Layout, Lightbulb, 
  Settings, LogOut, FileText, Layers, WrenchIcon,
  User, CheckSquare, Bell, BookOpen, Home, FolderOpen
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
  const { t } = useLocale();
  
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
            to="/dashboard"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg text-sm transition-all",
              currentPath === "/dashboard" 
                ? "bg-secondary/80 text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <Home size={20} />
          </Link>
          
          <Link
            to="/dashboard/projects"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg text-sm transition-all",
              currentPath.includes("/projects") 
                ? "bg-secondary/80 text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <FolderOpen size={20} />
          </Link>
          
          <Link
            to="/dashboard/tasks"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg text-sm transition-all",
              currentPath.includes("/tasks") 
                ? "bg-secondary/80 text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <CheckSquare size={20} />
          </Link>
          
          <Link
            to="/dashboard/start-project"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg text-sm transition-all",
              currentPath.includes("/start-project") 
                ? "bg-secondary/80 text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <FileText size={20} />
          </Link>
          
          <Link
            to="/dashboard/design-tools"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg text-sm transition-all",
              currentPath.includes("/design-tools") || currentPath.includes("/tools/")
                ? "bg-secondary/80 text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <WrenchIcon size={20} />
          </Link>

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
            to="/dashboard/profile"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg text-sm transition-all",
              currentPath.includes("/profile") 
                ? "bg-secondary/80 text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <User size={20} />
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
          <span className="text-lg font-semibold">diz.space</span>
        </Link>
      </div>
      
      <div className="px-3 py-2">
        <SidebarSection title={t('dashboardSidebar.navigation')}>
          <SidebarLink 
            href="/dashboard" 
            icon={<Home size={18} />} 
            text={t('dashboardSidebar.home')} 
            isActive={currentPath === "/dashboard"} 
          />
          <SidebarLink 
            href="/dashboard/projects" 
            icon={<FolderOpen size={18} />} 
            text={t('dashboardSidebar.projects')} 
            isActive={currentPath.includes("/projects")} 
          />
          <SidebarLink 
            href="/dashboard/tasks" 
            icon={<CheckSquare size={18} />} 
            text={t('dashboardSidebar.tasks')} 
            isActive={currentPath.includes("/tasks")} 
          />
        </SidebarSection>
        
        <SidebarSection title={t('dashboardSidebar.designServices')}>
          <SidebarLink 
            href="/dashboard/start-project" 
            icon={<FileText size={18} />} 
            text={t('dashboardSidebar.fullDesignProject')} 
            isActive={currentPath.includes("/start-project")} 
          />
          <SidebarLink 
            href="/dashboard/design-tools" 
            icon={<WrenchIcon size={18} />} 
            text={t('dashboardSidebar.designTools')} 
            isActive={currentPath.includes("/design-tools") || currentPath.includes("/tools/")} 
          />
        </SidebarSection>

        <SidebarSection title={t('dashboardSidebar.userResources')}>
          <SidebarLink 
            href="/dashboard/resources" 
            icon={<BookOpen size={18} />} 
            text={t('dashboardSidebar.resources')} 
            isActive={currentPath.includes("/resources")} 
          />
          <SidebarLink 
            href="/dashboard/notifications" 
            icon={<Bell size={18} />} 
            text={t('dashboardSidebar.notifications')} 
            isActive={currentPath.includes("/notifications")} 
          />
          <SidebarLink 
            href="/dashboard/profile" 
            icon={<User size={18} />} 
            text={t('dashboardSidebar.profile')} 
            isActive={currentPath.includes("/profile")} 
          />
        </SidebarSection>
        
        <SidebarSection title={t('dashboardSidebar.account')}>
          <SidebarLink 
            href="/dashboard/settings" 
            icon={<Settings size={18} />} 
            text={t('dashboardSidebar.settings')} 
            isActive={currentPath.includes("/settings")} 
          />
          <SidebarLink 
            href="/logout" 
            icon={<LogOut size={18} />} 
            text={t('dashboardSidebar.logout')} 
            isActive={false} 
          />
        </SidebarSection>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

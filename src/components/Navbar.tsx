
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocale();

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-neuro-teal flex items-center justify-center group-hover:bg-neuro-teal/80 transition-colors">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neuro-teal to-neuro-lavender">
              NeuroDesign
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/dashboard" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Мои проекты
            </Link>
            <Link 
              to="/dashboard/start-project" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Создать проект
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard/start-project">
              <Button className="bg-neuro-teal hover:bg-neuro-teal/90">
                Начать проект
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Мои проекты
              </Link>
              <Link
                to="/dashboard/start-project"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Создать проект
              </Link>
              <div className="pt-2">
                <Link to="/dashboard/start-project">
                  <Button className="w-full bg-neuro-teal hover:bg-neuro-teal/90">
                    Начать проект
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

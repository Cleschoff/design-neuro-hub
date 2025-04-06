
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="relative z-10 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent neuro-gradient mr-2">D</span>
              <span className="text-lg font-semibold">diz.space</span>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="nav-link nav-link-active">Home</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <Button onClick={toggleTheme} variant="ghost" size="icon" className="ml-2">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Link to="/dashboard">
              <Button className="ml-4 bg-primary">Sign In</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button onClick={toggleTheme} variant="ghost" size="icon" className="mr-2">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b shadow-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link to="/" className="nav-link nav-link-active block py-2">Home</Link>
            <Link to="/features" className="nav-link block py-2">Features</Link>
            <Link to="/pricing" className="nav-link block py-2">Pricing</Link>
            <Link to="/community" className="nav-link block py-2">Community</Link>
            <Link to="/dashboard" className="block">
              <Button className="w-full mt-4 bg-primary">Sign In</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

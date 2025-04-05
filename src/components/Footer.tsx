
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/80 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent neuro-gradient mr-2">D</span>
              <span className="text-lg font-semibold">DesignNeuroHub</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Your AI Design Team for Faster, Smarter Solutions
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} DesignNeuroHub. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-500 hover:text-primary">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-500 hover:text-primary">Pricing</Link></li>
              <li><Link to="/dashboard" className="text-gray-500 hover:text-primary">Dashboard</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-500 hover:text-primary">Documentation</Link></li>
              <li><Link to="/community" className="text-gray-500 hover:text-primary">Community</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">Tutorials</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-500 hover:text-primary">About Us</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">Careers</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const PathSelection = () => {
  const [hoveredPath, setHoveredPath] = useState<"designer" | "beginner" | null>(null);

  return (
    <div id="path-selection" className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Who are you?</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Choose your path to get a personalized experience tailored to your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Designer Path */}
        <div 
          className={`border rounded-xl overflow-hidden transition-all duration-300 ${
            hoveredPath === "designer" 
              ? "shadow-lg shadow-neuro-teal/20 scale-[1.02] border-neuro-teal" 
              : "shadow border-transparent"
          }`}
          onMouseEnter={() => setHoveredPath("designer")}
          onMouseLeave={() => setHoveredPath(null)}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-neuro-teal/10 mb-6 mx-auto">
              <Palette className="w-8 h-8 text-neuro-teal" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">I'm a Designer</h3>
            <p className="text-center mb-6 text-gray-500 dark:text-gray-400 flex-grow">
              Unlock a full suite of AI tools for professionals. 
              Get complete control of the design process with specialized assistants.
            </p>
            <Link to="/dashboard" className="mt-auto">
              <Button className="w-full gap-2 bg-neuro-teal hover:bg-neuro-teal/90">
                Start as a Designer
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Beginner Path */}
        <div 
          className={`border rounded-xl overflow-hidden transition-all duration-300 ${
            hoveredPath === "beginner" 
              ? "shadow-lg shadow-neuro-lavender/20 scale-[1.02] border-neuro-lavender" 
              : "shadow border-transparent"
          }`}
          onMouseEnter={() => setHoveredPath("beginner")}
          onMouseLeave={() => setHoveredPath(null)}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-neuro-lavender/10 mb-6 mx-auto">
              <Lightbulb className="w-8 h-8 text-neuro-lavender" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">I'm New to Design</h3>
            <p className="text-center mb-6 text-gray-500 dark:text-gray-400 flex-grow">
              Let us guide you to create something amazing, even with no design experience.
              Get AI-powered assistance every step of the way.
            </p>
            <Link to="/dashboard" className="mt-auto">
              <Button className="w-full gap-2 bg-neuro-lavender hover:bg-neuro-lavender/90">
                Start as a Beginner
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link to="/features" className="inline-flex items-center text-primary hover:underline">
          Just exploring? Take a quick tour
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default PathSelection;

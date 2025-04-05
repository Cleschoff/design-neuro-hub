
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-neuro-teal/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -top-24 -left-24 w-56 h-56 bg-neuro-lavender/10 rounded-full blur-3xl opacity-70"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          <span className="block mb-2">Ready to Transform Your</span>
          <span className="bg-clip-text text-transparent neuro-gradient">Design Workflow?</span>
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Join thousands of designers who are saving time, boosting creativity, and delivering better results with DesignNeuroHub.
        </p>
        <Link to="/dashboard">
          <Button size="lg" className="bg-primary gap-2 px-8">
            Get Started for Free
            <ArrowRight size={16} />
          </Button>
        </Link>
        <p className="text-sm text-gray-500 mt-4">No credit card required. Start with our free plan today.</p>
      </div>
    </section>
  );
};

export default CTA;

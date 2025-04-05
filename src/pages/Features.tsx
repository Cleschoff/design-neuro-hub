
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeuroTeam from "@/components/NeuroTeam";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-16 bg-background relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-neuro-teal/10 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/3 -left-24 w-56 h-56 bg-neuro-lavender/10 rounded-full blur-3xl opacity-70"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Meet Your AI-Powered Design Team
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400">
                DesignNeuroHub provides specialized AI assistants to help with every aspect of your design workflow.
              </p>
            </div>
          </div>
        </div>
        
        <NeuroTeam />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;

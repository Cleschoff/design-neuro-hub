
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

const PricingPage = () => {
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
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400">
                Choose the plan that works best for your design needs. No hidden fees or commitments.
              </p>
            </div>
          </div>
        </div>
        
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;

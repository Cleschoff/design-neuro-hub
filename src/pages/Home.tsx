
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PathSelection from "@/components/PathSelection";
import NeuroTeam from "@/components/NeuroTeam";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PathSelection />
        <NeuroTeam />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

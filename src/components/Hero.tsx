
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";

const Hero = () => {
  const { t } = useLocale();

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-neuro-teal/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute top-1/3 -left-24 w-56 h-56 bg-neuro-lavender/10 rounded-full blur-3xl opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-4 px-3 py-1.5 rounded-full bg-neuro-sand dark:bg-white/10 text-neuro-navy dark:text-white text-sm font-medium">
            <BrainCircuit size={16} className="mr-2 text-neuro-teal" />
            <span>{t('hero.designerSpace')}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="block">{t('hero.title1')}</span>
            <span className="block bg-clip-text text-transparent neuro-gradient">{t('hero.title2')}</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary gap-2 px-6" onClick={() => {
              // Smooth scroll to path selection section
              document.querySelector('#path-selection')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}>
              {t('hero.choosePath')}
              <ArrowRight size={16} />
            </Button>
            <Link to="/features">
              <Button size="lg" variant="outline" className="gap-2 px-6">
                {t('hero.meetTeam')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

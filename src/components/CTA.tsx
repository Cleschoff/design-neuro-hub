
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";

const CTA = () => {
  const { t } = useLocale();
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-neuro-teal/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -top-24 -left-24 w-56 h-56 bg-neuro-lavender/10 rounded-full blur-3xl opacity-70"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          <span className="block mb-2">{t('cta.title.part1')}</span>
          <span className="bg-clip-text text-transparent neuro-gradient">{t('cta.title.part2')}</span>
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          {t('cta.description')}
        </p>
        <Link to="/dashboard">
          <Button size="lg" className="bg-primary gap-2 px-8">
            {t('cta.button')}
            <ArrowRight size={16} />
          </Button>
        </Link>
        <p className="text-sm text-gray-500 mt-4">{t('cta.noCreditCard')}</p>
      </div>
    </section>
  );
};

export default CTA;

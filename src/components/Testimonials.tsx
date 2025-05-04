
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const Testimonials = () => {
  const { t } = useLocale();

  // Get testimonials from localization ensuring it's an array
  const testimonials = Array.isArray(t('testimonials.items')) 
    ? t('testimonials.items') 
    : []; // Fallback to empty array if not an array

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="neuro-card">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role} в {testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

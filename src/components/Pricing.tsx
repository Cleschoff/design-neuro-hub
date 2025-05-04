
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";

const Pricing = () => {
  const { t } = useLocale();

  const plans = [
    {
      name: t('pricing.free.name'),
      price: t('pricing.free.price'),
      period: t('pricing.free.period'),
      description: t('pricing.free.description'),
      featured: false,
      features: [
        { included: true, text: t('pricing.features.access3Neuros') },
        { included: true, text: t('pricing.features.dailyQueries') },
        { included: true, text: t('pricing.features.basicExport') },
        { included: false, text: t('pricing.features.assistantCollab') },
        { included: false, text: t('pricing.features.priorityProcessing') },
        { included: false, text: t('pricing.features.teamCollab') }
      ]
    },
    {
      name: t('pricing.premium.name'),
      price: t('pricing.premium.price'),
      period: t('pricing.premium.period'),
      description: t('pricing.premium.description'),
      featured: true,
      features: [
        { included: true, text: t('pricing.features.access10Neuros') },
        { included: true, text: t('pricing.features.unlimitedQueries') },
        { included: true, text: t('pricing.features.advancedExport') },
        { included: true, text: t('pricing.features.assistantCollab') },
        { included: true, text: t('pricing.features.priorityProcessing') },
        { included: false, text: t('pricing.features.teamCollab') }
      ]
    },
    {
      name: t('pricing.team.name'),
      price: t('pricing.team.price'),
      period: t('pricing.team.period'),
      description: t('pricing.team.description'),
      featured: false,
      features: [
        { included: true, text: t('pricing.features.access10Neuros') },
        { included: true, text: t('pricing.features.unlimitedQueries') },
        { included: true, text: t('pricing.features.advancedExport') },
        { included: true, text: t('pricing.features.assistantCollab') },
        { included: true, text: t('pricing.features.priorityProcessing') },
        { included: true, text: t('pricing.features.teamCollabMembers') }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`neuro-card flex flex-col ${plan.featured ? 'border-primary shadow-lg relative overflow-visible' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  {t('pricing.premium.popular')}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{plan.description}</p>
              </div>
              
              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.included ? (
                      <Check size={18} className="text-neuro-teal mr-2 flex-shrink-0" />
                    ) : (
                      <X size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-gray-400"}>{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/dashboard" className="mt-auto">
                <Button 
                  className={`w-full ${plan.featured ? 'bg-primary' : ''}`} 
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.name === t('pricing.free.name') ? t('pricing.free.button') : t('pricing.premium.button')}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

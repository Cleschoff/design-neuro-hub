
import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const Features = () => {
  const { t } = useLocale();

  const featureList = [
    {
      title: t('features.items.aiDesignTeam.title'),
      description: t('features.items.aiDesignTeam.description'),
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: t('features.items.realTimeFeedback.title'),
      description: t('features.items.realTimeFeedback.description'),
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: t('features.items.fileIntegration.title'),
      description: t('features.items.fileIntegration.description'),
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: t('features.items.assistantCollab.title'),
      description: t('features.items.assistantCollab.description'),
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: t('features.items.exportOptions.title'),
      description: t('features.items.exportOptions.description'),
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: t('features.items.learningAI.title'),
      description: t('features.items.learningAI.description'),
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

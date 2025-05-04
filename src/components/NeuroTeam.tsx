
import { Card } from "@/components/ui/card";
import { 
  BrainCircuit, Palette, Layout, Lightbulb, 
  BarChart, Search, FileText, Layers, Compass, MountainSnow
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const NeuroTeam = () => {
  const { t } = useLocale();

  const neuros = [
    {
      id: "chief",
      title: t('neuroTeam.roles.chief.title'),
      description: t('neuroTeam.roles.chief.description'),
      icon: BrainCircuit,
      color: "text-neuro-teal"
    },
    {
      id: "tor",
      title: t('neuroTeam.roles.tor.title'),
      description: t('neuroTeam.roles.tor.description'),
      icon: FileText,
      color: "text-neuro-coral"
    },
    {
      id: "guidebook",
      title: t('neuroTeam.roles.guidebook.title'),
      description: t('neuroTeam.roles.guidebook.description'),
      icon: Compass,
      color: "text-neuro-navy"
    },
    {
      id: "trend",
      title: t('neuroTeam.roles.trend.title'),
      description: t('neuroTeam.roles.trend.description'),
      icon: BarChart,
      color: "text-neuro-lavender"
    },
    {
      id: "competitive",
      title: t('neuroTeam.roles.competitive.title'),
      description: t('neuroTeam.roles.competitive.description'),
      icon: Search,
      color: "text-neuro-mint"
    },
    {
      id: "visual",
      title: t('neuroTeam.roles.visual.title'),
      description: t('neuroTeam.roles.visual.description'),
      icon: MountainSnow,
      color: "text-neuro-coral"
    },
    {
      id: "composition",
      title: t('neuroTeam.roles.composition.title'),
      description: t('neuroTeam.roles.composition.description'),
      icon: Layout,
      color: "text-neuro-teal"
    },
    {
      id: "color",
      title: t('neuroTeam.roles.color.title'),
      description: t('neuroTeam.roles.color.description'),
      icon: Palette,
      color: "text-neuro-lavender"
    },
    {
      id: "concept",
      title: t('neuroTeam.roles.concept.title'),
      description: t('neuroTeam.roles.concept.description'),
      icon: Lightbulb,
      color: "text-neuro-navy"
    },
    {
      id: "structural",
      title: t('neuroTeam.roles.structural.title'),
      description: t('neuroTeam.roles.structural.description'),
      icon: Layers,
      color: "text-neuro-mint"
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('neuroTeam.title')}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('neuroTeam.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {neuros.map((neuro) => (
            <Card key={neuro.id} className="neuro-card hover:translate-y-[-5px] transition-all duration-300">
              <div className={`${neuro.color} mb-4`}>
                <neuro.icon size={36} />
              </div>
              <h3 className="font-bold text-lg mb-2">{neuro.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{neuro.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeuroTeam;

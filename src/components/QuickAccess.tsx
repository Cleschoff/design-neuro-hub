
import { Card } from "@/components/ui/card";
import { 
  BrainCircuit, Palette, Layout, Lightbulb, 
  BarChart, FileText, Layers, MountainSnow
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const QuickAccess = () => {
  const { t } = useLocale();

  const assistants = [
    {
      id: "chief",
      title: t('neuroTeam.roles.chief.title'),
      icon: BrainCircuit,
      color: "text-neuro-teal bg-neuro-teal/10"
    },
    {
      id: "tor",
      title: t('neuroTeam.roles.tor.title'),
      icon: FileText,
      color: "text-neuro-coral bg-neuro-coral/10"
    },
    {
      id: "trend",
      title: t('neuroTeam.roles.trend.title'),
      icon: BarChart,
      color: "text-neuro-lavender bg-neuro-lavender/10"
    },
    {
      id: "composition",
      title: t('neuroTeam.roles.composition.title'),
      icon: Layout,
      color: "text-neuro-teal bg-neuro-teal/10"
    },
    {
      id: "color",
      title: t('neuroTeam.roles.color.title'),
      icon: Palette,
      color: "text-neuro-lavender bg-neuro-lavender/10"
    },
    {
      id: "visual",
      title: t('neuroTeam.roles.visual.title'),
      icon: MountainSnow,
      color: "text-neuro-coral bg-neuro-coral/10"
    },
    {
      id: "concept",
      title: t('neuroTeam.roles.concept.title'),
      icon: Lightbulb,
      color: "text-neuro-navy bg-neuro-navy/10"
    },
    {
      id: "structural",
      title: t('neuroTeam.roles.structural.title'),
      icon: Layers,
      color: "text-neuro-mint bg-neuro-mint/10"
    }
  ];

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{t('neuroTeam.quickAccess.title')}</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {assistants.map((assistant) => (
          <Card key={assistant.id} className="neuro-card flex flex-col items-center justify-center py-4 cursor-pointer hover:scale-[1.05] transition-all">
            <div className={`rounded-full p-3 ${assistant.color} mb-2`}>
              <assistant.icon size={24} />
            </div>
            <p className="text-sm text-center font-medium">{assistant.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;

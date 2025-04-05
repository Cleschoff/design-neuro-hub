
import { Card } from "@/components/ui/card";
import { 
  BrainCircuit, Palette, Layout, Lightbulb, 
  BarChart, FileText, Layers, MountainSnow
} from "lucide-react";

const assistants = [
  {
    id: "chief",
    title: "Chief Neuro-Designer",
    icon: BrainCircuit,
    color: "text-neuro-teal bg-neuro-teal/10"
  },
  {
    id: "tor",
    title: "TOR Analyst",
    icon: FileText,
    color: "text-neuro-coral bg-neuro-coral/10"
  },
  {
    id: "trend",
    title: "Trend Analyst",
    icon: BarChart,
    color: "text-neuro-lavender bg-neuro-lavender/10"
  },
  {
    id: "composition",
    title: "Composition Analyzer",
    icon: Layout,
    color: "text-neuro-teal bg-neuro-teal/10"
  },
  {
    id: "color",
    title: "Color & Font Assistant",
    icon: Palette,
    color: "text-neuro-lavender bg-neuro-lavender/10"
  },
  {
    id: "visual",
    title: "Visual Referencer",
    icon: MountainSnow,
    color: "text-neuro-coral bg-neuro-coral/10"
  },
  {
    id: "concept",
    title: "Concept Generator",
    icon: Lightbulb,
    color: "text-neuro-navy bg-neuro-navy/10"
  },
  {
    id: "structural",
    title: "Structural Assistant",
    icon: Layers,
    color: "text-neuro-mint bg-neuro-mint/10"
  }
];

const QuickAccess = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Quick Access</h2>
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

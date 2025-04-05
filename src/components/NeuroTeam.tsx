
import { Card } from "@/components/ui/card";
import { 
  BrainCircuit, Palette, Layout, Lightbulb, 
  BarChart, Search, FileText, Layers, Compass, MountainSnow
} from "lucide-react";

const neuros = [
  {
    id: "chief",
    title: "Chief Neuro-Designer",
    description: "Oversees the design process, suggests workflows, and integrates outputs.",
    icon: BrainCircuit,
    color: "text-neuro-teal"
  },
  {
    id: "tor",
    title: "TOR Analyst",
    description: "Interprets project requirements and ensures alignment with deliverables.",
    icon: FileText,
    color: "text-neuro-coral"
  },
  {
    id: "guidebook",
    title: "Guidebook Expert",
    description: "Provides instant access to design standards and best practices.",
    icon: Compass,
    color: "text-neuro-navy"
  },
  {
    id: "trend",
    title: "Trend Analyst",
    description: "Keeps designs current with market trends and emerging styles.",
    icon: BarChart,
    color: "text-neuro-lavender"
  },
  {
    id: "competitive",
    title: "Competitive Researcher",
    description: "Analyzes competitors' designs for inspiration or differentiation.",
    icon: Search,
    color: "text-neuro-mint"
  },
  {
    id: "visual",
    title: "Visual Referencer",
    description: "Finds or suggests visual inspiration for your designs.",
    icon: MountainSnow,
    color: "text-neuro-coral"
  },
  {
    id: "composition",
    title: "Composition Analyzer",
    description: "Critiques and improves layout balance, hierarchy, and alignment.",
    icon: Layout,
    color: "text-neuro-teal"
  },
  {
    id: "color",
    title: "Color and Font Assistant",
    description: "Optimizes typography and color schemes for harmony and accessibility.",
    icon: Palette,
    color: "text-neuro-lavender"
  },
  {
    id: "concept",
    title: "Concept Generator",
    description: "Sparks initial ideas and creative concepts from your brief.",
    icon: Lightbulb,
    color: "text-neuro-navy"
  },
  {
    id: "structural",
    title: "Structural Assistant",
    description: "Helps with wireframes and frameworks for solid foundations.",
    icon: Layers,
    color: "text-neuro-mint"
  }
];

const NeuroTeam = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Your Neuro-Team</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Each assistant is an AI-powered module designed for a specific task in your design workflow.
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

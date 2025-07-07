
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  BrainCircuit, Palette, Layout, Lightbulb, 
  BarChart, Search, FileText, Layers, Compass, MountainSnow,
  Eye, Cpu, Database, Github, Cloud, Globe, Zap, Target, Users, TrendingUp
} from "lucide-react";

interface NeuroAssistant {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  detailedDescription: string;
  capabilities: string[];
  tools: string[];
  apis: string[];
  workflow: string[];
}

interface NeuroAssistantModalProps {
  assistant: NeuroAssistant | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NeuroAssistantModal = ({ assistant, open, onOpenChange }: NeuroAssistantModalProps) => {
  if (!assistant) return null;

  const IconComponent = assistant.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className={`${assistant.color} p-2 rounded-lg bg-secondary/20`}>
              <IconComponent size={32} />
            </div>
            {assistant.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Описание</h3>
            <p className="text-muted-foreground">{assistant.detailedDescription}</p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">Основные возможности</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {assistant.capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neuro-teal" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">Инструменты и технологии</h3>
            <div className="flex flex-wrap gap-2">
              {assistant.tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="bg-neuro-mint/20 text-neuro-mint border-neuro-mint/30">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">API и интеграции</h3>
            <div className="flex flex-wrap gap-2">
              {assistant.apis.map((api, index) => (
                <Badge key={index} variant="outline" className="border-neuro-lavender text-neuro-lavender">
                  {api}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">Рабочий процесс</h3>
            <div className="space-y-2">
              {assistant.workflow.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-neuro-navy/20 text-neuro-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-sm flex-1">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NeuroAssistantModal;

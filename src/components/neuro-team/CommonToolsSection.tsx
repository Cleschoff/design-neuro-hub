
import { Database, Github, Cpu, Cloud } from "lucide-react";

const CommonToolsSection = () => {
  return (
    <div className="mt-12 p-6 bg-card rounded-xl border border-border">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Database className="h-6 w-6 text-neuro-teal" />
        Общие инструменты для всех нейро-ассистентов
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
          <Github className="h-5 w-5 text-neuro-navy" />
          <div>
            <div className="font-medium">GitHub</div>
            <div className="text-sm text-muted-foreground">Совместная работа и хранение кода</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
          <Cpu className="h-5 w-5 text-neuro-lavender" />
          <div>
            <div className="font-medium">Google Colab</div>
            <div className="text-sm text-muted-foreground">Запуск кода и эксперименты с ИИ</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
          <Cloud className="h-5 w-5 text-neuro-mint" />
          <div>
            <div className="font-medium">Cloud APIs</div>
            <div className="text-sm text-muted-foreground">AWS, Google Cloud, Azure для ИИ-моделей</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonToolsSection;

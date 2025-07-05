
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Brain, Search, Palette, Settings, Target } from "lucide-react";

interface WorkflowSectionProps {
  currentStep: number;
  onContinue: () => void;
}

const WorkflowSection: React.FC<WorkflowSectionProps> = ({ currentStep, onContinue }) => {
  const workflowSteps = [
    {
      title: "Шаг 1: Анализ ТЗ и подготовка к работе",
      description: "Главный нейро-дизайнер и Аналитик ТЗ анализируют техническое задание",
      assistants: ["Главный нейро-дизайнер", "Аналитик ТЗ"],
      icon: Brain,
      color: "neuro-teal"
    },
    {
      title: "Шаг 2: Исследование и сбор данных",
      description: "Параллельная работа исследовательских ассистентов",
      assistants: ["Гайдбук-эксперт", "Тренд-аналитик", "Конкурентный исследователь", "Визуальный референсатор"],
      icon: Search,
      color: "neuro-lavender"
    },
    {
      title: "Шаг 3: Разработка концепции и дизайна",
      description: "Параллельная работа дизайнерских ассистентов",
      assistants: ["Композиционный аналитик", "Цветовой и шрифтовой ассистент", "Структурный ассистент", "Концепт-генератор"],
      icon: Palette,
      color: "neuro-coral"
    },
    {
      title: "Шаг 4: Координация работы команды",
      description: "Главный нейро-дизайнер контролирует прогресс и синхронизацию",
      assistants: ["Главный нейро-дизайнер"],
      icon: Settings,
      color: "neuro-mint"
    },
    {
      title: "Шаг 5: Согласование с заказчиком",
      description: "Подготовка презентации и сбор обратной связи",
      assistants: ["Главный нейро-дизайнер"],
      icon: Target,
      color: "neuro-navy"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <CardTitle className="text-2xl text-green-800">Бриф успешно получен!</CardTitle>
              <CardDescription className="text-green-600">
                Нейро-команда приступила к работе по алгоритму
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Алгоритм работы нейро-команды</CardTitle>
          <CardDescription>
            Следите за процессом создания вашего дизайн-проекта
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {workflowSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = currentStep - 1 === index + 1;
            const isCompleted = currentStep - 1 > index + 1;
            
            return (
              <div key={index} className={`p-6 rounded-lg border-2 transition-all ${
                isActive ? `border-${step.color} bg-${step.color}/5` : 
                isCompleted ? 'border-green-200 bg-green-50' : 
                'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isActive ? `bg-${step.color}/20` :
                    isCompleted ? 'bg-green-100' :
                    'bg-gray-100'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${
                      isActive ? `text-${step.color}` :
                      isCompleted ? 'text-green-600' :
                      'text-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.assistants.map((assistant, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-sm ${
                          isActive ? `bg-${step.color}/10 text-${step.color}` :
                          isCompleted ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {assistant}
                        </span>
                      ))}
                    </div>
                  </div>
                  {isCompleted && (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  )}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
      
      <div className="flex justify-center pt-6">
        <Button 
          onClick={onContinue} 
          size="lg"
          className="bg-neuro-teal hover:bg-neuro-teal/90 text-white px-8"
        >
          Посмотреть результат работы
          <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default WorkflowSection;

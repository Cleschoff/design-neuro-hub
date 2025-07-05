
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { CustomerBriefForm } from "@/components/CustomerBriefForm";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Sparkles, FileText, CheckCircle, ArrowRight, ChevronDown, Users, Brain, Search, Target, Palette, Layout, Settings } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const StartProject = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [briefCompleted, setBriefCompleted] = useState(false);
  const { t, locale, setLocale } = useLocale();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleBriefSubmit = () => {
    setBriefCompleted(true);
    setCurrentStep(2);
  };

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
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neuro-teal/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-neuro-teal" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Создание дизайн-проекта</h1>
                  <p className="text-muted-foreground">Работайте с нейро-командой профессиональных дизайнеров</p>
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    {locale === "ru" ? "Русский" : "English"}
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLocale("ru")}>
                    Русский
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocale("en")}>
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Welcome Message */}
            <div className="bg-gradient-to-r from-neuro-teal/5 via-neuro-lavender/5 to-neuro-coral/5 p-8 rounded-xl border border-neuro-teal/10 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-neuro-teal/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-neuro-teal" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3 text-foreground">
                    Добро пожаловать в нейро-студию дизайна!
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Я — ваш главный нейро-дизайнер, и моя команда готова создать для вас профессиональный дизайн-проект. 
                    Заполните подробный бриф, чтобы мы могли понять ваше видение и создать именно то, что вам нужно.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Process Steps */}
            <div className="flex items-center justify-between mb-8 p-6 bg-card rounded-lg border">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="text-sm mt-2 font-medium">Бриф проекта</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${currentStep >= 2 ? 'bg-neuro-teal' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="text-sm mt-2 font-medium">Анализ ТЗ</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${currentStep >= 3 ? 'bg-neuro-teal' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="text-sm mt-2 font-medium">Исследование</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${currentStep >= 4 ? 'bg-neuro-teal' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 4 ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'}`}>
                  4
                </div>
                <span className="text-sm mt-2 font-medium">Дизайн</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${currentStep >= 5 ? 'bg-neuro-teal' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 5 ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'}`}>
                  5
                </div>
                <span className="text-sm mt-2 font-medium">Финализация</span>
              </div>
            </div>
            
            {/* Content based on step */}
            {currentStep === 1 && (
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-neuro-teal/5 to-neuro-lavender/5">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-neuro-teal" />
                    <div>
                      <CardTitle className="text-2xl">Бриф дизайн-проекта</CardTitle>
                      <CardDescription className="text-base">
                        Расскажите подробно о вашем проекте, чтобы нейро-команда могла создать идеальный дизайн
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <CustomerBriefForm onSubmitComplete={handleBriefSubmit} />
                </CardContent>
              </Card>
            )}
            
            {currentStep === 2 && (
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

                {/* Workflow Algorithm */}
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
                    onClick={() => setCurrentStep(3)} 
                    size="lg"
                    className="bg-neuro-teal hover:bg-neuro-teal/90 text-white px-8"
                  >
                    Посмотреть результат работы
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-neuro-lavender/10 to-neuro-coral/10">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-neuro-lavender" />
                    <div>
                      <CardTitle className="text-2xl">Ваш дизайн-проект готов!</CardTitle>
                      <CardDescription>
                        Нейро-команда создала полный дизайн-проект по алгоритму работы
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-neuro-teal to-neuro-lavender flex items-center justify-center">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Проект успешно создан</h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        Ваш дизайн-проект включает: полный анализ ТЗ, исследование рынка и трендов, 
                        концепцию, цветовую палитру, типографику, композиционные решения и техническую документацию.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                      <div className="p-4 bg-neuro-teal/5 rounded-lg border border-neuro-teal/20">
                        <h4 className="font-medium text-neuro-teal mb-1">Концепция и стиль</h4>
                        <p className="text-sm text-muted-foreground">Уникальная дизайн-концепция</p>
                      </div>
                      <div className="p-4 bg-neuro-lavender/5 rounded-lg border border-neuro-lavender/20">
                        <h4 className="font-medium text-neuro-lavender mb-1">Цвета и типографика</h4>
                        <p className="text-sm text-muted-foreground">Продуманная палитра и шрифты</p>
                      </div>
                      <div className="p-4 bg-neuro-coral/5 rounded-lg border border-neuro-coral/20">
                        <h4 className="font-medium text-neuro-coral mb-1">Композиция</h4>
                        <p className="text-sm text-muted-foreground">Макеты и структура</p>
                      </div>
                      <div className="p-4 bg-neuro-mint/5 rounded-lg border border-neuro-mint/20">
                        <h4 className="font-medium text-neuro-mint mb-1">Техническая часть</h4>
                        <p className="text-sm text-muted-foreground">Файлы для реализации</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button size="lg" className="bg-neuro-teal hover:bg-neuro-teal/90">
                        Скачать проект
                      </Button>
                      <Button size="lg" variant="outline">
                        Создать новый проект
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StartProject;


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
import { Sparkles, FileText, CheckCircle, ArrowRight, ChevronDown, Users, Brain } from "lucide-react";
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
                <span className="text-sm mt-2 font-medium">Анализ и план</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${currentStep >= 3 ? 'bg-neuro-teal' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="text-sm mt-2 font-medium">Создание дизайна</span>
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
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <CardTitle className="text-2xl text-green-800">Бриф успешно получен!</CardTitle>
                      <CardDescription className="text-green-600">
                        Нейро-команда приступила к анализу вашего проекта
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-neuro-teal/5 rounded-lg border border-neuro-teal/20">
                      <h3 className="font-medium text-neuro-teal mb-2">Анализ требований</h3>
                      <p className="text-sm text-muted-foreground">
                        Аналитик ТЗ изучает ваши требования и формирует техническое задание
                      </p>
                    </div>
                    <div className="p-4 bg-neuro-lavender/5 rounded-lg border border-neuro-lavender/20">
                      <h3 className="font-medium text-neuro-lavender mb-2">Исследование трендов</h3>
                      <p className="text-sm text-muted-foreground">
                        Тренд-аналитик подбирает актуальные решения для вашей сферы
                      </p>
                    </div>
                    <div className="p-4 bg-neuro-coral/5 rounded-lg border border-neuro-coral/20">
                      <h3 className="font-medium text-neuro-coral mb-2">Концепт-генерация</h3>
                      <p className="text-sm text-muted-foreground">
                        Создание уникальных дизайн-концепций на основе вашего брифа
                      </p>
                    </div>
                    <div className="p-4 bg-neuro-mint/5 rounded-lg border border-neuro-mint/20">
                      <h3 className="font-medium text-neuro-mint mb-2">Цветовое решение</h3>
                      <p className="text-sm text-muted-foreground">
                        Подбор идеальной цветовой палитры и типографики
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center pt-6">
                    <Button 
                      onClick={() => setCurrentStep(3)} 
                      size="lg"
                      className="bg-neuro-teal hover:bg-neuro-teal/90 text-white px-8"
                    >
                      Посмотреть результат
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {currentStep === 3 && (
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-neuro-lavender/10 to-neuro-coral/10">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-neuro-lavender" />
                    <div>
                      <CardTitle className="text-2xl">Ваш дизайн-проект готов!</CardTitle>
                      <CardDescription>
                        Нейро-команда создала полный дизайн-проект по вашему брифу
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
                        Ваш дизайн-проект включает: концепцию, цветовую палитру, типографику, 
                        макеты всех необходимых материалов и техническую документацию для реализации.
                      </p>
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

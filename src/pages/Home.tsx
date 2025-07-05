
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";

const Home = () => {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Приветствие */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-neuro-sand/20 to-neuro-teal/10">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-neuro-teal/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 -left-24 w-56 h-56 bg-neuro-lavender/10 rounded-full blur-3xl opacity-70"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-neuro-sand/30 text-neuro-navy text-sm font-medium border border-neuro-teal/20">
              <Sparkles size={16} className="mr-2 text-neuro-teal" />
              <span>Нейро-ассистент дизайнера</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-foreground">Создайте свой</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-neuro-teal via-neuro-lavender to-neuro-coral">
                идеальный дизайн
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Я — ваш персональный нейро-ассистент, который поможет создать профессиональный дизайн-проект от идеи до финального результата
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/dashboard/start-project">
                <Button size="lg" className="bg-neuro-teal hover:bg-neuro-teal/90 text-white px-8 py-4 text-lg">
                  Начать проект
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-neuro-teal/30 hover:bg-neuro-teal/5"
                onClick={() => {
                  document.querySelector('#neuro-team')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <Users size={20} className="mr-2" />
                Познакомиться с командой
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Neuro Team Section */}
      <section id="neuro-team" className="py-20 bg-background/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Познакомьтесь с вашей Нейро-командой
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Каждый ассистент — это специализированный ИИ-модуль, разработанный для выполнения определенной задачи в вашем дизайн-процессе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Главный нейро-дизайнер */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-neuro-teal/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-neuro-teal/10 flex items-center justify-center mb-4 group-hover:bg-neuro-teal/20 transition-colors">
                <Sparkles className="h-6 w-6 text-neuro-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Главный Нейро-дизайнер</h3>
              <p className="text-muted-foreground text-sm">
                Координирует весь процесс, анализирует ваш бриф и формирует стратегию проекта
              </p>
            </div>

            {/* Аналитик ТЗ */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-neuro-lavender/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-neuro-lavender/10 flex items-center justify-center mb-4 group-hover:bg-neuro-lavender/20 transition-colors">
                <Users className="h-6 w-6 text-neuro-lavender" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Аналитик ТЗ</h3>
              <p className="text-muted-foreground text-sm">
                Интерпретирует ваши требования и обеспечивает соответствие всех решений вашим целям
              </p>
            </div>

            {/* Цветовой ассистент */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-neuro-coral/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-neuro-coral/10 flex items-center justify-center mb-4 group-hover:bg-neuro-coral/20 transition-colors">
                <Zap className="h-6 w-6 text-neuro-coral" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Цветовой ассистент</h3>
              <p className="text-muted-foreground text-sm">
                Подбирает идеальные цветовые палитры и типографику для вашего проекта
              </p>
            </div>

            {/* Концепт-генератор */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-neuro-mint/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-neuro-mint/10 flex items-center justify-center mb-4 group-hover:bg-neuro-mint/20 transition-colors">
                <Sparkles className="h-6 w-6 text-neuro-mint" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Концепт-генератор</h3>
              <p className="text-muted-foreground text-sm">
                Создает оригинальные дизайн-концепции на основе вашего брифа
              </p>
            </div>

            {/* Тренд-аналитик */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-neuro-navy/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-neuro-navy/10 flex items-center justify-center mb-4 group-hover:bg-neuro-navy/20 transition-colors">
                <Users className="h-6 w-6 text-neuro-navy" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Тренд-аналитик</h3>
              <p className="text-muted-foreground text-sm">
                Отслеживает актуальные тренды и адаптирует их под ваш проект
              </p>
            </div>

            {/* Финализатор */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-neuro-sand/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-neuro-sand/20 flex items-center justify-center mb-4 group-hover:bg-neuro-sand/30 transition-colors">
                <Zap className="h-6 w-6 text-neuro-navy" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Финализатор проекта</h3>
              <p className="text-muted-foreground text-sm">
                Подготавливает финальные файлы и техническую документацию
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neuro-teal/5 via-neuro-lavender/5 to-neuro-coral/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы создать свой дизайн-проект?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Заполните бриф, и наша нейро-команда создаст для вас профессиональный дизайн-проект с учетом всех ваших требований
          </p>
          <Link to="/dashboard/start-project">
            <Button size="lg" className="bg-neuro-teal hover:bg-neuro-teal/90 text-white px-8 py-4 text-lg">
              Заполнить бриф проекта
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

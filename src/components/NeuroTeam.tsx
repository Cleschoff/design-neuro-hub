
import { Card } from "@/components/ui/card";
import { 
  BrainCircuit, Palette, Layout, Lightbulb, 
  BarChart, Search, FileText, Layers, Compass, MountainSnow,
  Eye, Cpu, Database, Github, Cloud
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const NeuroTeam = () => {
  const { t } = useLocale();

  const neuros = [
    {
      id: "chief",
      title: "Главный нейро-дизайнер",
      description: "Контролирует весь процесс, координирует работу команды и принимает ключевые решения",
      icon: BrainCircuit,
      color: "text-neuro-teal"
    },
    {
      id: "tor",
      title: "Аналитик ТЗ",
      description: "Анализирует техническое задание, выделяет ключевые параметры и определяет ограничения",
      icon: FileText,
      color: "text-neuro-coral"
    },
    {
      id: "guidebook",
      title: "Гайдбук-эксперт",
      description: "Анализирует брендбук (цвета, шрифты, нормы) и обеспечивает соответствие стандартам",
      icon: Compass,
      color: "text-neuro-navy"
    },
    {
      id: "trend",
      title: "Тренд-аналитик",
      description: "Изучает актуальные тренды в дизайне через Behance API и другие платформы",
      icon: BarChart,
      color: "text-neuro-lavender"
    },
    {
      id: "competitive",
      title: "Конкурентный исследователь",
      description: "Анализирует решения конкурентов с помощью BeautifulSoup, Scrapy и API социальных сетей",
      icon: Search,
      color: "text-neuro-mint"
    },
    {
      id: "visual",
      title: "Визуальный референсатор",
      description: "Подбирает референсы для проекта через Unsplash API, Freepik API и другие источники",
      icon: MountainSnow,
      color: "text-neuro-coral"
    },
    {
      id: "composition",
      title: "Композиционный аналитик",
      description: "Определяет принципы макета (минимализм, асимметрия) с использованием OpenCV и TensorFlow",
      icon: Layout,
      color: "text-neuro-teal"
    },
    {
      id: "color",
      title: "Цветовой и шрифтовой ассистент",
      description: "Подбирает цветовые палитры и шрифты через Adobe Color API и Google Fonts API",
      icon: Palette,
      color: "text-neuro-lavender"
    },
    {
      id: "structural",
      title: "Структурный ассистент",
      description: "Извлекает элементы (текстуры, формы) из референсов с помощью OpenCV",
      icon: Layers,
      color: "text-neuro-mint"
    },
    {
      id: "concept",
      title: "Концепт-генератор",
      description: "Создает черновые концепции с помощью ИИ через Hugging Face API и DALL-E API",
      icon: Lightbulb,
      color: "text-neuro-navy"
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Познакомьтесь с вашей Нейро-командой</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Каждый ассистент — это специализированный ИИ-модуль с конкретными инструментами и API для выполнения своих задач в дизайн-процессе
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {neuros.map((neuro) => (
            <Card key={neuro.id} className="neuro-card hover:translate-y-[-5px] transition-all duration-300 p-6">
              <div className={`${neuro.color} mb-4`}>
                <neuro.icon size={36} />
              </div>
              <h3 className="font-bold text-lg mb-2">{neuro.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{neuro.description}</p>
            </Card>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default NeuroTeam;

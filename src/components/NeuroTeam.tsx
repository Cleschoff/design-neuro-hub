
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  BrainCircuit, Palette, Layout, Lightbulb, 
  BarChart, Search, FileText, Layers, Compass, MountainSnow,
  Eye, Cpu, Database, Github, Cloud
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import NeuroAssistantModal from "./neuro-team/NeuroAssistantModal";

const NeuroTeam = () => {
  const { t } = useLocale();
  const [selectedAssistant, setSelectedAssistant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const neuros = [
    {
      id: "chief",
      title: "Главный нейро-дизайнер",
      description: "Контролирует весь процесс, координирует работу команды и принимает ключевые решения",
      icon: BrainCircuit,
      color: "text-neuro-teal",
      detailedDescription: "Главный нейро-дизайнер выступает координатором всего процесса создания дизайна. Он анализирует входящие данные, распределяет задачи между специализированными ассистентами, контролирует качество их работы и принимает финальные решения по дизайну. Использует машинное обучение для оптимизации рабочих процессов и обеспечения согласованности между различными этапами проекта.",
      capabilities: [
        "Координация работы всех ассистентов",
        "Анализ и валидация результатов",
        "Принятие ключевых дизайнерских решений",
        "Контроль качества на всех этапах",
        "Оптимизация рабочих процессов",
        "Интеграция результатов работы команды"
      ],
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NetworkX"],
      apis: ["OpenAI GPT", "Claude API", "Custom ML Models", "Project Management APIs"],
      workflow: [
        "Получение и анализ технического задания",
        "Распределение задач между ассистентами",
        "Мониторинг прогресса выполнения задач",
        "Валидация промежуточных результатов",
        "Принятие решений по корректировкам",
        "Финальная сборка и оптимизация дизайна"
      ]
    },
    {
      id: "tor",
      title: "Аналитик ТЗ",
      description: "Анализирует техническое задание, выделяет ключевые параметры и определяет ограничения",
      icon: FileText,
      color: "text-neuro-coral",
      detailedDescription: "Специализируется на глубоком анализе технических заданий с использованием NLP технологий. Извлекает структурированную информацию из неструктурированного текста, выявляет скрытые требования, определяет приоритеты и ограничения проекта. Создает детальные спецификации для других ассистентов.",
      capabilities: [
        "Извлечение ключевой информации из ТЗ",
        "Структурирование требований по приоритетам",
        "Выявление технических ограничений",
        "Анализ целевой аудитории из описания",
        "Определение масштаба проекта",
        "Создание детальных спецификаций"
      ],
      tools: ["spaCy", "NLTK", "Transformers", "Regular Expressions", "Text Analytics"],
      apis: ["OpenAI Text Analysis", "Google Cloud Natural Language", "Azure Text Analytics"],
      workflow: [
        "Парсинг и токенизация технического задания",
        "Извлечение именованных сущностей и ключевых фраз",
        "Классификация требований по категориям",
        "Определение приоритетности задач",
        "Выявление потенциальных конфликтов в требованиях",
        "Создание структурированного документа спецификаций"
      ]
    },
    {
      id: "guidebook",
      title: "Гайдбук-эксперт",
      description: "Анализирует брендбук (цвета, шрифты, нормы) и обеспечивает соответствие стандартам",
      icon: Compass,
      color: "text-neuro-navy",
      detailedDescription: "Специализируется на анализе и интерпретации брендбуков и гайдлайнов. Использует компьютерное зрение для извлечения цветовых палитр, распознает шрифты, анализирует композиционные принципы. Обеспечивает строгое соответствие создаваемого дизайна корпоративным стандартам бренда.",
      capabilities: [
        "Извлечение цветовых палитр из брендбука",
        "Распознавание и идентификация шрифтов",
        "Анализ композиционных принципов",
        "Контроль соответствия брендинговым стандартам",
        "Создание цифровых гайдлайнов",
        "Валидация финального дизайна на соответствие"
      ],
      tools: ["OpenCV", "PIL/Pillow", "ColorThief", "FontForge", "Image Processing"],
      apis: ["Adobe Color API", "Google Fonts API", "MyFonts API", "Brand Guidelines APIs"],
      workflow: [
        "Загрузка и анализ брендбука",
        "Извлечение цветовой палитры с помощью кластеризации",
        "Распознавание и каталогизация используемых шрифтов",
        "Анализ композиционных правил и сеток",
        "Создание цифрового руководства по стилю",
        "Постоянный контроль соответствия на всех этапах"
      ]
    },
    {
      id: "trend",
      title: "Тренд-аналитик",
      description: "Изучает актуальные тренды в дизайне через Behance API и другие платформы",
      icon: BarChart,
      color: "text-neuro-lavender",
      detailedDescription: "Анализирует современные дизайнерские тренды, используя машинное обучение для обработки больших объемов визуального контента. Отслеживает изменения в дизайне через социальные сети, дизайнерские платформы и профессиональные сообщества. Предсказывает будущие тренды на основе анализа данных.",
      capabilities: [
        "Мониторинг трендов на дизайнерских платформах",
        "Анализ популярности цветовых решений",
        "Отслеживание типографических трендов",
        "Предсказание будущих тенденций",
        "Сравнительный анализ по индустриям",
        "Создание трендовых отчетов"
      ],
      tools: ["Beautiful Soup", "Scrapy", "Pandas", "Matplotlib", "Seaborn", "Time Series Analysis"],
      apis: ["Behance API", "Dribbble API", "Instagram Graph API", "Pinterest API", "Awwwards API"],
      workflow: [
        "Сбор данных с дизайнерских платформ",
        "Извлечение визуальных характеристик проектов",
        "Анализ частотности использования элементов",
        "Выявление растущих и угасающих трендов",
        "Сегментация трендов по индустриям",
        "Создание рекомендаций на основе анализа"
      ]
    },
    {
      id: "competitive",
      title: "Конкурентный исследователь",
      description: "Анализирует решения конкурентов с помощью BeautifulSoup, Scrapy и API социальных сетей",
      icon: Search,
      color: "text-neuro-mint",
      detailedDescription: "Проводит глубокий конкурентный анализ, используя веб-скрапинг и API социальных сетей. Собирает и анализирует дизайнерские решения конкурентов, выявляет их сильные и слабые стороны, определяет возможности для дифференциации. Создает детальные конкурентные карты и рекомендации.",
      capabilities: [
        "Автоматический сбор данных о конкурентах",
        "Анализ дизайнерских решений конкурентов",
        "Выявление паттернов в UX/UI решениях",
        "Мониторинг изменений на сайтах конкурентов",
        "Создание конкурентных карт",
        "Поиск возможностей для дифференциации"
      ],
      tools: ["Beautiful Soup", "Scrapy", "Selenium", "Pandas", "NetworkX", "Data Visualization"],
      apis: ["Social Media APIs", "Web Archive APIs", "SimilarWeb API", "Alexa API"],
      workflow: [
        "Идентификация ключевых конкурентов",
        "Сбор скриншотов и контента сайтов",
        "Анализ структуры и навигации",
        "Извлечение визуальных элементов",
        "Сравнительный анализ решений",
        "Создание отчета с рекомендациями"
      ]
    },
    {
      id: "visual",
      title: "Визуальный референсатор",
      description: "Подбирает референсы для проекта через Unsplash API, Freepik API и другие источники",
      icon: MountainSnow,
      color: "text-neuro-coral",
      detailedDescription: "Автоматически подбирает релевантные визуальные референсы, используя компьютерное зрение и семантический поиск. Анализирует требования проекта и находит подходящие изображения, иллюстрации и дизайнерские решения. Организует референсы по категориям и создает мудборды.",
      capabilities: [
        "Семантический поиск изображений",
        "Автоматическая категоризация контента",
        "Создание тематических мудбордов",
        "Анализ цветовой гармонии в изображениях",
        "Подбор изображений по стилю",
        "Фильтрация по техническим параметрам"
      ],
      tools: ["OpenCV", "PIL", "TensorFlow", "CLIP", "Color Analysis", "Image Similarity"],
      apis: ["Unsplash API", "Freepik API", "Shutterstock API", "Getty Images API", "Pexels API"],
      workflow: [
        "Анализ требований к визуальному стилю",
        "Формирование поисковых запросов",
        "Сбор изображений из различных источников",
        "Анализ релевантности и качества",
        "Группировка по визуальным характеристикам",
        "Создание структурированных мудбордов"
      ]
    },
    {
      id: "composition",
      title: "Композиционный аналитик",
      description: "Определяет принципы макета (минимализм, асимметрия) с использованием OpenCV и TensorFlow",
      icon: Layout,
      color: "text-neuro-teal",
      detailedDescription: "Специализируется на анализе композиционных принципов и создании оптимальных макетов. Использует компьютерное зрение для анализа баланса, ритма, пропорций. Определяет лучшие композиционные решения на основе принципов дизайна и психологии восприятия.",
      capabilities: [
        "Анализ композиционного баланса",
        "Определение визуальной иерархии",
        "Расчет оптимальных пропорций",
        "Анализ направляющих линий",
        "Оценка визуального веса элементов",
        "Создание адаптивных сеток"
      ],
      tools: ["OpenCV", "TensorFlow", "NumPy", "Scikit-image", "Geometric Analysis", "Grid Systems"],
      apis: ["Adobe Creative SDK", "Design System APIs", "Layout Analysis APIs"],
      workflow: [
        "Анализ существующих референсов",
        "Определение композиционных принципов",
        "Расчет золотого сечения и модульных сеток",
        "Создание вариантов композии",
        "Тестирование визуальной иерархии",
        "Оптимизация для различных устройств"
      ]
    },
    {
      id: "color",
      title: "Цветовой и шрифтовой ассистент",
      description: "Подбирает цветовые палитры и шрифты через Adobe Color API и Google Fonts API",
      icon: Palette,
      color: "text-neuro-lavender",
      detailedDescription: "Создает гармоничные цветовые схемы и подбирает подходящие шрифтовые пары. Использует теорию цвета, психологию восприятия и машинное обучение для создания оптимальных цветовых решений. Учитывает доступность, читаемость и эмоциональное воздействие.",
      capabilities: [
        "Создание гармоничных цветовых палитр",
        "Подбор шрифтовых пар",
        "Анализ цветовой доступности",
        "Тестирование контрастности",
        "Создание цветовых схем для разных устройств",
        "Анализ психологического воздействия цветов"
      ],
      tools: ["Color Theory Algorithms", "WCAG Guidelines", "Font Pairing Logic", "Accessibility Tools"],
      apis: ["Adobe Color API", "Google Fonts API", "Typekit API", "Color Hunt API", "Coolors API"],
      workflow: [
        "Анализ брендинга и целевой аудитории",
        "Генерация базовых цветовых схем",
        "Проверка контрастности и доступности",
        "Подбор complementary шрифтов",
        "Тестирование читаемости",
        "Создание финальной палитры и типографики"
      ]
    },
    {
      id: "structural",
      title: "Структурный ассистент",
      description: "Извлекает элементы (текстуры, формы) из референсов с помощью OpenCV",
      icon: Layers,
      color: "text-neuro-mint",
      detailedDescription: "Анализирует и извлекает структурные элементы из изображений и дизайнов. Использует компьютерное зрение для распознавания паттернов, текстур, форм и других визуальных элементов. Создает библиотеку дизайн-элементов для использования в проекте.",
      capabilities: [
        "Извлечение текстур и паттернов",
        "Распознавание геометрических форм",
        "Анализ структурных элементов",
        "Создание векторных трассировок",
        "Категоризация визуальных элементов",
        "Оптимизация элементов для веб"
      ],
      tools: ["OpenCV", "Scikit-image", "PIL", "SVG Generation", "Pattern Recognition", "Edge Detection"],
      apis: ["Vector Tracing APIs", "Image Processing APIs", "Pattern Libraries"],
      workflow: [
        "Загрузка и предобработка изображений",
        "Применение фильтров для выделения элементов",
        "Извлечение контуров и форм",
        "Векторизация растровых элементов",
        "Категоризация по типам элементов",
        "Оптимизация и подготовка к использованию"
      ]
    },
    {
      id: "concept",
      title: "Концепт-генератор",
      description: "Создает черновые концепции с помощью ИИ через Hugging Face API и DALL-E API",
      icon: Lightbulb,
      color: "text-neuro-navy",
      detailedDescription: "Генерирует творческие концепции и визуальные идеи, используя передовые AI модели. Создает первичные эскизы, мокапы и концептуальные изображения на основе технического задания. Итерирует идеи и создает множественные варианты для выбора.",
      capabilities: [
        "Генерация концептуальных изображений",
        "Создание множественных вариаций",
        "Итеративная разработка идей",
        "Создание мокапов и эскизов",
        "Визуализация абстрактных концепций",
        "Адаптация стилей под требования"
      ],
      tools: ["Stable Diffusion", "Image Generation Models", "Style Transfer", "Prompt Engineering"],
      apis: ["DALL-E API", "Midjourney API", "Hugging Face API", "Stable Diffusion API", "Runway ML API"],
      workflow: [
        "Анализ технического задания",
        "Создание детальных промптов",
        "Генерация множественных концепций",
        "Фильтрация и отбор лучших вариантов",
        "Итерации и улучшения",
        "Подготовка финальных концептов"
      ]
    }
  ];

  const handleAssistantClick = (assistant) => {
    setSelectedAssistant(assistant);
    setModalOpen(true);
  };

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
            <Card 
              key={neuro.id} 
              className="neuro-card hover:translate-y-[-5px] transition-all duration-300 p-6 cursor-pointer hover:shadow-lg"
              onClick={() => handleAssistantClick(neuro)}
            >
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

        <NeuroAssistantModal 
          assistant={selectedAssistant}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
};

export default NeuroTeam;

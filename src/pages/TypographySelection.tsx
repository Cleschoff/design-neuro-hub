
import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Type, Loader2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { useToast } from "@/hooks/use-toast";

const TypographySelection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    projectDescription: "",
    targetAudience: "",
    projectType: "",
    style: "",
    additionalRequirements: ""
  });
  
  const { t } = useLocale();
  const { toast } = useToast();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Имитация обработки запроса на бэкенде
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setShowResults(true);
      toast({
        title: "Успешно!",
        description: "Шрифтовые пары подобраны на основе ваших требований.",
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при обработке запроса. Попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const mockResults = [
    {
      id: 1,
      primary: "Playfair Display",
      secondary: "Source Sans Pro",
      description: "Элегантное сочетание для премиальных брендов",
      preview: "Заголовок / Основной текст"
    },
    {
      id: 2,
      primary: "Montserrat",
      secondary: "Open Sans",
      description: "Современное и универсальное решение",
      preview: "Заголовок / Основной текст"
    },
    {
      id: 3,
      primary: "Roboto Slab",
      secondary: "Lato",
      description: "Технологичный стиль с хорошей читаемостью",
      preview: "Заголовок / Основной текст"
    }
  ];

  const handleNewRequest = () => {
    setShowResults(false);
    setFormData({
      projectDescription: "",
      targetAudience: "",
      projectType: "",
      style: "",
      additionalRequirements: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="max-w-4xl mx-auto space-y-8">
            {!showResults ? (
              <>
                <div className="flex items-center gap-4">
                  <Link to="/dashboard/design-tools">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ArrowLeft size={16} />
                      {t('typographySelection.buttons.back')}
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full p-3 bg-neuro-mint/10">
                    <Type className="h-8 w-8 text-neuro-mint" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">{t('typographySelection.title')}</h1>
                    <p className="text-muted-foreground">
                      {t('typographySelection.subtitle')}
                    </p>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Описание задачи</CardTitle>
                    <CardDescription>
                      Чем больше информации вы предоставите, тем точнее будет подбор шрифтов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectDescription">
                          {t('typographySelection.form.projectDescription.label')}
                        </Label>
                        <Textarea
                          id="projectDescription"
                          placeholder={t('typographySelection.form.projectDescription.placeholder')}
                          value={formData.projectDescription}
                          onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                          className="min-h-[100px]"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="targetAudience">
                            {t('typographySelection.form.targetAudience.label')}
                          </Label>
                          <Textarea
                            id="targetAudience"
                            placeholder={t('typographySelection.form.targetAudience.placeholder')}
                            value={formData.targetAudience}
                            onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectType">
                            {t('typographySelection.form.projectType.label')}
                          </Label>
                          <Select 
                            value={formData.projectType} 
                            onValueChange={(value) => handleInputChange('projectType', value)}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите тип проекта" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="website">{t('typographySelection.form.projectType.options.website')}</SelectItem>
                              <SelectItem value="mobile">{t('typographySelection.form.projectType.options.mobile')}</SelectItem>
                              <SelectItem value="print">{t('typographySelection.form.projectType.options.print')}</SelectItem>
                              <SelectItem value="branding">{t('typographySelection.form.projectType.options.branding')}</SelectItem>
                              <SelectItem value="presentation">{t('typographySelection.form.projectType.options.presentation')}</SelectItem>
                              <SelectItem value="other">{t('typographySelection.form.projectType.options.other')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="style">
                          {t('typographySelection.form.style.label')}
                        </Label>
                        <Input
                          id="style"
                          placeholder={t('typographySelection.form.style.placeholder')}
                          value={formData.style}
                          onChange={(e) => handleInputChange('style', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalRequirements">
                          {t('typographySelection.form.additionalRequirements.label')}
                        </Label>
                        <Textarea
                          id="additionalRequirements"
                          placeholder={t('typographySelection.form.additionalRequirements.placeholder')}
                          value={formData.additionalRequirements}
                          onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full gap-2"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            {t('typographySelection.buttons.processing')}
                          </>
                        ) : (
                          t('typographySelection.buttons.submit')
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">{t('typographySelection.results.title')}</h1>
                    <p className="text-muted-foreground">
                      {t('typographySelection.results.subtitle')}
                    </p>
                  </div>
                  <Button onClick={handleNewRequest} variant="outline">
                    {t('typographySelection.results.newRequest')}
                  </Button>
                </div>

                <div className="grid gap-6">
                  {mockResults.map((result) => (
                    <Card key={result.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">
                              {result.primary} + {result.secondary}
                            </h3>
                            <p className="text-muted-foreground">{result.description}</p>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-6 rounded-lg">
                          <div className="space-y-2">
                            <div className="text-2xl font-bold" style={{ fontFamily: result.primary }}>
                              Заголовок проекта
                            </div>
                            <div className="text-base" style={{ fontFamily: result.secondary }}>
                              Основной текст будет выглядеть именно так. Этот шрифт обеспечивает отличную читаемость и гармонично сочетается с заголовочным шрифтом.
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TypographySelection;

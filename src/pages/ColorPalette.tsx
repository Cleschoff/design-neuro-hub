
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
import { ArrowLeft, Palette, Loader2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { useToast } from "@/hooks/use-toast";

const ColorPalette = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    projectDescription: "",
    targetAudience: "",
    projectType: "",
    mood: "",
    colorPreferences: "",
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
        description: "Цветовые палитры подобраны на основе ваших требований.",
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
      name: "Современная минимализм",
      description: "Чистая и современная палитра для tech-проектов",
      colors: {
        primary: "#2563EB",
        secondary: "#64748B",
        accent: "#F59E0B",
        background: "#F8FAFC",
        text: "#1E293B"
      }
    },
    {
      id: 2,
      name: "Природная гармония",
      description: "Вдохновленная природой палитра для eco-friendly брендов",
      colors: {
        primary: "#059669",
        secondary: "#84CC16",
        accent: "#F97316",
        background: "#F0FDF4",
        text: "#14532D"
      }
    },
    {
      id: 3,
      name: "Элегантный контраст",
      description: "Изысканная палитра для премиальных продуктов",
      colors: {
        primary: "#7C3AED",
        secondary: "#EC4899",
        accent: "#F59E0B",
        background: "#FAFAF9",
        text: "#44403C"
      }
    }
  ];

  const handleNewRequest = () => {
    setShowResults(false);
    setFormData({
      projectDescription: "",
      targetAudience: "",
      projectType: "",
      mood: "",
      colorPreferences: "",
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
                      {t('colorPalette.buttons.back')}
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full p-3 bg-neuro-coral/10">
                    <Palette className="h-8 w-8 text-neuro-coral" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">{t('colorPalette.title')}</h1>
                    <p className="text-muted-foreground">
                      {t('colorPalette.subtitle')}
                    </p>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Описание задачи</CardTitle>
                    <CardDescription>
                      Чем больше информации вы предоставите, тем точнее будет подбор цветовой палитры
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectDescription">
                          {t('colorPalette.form.projectDescription.label')}
                        </Label>
                        <Textarea
                          id="projectDescription"
                          placeholder={t('colorPalette.form.projectDescription.placeholder')}
                          value={formData.projectDescription}
                          onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                          className="min-h-[100px]"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="targetAudience">
                            {t('colorPalette.form.targetAudience.label')}
                          </Label>
                          <Textarea
                            id="targetAudience"
                            placeholder={t('colorPalette.form.targetAudience.placeholder')}
                            value={formData.targetAudience}
                            onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectType">
                            {t('colorPalette.form.projectType.label')}
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
                              <SelectItem value="website">{t('colorPalette.form.projectType.options.website')}</SelectItem>
                              <SelectItem value="mobile">{t('colorPalette.form.projectType.options.mobile')}</SelectItem>
                              <SelectItem value="print">{t('colorPalette.form.projectType.options.print')}</SelectItem>
                              <SelectItem value="branding">{t('colorPalette.form.projectType.options.branding')}</SelectItem>
                              <SelectItem value="presentation">{t('colorPalette.form.projectType.options.presentation')}</SelectItem>
                              <SelectItem value="other">{t('colorPalette.form.projectType.options.other')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="mood">
                            {t('colorPalette.form.mood.label')}
                          </Label>
                          <Input
                            id="mood"
                            placeholder={t('colorPalette.form.mood.placeholder')}
                            value={formData.mood}
                            onChange={(e) => handleInputChange('mood', e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="colorPreferences">
                            {t('colorPalette.form.colorPreferences.label')}
                          </Label>
                          <Input
                            id="colorPreferences"
                            placeholder={t('colorPalette.form.colorPreferences.placeholder')}
                            value={formData.colorPreferences}
                            onChange={(e) => handleInputChange('colorPreferences', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalRequirements">
                          {t('colorPalette.form.additionalRequirements.label')}
                        </Label>
                        <Textarea
                          id="additionalRequirements"
                          placeholder={t('colorPalette.form.additionalRequirements.placeholder')}
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
                            {t('colorPalette.buttons.processing')}
                          </>
                        ) : (
                          t('colorPalette.buttons.submit')
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
                    <h1 className="text-3xl font-bold">{t('colorPalette.results.title')}</h1>
                    <p className="text-muted-foreground">
                      {t('colorPalette.results.subtitle')}
                    </p>
                  </div>
                  <Button onClick={handleNewRequest} variant="outline">
                    {t('colorPalette.results.newRequest')}
                  </Button>
                </div>

                <div className="grid gap-6">
                  {mockResults.map((result) => (
                    <Card key={result.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{result.name}</h3>
                            <p className="text-muted-foreground">{result.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {Object.entries(result.colors).map(([colorType, colorValue]) => (
                            <div key={colorType} className="text-center">
                              <div 
                                className="w-full h-16 rounded-lg mb-2 border border-gray-200"
                                style={{ backgroundColor: colorValue }}
                              ></div>
                              <div className="text-sm font-medium capitalize">
                                {t(`colorPalette.results.${colorType}`)}
                              </div>
                              <div className="text-xs text-muted-foreground font-mono">
                                {colorValue}
                              </div>
                            </div>
                          ))}
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

export default ColorPalette;

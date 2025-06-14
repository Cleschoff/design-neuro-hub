
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { useToast } from "@/hooks/use-toast";

interface ColorPaletteFormProps {
  onResults: () => void;
}

interface FormData {
  projectDescription: string;
  targetAudience: string;
  projectType: string;
  mood: string;
  colorPreferences: string;
  additionalRequirements: string;
}

const ColorPaletteForm = ({ onResults }: ColorPaletteFormProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectDescription: "",
    targetAudience: "",
    projectType: "",
    mood: "",
    colorPreferences: "",
    additionalRequirements: ""
  });
  
  const { t } = useLocale();
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
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
      
      onResults();
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

  return (
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
  );
};

export default ColorPaletteForm;


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/context/LocaleContext";
import ColorSwatch from "./ColorSwatch";

interface ColorPaletteResult {
  id: number;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
}

interface ColorPaletteResultsProps {
  onNewRequest: () => void;
}

const ColorPaletteResults = ({ onNewRequest }: ColorPaletteResultsProps) => {
  const { t } = useLocale();

  const mockResults: ColorPaletteResult[] = [
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

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{t('colorPalette.results.title')}</h1>
          <p className="text-muted-foreground">
            {t('colorPalette.results.subtitle')}
          </p>
        </div>
        <Button onClick={onNewRequest} variant="outline">
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
                  <ColorSwatch
                    key={colorType}
                    colorType={colorType}
                    colorValue={colorValue}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ColorPaletteResults;

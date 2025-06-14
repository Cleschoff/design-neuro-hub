
import { useLocale } from "@/context/LocaleContext";

interface ColorSwatchProps {
  colorType: string;
  colorValue: string;
}

const ColorSwatch = ({ colorType, colorValue }: ColorSwatchProps) => {
  const { t } = useLocale();

  return (
    <div className="text-center">
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
  );
};

export default ColorSwatch;

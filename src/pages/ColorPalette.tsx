
import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import ColorPaletteForm from "@/components/color-palette/ColorPaletteForm";
import ColorPaletteResults from "@/components/color-palette/ColorPaletteResults";

const ColorPalette = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showResults, setShowResults] = useState(false);
  
  const { t } = useLocale();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleNewRequest = () => {
    setShowResults(false);
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

                <ColorPaletteForm onResults={handleShowResults} />
              </>
            ) : (
              <ColorPaletteResults onNewRequest={handleNewRequest} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ColorPalette;

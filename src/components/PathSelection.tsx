
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, WrenchIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";

const PathSelection = () => {
  const { t } = useLocale();

  return (
    <section id="path-selection" className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('pathSelection.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pathSelection.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Option 1: Turnkey Design Project */}
          <Card className="border-2 hover:border-neuro-teal/70 transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-neuro-teal/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-neuro-teal" />
              </div>
              <CardTitle className="text-2xl">{t('pathSelection.fullProject.title')}</CardTitle>
              <CardDescription>
                {t('pathSelection.fullProject.question')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t('pathSelection.fullProject.description')}
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>{t('pathSelection.fullProject.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>{t('pathSelection.fullProject.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>{t('pathSelection.fullProject.feature3')}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Link to="/dashboard/start-project" className="w-full">
                <Button className="w-full gap-2">
                  {t('pathSelection.fullProject.button')}
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          {/* Option 2: Individual Design Tools */}
          <Card className="border-2 hover:border-neuro-lavender/70 transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-neuro-lavender/10 flex items-center justify-center mb-4">
                <WrenchIcon className="h-6 w-6 text-neuro-lavender" />
              </div>
              <CardTitle className="text-2xl">{t('pathSelection.individualTools.title')}</CardTitle>
              <CardDescription>
                {t('pathSelection.individualTools.question')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t('pathSelection.individualTools.description')}
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>{t('pathSelection.individualTools.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>{t('pathSelection.individualTools.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>{t('pathSelection.individualTools.feature3')}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Link to="/dashboard/design-tools" className="w-full">
                <Button variant="outline" className="w-full gap-2">
                  {t('pathSelection.individualTools.button')}
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PathSelection;

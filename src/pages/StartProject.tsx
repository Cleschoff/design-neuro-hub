
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { CustomerBriefForm } from "@/components/CustomerBriefForm";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Sparkles, FileText, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const StartProject = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [briefCompleted, setBriefCompleted] = useState(false);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const { t, locale, setLocale } = useLocale();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleBriefSubmit = () => {
    setBriefCompleted(true);
    setCurrentStep(2);
  };

  const toggleWorkflow = () => {
    setShowWorkflow(!showWorkflow);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FileText size={28} className="text-neuro-teal" />
                <h1 className="text-3xl font-bold">Turnkey Design Project</h1>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    {locale === "ru" ? "Русский" : "English"}
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLocale("ru")}>
                    Русский
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocale("en")}>
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 rounded-lg border border-blue-100 mb-8">
              <div className="flex items-start gap-4">
                <Sparkles className="text-neuro-teal mt-1 h-6 w-6 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">Full Design Project From Scratch</h2>
                  <p className="text-muted-foreground">
                    {t('customerBrief.description')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step indicators */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="text-sm mt-1">{t('customerBrief.title')}</span>
              </div>
              <div className={`h-1 flex-1 mx-2 ${currentStep >= 2 ? 'bg-neuro-teal' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="text-sm mt-1">Review</span>
              </div>
              <div className={`h-1 flex-1 mx-2 ${currentStep >= 3 ? 'bg-neuro-teal' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="text-sm mt-1">{t('customerBrief.implementation')}</span>
              </div>
            </div>
            
            {/* Process workflow section */}
            <div className="mb-8">
              <button 
                onClick={toggleWorkflow}
                className="flex items-center gap-2 text-neuro-teal hover:text-neuro-teal/80 transition-colors w-full"
              >
                <h3 className="text-lg font-medium">{t('customerBrief.workflowAlgorithm.title')}</h3>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform ${showWorkflow ? 'rotate-180' : ''}`}
                />
              </button>
              
              {showWorkflow && (
                <div className="mt-4 border rounded-lg p-4 space-y-6">
                  {/* Step 1 */}
                  <div className="space-y-2">
                    <h4 className="font-medium">{t('customerBrief.workflowAlgorithm.step1.title')}</h4>
                    <p className="text-sm text-gray-600">{t('customerBrief.workflowAlgorithm.step1.description')}</p>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="space-y-2">
                    <h4 className="font-medium">{t('customerBrief.workflowAlgorithm.step2.title')}</h4>
                    <p className="text-sm text-gray-600">{t('customerBrief.workflowAlgorithm.step2.description')}</p>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="space-y-2">
                    <h4 className="font-medium">{t('customerBrief.workflowAlgorithm.step3.title')}</h4>
                    <p className="text-sm text-gray-600">{t('customerBrief.workflowAlgorithm.step3.description')}</p>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="space-y-2">
                    <h4 className="font-medium">{t('customerBrief.workflowAlgorithm.step4.title')}</h4>
                    <p className="text-sm text-gray-600">{t('customerBrief.workflowAlgorithm.step4.description')}</p>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="space-y-2">
                    <h4 className="font-medium">{t('customerBrief.workflowAlgorithm.step5.title')}</h4>
                    <p className="text-sm text-gray-600">{t('customerBrief.workflowAlgorithm.step5.description')}</p>
                  </div>
                  
                  {/* Step 6 */}
                  <div className="space-y-2">
                    <h4 className="font-medium">{t('customerBrief.workflowAlgorithm.step6.title')}</h4>
                    <p className="text-sm text-gray-600">{t('customerBrief.workflowAlgorithm.step6.description')}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Content based on step */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('customerBrief.title')}</CardTitle>
                  <CardDescription>
                    {t('customerBrief.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CustomerBriefForm onSubmitComplete={handleBriefSubmit} />
                </CardContent>
              </Card>
            )}
            
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Project Review Checkpoint</CardTitle>
                  <CardDescription>
                    Review your brief and confirm details before our AI team begins implementation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-green-800">{t('customerBrief.formCompleted')}</h3>
                      <p className="text-green-600 text-sm">{t('customerBrief.formCompletedDesc')}</p>
                    </div>
                  </div>
                  
                  {/* Brief summary would go here */}
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">{t('customerBrief.briefSummary')}</h3>
                    <p className="text-muted-foreground text-sm">
                      This would display a summary of the submitted brief.
                    </p>
                  </div>
                  
                  <div className="flex justify-between">
                    <button 
                      onClick={() => setCurrentStep(1)} 
                      className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {t('customerBrief.editBrief')}
                    </button>
                    <button 
                      onClick={() => setCurrentStep(3)} 
                      className="px-4 py-2 bg-neuro-teal text-white rounded-md text-sm hover:bg-neuro-teal/90 flex items-center gap-2"
                    >
                      {t('customerBrief.approveAndContinue')}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('customerBrief.implementation')}</CardTitle>
                  <CardDescription>
                    Our AI team is now working on your design project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-neuro-lavender/20 flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-neuro-lavender" />
                    </div>
                    <h3 className="text-xl font-medium">{t('customerBrief.implementationTitle')}</h3>
                    <p className="text-muted-foreground">
                      {t('customerBrief.implementationDesc')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StartProject;

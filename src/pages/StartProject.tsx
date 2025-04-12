
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
import { Sparkles, FileText, CheckCircle } from "lucide-react";

const StartProject = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [briefCompleted, setBriefCompleted] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleBriefSubmit = () => {
    setBriefCompleted(true);
    setCurrentStep(2);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText size={28} className="text-neuro-teal" />
              <h1 className="text-3xl font-bold">Turnkey Design Project</h1>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 rounded-lg border border-blue-100 mb-8">
              <div className="flex items-start gap-4">
                <Sparkles className="text-neuro-teal mt-1 h-6 w-6 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">Full Design Project From Scratch</h2>
                  <p className="text-muted-foreground">
                    Complete the customer brief below to help our AI understand your vision. The more details you provide, 
                    the better we can deliver exactly what you need.
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
                <span className="text-sm mt-1">Brief</span>
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
                <span className="text-sm mt-1">Implementation</span>
              </div>
            </div>
            
            {/* Content based on step */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Complete Project Brief</CardTitle>
                  <CardDescription>
                    Tell us about your project to help our AI team understand your vision and requirements.
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
                      <h3 className="font-medium text-green-800">Brief Completed Successfully</h3>
                      <p className="text-green-600 text-sm">Your project brief has been submitted and is ready for review.</p>
                    </div>
                  </div>
                  
                  {/* Brief summary would go here */}
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Brief Summary</h3>
                    <p className="text-muted-foreground text-sm">
                      This would display a summary of the submitted brief.
                    </p>
                  </div>
                  
                  <div className="flex justify-between">
                    <button 
                      onClick={() => setCurrentStep(1)} 
                      className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Edit Brief
                    </button>
                    <button 
                      onClick={() => setCurrentStep(3)} 
                      className="px-4 py-2 bg-neuro-teal text-white rounded-md text-sm hover:bg-neuro-teal/90"
                    >
                      Approve and Continue
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Project Implementation</CardTitle>
                  <CardDescription>
                    Our AI team is now working on your design project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-neuro-lavender/20 flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-neuro-lavender" />
                    </div>
                    <h3 className="text-xl font-medium">Your Project is Being Created</h3>
                    <p className="text-muted-foreground">
                      Our AI design team is now working on your project based on your brief. 
                      You'll receive updates as we progress.
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

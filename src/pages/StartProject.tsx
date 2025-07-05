
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import ProjectHeader from "@/components/start-project/ProjectHeader";
import WelcomeMessage from "@/components/start-project/WelcomeMessage";
import ProjectProgress from "@/components/start-project/ProjectProgress";
import BriefSection from "@/components/start-project/BriefSection";
import WorkflowSection from "@/components/start-project/WorkflowSection";
import ProjectCompletedSection from "@/components/start-project/ProjectCompletedSection";

const StartProject = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleBriefSubmit = () => {
    setCurrentStep(2);
  };

  const handleContinueToResults = () => {
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="max-w-4xl mx-auto space-y-6">
            <ProjectHeader />
            <WelcomeMessage />
            <ProjectProgress currentStep={currentStep} />
            
            {currentStep === 1 && (
              <BriefSection onSubmitComplete={handleBriefSubmit} />
            )}
            
            {currentStep === 2 && (
              <WorkflowSection 
                currentStep={currentStep} 
                onContinue={handleContinueToResults} 
              />
            )}
            
            {currentStep === 3 && (
              <ProjectCompletedSection />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StartProject;

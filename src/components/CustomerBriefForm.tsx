
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

import { Form } from "@/components/ui/form";
import { customerBriefSchema, CustomerBriefFormData, UserExperienceLevel } from "@/types/customer-brief";

// Form Section Components
import ProjectBasicsSection from "@/components/customer-brief/ProjectBasicsSection";
import WorkScopeSection from "@/components/customer-brief/WorkScopeSection";
import ProjectObjectiveSection from "@/components/customer-brief/ProjectObjectiveSection";
import ProductDetailsSection from "@/components/customer-brief/ProductDetailsSection";
import TargetAudienceSection from "@/components/customer-brief/TargetAudienceSection";
import DesignPreferencesSection from "@/components/customer-brief/DesignPreferencesSection";
import CompetitionSection from "@/components/customer-brief/CompetitionSection";
import TimelineSection from "@/components/customer-brief/TimelineSection";
import FormProgress from "@/components/customer-brief/FormProgress";
import FormNavigation from "@/components/customer-brief/FormNavigation";

interface CustomerBriefFormProps {
  onSubmitComplete?: () => void;
  userType?: UserExperienceLevel;
}

export function CustomerBriefForm({ 
  onSubmitComplete, 
  userType = "beginner" 
}: CustomerBriefFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 7;

  const form = useForm<CustomerBriefFormData>({
    resolver: zodResolver(customerBriefSchema),
    defaultValues: {
      projectName: "",
      projectType: "",
      workScope: "",
      deliverables: "",
      technicalRequirements: "",
      projectObjective: "",
      desiredOutcome: "",
      successMetrics: "",
      productDetails: "",
      valueProposition: "",
      keyBenefits: "",
      targetAudience: "",
      audienceNeeds: "",
      audiencePlatforms: "",
      brandPersonality: "",
      visualPreferences: "",
      moodAndTone: "",
      colorPreferences: "",
      competitors: "",
      marketDifferentiation: "",
      timeline: "",
      additionalNotes: "",
    },
  });

  function onSubmit(values: CustomerBriefFormData) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Project brief submitted",
        description: "Our neuro team will start working on your project!",
      });
      setIsSubmitting(false);
      if (onSubmitComplete) {
        onSubmitComplete();
      }
    }, 1500);
  }

  const nextSection = () => {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormProgress currentSection={currentSection} totalSections={totalSections} />

        {currentSection === 1 && <ProjectBasicsSection form={form} />}
        {currentSection === 2 && <WorkScopeSection form={form} userType={userType} />}
        {currentSection === 3 && <ProjectObjectiveSection form={form} userType={userType} />}
        {currentSection === 4 && <ProductDetailsSection form={form} />}
        {currentSection === 5 && <TargetAudienceSection form={form} />}
        {currentSection === 6 && <DesignPreferencesSection form={form} />}
        {currentSection === 7 && (
          <>
            <CompetitionSection form={form} />
            <TimelineSection form={form} />
          </>
        )}
        
        <FormNavigation 
          currentSection={currentSection}
          totalSections={totalSections}
          isSubmitting={isSubmitting}
          onPrevious={prevSection}
          onNext={nextSection}
        />
      </form>
    </Form>
  );
}


import React from "react";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";

interface FormNavigationProps {
  currentSection: number;
  totalSections: number;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  currentSection,
  totalSections,
  isSubmitting,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex justify-between">
      <Button 
        type="button" 
        variant="outline" 
        onClick={onPrevious}
        disabled={currentSection === 1}
      >
        Previous
      </Button>
      
      {currentSection < totalSections ? (
        <Button type="button" onClick={onNext}>
          Next
        </Button>
      ) : (
        <Button 
          type="submit" 
          className="bg-neuro-teal hover:bg-neuro-teal/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              <ThumbsUp className="mr-2 h-4 w-4" />
              Submit Brief
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;

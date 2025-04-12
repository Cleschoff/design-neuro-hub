
import React from "react";

interface FormProgressProps {
  currentSection: number;
  totalSections: number;
}

const FormProgress: React.FC<FormProgressProps> = ({ currentSection, totalSections }) => {
  const progress = (currentSection / totalSections) * 100;

  return (
    <div className="space-y-2">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-neuro-teal h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-muted-foreground">
        Section {currentSection} of {totalSections}
      </p>
    </div>
  );
};

export default FormProgress;

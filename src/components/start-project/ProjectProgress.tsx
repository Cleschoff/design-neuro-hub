
import React from "react";

interface ProjectProgressProps {
  currentStep: number;
}

const ProjectProgress: React.FC<ProjectProgressProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Бриф проекта" },
    { number: 2, label: "Анализ ТЗ" },
    { number: 3, label: "Исследование" },
    { number: 4, label: "Дизайн" },
    { number: 5, label: "Финализация" }
  ];

  return (
    <div className="flex items-center justify-between mb-8 p-6 bg-card rounded-lg border">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= step.number ? 'bg-neuro-teal text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {step.number}
            </div>
            <span className="text-sm mt-2 font-medium">{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={`h-1 flex-1 mx-4 ${
              currentStep >= step.number + 1 ? 'bg-neuro-teal' : 'bg-gray-200'
            }`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectProgress;

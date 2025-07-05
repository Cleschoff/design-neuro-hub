
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { CustomerBriefForm } from "@/components/CustomerBriefForm";

interface BriefSectionProps {
  onSubmitComplete: () => void;
}

const BriefSection: React.FC<BriefSectionProps> = ({ onSubmitComplete }) => {
  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-gradient-to-r from-neuro-teal/5 to-neuro-lavender/5">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-neuro-teal" />
          <div>
            <CardTitle className="text-2xl">Бриф дизайн-проекта</CardTitle>
            <CardDescription className="text-base">
              Расскажите подробно о вашем проекте, чтобы нейро-команда могла создать идеальный дизайн
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <CustomerBriefForm onSubmitComplete={onSubmitComplete} />
      </CardContent>
    </Card>
  );
};

export default BriefSection;

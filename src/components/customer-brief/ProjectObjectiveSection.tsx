
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData, UserExperienceLevel } from "@/types/customer-brief";
import { useLocale } from "@/context/LocaleContext";

interface ProjectObjectiveSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
  userType?: UserExperienceLevel;
}

const ProjectObjectiveSection: React.FC<ProjectObjectiveSectionProps> = ({ form, userType = "beginner" }) => {
  const { t } = useLocale();
  
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-neuro-mint" />
          <CardTitle className="text-lg">{t('customerBrief.sections.projectObjective')}</CardTitle>
        </div>
        <CardDescription>
          {t('customerBrief.sections.projectObjectiveDesc')}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="projectObjective"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.projectPurpose')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.projectPurposePlaceholder')}
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {userType === "beginner" 
                  ? t('customerBrief.fields.projectPurposeBeginnerDesc')
                  : t('customerBrief.fields.projectPurposeProDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="desiredOutcome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.desiredOutcome')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.desiredOutcomePlaceholder')}
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.desiredOutcomeDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {userType === "designer" && (
          <FormField
            control={form.control}
            name="successMetrics"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('customerBrief.fields.successMetrics')}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t('customerBrief.fields.successMetricsPlaceholder')}
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  {t('customerBrief.fields.successMetricsDesc')}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectObjectiveSection;

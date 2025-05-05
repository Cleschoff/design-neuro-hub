
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData, UserExperienceLevel } from "@/types/customer-brief";
import { useLocale } from "@/context/LocaleContext";

interface WorkScopeSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
  userType?: UserExperienceLevel;
}

const WorkScopeSection: React.FC<WorkScopeSectionProps> = ({ form, userType = "beginner" }) => {
  const { t } = useLocale();

  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-neuro-coral" />
          <CardTitle className="text-lg">{t('customerBrief.sections.workScope')}</CardTitle>
        </div>
        <CardDescription>
          {userType === "beginner" 
            ? t('customerBrief.sections.workScopeDesc')
            : t('customerBrief.sections.workScopeProDesc')}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="workScope"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.workScope')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.workScopePlaceholder')}
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.workScopeDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="deliverables"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.deliverables')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.deliverablesPlaceholder')}
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.deliverablesDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {userType === "designer" && (
          <FormField
            control={form.control}
            name="technicalRequirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('customerBrief.fields.technicalRequirements')}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t('customerBrief.fields.technicalRequirementsPlaceholder')}
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  {t('customerBrief.fields.technicalRequirementsDesc')}
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

export default WorkScopeSection;

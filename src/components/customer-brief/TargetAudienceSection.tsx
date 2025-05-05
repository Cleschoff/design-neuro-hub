
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData } from "@/types/customer-brief";
import { useLocale } from "@/context/LocaleContext";

interface TargetAudienceSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
}

const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ form }) => {
  const { t } = useLocale();
  
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-neuro-teal" />
          <CardTitle className="text-lg">{t('customerBrief.sections.targetAudience')}</CardTitle>
        </div>
        <CardDescription>
          {t('customerBrief.sections.targetAudienceDesc')}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="targetAudience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.audienceDemographics')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.audienceDemographicsPlaceholder')}
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.audienceDemographicsDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="audienceNeeds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.audienceNeeds')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.audienceNeedsPlaceholder')}
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.audienceNeedsDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="audiencePlatforms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.audiencePlatforms')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.audiencePlatformsPlaceholder')}
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.audiencePlatformsDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default TargetAudienceSection;

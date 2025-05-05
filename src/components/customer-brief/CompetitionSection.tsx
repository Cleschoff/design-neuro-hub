
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData } from "@/types/customer-brief";
import { useLocale } from "@/context/LocaleContext";

interface CompetitionSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
}

const CompetitionSection: React.FC<CompetitionSectionProps> = ({ form }) => {
  const { t } = useLocale();
  
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-neuro-mint" />
          <CardTitle className="text-lg">{t('customerBrief.sections.competition')}</CardTitle>
        </div>
        <CardDescription>
          {t('customerBrief.sections.competitionDesc')}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="competitors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.mainCompetitors')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.mainCompetitorsPlaceholder')}
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.mainCompetitorsDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="marketDifferentiation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.marketPosition')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.marketPositionPlaceholder')}
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default CompetitionSection;

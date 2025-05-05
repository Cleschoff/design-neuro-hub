
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData } from "@/types/customer-brief";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocale } from "@/context/LocaleContext";

interface TimelineSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ form }) => {
  const { t } = useLocale();
  
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-neuro-lavender" />
          <CardTitle className="text-lg">{t('customerBrief.sections.timelineTitle')}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.timeline')}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t('customerBrief.fields.selectTimeline')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="urgent">{t('customerBrief.fields.urgent')}</SelectItem>
                  <SelectItem value="standard">{t('customerBrief.fields.standard')}</SelectItem>
                  <SelectItem value="relaxed">{t('customerBrief.fields.relaxed')}</SelectItem>
                  <SelectItem value="ongoing">{t('customerBrief.fields.ongoing')}</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="additionalNotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.additionalNotes')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.additionalNotesPlaceholder')}
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

export default TimelineSection;

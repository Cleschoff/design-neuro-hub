
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData } from "@/types/customer-brief";
import { useLocale } from "@/context/LocaleContext";

interface ProjectBasicsSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
}

const ProjectBasicsSection: React.FC<ProjectBasicsSectionProps> = ({ form }) => {
  const { t } = useLocale();
  
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-neuro-teal" />
          <CardTitle className="text-lg">{t('customerBrief.sections.projectBasics')}</CardTitle>
        </div>
        <CardDescription>
          {t('customerBrief.sections.projectBasicsDesc')}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('customerBrief.fields.projectName')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('customerBrief.fields.projectNamePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('customerBrief.fields.projectType')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('customerBrief.fields.selectProjectType')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="banners">{t('customerBrief.projectTypes.banners')}</SelectItem>
                    <SelectItem value="branding">{t('customerBrief.projectTypes.branding')}</SelectItem>
                    <SelectItem value="website">{t('customerBrief.projectTypes.website')}</SelectItem>
                    <SelectItem value="ui">{t('customerBrief.projectTypes.ui')}</SelectItem>
                    <SelectItem value="print">{t('customerBrief.projectTypes.print')}</SelectItem>
                    <SelectItem value="marketing">{t('customerBrief.projectTypes.marketing')}</SelectItem>
                    <SelectItem value="social">{t('customerBrief.projectTypes.social')}</SelectItem>
                    <SelectItem value="other">{t('customerBrief.projectTypes.other')}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectBasicsSection;

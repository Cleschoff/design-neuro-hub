
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData } from "@/types/customer-brief";
import { useLocale } from "@/context/LocaleContext";

interface ProductDetailsSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({ form }) => {
  const { t } = useLocale();
  
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-neuro-lavender" />
          <CardTitle className="text-lg">{t('customerBrief.sections.productDetails')}</CardTitle>
        </div>
        <CardDescription>
          {t('customerBrief.sections.productDetailsDesc')}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="productDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.productInfo')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.productInfoPlaceholder')}
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.productInfoDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="valueProposition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.valueProposition')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.valuePropositionPlaceholder')}
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.valuePropositionDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="keyBenefits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('customerBrief.fields.keyBenefits')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('customerBrief.fields.keyBenefitsPlaceholder')}
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('customerBrief.fields.keyBenefitsDesc')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default ProductDetailsSection;

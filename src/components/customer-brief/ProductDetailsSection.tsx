
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData } from "@/types/customer-brief";

interface ProductDetailsSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({ form }) => {
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-neuro-lavender" />
          <CardTitle className="text-lg">3. Product Details</CardTitle>
        </div>
        <CardDescription>
          Tell us about the product or service being featured
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="productDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product/Service Information</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What is the main service/product you need to convey? What does it do?"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Provide a clear description of what you're promoting.
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
              <FormLabel>Unique Value Proposition</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What makes your product/service unique? Why should customers choose you?"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Explain what sets you apart from alternatives.
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
              <FormLabel>Key Benefits to Highlight</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What are the most important benefits to showcase visually? (optional)"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                List the key selling points you want emphasized in the design.
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

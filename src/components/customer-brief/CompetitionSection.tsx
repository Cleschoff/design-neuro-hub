
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData } from "@/types/customer-brief";

interface CompetitionSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
}

const CompetitionSection: React.FC<CompetitionSectionProps> = ({ form }) => {
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-neuro-mint" />
          <CardTitle className="text-lg">6. Competitors</CardTitle>
        </div>
        <CardDescription>
          Help us understand your market position
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="competitors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main Competitors</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Who are your main competitors? Any examples of their designs worth noting? (optional)"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                This helps us understand your market positioning.
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
              <FormLabel>Desired Market Position</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How do you want to position yourself relative to competitors? (leader, innovator, accessible alternative, etc.) (optional)"
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

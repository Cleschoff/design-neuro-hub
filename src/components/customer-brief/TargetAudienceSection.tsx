
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData } from "@/types/customer-brief";

interface TargetAudienceSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
}

const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ form }) => {
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-neuro-teal" />
          <CardTitle className="text-lg">4. Target Audience</CardTitle>
        </div>
        <CardDescription>
          Help us understand who you're trying to reach
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="targetAudience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Audience Demographics</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Who is your primary audience? Include demographics (age, gender, location, income level, etc.)"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                The more we know about your audience, the better we can tailor the design.
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
              <FormLabel>Audience Needs and Pain Points</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What problems or needs does your audience have that your product/service addresses?"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Understanding their challenges helps create more effective designs.
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
              <FormLabel>Audience Platforms and Behavior</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Where does your audience spend time online? How do they typically engage with content? (optional)"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                This helps us design with the right platform context in mind.
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

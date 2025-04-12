
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData, UserExperienceLevel } from "@/types/customer-brief";

interface ProjectObjectiveSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
  userType?: UserExperienceLevel;
}

const ProjectObjectiveSection: React.FC<ProjectObjectiveSectionProps> = ({ form, userType = "beginner" }) => {
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-neuro-mint" />
          <CardTitle className="text-lg">2. Project Objective</CardTitle>
        </div>
        <CardDescription>
          Tell us what you're trying to achieve with this project
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="projectObjective"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Purpose</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What's the core purpose of this project? (promotion, brand awareness, new product launch, etc.)"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {userType === "beginner" 
                  ? "Tell us why you need this design created." 
                  : "Explain the business context and main goal of the project."}
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
              <FormLabel>Desired Outcome</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What specific actions or responses do you want from your audience? (purchases, sign-ups, brand recognition)"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Be clear about what you want the design to accomplish.
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
                <FormLabel>Success Metrics</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How will you measure success? (clicks, conversions, engagement metrics)"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Define how you'll evaluate the effectiveness of the design.
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

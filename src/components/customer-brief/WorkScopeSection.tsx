
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData, UserExperienceLevel } from "@/types/customer-brief";

interface WorkScopeSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
  userType?: UserExperienceLevel;
}

const WorkScopeSection: React.FC<WorkScopeSectionProps> = ({ form, userType = "beginner" }) => {
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-neuro-coral" />
          <CardTitle className="text-lg">1. Type and Scope of Work</CardTitle>
        </div>
        <CardDescription>
          {userType === "beginner" 
            ? "Let's understand what you need designed" 
            : "Define the technical details and scope of your project"}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="workScope"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Scope</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe what you need designed. For banners: Where will they be displayed? How many variations? What dimensions?"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Be specific about formats, sizes, and quantities needed.
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
              <FormLabel>Deliverables</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What specific files will you need? Do you need responsive/animated versions or static only?"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                List all file types, formats, and variations required.
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
                <FormLabel>Technical Requirements</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any specific technical specifications? (file formats, size limitations, animation requirements)"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Include details about file weight, resolution, or technical constraints.
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

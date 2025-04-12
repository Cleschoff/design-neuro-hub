
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CustomerBriefFormData } from "@/types/customer-brief";

interface DesignPreferencesSectionProps {
  form: UseFormReturn<CustomerBriefFormData>;
}

const DesignPreferencesSection: React.FC<DesignPreferencesSectionProps> = ({ form }) => {
  return (
    <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-neuro-coral" />
          <CardTitle className="text-lg">5. Design Desires</CardTitle>
        </div>
        <CardDescription>
          Tell us about the look and feel you envision
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <FormField
          control={form.control}
          name="brandPersonality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand Personality</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How would you describe your brand's personality? (professional, playful, luxurious, minimalist, etc.)"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Think of your brand as a person. What traits would they have?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="visualPreferences"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Visual Preferences</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your preferred style, any existing brand elements to include, or examples of designs you like."
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Include links to designs you like or brands with a similar aesthetic.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="moodAndTone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mood and Tone</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="What mood should the design convey? (energetic, calming, professional, fun, etc.)"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="colorPreferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color Preferences</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any color preferences or existing brand colors to use?"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DesignPreferencesSection;

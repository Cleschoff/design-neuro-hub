
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  ClipboardList, 
  FileText, 
  Calendar, 
  Target, 
  Users, 
  PenTool, 
  Palette,
  ThumbsUp
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const formSchema = z.object({
  projectName: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  projectType: z.string({
    required_error: "Please select a project type.",
  }),
  businessGoals: z.string().min(10, {
    message: "Please provide some information about your business goals.",
  }),
  targetAudience: z.string().min(10, {
    message: "Please describe your target audience.",
  }),
  timeline: z.string({
    required_error: "Please select a timeline.",
  }),
  competitors: z.string().optional(),
  brandPersonality: z.string().min(10, {
    message: "Please describe your brand personality.",
  }),
  visualPreferences: z.string().min(10, {
    message: "Please share your visual preferences.",
  }),
  additionalNotes: z.string().optional(),
});

interface CustomerBriefFormProps {
  userType: "designer" | "beginner";
}

export function CustomerBriefForm({ userType }: CustomerBriefFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      projectType: "",
      businessGoals: "",
      targetAudience: "",
      timeline: "",
      competitors: "",
      brandPersonality: "",
      visualPreferences: "",
      additionalNotes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Project brief submitted",
        description: "Our neuro team will start working on your project!",
      });
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card className="border-dashed border-muted-foreground/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-neuro-teal" />
              <CardTitle className="text-lg">Project Basics</CardTitle>
            </div>
            <CardDescription>
              Tell us the core details about your project
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Company Rebrand, Website Design..." {...field} />
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
                    <FormLabel>Project Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="website">Website Design</SelectItem>
                        <SelectItem value="ui">UI/UX Design</SelectItem>
                        <SelectItem value="print">Print Design</SelectItem>
                        <SelectItem value="marketing">Marketing Materials</SelectItem>
                        <SelectItem value="social">Social Media Graphics</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-dashed border-muted-foreground/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-neuro-coral" />
              <CardTitle className="text-lg">Business & Audience</CardTitle>
            </div>
            <CardDescription>
              Help us understand your goals and who you're trying to reach
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <FormField
              control={form.control}
              name="businessGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Goals</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What are you hoping to achieve with this project? e.g., increase brand awareness, drive sales..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    {userType === "beginner" ? "Tell us what you want this design to accomplish for you." : "Be specific about measurable outcomes if possible."}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Who is your primary audience? Include demographics, interests, and pain points if known."
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
            
            {userType === "designer" && (
              <FormField
                control={form.control}
                name="competitors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Competitors</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="List your main competitors or similar brands for reference (optional)."
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
            )}
          </CardContent>
        </Card>
        
        <Card className="border-dashed border-muted-foreground/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-neuro-lavender" />
              <CardTitle className="text-lg">Style & Preferences</CardTitle>
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
                      placeholder="How would you describe your brand's personality? e.g., professional, playful, luxurious, minimalist..."
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
                      placeholder="Describe your preferred style, colors, fonts, or any specific visual elements you want. Feel free to mention examples you like."
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
          </CardContent>
        </Card>
        
        <Card className="border-dashed border-muted-foreground/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-neuro-mint" />
              <CardTitle className="text-lg">Timeline & Additional Info</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6">
            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Timeline</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (1-2 days)</SelectItem>
                      <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                      <SelectItem value="relaxed">Relaxed (1-2 weeks)</SelectItem>
                      <SelectItem value="ongoing">Ongoing Project</SelectItem>
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
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Anything else you'd like our neuro team to know? (optional)"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            size="lg" 
            className="bg-neuro-teal hover:bg-neuro-teal/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Processing...</>
            ) : (
              <>
                <ThumbsUp className="mr-2 h-4 w-4" />
                Submit Brief
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

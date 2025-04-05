
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
  ThumbsUp,
  Briefcase,
  MessageSquare,
  Maximize2,
  Smile,
  Eye,
  TrendingUp,
  Clock
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
  
  // Type and scope of work section
  workScope: z.string().min(10, {
    message: "Please provide details about the scope of work.",
  }),
  deliverables: z.string().min(10, {
    message: "Please describe the deliverables needed.",
  }),
  technicalRequirements: z.string().optional(),
  
  // Project objective section
  projectObjective: z.string().min(10, {
    message: "Please describe your project objectives.",
  }),
  desiredOutcome: z.string().min(10, {
    message: "Please describe the desired outcome.",
  }),
  successMetrics: z.string().optional(),
  
  // Product details section
  productDetails: z.string().min(10, {
    message: "Please provide some information about your product or service.",
  }),
  valueProposition: z.string().min(10, {
    message: "Please describe your unique value proposition.",
  }),
  keyBenefits: z.string().optional(),
  
  // Target audience section
  targetAudience: z.string().min(10, {
    message: "Please describe your target audience.",
  }),
  audienceNeeds: z.string().min(10, {
    message: "Please describe your audience's needs or pain points.",
  }),
  audiencePlatforms: z.string().optional(),
  
  // Design desires section
  brandPersonality: z.string().min(10, {
    message: "Please describe your brand personality.",
  }),
  visualPreferences: z.string().min(10, {
    message: "Please share your visual preferences.",
  }),
  moodAndTone: z.string().optional(),
  colorPreferences: z.string().optional(),
  
  // Competition section
  competitors: z.string().optional(),
  marketDifferentiation: z.string().optional(),
  
  // Timeline
  timeline: z.string({
    required_error: "Please select a timeline.",
  }),
  
  // Additional information
  additionalNotes: z.string().optional(),
});

interface CustomerBriefFormProps {
  userType: "designer" | "beginner";
}

export function CustomerBriefForm({ userType }: CustomerBriefFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 7;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      projectType: "",
      workScope: "",
      deliverables: "",
      technicalRequirements: "",
      projectObjective: "",
      desiredOutcome: "",
      successMetrics: "",
      productDetails: "",
      valueProposition: "",
      keyBenefits: "",
      targetAudience: "",
      audienceNeeds: "",
      audiencePlatforms: "",
      brandPersonality: "",
      visualPreferences: "",
      moodAndTone: "",
      colorPreferences: "",
      competitors: "",
      marketDifferentiation: "",
      timeline: "",
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

  const nextSection = () => {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  // Progress indicator
  const progress = (currentSection / totalSections) * 100;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div 
            className="bg-neuro-teal h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
          <p className="text-sm text-muted-foreground mt-2">
            Section {currentSection} of {totalSections}
          </p>
        </div>

        {/* Section 1: Project Basics */}
        {currentSection === 1 && (
          <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
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
                          <SelectItem value="banners">Banner Design</SelectItem>
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
        )}

        {/* Section 2: Type and Scope of Work */}
        {currentSection === 2 && (
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
        )}

        {/* Section 3: Project Objective */}
        {currentSection === 3 && (
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
        )}

        {/* Section 4: Product Details */}
        {currentSection === 4 && (
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
        )}

        {/* Section 5: Target Audience */}
        {currentSection === 5 && (
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
        )}

        {/* Section 6: Design Desires */}
        {currentSection === 6 && (
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
        )}

        {/* Section 7: Competitors and Timeline */}
        {currentSection === 7 && (
          <>
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
            
            <Card className="border-dashed border-muted-foreground/20 animate-fade-in">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-neuro-lavender" />
                  <CardTitle className="text-lg">7. Timeline & Additional Info</CardTitle>
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
          </>
        )}
        
        {/* Navigation buttons */}
        <div className="flex justify-between">
          <Button 
            type="button" 
            variant="outline" 
            onClick={prevSection}
            disabled={currentSection === 1}
          >
            Previous
          </Button>
          
          {currentSection < totalSections ? (
            <Button type="button" onClick={nextSection}>
              Next
            </Button>
          ) : (
            <Button 
              type="submit" 
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
          )}
        </div>
      </form>
    </Form>
  );
}



import { z } from "zod";

export const customerBriefSchema = z.object({
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

export type CustomerBriefFormData = z.infer<typeof customerBriefSchema>;

// Define the user type for conditional rendering
export type UserExperienceLevel = "beginner" | "designer" | "professional";

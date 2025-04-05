
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit } from "lucide-react";

const StartProject = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <BrainCircuit size={28} className="text-neuro-teal" />
              <h1 className="text-3xl font-bold">Start a Project</h1>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8">
              Tell us about your project, and our AI team will help you bring it to life.
            </p>
            
            <Tabs defaultValue="designer" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="designer">For Designers</TabsTrigger>
                <TabsTrigger value="beginner">For Beginners</TabsTrigger>
              </TabsList>
              
              <TabsContent value="designer">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Kick Off Your Next Masterpiece</CardTitle>
                    <CardDescription>
                      Tell us about your project with our Customer Brief. We'll guide you from concept to completion using our full neuro-team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CustomerBriefFormPlaceholder userType="designer" />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="beginner">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Let's Create Something Amazing Together</CardTitle>
                    <CardDescription>
                      Answer a few questions in our Customer Brief, and we'll build a design for you—no experience needed!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CustomerBriefFormPlaceholder userType="beginner" />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

// Placeholder component for the form - would be replaced with a real form implementation
const CustomerBriefFormPlaceholder = ({ userType }: { userType: "designer" | "beginner" }) => {
  return (
    <div className="p-6 border border-dashed rounded-lg text-center bg-muted/30">
      <h3 className="text-lg font-medium mb-3">
        {userType === "designer" 
          ? "Professional Project Brief" 
          : "Simple Project Questionnaire"}
      </h3>
      <p className="text-muted-foreground mb-4">
        {userType === "designer"
          ? "This form would include detailed questions about project scope, deliverables, timeline, and style preferences."
          : "This form would include basic questions about what you want to create, colors, and general style."}
      </p>
      <p className="text-sm text-muted-foreground">
        Form implementation coming soon
      </p>
    </div>
  );
};

export default StartProject;

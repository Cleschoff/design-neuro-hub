
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { CustomerBriefForm } from "@/components/CustomerBriefForm";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, Sparkles } from "lucide-react";

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
            
            <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 rounded-lg border border-blue-100 mb-8">
              <div className="flex items-start gap-4">
                <Sparkles className="text-neuro-teal mt-1 h-6 w-6 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">Our Neuro Team is Ready to Create</h2>
                  <p className="text-muted-foreground">
                    Complete the customer brief below to help our AI understand your vision. The more details you provide, 
                    the better we can deliver exactly what you need.
                  </p>
                </div>
              </div>
            </div>
            
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
                      Tell us about your project with our comprehensive Customer Brief. We'll guide you from concept to completion using our full neuro-team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CustomerBriefForm userType="designer" />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="beginner">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Let's Create Something Amazing Together</CardTitle>
                    <CardDescription>
                      Answer our customer brief questions in a simplified format, and we'll build a design for you—no experience needed!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CustomerBriefForm userType="beginner" />
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

export default StartProject;

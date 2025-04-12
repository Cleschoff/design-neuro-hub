
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Tool, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PathSelection = () => {
  return (
    <section id="path-selection" className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select how you'd like to use our AI-powered design tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Option 1: Turnkey Design Project */}
          <Card className="border-2 hover:border-neuro-teal/70 transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-neuro-teal/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-neuro-teal" />
              </div>
              <CardTitle className="text-2xl">Full Design Project</CardTitle>
              <CardDescription>
                Need a complete design project from scratch?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our AI team will guide you through the entire process, from brief to final deliverables.
                Perfect for complete projects that need full design development.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>Complete customer brief process</span>
                </li>
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>End-to-end project management</span>
                </li>
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>Review checkpoints throughout</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Link to="/dashboard/start-project" className="w-full">
                <Button className="w-full gap-2">
                  Start Full Project
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          {/* Option 2: Individual Design Tools */}
          <Card className="border-2 hover:border-neuro-lavender/70 transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-neuro-lavender/10 flex items-center justify-center mb-4">
                <Tool className="h-6 w-6 text-neuro-lavender" />
              </div>
              <CardTitle className="text-2xl">Individual Tools</CardTitle>
              <CardDescription>
                Need help with specific design tasks?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access our suite of specialized AI design tools to solve specific challenges.
                Perfect when you need help with particular aspects of your design process.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>Find references and inspiration</span>
                </li>
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>Generate images and graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="rounded-full h-5 w-5 bg-green-100 text-green-800 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  <span>Select fonts and color schemes</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Link to="/dashboard/design-tools" className="w-full">
                <Button variant="outline" className="w-full gap-2">
                  Browse Design Tools
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PathSelection;

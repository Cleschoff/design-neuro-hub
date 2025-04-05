
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, MessageSquare, Calendar, ArrowRight } from "lucide-react";

const forums = [
  {
    id: 1,
    title: "Designer Showcase",
    description: "Share your designs and get feedback from the community.",
    threads: 342,
    members: 1289,
    icon: <User size={32} className="text-neuro-teal" />
  },
  {
    id: 2,
    title: "Neuro-Assistant Tips",
    description: "Learn how to get the most out of your AI assistants.",
    threads: 216,
    members: 978,
    icon: <MessageSquare size={32} className="text-neuro-lavender" />
  },
  {
    id: 3,
    title: "Design Trends & Insights",
    description: "Discuss the latest trends and insights in the design world.",
    threads: 185,
    members: 1145,
    icon: <Calendar size={32} className="text-neuro-coral" />
  }
];

const tutorials = [
  {
    id: 1,
    title: "Getting Started with DesignNeuroHub",
    duration: "10 min",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Maximizing the Chief Neuro-Designer",
    duration: "15 min",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Advanced Color & Font Techniques",
    duration: "20 min",
    level: "Advanced"
  },
  {
    id: 4,
    title: "Combining Assistants for Complex Projects",
    duration: "25 min",
    level: "Advanced"
  }
];

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-16 bg-background relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-neuro-teal/10 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/3 -left-24 w-56 h-56 bg-neuro-lavender/10 rounded-full blur-3xl opacity-70"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Join Our Design Community
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400">
                Connect with fellow designers, share your work, and learn new techniques with our community resources.
              </p>
            </div>
          </div>
        </div>
        
        {/* Forums */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Discussion Forums</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                Engage with the DesignNeuroHub community in our specialized forums.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {forums.map((forum) => (
                <Card key={forum.id} className="neuro-card">
                  <div className="mb-4">{forum.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{forum.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">{forum.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{forum.threads} threads</span>
                    <span>{forum.members} members</span>
                  </div>
                  <Button className="w-full bg-primary">Join Discussion</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tutorials */}
        <section className="py-16 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Tutorials & Resources</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                Learn how to use DesignNeuroHub effectively with our tutorials and resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tutorials.map((tutorial) => (
                <Card key={tutorial.id} className="neuro-card flex justify-between items-center p-6">
                  <div>
                    <h3 className="font-semibold mb-1">{tutorial.title}</h3>
                    <div className="flex space-x-3 text-sm text-gray-500">
                      <span>{tutorial.duration}</span>
                      <span>•</span>
                      <span>{tutorial.level}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowRight size={20} />
                  </Button>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">View All Resources</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;

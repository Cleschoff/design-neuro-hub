
import { CheckCircle2 } from "lucide-react";

const Features = () => {
  const featureList = [
    {
      title: "AI Design Team",
      description: "Access 10 specialized AI assistants for different design tasks",
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: "Real-Time Feedback",
      description: "Get instant suggestions as you work on your designs",
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: "File Integration",
      description: "Upload and analyze briefs, sketches, and reference materials",
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: "Assistant Collaboration",
      description: "Combine assistants for complex tasks with integrated outputs",
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: "Export Options",
      description: "Download outputs in common formats (PDF, PNG, etc.)",
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    },
    {
      title: "Learning AI",
      description: "Assistants adapt to your preferences and style over time",
      icon: <CheckCircle2 className="text-neuro-teal" size={20} />
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Smarter, Not Harder</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            DesignNeuroHub streamlines your workflow with powerful features that help you create better designs in less time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

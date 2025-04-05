
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "UI/UX Designer",
    company: "CreativeWorks",
    content: "DesignNeuroHub has completely transformed how I approach my design process. The Composition Analyzer has saved me hours of tweaking layouts.",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    role: "Graphic Designer",
    company: "Freelance",
    content: "As a freelancer, I need to work efficiently. The TOR Analyst helps me understand client briefs quickly and the Trend Analyst keeps my designs fresh.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Product Designer",
    company: "TechFusion",
    content: "I was skeptical about AI design tools, but DesignNeuroHub feels like having a team of assistants. The Color and Font Assistant is particularly impressive.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Designers Are Saying</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            See how DesignNeuroHub is helping designers streamline their workflow and boost creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="neuro-card">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role} at {testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

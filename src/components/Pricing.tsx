
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI design assistance.",
    featured: false,
    features: [
      { included: true, text: "Access to 3 Neuro-Assistants" },
      { included: true, text: "5 Daily Queries" },
      { included: true, text: "Basic Export Options" },
      { included: false, text: "Assistant Collaboration" },
      { included: false, text: "Priority Processing" },
      { included: false, text: "Team Collaboration" }
    ]
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    description: "For designers who want full access to all assistants.",
    featured: true,
    features: [
      { included: true, text: "Access to All 10 Neuro-Assistants" },
      { included: true, text: "Unlimited Queries" },
      { included: true, text: "Advanced Export Options" },
      { included: true, text: "Assistant Collaboration" },
      { included: true, text: "Priority Processing" },
      { included: false, text: "Team Collaboration" }
    ]
  },
  {
    name: "Team",
    price: "$29.99",
    period: "per month",
    description: "For design teams working together on projects.",
    featured: false,
    features: [
      { included: true, text: "Access to All 10 Neuro-Assistants" },
      { included: true, text: "Unlimited Queries" },
      { included: true, text: "Advanced Export Options" },
      { included: true, text: "Assistant Collaboration" },
      { included: true, text: "Priority Processing" },
      { included: true, text: "Team Collaboration (5 members)" }
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that works best for your design needs. No hidden fees or commitments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`neuro-card flex flex-col ${plan.featured ? 'border-primary shadow-lg relative overflow-visible' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{plan.description}</p>
              </div>
              
              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.included ? (
                      <Check size={18} className="text-neuro-teal mr-2 flex-shrink-0" />
                    ) : (
                      <X size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-gray-400"}>{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/dashboard" className="mt-auto">
                <Button 
                  className={`w-full ${plan.featured ? 'bg-primary' : ''}`} 
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.name === "Free" ? "Get Started" : "Subscribe Now"}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

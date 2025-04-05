
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, ArrowRight, Send } from "lucide-react";

const ChiefNeuroDesigner = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "Hello, I'm your Chief Neuro-Designer. I can help oversee your design process, suggest workflows, and integrate outputs from other assistants. How can I assist you today?"
    }
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: "user", content: input }]);
    
    // Clear input
    setInput("");
    
    // Simulate assistant response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          role: "assistant", 
          content: "Based on your project description, I recommend starting with the Concept Generator to brainstorm initial ideas, then use the Composition Analyzer to refine your layout. The Color and Font Assistant can help finalize your design with optimal typography and color choices." 
        }
      ]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="neuro-card flex flex-col h-[calc(100vh-10rem)]">
      <div className="flex items-center mb-4">
        <div className="rounded-full p-2 bg-neuro-teal/10 text-neuro-teal mr-3">
          <BrainCircuit size={24} />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Chief Neuro-Designer</h2>
          <p className="text-sm text-gray-500">Oversees the design process & suggests workflows</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-4 border rounded-md p-4 bg-background/50">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.role === 'user' ? 'text-right' : ''}`}
          >
            <div 
              className={`inline-block max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-end gap-2">
        <Textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Describe your project or ask for workflow suggestions..."
          className="min-h-[60px] resize-none"
        />
        <Button 
          onClick={handleSendMessage} 
          className="bg-primary h-[60px] px-4"
          disabled={!input.trim()}
        >
          <Send size={18} />
        </Button>
      </div>
    </Card>
  );
};

export default ChiefNeuroDesigner;

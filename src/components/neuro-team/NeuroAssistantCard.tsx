
import { Card } from "@/components/ui/card";
import { NeuroAssistant } from "@/data/neuroAssistants";

interface NeuroAssistantCardProps {
  assistant: NeuroAssistant;
  onClick: (assistant: NeuroAssistant) => void;
}

const NeuroAssistantCard = ({ assistant, onClick }: NeuroAssistantCardProps) => {
  const IconComponent = assistant.icon;

  const handleClick = () => {
    console.log("Card clicked:", assistant.title);
    onClick(assistant);
  };

  return (
    <Card 
      className="neuro-card hover:translate-y-[-5px] transition-all duration-300 p-6 cursor-pointer hover:shadow-lg"
      onClick={handleClick}
    >
      <div className={`${assistant.color} mb-4`}>
        <IconComponent size={36} />
      </div>
      <h3 className="font-bold text-lg mb-2">{assistant.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{assistant.description}</p>
    </Card>
  );
};

export default NeuroAssistantCard;


import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { neuroAssistants, NeuroAssistant } from "@/data/neuroAssistants";
import NeuroAssistantModal from "./neuro-team/NeuroAssistantModal";
import NeuroAssistantCard from "./neuro-team/NeuroAssistantCard";
import CommonToolsSection from "./neuro-team/CommonToolsSection";

const NeuroTeam = () => {
  const { t } = useLocale();
  const [selectedAssistant, setSelectedAssistant] = useState<NeuroAssistant | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAssistantClick = (assistant: NeuroAssistant) => {
    console.log("Assistant clicked:", assistant.title);
    setSelectedAssistant(assistant);
    setModalOpen(true);
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Познакомьтесь с вашей Нейро-командой</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Каждый ассистент — это специализированный ИИ-модуль с конкретными инструментами и API для выполнения своих задач в дизайн-процессе
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {neuroAssistants.map((assistant) => (
            <NeuroAssistantCard
              key={assistant.id}
              assistant={assistant}
              onClick={handleAssistantClick}
            />
          ))}
        </div>

        <CommonToolsSection />

        <NeuroAssistantModal 
          assistant={selectedAssistant}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
};

export default NeuroTeam;

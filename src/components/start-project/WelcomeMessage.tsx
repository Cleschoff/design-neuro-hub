
import React from "react";
import { Users } from "lucide-react";

const WelcomeMessage = () => {
  return (
    <div className="bg-gradient-to-r from-neuro-teal/5 via-neuro-lavender/5 to-neuro-coral/5 p-8 rounded-xl border border-neuro-teal/10 mb-8">
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-neuro-teal/10 flex items-center justify-center flex-shrink-0">
          <Users className="h-8 w-8 text-neuro-teal" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            Добро пожаловать в нейро-студию дизайна!
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Я — ваш главный нейро-дизайнер, и моя команда готова создать для вас профессиональный дизайн-проект. 
            Заполните подробный бриф, чтобы мы могли понять ваше видение и создать именно то, что вам нужно.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;

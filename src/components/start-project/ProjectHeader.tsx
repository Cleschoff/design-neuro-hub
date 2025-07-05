
import React from "react";
import { Brain, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/context/LocaleContext";

const ProjectHeader = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-neuro-teal/10 flex items-center justify-center">
          <Brain className="h-6 w-6 text-neuro-teal" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Создание дизайн-проекта</h1>
          <p className="text-muted-foreground">Работайте с нейро-командой профессиональных дизайнеров</p>
        </div>
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            {locale === "ru" ? "Русский" : "English"}
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLocale("ru")}>
            Русский
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLocale("en")}>
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProjectHeader;

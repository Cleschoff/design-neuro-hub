
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle } from "lucide-react";

const ProjectCompletedSection = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-gradient-to-r from-neuro-lavender/10 to-neuro-coral/10">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-neuro-lavender" />
          <div>
            <CardTitle className="text-2xl">Ваш дизайн-проект готов!</CardTitle>
            <CardDescription>
              Нейро-команда создала полный дизайн-проект по алгоритму работы
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-neuro-teal to-neuro-lavender flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Проект успешно создан</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ваш дизайн-проект включает: полный анализ ТЗ, исследование рынка и трендов, 
              концепцию, цветовую палитру, типографику, композиционные решения и техническую документацию.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="p-4 bg-neuro-teal/5 rounded-lg border border-neuro-teal/20">
              <h4 className="font-medium text-neuro-teal mb-1">Концепция и стиль</h4>
              <p className="text-sm text-muted-foreground">Уникальная дизайн-концепция</p>
            </div>
            <div className="p-4 bg-neuro-lavender/5 rounded-lg border border-neuro-lavender/20">
              <h4 className="font-medium text-neuro-lavender mb-1">Цвета и типографика</h4>
              <p className="text-sm text-muted-foreground">Продуманная палитра и шрифты</p>
            </div>
            <div className="p-4 bg-neuro-coral/5 rounded-lg border border-neuro-coral/20">
              <h4 className="font-medium text-neuro-coral mb-1">Композиция</h4>
              <p className="text-sm text-muted-foreground">Макеты и структура</p>
            </div>
            <div className="p-4 bg-neuro-mint/5 rounded-lg border border-neuro-mint/20">
              <h4 className="font-medium text-neuro-mint mb-1">Техническая часть</h4>
              <p className="text-sm text-muted-foreground">Файлы для реализации</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-neuro-teal hover:bg-neuro-teal/90">
              Скачать проект
            </Button>
            <Button size="lg" variant="outline">
              Создать новый проект
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCompletedSection;

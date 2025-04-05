
import { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import ChiefNeuroDesigner from "@/components/ChiefNeuroDesigner";

const NeuroDetail = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { id } = useParams<{ id: string }>();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar sidebarOpen={sidebarOpen} />
        
        <main className={`flex-1 overflow-y-auto p-4 md:p-6 transition-all`}>
          {id === "chief" && <ChiefNeuroDesigner />}
          
          {id !== "chief" && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">This Neuro-Assistant is coming soon!</h2>
                <p className="text-gray-500">We're still perfecting this AI assistant for you.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default NeuroDetail;

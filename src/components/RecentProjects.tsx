
import { Card } from "@/components/ui/card";
import { 
  MoreVertical, File, Clock, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Brand Redesign for TechX",
    lastModified: "2 hours ago",
    dueDate: "Apr 15, 2025",
    thumbnail: "bg-neuro-teal/20",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Landing Page Mockups",
    lastModified: "Yesterday",
    dueDate: "Apr 10, 2025",
    thumbnail: "bg-neuro-coral/20",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Mobile App UI Kit",
    lastModified: "3 days ago",
    dueDate: "Apr 20, 2025",
    thumbnail: "bg-neuro-lavender/20",
    status: "Pending"
  },
  {
    id: 4,
    title: "Social Media Graphics",
    lastModified: "5 days ago",
    dueDate: "Apr 8, 2025",
    thumbnail: "bg-neuro-navy/20",
    status: "Completed"
  }
];

const RecentProjects = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Projects</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="neuro-card hover:scale-[1.02] transition-all">
            <div className={`h-32 rounded-t-lg ${project.thumbnail} mb-4 -mx-6 -mt-6`} />
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{project.title}</h3>
              <Button variant="ghost" size="icon" className="-mr-2 -mt-2">
                <MoreVertical size={16} />
              </Button>
            </div>
            <div className="mt-2">
              <Badge 
                variant="outline" 
                className={`
                  ${project.status === 'Completed' ? 'bg-green-100 text-green-700 border-green-200' : ''}
                  ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-700 border-blue-200' : ''}
                  ${project.status === 'Pending' ? 'bg-amber-100 text-amber-700 border-amber-200' : ''}
                `}
              >
                {project.status}
              </Badge>
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-4">
              <Clock size={14} className="mr-1" />
              <span className="mr-4">{project.lastModified}</span>
              <Calendar size={14} className="mr-1" />
              <span>Due {project.dueDate}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

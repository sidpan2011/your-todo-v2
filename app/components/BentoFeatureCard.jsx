import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BarChart3, Kanban, Timer, Users, Zap } from "lucide-react";



const features = [
  {
    Icon: Kanban,
    name: "Smart Workspaces",
    description: "Organize tasks with customizable Kanban boards, lists, and timelines. Adapt your workspace to match your team's workflow perfectly.",
    href: "/workspaces",
    cta: "Create workspace",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 opacity-50" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Users,
    name: "Team Collaboration",
    description: "Real-time collaboration with team members. Share tasks, assign responsibilities, and track progress together seamlessly.",
    href: "/teams",
    cta: "Add team members",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 opacity-50" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Zap,
    name: "Automation",
    description: "Automate repetitive tasks with custom workflows. Set up triggers and actions to save time and reduce manual work.",
    href: "/automation",
    cta: "Setup automation",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-50 opacity-50" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BarChart3,
    name: "Analytics & Reports",
    description: "Gain insights into team productivity with detailed analytics. Track completion rates, time spent, and project progress.",
    href: "/analytics",
    cta: "View insights",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 opacity-50" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Timer,
    name: "Time Tracking",
    description: "Built-in time tracking for tasks and projects. Monitor time spent, set estimates, and improve team productivity.",
    href: "/time-tracking",
    cta: "Start tracking",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 opacity-50" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];


export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

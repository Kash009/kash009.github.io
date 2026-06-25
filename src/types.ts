import { LucideIcon } from "lucide-react";

export type WindowId =
  | "about"
  | "professionalSummary"
  | "coreExpertise"
  | "technicalStack"
  | "selectedResearchEngineeringProjects"
  | "selectedProductsLeadership"
  | "leadershipStrengths"
  | "education"
  | "certificates"
  | "experience"
  | "personalProjects"
  | "researchInterests";

export type WindowState = {
  id: WindowId;
  title: string;
  isOpen: boolean;
  minimized: boolean;
  maximized: boolean;
  z: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type AppDefinition = {
  id: WindowId;
  title: string;
  icon: LucideIcon;
};

import {
  UserRound,
  BrainCircuit,
  Wrench,
  FolderKanban,
  BriefcaseBusiness,
  Users,
  GraduationCap,
  Award,
  FolderGit2,
} from "lucide-react";
import { AppDefinition } from "../types";

export const appDefinitions: AppDefinition[] = [
  { id: "about", title: "About", icon: UserRound },
  { id: "professionalSummary", title: "Professional Summary", icon: UserRound },
  { id: "experience", title: "Experience", icon: BriefcaseBusiness },
  { id: "coreExpertise", title: "Core Expertise", icon: BrainCircuit },
  { id: "technicalStack", title: "Technical Stack", icon: Wrench },
  {
    id: "selectedResearchEngineeringProjects",
    title: "Selected Research & Engineering Projects",
    icon: FolderKanban,
  },
  {
    id: "selectedProductsLeadership",
    title: "Selected Products & Leadership",
    icon: BriefcaseBusiness,
  },
  { id: "leadershipStrengths", title: "Leadership strengths", icon: Users },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "certificates", title: "Certificates", icon: Award },
  { id: "personalProjects", title: "Personal Projects", icon: FolderGit2 },
];

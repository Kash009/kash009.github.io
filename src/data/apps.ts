import {
  UserRound,
  FolderKanban,
  BrainCircuit,
  BriefcaseBusiness,
  FileText,
  Mail,
  TerminalSquare,
} from "lucide-react";
import { AppDefinition } from "../types";

export const appDefinitions: AppDefinition[] = [
  { id: "about", title: "About", icon: UserRound },
  { id: "projects", title: "Projects", icon: FolderKanban },
  { id: "skills", title: "Skills", icon: BrainCircuit },
  { id: "experience", title: "Experience", icon: BriefcaseBusiness },
  // { id: "resume", title: "Resume", icon: FileText },
  { id: "contact", title: "Contact", icon: Mail },
  { id: "terminal", title: "Terminal", icon: TerminalSquare },
];

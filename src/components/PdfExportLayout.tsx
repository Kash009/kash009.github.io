import AboutWindow from "./windows/AboutWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import SkillsWindow from "./windows/SkillsWindow";
import ExperienceWindow from "./windows/ExperienceWindow";
import ResumeWindow from "./windows/ResumeWindow";
import ContactWindow from "./windows/ContactWindow";
import TerminalWindow from "./windows/TerminalWindow";
import ProfessionalSummaryWindow from "./windows/ProfessionalSummaryWindow";
import CoreExpertiseWindow from "./windows/CoreExpertiseWindow";
import TechnicalStackWindow from "./windows/TechnicalStackWindow";
import SelectedResearchEngineeringProjectsWindow from "./windows/SelectedResearchEngineeringProjectsWindow";
import SelectedProductsLeadershipWindow from "./windows/SelectedProductsLeadershipWindow";
import LeadershipStrengthsWindow from "./windows/LeadershipStrengthsWindow";
import EducationWindow from "./windows/EducationWindow";
import CertificatesWindow from "./windows/CertificatesWindow";

type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section
      className="mb-4 overflow-visible rounded-md border border-emerald-400/25 bg-[#070d12]"
      style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
    >
      <header className="border-b border-emerald-400/20 bg-[#091118] px-4 py-2 text-xs uppercase tracking-wider text-emerald-300/90">
        {title}.sys
      </header>
      <div className="overflow-visible p-4">{children}</div>
    </section>
  );
}

export default function PdfExportLayout() {
  return (
    <div
      id="pdf-export-layout"
      className="bg-[#05070a] p-6 text-emerald-100"
      style={{
        width: "960px",
        fontFamily:
          "JetBrains Mono, Fira Code, Cascadia Code, ui-monospace, SFMono-Regular, Menlo, monospace",
        lineHeight: 1.45,
      }}
    >
      <div
        className="mb-4 rounded-md border border-emerald-400/25 bg-[#070d12] px-4 py-3"
        style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
      >
        <h1 className="text-lg font-semibold text-emerald-300">
          AI Engineer Portfolio
        </h1>
        <p className="mt-1 text-xs text-emerald-200/80">
          Recruiter Export • Terminal OS Theme • All Sections Expanded
        </p>
      </div>

      <SectionCard title="About">
        <AboutWindow />
      </SectionCard>

      <SectionCard title="Professional Summary">
        <ProfessionalSummaryWindow />
      </SectionCard>

      <SectionCard title="Experience">
        <ExperienceWindow />
      </SectionCard>

      <SectionCard title="Core Expertise">
        <CoreExpertiseWindow />
      </SectionCard>

      <SectionCard title="Technical Stack">
        <TechnicalStackWindow />
      </SectionCard>

      <SectionCard title="Selected Research & Engineering Projects">
        <SelectedResearchEngineeringProjectsWindow />
      </SectionCard>

      <SectionCard title="Selected Products & Leadership">
        <SelectedProductsLeadershipWindow />
      </SectionCard>

      <SectionCard title="Leadership strengths">
        <LeadershipStrengthsWindow />
      </SectionCard>

      <SectionCard title="Education">
        <EducationWindow />
      </SectionCard>

      <SectionCard title="Certificates">
        <CertificatesWindow />
      </SectionCard>
    </div>
  );
}

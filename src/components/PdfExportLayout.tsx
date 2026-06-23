import AboutWindow from "./windows/AboutWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import SkillsWindow from "./windows/SkillsWindow";
import ExperienceWindow from "./windows/ExperienceWindow";
import ResumeWindow from "./windows/ResumeWindow";
import ContactWindow from "./windows/ContactWindow";
import TerminalWindow from "./windows/TerminalWindow";

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
      <header className="border-b border-emerald-400/20 bg-[#091118] px-5 py-3 text-xs uppercase tracking-wider text-emerald-300/90">
        {title}.sys
      </header>
      <div className="overflow-visible p-5">{children}</div>
    </section>
  );
}

export default function PdfExportLayout() {
  return (
    <div
      id="pdf-export-layout"
      className="bg-[#05070a] p-8 text-emerald-100"
      style={{
        width: "1200px",
        fontFamily:
          "JetBrains Mono, Fira Code, Cascadia Code, ui-monospace, SFMono-Regular, Menlo, monospace",
        lineHeight: 1.5,
      }}
    >
      <div
        className="mb-5 rounded-md border border-emerald-400/25 bg-[#070d12] px-5 py-4"
        style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
      >
        <h1 className="text-xl font-semibold text-emerald-300">
          AI Engineer Portfolio
        </h1>
        <p className="mt-1 text-xs text-emerald-200/80">
          Recruiter Export • Terminal OS Theme • All Sections Expanded
        </p>
      </div>

      <SectionCard title="About">
        <AboutWindow />
      </SectionCard>

      <SectionCard title="Contact">
        <ContactWindow />
      </SectionCard>

      <SectionCard title="Terminal">
        <TerminalWindow />
      </SectionCard>

      <SectionCard title="Experience">
        <ExperienceWindow />
      </SectionCard>

      <SectionCard title="Projects">
        <ProjectsWindow />
      </SectionCard>

      <SectionCard title="Skills">
        <SkillsWindow />
      </SectionCard>
    </div>
  );
}

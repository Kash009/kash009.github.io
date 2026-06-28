import type { CSSProperties, ReactNode } from "react";
import {
  BrainCircuit,
  Dna,
  Waypoints,
  Orbit,
  Bot,
  Network,
  Cpu,
  GitBranch,
} from "lucide-react";
import {
  profile,
  expertise,
  stack,
  projects,
  productsLeadership,
  experience,
  strengths,
  education,
  certsByInstitute,
  researchInterests,
} from "../data/content";

type PdfTheme = "dark" | "light";

type SectionCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

function SectionCard({ title, children, className }: SectionCardProps) {
  const allowPageBreak = className?.includes("pdf-allow-break");

  return (
    <section
      className={`pdf-section mb-2 overflow-visible rounded-md border last:mb-0 ${className ?? ""}`}
      style={{
        breakInside: allowPageBreak ? "auto" : "avoid",
        pageBreakInside: allowPageBreak ? "auto" : "avoid",
        borderColor: "var(--line)",
        background: "var(--panel)",
      }}
    >
      <header
        className="flex min-h-[32px] items-center border-b px-2 py-1 text-[13px] font-semibold tracking-wide"
        style={{
          borderColor: "var(--line)",
          background: "var(--panel-2)",
          color: "var(--accent)",
        }}
      >
        {title}
      </header>
      <div className="overflow-visible p-2">{children}</div>
    </section>
  );
}

type BulletListProps = {
  items: string[];
  className?: string;
};

function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={`pdf-bullet-list ${className ?? ""}`}>
      {items.map((item, idx) => (
        <li key={`${idx}-${item.slice(0, 24)}`} className="pdf-bullet-row">
          <span className="pdf-bullet-dot" aria-hidden="true">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const getResearchInterestIcon = (item: string) => {
  const text = item.toLowerCase();

  if (
    text.includes("world model") ||
    text.includes("jepa") ||
    text.includes("energy-based")
  ) {
    return Orbit;
  }
  if (text.includes("self-supervised") || text.includes("reinforcement")) {
    return BrainCircuit;
  }
  if (text.includes("llm") || text.includes("agent")) {
    return Bot;
  }
  if (text.includes("neuroevolution") || text.includes("evolutionary")) {
    return Dna;
  }
  if (
    text.includes("distributed") ||
    text.includes("inference") ||
    text.includes("throughput")
  ) {
    return Cpu;
  }
  if (text.includes("graph") || text.includes("knowledge")) {
    return Network;
  }
  if (
    text.includes("mlops") ||
    text.includes("lifecycle") ||
    text.includes("automation")
  ) {
    return GitBranch;
  }

  return Waypoints;
};

export default function PdfExportLayout({ theme }: { theme: PdfTheme }) {
  const rootStyle = {
    width: "1080px",
    fontFamily:
      "JetBrains Mono, Fira Code, Cascadia Code, ui-monospace, SFMono-Regular, Menlo, monospace",
    lineHeight: 1.24,
    background: theme === "light" ? "#f4f7fb" : "#05070a",
    color: theme === "light" ? "#0f172a" : "#d1fae5",
    "--panel": theme === "light" ? "#ffffff" : "#070d12",
    "--panel-2": theme === "light" ? "#eef3f9" : "#091118",
    "--text": theme === "light" ? "#0f172a" : "#d1fae5",
    "--muted": theme === "light" ? "#475569" : "#b6c2cd",
    "--accent": theme === "light" ? "#0f766e" : "#34d399",
    "--line":
      theme === "light"
        ? "rgba(16, 185, 129, 0.28)"
        : "rgba(74, 222, 128, 0.25)",
    "--surface-tint-1":
      theme === "light"
        ? "rgba(15, 118, 110, 0.06)"
        : "rgba(16, 185, 129, 0.08)",
  } as CSSProperties;

  return (
    <div id="pdf-export-layout" className="p-[10px]" style={rootStyle}>
      <div className="mb-2 grid grid-cols-2 gap-2">
        <SectionCard title="About" className="mb-0 h-full">
          <section className="space-y-2" style={{ color: "var(--text)" }}>
            <h1
              className="text-lg font-semibold"
              style={{ color: "var(--accent)" }}
            >
              {profile.name}
            </h1>
            <p className="text-base" style={{ color: "var(--text)" }}>
              {profile.role}
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              {profile.tagline}
            </p>

            <div
              className="space-y-1 text-[11px] [overflow-wrap:anywhere]"
              style={{ color: "var(--muted)" }}
            >
              <p>
                {profile.location} {profile.phone ? `• ${profile.phone}` : ""}
              </p>
              <p className="break-all">{profile.email}</p>
              <p className="break-all">{profile.github}</p>
              <p className="break-all">{profile.codeberg}</p>
              <p className="break-all">{profile.linkedin}</p>
            </div>
          </section>
        </SectionCard>

        <SectionCard title="Professional Summary" className="mb-0 h-full">
          <section className="space-y-2" style={{ color: "var(--text)" }}>
            <p className="text-xs leading-relaxed">
              Senior AI Engineer and Team Lead with 9+ years delivering
              production AI systems from architecture through operations.
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Specializing in LLM systems, Rust-based agent orchestration, and
              Kubernetes-native AI infrastructure.
            </p>

            <BulletList
              className="space-y-0.5 text-xs"
              items={[
                "Led end-to-end AI delivery from product requirements to production operations.",
                "Built a production-grade Rust multi-agent orchestrator for high-throughput execution.",
                "Operated platform LLM services, workflows, and lifecycle automation in live environments.",
                "Led cross-functional execution across research, engineering, and product teams.",
              ]}
            />
          </section>
        </SectionCard>
      </div>

      <div className="mb-2 grid grid-cols-2 gap-2">
        <SectionCard title="Technical Stack" className="mb-0 h-full">
          <section style={{ color: "var(--text)" }}>
            <p
              className="text-[10px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Core technologies used across model development, platform
              engineering, and production infrastructure.
            </p>

            <div className="mt-2 grid grid-cols-1 gap-1.5">
              {stack.map(({ title, items, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded border p-1.5"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--surface-tint-1)",
                  }}
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--panel-2)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon size={12} />
                    </span>

                    <div className="min-w-0">
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "var(--accent)" }}
                      >
                        {title}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug [overflow-wrap:anywhere]">
                        {items.join(", ")}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </SectionCard>

        <SectionCard title="Research Interests" className="mb-0 h-full">
          <section className="space-y-1" style={{ color: "var(--text)" }}>
            <p
              className="text-[10px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Current focus areas guiding research and production
              experimentation.
            </p>

            <div className="mt-2 grid grid-cols-1 gap-1.5">
              {researchInterests.map((item) => {
                const Icon = getResearchInterestIcon(item);

                return (
                  <article
                    key={item}
                    className="rounded border p-1.5"
                    style={{
                      borderColor: "var(--line)",
                      background: "var(--surface-tint-1)",
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border"
                        style={{
                          borderColor: "var(--line)",
                          background: "var(--panel-2)",
                          color: "var(--accent)",
                        }}
                        aria-hidden="true"
                      >
                        <Icon size={11} strokeWidth={2} />
                      </span>
                      <p className="text-xs leading-snug [overflow-wrap:anywhere]">
                        {item}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </SectionCard>
      </div>

      <SectionCard title="Experience" className="mb-2">
        <section className="space-y-2" style={{ color: "var(--text)" }}>
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="pdf-breakpoint rounded border p-1.5"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-tint-1)",
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {job.role}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text)" }}>
                    {job.company} • {job.location}
                  </p>
                </div>
                <p
                  className="shrink-0 text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {job.period}
                </p>
              </div>

              {job.impact ? (
                <p
                  className="mt-0.5 text-[11px] leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    Impact:
                  </span>{" "}
                  {job.impact}
                </p>
              ) : null}

              {job.stack?.length ? (
                <p
                  className="mt-0.5 text-[11px] leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    Stack:
                  </span>{" "}
                  {job.stack.join(", ")}
                </p>
              ) : null}

              <BulletList
                items={job.points}
                className="mt-1 space-y-0.5 text-xs leading-relaxed"
              />
            </article>
          ))}
        </section>
      </SectionCard>

      <div className="space-y-1.5">
        <div className="grid grid-cols-2 items-stretch gap-2">
          <SectionCard
            title="Selected Products & Leadership"
            className="mb-0 h-full"
          >
            <section style={{ color: "var(--text)" }}>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Product initiatives delivered through technical leadership and
                cross-functional execution.
              </p>

              <div className="mt-2 grid grid-cols-1 gap-1.5">
                {productsLeadership.slice(0, 3).map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={`${item.company}-${item.name}`}
                      className="rounded border p-1.5"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--surface-tint-1)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex min-w-0 items-start gap-2">
                          <span
                            className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border"
                            style={{
                              borderColor: "var(--line)",
                              background: "var(--panel-2)",
                              color: "var(--accent)",
                            }}
                          >
                            <Icon size={12} />
                          </span>

                          <p
                            className="min-w-0 text-xs font-semibold leading-snug [overflow-wrap:anywhere]"
                            style={{ color: "var(--accent)" }}
                          >
                            {item.name}
                          </p>
                        </div>

                        <span
                          className="shrink-0 text-[10px]"
                          style={{ color: "var(--muted)" }}
                        >
                          {item.company}
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] leading-relaxed">
                        {item.summary}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>
          </SectionCard>

          <SectionCard
            title="Selected Research & Engineering Projects"
            className="mb-0 h-full"
          >
            <section style={{ color: "var(--text)" }}>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Research-heavy engineering projects translated into reusable
                systems and practical outcomes.
              </p>

              <div className="mt-2 grid grid-cols-1 gap-1.5">
                {projects.slice(0, 3).map((p) => (
                  <article
                    key={p.name}
                    className="rounded border p-1.5"
                    style={{
                      borderColor: "var(--line)",
                      background: "var(--surface-tint-1)",
                    }}
                  >
                    <p
                      className="text-xs font-semibold leading-snug [overflow-wrap:anywhere]"
                      style={{ color: "var(--accent)" }}
                    >
                      {p.name}
                    </p>

                    <p className="mt-1 text-[10px] leading-relaxed">
                      {p.summary}
                    </p>

                    <p
                      className="mt-1.5 text-[10px]"
                      style={{ color: "var(--muted)" }}
                    >
                      Stack: {p.stack.join(", ")}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </SectionCard>
        </div>

        <SectionCard title="Core Expertise" className="mb-0 pdf-allow-break">
          <section style={{ color: "var(--text)" }}>
            <p
              className="text-[10px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Key capability areas across AI engineering, platform architecture,
              and production delivery.
            </p>

            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {expertise.map(({ label, icon: Icon }) => (
                <article
                  key={label}
                  className="rounded border p-1.5 pdf-breakpoint"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--surface-tint-1)",
                  }}
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--panel-2)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon size={12} strokeWidth={2} />
                    </span>
                    <p className="min-w-0 text-xs leading-snug [overflow-wrap:anywhere]">
                      {label}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </SectionCard>

        <div className="grid grid-cols-2 items-start gap-2">
          <SectionCard title="Leadership Strengths" className="mb-0">
            <section style={{ color: "var(--text)" }}>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Leadership traits used to align teams, execution, and product
                outcomes.
              </p>

              <div className="mt-2 grid grid-cols-1 gap-1.5">
                {strengths.slice(0, 4).map(({ label, icon: Icon }) => (
                  <article
                    key={label}
                    className="rounded border p-1.5"
                    style={{
                      borderColor: "var(--line)",
                      background: "var(--surface-tint-1)",
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border"
                        style={{
                          borderColor: "var(--line)",
                          background: "var(--panel-2)",
                          color: "var(--accent)",
                        }}
                      >
                        <Icon size={12} strokeWidth={2} />
                      </span>
                      <p className="min-w-0 text-xs leading-snug [overflow-wrap:anywhere]">
                        {label}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </SectionCard>

          <SectionCard title="Certificates" className="mb-0 pdf-allow-break">
            <section className="space-y-1" style={{ color: "var(--text)" }}>
              {certsByInstitute.map(({ institute, items }) => (
                <article
                  key={institute}
                  className="rounded border p-1.5 pdf-breakpoint"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--surface-tint-1)",
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: "var(--accent)" }}
                  >
                    {institute}
                  </p>

                  <BulletList
                    items={items}
                    className="mt-1 space-y-0.5 text-xs"
                  />
                </article>
              ))}
            </section>
          </SectionCard>
        </div>

        <SectionCard title="Education" className="mb-0">
          <section className="space-y-1" style={{ color: "var(--text)" }}>
            {education.map((e) => (
              <article key={`${e.school}-${e.degree}`}>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {e.degree}
                </p>
                <p className="text-[10px]">{e.school}</p>
                <p className="text-[10px]" style={{ color: "var(--muted)" }}>
                  {e.period}
                </p>
              </article>
            ))}
          </section>
        </SectionCard>
      </div>
    </div>
  );
}

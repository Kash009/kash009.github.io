import type { CSSProperties, ReactNode } from "react";
import {
  profile,
  expertise,
  stack,
  projects,
  productsLeadership,
  experience,
  strengths,
  education,
  certs,
  researchInterests,
} from "../data/content";

type PdfTheme = "dark" | "light";

type SectionCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

function SectionCard({ title, children, className }: SectionCardProps) {
  return (
    <section
      className={`pdf-section mb-4 overflow-visible rounded-md border last:mb-0 ${className ?? ""}`}
      style={{
        breakInside: "avoid",
        pageBreakInside: "avoid",
        borderColor: "var(--line)",
        background: "var(--panel)",
      }}
    >
      <header
        className="border-b px-3.5 py-2.5 text-sm font-semibold tracking-wide"
        style={{
          borderColor: "var(--line)",
          background: "var(--panel-2)",
          color: "var(--accent)",
        }}
      >
        {title}
      </header>
      <div className="overflow-visible p-3.5">{children}</div>
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

export default function PdfExportLayout({ theme }: { theme: PdfTheme }) {
  const rootStyle = {
    width: "960px",
    fontFamily:
      "JetBrains Mono, Fira Code, Cascadia Code, ui-monospace, SFMono-Regular, Menlo, monospace",
    lineHeight: 1.33,
    background: theme === "light" ? "#f4f7fb" : "#05070a",
    color: theme === "light" ? "#0f172a" : "#d1fae5",
    "--panel": theme === "light" ? "#ffffff" : "#070d12",
    "--panel-2": theme === "light" ? "#eef3f9" : "#091118",
    "--text": theme === "light" ? "#0f172a" : "#d1fae5",
    "--muted": theme === "light" ? "#475569" : "#9ca3af",
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
    <div id="pdf-export-layout" className="p-[18px]" style={rootStyle}>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <SectionCard title="About" className="mb-0">
          <section className="space-y-2.5" style={{ color: "var(--text)" }}>
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

        <SectionCard title="Professional Summary" className="mb-0">
          <section className="space-y-2.5" style={{ color: "var(--text)" }}>
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

      <SectionCard title="Experience" className="mb-4">
        <section className="space-y-2.5" style={{ color: "var(--text)" }}>
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="pdf-breakpoint rounded border p-2.5"
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
                  className="shrink-0 text-[11px]"
                  style={{ color: "var(--muted)" }}
                >
                  {job.period}
                </p>
              </div>

              {job.impact ? (
                <p
                  className="mt-1 text-[11px] leading-relaxed"
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
                  className="mt-1 text-[11px] leading-relaxed"
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
                items={job.points.slice(0, 4)}
                className="mt-1.5 space-y-0.5 text-xs leading-relaxed"
              />
            </article>
          ))}
        </section>
      </SectionCard>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="Core Expertise" className="mb-0">
          <BulletList
            items={expertise.map((item) => item.label)}
            className="space-y-0.5 text-xs"
          />
        </SectionCard>

        <SectionCard title="Technical Stack" className="mb-0">
          <section className="space-y-1.5" style={{ color: "var(--text)" }}>
            {stack.map((group) => (
              <p key={group.title} className="text-[11px] leading-relaxed">
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {group.title}:
                </span>{" "}
                {group.items.join(", ")}
              </p>
            ))}
          </section>
        </SectionCard>

        <SectionCard title="Selected Products & Leadership" className="mb-0">
          <section className="space-y-2" style={{ color: "var(--text)" }}>
            {productsLeadership.map((item) => (
              <article key={`${item.company}-${item.name}`}>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {item.name}
                </p>
                <p className="text-[11px]" style={{ color: "var(--muted)" }}>
                  {item.company}
                </p>
                <p className="text-[11px] leading-relaxed">{item.summary}</p>
              </article>
            ))}
          </section>
        </SectionCard>

        <SectionCard
          title="Selected Research & Engineering Projects"
          className="mb-0"
        >
          <section className="space-y-2" style={{ color: "var(--text)" }}>
            {projects.slice(0, 4).map((p) => (
              <article key={p.name}>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {p.name}
                </p>
                <p className="text-[11px] leading-relaxed">{p.summary}</p>
                <p className="text-[11px]" style={{ color: "var(--muted)" }}>
                  Stack: {p.stack.join(", ")}
                </p>
              </article>
            ))}
          </section>
        </SectionCard>

        <SectionCard title="Leadership Strengths" className="mb-0">
          <BulletList
            items={strengths.map((item) => item.label)}
            className="space-y-0.5 text-xs"
          />
        </SectionCard>

        <SectionCard title="Education" className="mb-0">
          <section className="space-y-1.5" style={{ color: "var(--text)" }}>
            {education.map((e) => (
              <article key={`${e.school}-${e.degree}`}>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {e.degree}
                </p>
                <p className="text-[11px]">{e.school}</p>
                <p className="text-[11px]" style={{ color: "var(--muted)" }}>
                  {e.period}
                </p>
              </article>
            ))}
          </section>
        </SectionCard>

        <SectionCard title="Research Interests" className="mb-0">
          <BulletList
            items={researchInterests}
            className="space-y-0.5 text-xs"
          />
        </SectionCard>

        <SectionCard title="Certificates" className="mb-0">
          <BulletList items={certs} className="space-y-0.5 text-xs" />
        </SectionCard>
      </div>
    </div>
  );
}

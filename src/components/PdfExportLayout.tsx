import type { ReactNode } from "react";
import AsciiName from "./AsciiName";
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
} from "../data/content";

type PdfTheme = "dark" | "light";

type SectionCardProps = {
  title: string;
  children: ReactNode;
};

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section
      className="pdf-section mb-[18px] overflow-visible rounded-md border last:mb-0"
      style={{
        breakInside: "avoid",
        pageBreakInside: "avoid",
        borderColor: "var(--line)",
        background: "var(--panel)",
      }}
    >
      <header
        className="border-b px-4 py-[7px] text-xs uppercase tracking-wider"
        style={{
          borderColor: "var(--line)",
          background: "var(--panel-2)",
          color: "var(--accent)",
        }}
      >
        {title}.sys
      </header>
      <div className="overflow-visible p-[14px]">{children}</div>
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
  return (
    <div
      id="pdf-export-layout"
      className="p-[22px]"
      style={{
        width: "960px",
        fontFamily:
          "JetBrains Mono, Fira Code, Cascadia Code, ui-monospace, SFMono-Regular, Menlo, monospace",
        lineHeight: 1.4,
        background: theme === "light" ? "#f4f7fb" : "#05070a",
        color: theme === "light" ? "#0f172a" : "#d1fae5",
        ["--panel" as "--panel"]: theme === "light" ? "#ffffff" : "#070d12",
        ["--panel-2" as "--panel-2"]: theme === "light" ? "#eef3f9" : "#091118",
        ["--text" as "--text"]: theme === "light" ? "#0f172a" : "#d1fae5",
        ["--muted" as "--muted"]: theme === "light" ? "#475569" : "#9ca3af",
        ["--accent" as "--accent"]: theme === "light" ? "#0f766e" : "#34d399",
        ["--line" as "--line"]:
          theme === "light"
            ? "rgba(16, 185, 129, 0.28)"
            : "rgba(74, 222, 128, 0.25)",
        ["--surface-tint-1" as "--surface-tint-1"]:
          theme === "light"
            ? "rgba(15, 118, 110, 0.06)"
            : "rgba(16, 185, 129, 0.08)",
      }}
    >
      <SectionCard title="About">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2 className="sr-only">{profile.name}</h2>
          <AsciiName preClassName="m-0 whitespace-pre text-[8.5px] leading-[1.18] tracking-[0.01em] font-semibold" />
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--accent)" }}
          >
            {profile.name}
          </p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {profile.role}
          </p>
          <p className="text-sm">{profile.tagline}</p>

          <div
            className="space-y-1 text-xs [overflow-wrap:anywhere]"
            style={{ color: "var(--muted)" }}
          >
            <p>location: {profile.location}</p>
            <p>phone: {profile.phone}</p>
            <p className="break-all">email: {profile.email}</p>
            <p className="break-all">github: {profile.github}</p>
            <p className="break-all">codeberg: {profile.codeberg}</p>
            <p className="break-all">linkedin: {profile.linkedin}</p>
          </div>
        </section>
      </SectionCard>

      <SectionCard title="Professional Summary">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Professional Summary
          </h2>

          <p className="text-sm leading-relaxed">
            Senior AI Engineer and Team Lead with 9+ years of experience
            delivering production AI systems from architecture through
            operations.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Specializing in LLM systems, Rust-based agent orchestration, and
            Kubernetes-native AI infrastructure.
          </p>

          <BulletList
            className="space-y-1 text-sm"
            items={[
              "Led end-to-end delivery from product requirements to AI architecture, deployment, and production operations.",
              "Built and operated a platform AI backbone (LLM services, agent workflows, and lifecycle automation) in live environments.",
              "Developed a production-grade Rust multi-agent orchestrator for high-throughput, memory-safe execution.",
              "Led cross-functional execution across research, engineering, and product to convert prototypes into customer-facing capabilities.",
              "Designed cloud-native deployment patterns (Docker and Kubernetes) to improve release consistency and operability.",
              "Hands-on across Python, Rust, C++, PyTorch/TensorFlow, distributed training, and evolutionary computation.",
            ]}
          />
        </section>
      </SectionCard>

      <SectionCard title="Experience">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Experience
          </h2>

          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="pdf-breakpoint rounded border p-3"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-tint-1)",
              }}
            >
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {job.role}
              </h3>
              <p className="text-sm" style={{ color: "var(--text)" }}>
                {job.company}
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {job.location} • {job.period}
              </p>

              <BulletList
                items={job.points}
                className="mt-2 space-y-1 text-sm leading-relaxed"
              />
            </article>
          ))}
        </section>
      </SectionCard>

      <SectionCard title="Core Expertise">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Core Expertise
          </h2>
          <BulletList
            items={expertise.map((item) => item.label)}
            className="space-y-1 text-sm"
          />
        </section>
      </SectionCard>

      <SectionCard title="Technical Stack">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Technical Stack
          </h2>

          {stack.map((group) => (
            <article
              key={group.title}
              className="rounded border p-3"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-tint-1)",
              }}
            >
              <h3
                className="text-xs uppercase tracking-wider"
                style={{ color: "var(--accent)" }}
              >
                {group.title}
              </h3>
              <p className="mt-1 text-sm [overflow-wrap:anywhere]">
                {group.items.join(", ")}
              </p>
            </article>
          ))}
        </section>
      </SectionCard>

      <SectionCard title="Selected Research & Engineering Projects">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Selected Research & Engineering Projects
          </h2>

          {projects.map((p) => (
            <article
              key={p.name}
              className="rounded border p-3"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-tint-1)",
              }}
            >
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {p.name}
              </h3>
              <p className="mt-1 text-sm">{p.summary}</p>
              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                Stack: {p.stack.join(", ")}
              </p>
            </article>
          ))}
        </section>
      </SectionCard>

      <SectionCard title="Selected Products & Leadership">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Selected Products & Leadership
          </h2>

          {productsLeadership.map((item) => (
            <article
              key={`${item.company}-${item.name}`}
              className="rounded border p-3"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-tint-1)",
              }}
            >
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {item.name}
              </h3>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {item.company}
              </p>
              <p className="mt-1 text-sm">{item.summary}</p>
            </article>
          ))}
        </section>
      </SectionCard>

      <SectionCard title="Leadership strengths">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Leadership strengths
          </h2>
          <BulletList
            items={strengths.map((item) => item.label)}
            className="space-y-1 text-sm"
          />
        </section>
      </SectionCard>

      <SectionCard title="Education">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Education
          </h2>

          {education.map((e) => (
            <article
              key={`${e.school}-${e.degree}`}
              className="rounded border p-3"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-tint-1)",
              }}
            >
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {e.degree}
              </h3>
              <p className="text-sm">{e.school}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {e.period}
              </p>
            </article>
          ))}
        </section>
      </SectionCard>

      <SectionCard title="Certificates">
        <section className="space-y-3" style={{ color: "var(--text)" }}>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Certificates
          </h2>
          <BulletList items={certs} className="space-y-1 text-sm" />
        </section>
      </SectionCard>
    </div>
  );
}

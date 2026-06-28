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
import { researchInterests } from "../../data/content";

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

export default function ResearchInterestsWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Research Interests
      </h2>

      <p className="text-xs" style={{ color: "var(--muted)" }}>
        Current focus areas guiding research and production experimentation.
      </p>

      <div className="grid grid-cols-1 gap-2.5">
        {researchInterests.map((item) => {
          const Icon = getResearchInterestIcon(item);

          return (
            <article
              key={item}
              className="rounded border p-3"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-tint-1)",
              }}
            >
              <div className="flex items-start gap-2.5">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--panel-2)",
                    color: "var(--accent)",
                  }}
                  aria-hidden="true"
                >
                  <Icon size={12} strokeWidth={2} />
                </span>
                <p
                  className="min-w-0 text-sm leading-tight [overflow-wrap:anywhere]"
                  style={{ color: "var(--text)" }}
                >
                  {item}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

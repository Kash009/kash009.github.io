import { researchInterests } from "../../data/content";

export default function ResearchInterestsWindow() {
  return (
    <section className="space-y-4" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Research Interests
      </h2>

      <p className="text-sm" style={{ color: "var(--muted)" }}>
        Areas I actively explore through experiments, prototypes, and production
        system design.
      </p>

      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
        {researchInterests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

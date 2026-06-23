import { education } from "../../data/content";

export default function EducationWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Education
      </h2>

      <div className="space-y-2">
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
            <p className="text-sm" style={{ color: "var(--text)" }}>
              {e.school}
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              {e.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

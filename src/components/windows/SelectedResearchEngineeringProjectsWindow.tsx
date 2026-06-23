import { projects } from "../../data/content";

export default function ProjectsWindow() {
  return (
    <section className="space-y-4" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
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

          <p className="mt-1 text-xs" style={{ color: "var(--text)" }}>
            {p.summary}
          </p>

          {/* <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>impact: {p.impact}</p> */}

          <div className="mt-2 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span
                key={t}
                className="rounded border px-2 py-0.5 text-[10px]"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--text)",
                  background: "var(--surface-tint-2)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

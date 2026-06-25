import { experience } from "../../data/content";

export default function ExperienceWindow() {
  return (
    <section className="space-y-4" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Experience
      </h2>

      {experience.map((job) => (
        <article
          key={`${job.company}-${job.role}`}
          className="rounded border p-4"
          style={{
            borderColor: "var(--line)",
            background: "var(--surface-tint-1)",
          }}
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0 [overflow-wrap:anywhere]">
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {job.role}
              </h3>
              <p className="text-sm" style={{ color: "var(--text)" }}>
                {job.company} • {job.location}
              </p>
            </div>
            <span
              className="shrink-0 text-xs"
              style={{ color: "var(--muted)" }}
            >
              {job.period}
            </span>
          </div>

          {job.impact && (
            <div
              className="mt-3 rounded border px-3 py-2"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-tint-2)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-wider"
                style={{ color: "var(--accent)" }}
              >
                Impact
              </p>
              <p
                className="mt-1 text-xs leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                {job.impact}
              </p>
            </div>
          )}

          {job.stack?.length ? (
            <p
              className="mt-2 text-sm leading-relaxed"
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

          <ul
            className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed"
            style={{ color: "var(--text)" }}
          >
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

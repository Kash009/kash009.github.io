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

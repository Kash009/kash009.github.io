import { expertise } from "../../data/content";

export default function CoreExpertiseWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Core Expertise
      </h2>

      <p className="text-xs" style={{ color: "var(--muted)" }}>
        Key capability areas across AI engineering, platform architecture, and
        production delivery.
      </p>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {expertise.map(({ label, icon: Icon }) => (
          <article
            key={label}
            className="rounded border p-3"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-tint-1)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded border"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--surface-tint-2)",
                }}
              >
                <Icon
                  size={15}
                  strokeWidth={2}
                  style={{ color: "var(--accent)" }}
                />
              </span>

              <div className="min-w-0">
                <p
                  className="text-sm font-medium leading-tight [overflow-wrap:anywhere]"
                  style={{ color: "var(--text)" }}
                >
                  {label}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

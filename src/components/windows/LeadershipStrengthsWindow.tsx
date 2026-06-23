import { strengths } from "../../data/content";

export default function LeadershipStrengthsWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Leadership strengths
      </h2>

      <div className="grid grid-cols-1 gap-2">
        {strengths.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded border px-3 py-2 text-sm"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-tint-1)",
              color: "var(--text)",
            }}
          >
            <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center pdf-icon-fix">
              <Icon
                size={14}
                strokeWidth={2}
                style={{ color: "var(--accent)" }}
              />
            </span>
            <span className="min-w-0 leading-tight [overflow-wrap:anywhere]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

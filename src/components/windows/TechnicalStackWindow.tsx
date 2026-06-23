import { stack } from "../../data/content";

export default function TechnicalStackWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Technical Stack
      </h2>

      {stack.map(({ title, icon: Icon, items }) => (
        <div
          key={title}
          className="rounded border p-3"
          style={{
            borderColor: "var(--line)",
            background: "var(--surface-tint-1)",
          }}
        >
          <h3
            className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider"
            style={{ color: "var(--accent)" }}
          >
            <Icon size={14} style={{ color: "var(--accent)" }} />
            <span>{title}</span>
          </h3>

          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded border px-2 py-0.5 text-[11px]"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--text)",
                  background: "var(--surface-tint-2)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

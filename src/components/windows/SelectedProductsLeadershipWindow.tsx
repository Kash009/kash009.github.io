import { productsLeadership } from "../../data/content";

export default function SelectedProductsLeadershipWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Selected Products & Leadership
      </h2>

      <div className="space-y-2">
        {productsLeadership.map(({ name, company, icon: Icon, summary }) => (
          <article
            key={`${company}-${name}`}
            className="rounded border p-3"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-tint-1)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center pdf-icon-fix">
                <Icon
                  size={14}
                  strokeWidth={2}
                  style={{ color: "var(--accent)" }}
                />
              </span>

              <h3
                className="text-sm font-semibold leading-tight"
                style={{ color: "var(--accent)" }}
              >
                {name}
              </h3>

              <span
                className="text-xs leading-tight"
                style={{ color: "var(--muted)" }}
              >
                • {company}
              </span>
            </div>

            <p
              className="mt-1 text-sm leading-relaxed"
              style={{ color: "var(--text)" }}
            >
              {summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

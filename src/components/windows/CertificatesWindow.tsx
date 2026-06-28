import { certsByInstitute } from "../../data/content";

export default function CertificatesWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Certificates
      </h2>

      <p className="text-xs" style={{ color: "var(--muted)" }}>
        Grouped by issuing institute for easier scanning.
      </p>

      <div className="space-y-2.5">
        {certsByInstitute.map(({ institute, items }) => (
          <article
            key={institute}
            className="rounded border p-3"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-tint-1)",
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <h3
                className="text-xs uppercase tracking-wider"
                style={{ color: "var(--accent)" }}
              >
                {institute}
              </h3>
              <span
                className="rounded border px-1.5 py-0.5 text-[10px]"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--surface-tint-2)",
                  color: "var(--muted)",
                }}
              >
                {items.length} cert{items.length > 1 ? "s" : ""}
              </span>
            </div>

            <ul className="mt-2 space-y-1.5">
              {items.map((item) => (
                <li
                  key={`${institute}-${item}`}
                  className="flex items-start gap-2"
                >
                  <span
                    className="mt-[0.38rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <span className="min-w-0 text-sm leading-snug [overflow-wrap:anywhere]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

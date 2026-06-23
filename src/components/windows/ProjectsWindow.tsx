import { projects } from "../../data/content";

export default function ProjectsWindow() {
  return (
    <section className="space-y-4 text-emerald-100">
      <h2 className="text-lg font-semibold text-emerald-300">/projects</h2>
      {projects.map((p) => (
        <article
          key={p.name}
          className="rounded border border-emerald-400/20 bg-emerald-400/5 p-3"
        >
          <h3 className="text-sm font-semibold text-emerald-300">{p.name}</h3>
          <p className="mt-1 text-xs text-emerald-100/90">{p.summary}</p>
          <p className="mt-2 text-xs text-emerald-300">impact: {p.impact}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span
                key={t}
                className="rounded border border-emerald-400/25 px-2 py-0.5 text-[10px] text-emerald-200"
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

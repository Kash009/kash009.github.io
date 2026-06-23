import { skills } from "../../data/content";

export default function SkillsWindow() {
  return (
    <section className="space-y-3 text-emerald-100">
      <h2 className="text-lg font-semibold text-emerald-300">/skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div
          key={category}
          className="rounded border border-emerald-400/20 bg-emerald-400/5 p-3"
        >
          <h3 className="mb-2 text-xs uppercase tracking-wider text-emerald-300">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded border border-emerald-400/25 px-2 py-0.5 text-[10px] text-emerald-200"
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

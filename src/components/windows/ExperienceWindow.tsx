import { experience } from "../../data/content";

export default function ExperienceWindow() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-100">Experience</h2>
      {experience.map((job) => (
        <article
          key={job.company}
          className="rounded-xl border border-white/10 bg-white/5 p-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-cyan-300">
                {job.role}
              </h3>
              <p className="text-sm text-slate-300">{job.company}</p>
            </div>
            <span className="text-xs text-slate-400">{job.period}</span>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default function ResumeWindow() {
  return (
    <section className="space-y-4 text-slate-200">
      <h2 className="text-xl font-semibold text-slate-100">Resume</h2>
      <p className="text-sm text-slate-300">
        Add your resume PDF to <code>public/resume.pdf</code> and use the
        buttons below.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="/resume.pdf"
          target="_blank"
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400"
        >
          View Resume
        </a>
        <a
          href="/resume.pdf"
          download
          className="rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-400/20"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

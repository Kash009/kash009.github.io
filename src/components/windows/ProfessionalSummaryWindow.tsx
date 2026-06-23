export default function ProfessionalSummaryWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Professional Summary
      </h2>

      <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
        Senior AI Engineer and team lead with 9+ years of experience building
        production-grade AI systems, LLM applications, agent orchestration
        frameworks, and custom machine learning infrastructure.
      </p>

      <ul
        className="list-disc space-y-1 pl-5 text-sm"
        style={{ color: "var(--text)" }}
      >
        <li>
          Strong hands on expertise across Python, Rust, C++, Kubernetes, cloud
          deployment, GPU acceleration, evolutionary computation, and applied
          research.
        </li>
        <li>
          Led AI initiatives for Flexzo, Healsgood and AiFi, translating
          advanced research into scalable products across healthcare,
          recommendation systems, pattern generation, and intelligent platforms.
        </li>
        <li>Strong end-to-end ownership from prototype to production</li>
        <li>
          Experienced in cross-functional collaboration and technical leadership
        </li>
      </ul>
    </section>
  );
}

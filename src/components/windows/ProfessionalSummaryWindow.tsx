export default function ProfessionalSummaryWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Professional Summary
      </h2>

      <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
        Senior AI Engineer and Team Lead with 9+ years of experience delivering
        production AI systems from architecture through operations.
      </p>

      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        Specializing in LLM systems, Rust-based agent orchestration, and
        Kubernetes-native AI infrastructure.
      </p>

      <ul
        className="list-disc space-y-1 pl-5 text-sm"
        style={{ color: "var(--text)" }}
      >
        <li>
          Led end-to-end delivery from product requirements to AI architecture,
          deployment, and production operations.
        </li>
        <li>
          Built and operated a platform AI backbone (LLM services, agent
          workflows, and lifecycle automation) in live environments.
        </li>
        <li>
          Developed a production-grade Rust multi-agent orchestrator for
          high-throughput, memory-safe execution.
        </li>
        <li>
          Led cross-functional execution across research, engineering, and
          product to convert prototypes into customer-facing capabilities.
        </li>
        <li>
          Designed cloud-native deployment patterns (Docker and Kubernetes) to
          improve release consistency and operability.
        </li>
        <li>
          Hands-on across Python, Rust, C++, PyTorch/TensorFlow, distributed
          training, and evolutionary computation.
        </li>
      </ul>
    </section>
  );
}

import { certs } from "../../data/content";

export default function CertificatesWindow() {
  return (
    <section className="space-y-3" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Certificates
      </h2>

      <ul
        className="list-disc space-y-1 pl-5 text-sm"
        style={{ color: "var(--text)" }}
      >
        {certs.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}

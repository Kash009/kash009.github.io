import { ExternalLink } from "lucide-react";
import { profile } from "../../data/content";

const personalProjectLinks = [
  {
    label: "GitHub",
    href: profile.github,
    description: "Open-source repositories and personal experiments",
  },
  {
    label: "Codeberg",
    href: profile.codeberg,
    description: "Mirror and actively maintained personal projects",
  },
];

export default function PersonalProjectsWindow() {
  return (
    <section className="space-y-4" style={{ color: "var(--text)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
        Personal Projects
      </h2>

      <p className="text-sm" style={{ color: "var(--muted)" }}>
        Browse personal and open-source work on GitHub and Codeberg.
      </p>

      <div className="space-y-3">
        {personalProjectLinks.map((link) => (
          <article
            key={link.label}
            className="rounded border p-3"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-tint-1)",
            }}
          >
            <h3 className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
              {link.label}
            </h3>
            <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
              {link.description}
            </p>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 break-all text-xs hover:underline"
              style={{ color: "var(--text)" }}
            >
              {link.href}
              <ExternalLink size={12} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

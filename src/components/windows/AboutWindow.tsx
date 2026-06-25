import AsciiName from "../AsciiName";
import { profile } from "../../data/content";

export default function AboutWindow() {
  return (
    <section className="space-y-4" style={{ color: "var(--text)" }}>
      <h2 className="sr-only">{profile.name}</h2>
      <AsciiName />
      <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
        {profile.name}
      </p>
      <p className="text-sm" style={{ color: "var(--muted)" }}>
        {profile.role}
      </p>
      <p className="text-sm">{profile.tagline}</p>

      <div
        className="space-y-1 text-xs [overflow-wrap:anywhere]"
        style={{ color: "var(--muted)" }}
      >
        <p>location: {profile.location}</p>
        <p>phone: {profile.phone}</p>
        <a
          href={`mailto:${profile.email}`}
          className="block break-all hover:underline"
        >
          email: {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="block break-all hover:underline"
        >
          github: {profile.github}
        </a>
        <a
          href={profile.codeberg}
          target="_blank"
          rel="noreferrer"
          className="block break-all hover:underline"
        >
          codeberg: {profile.codeberg}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="block break-all hover:underline"
        >
          linkedin: {profile.linkedin}
        </a>
      </div>
    </section>
  );
}

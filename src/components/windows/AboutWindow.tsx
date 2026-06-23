import { profile } from "../../data/content";

export default function AboutWindow() {
  return (
    <section className="space-y-4 text-emerald-100">
      <h2 className="text-xl font-semibold text-emerald-300">{profile.name}</h2>
      <p className="text-sm text-emerald-200">{profile.role}</p>
      <p className="text-sm text-emerald-100/90">{profile.tagline}</p>

      <div className="space-y-1 text-xs text-emerald-300/80">
        <p>location: {profile.location}</p>
        <p>email: {profile.email}</p>
        <a
          className="block hover:text-emerald-200"
          href={profile.github}
          target="_blank"
        >
          github: {profile.github}
        </a>
        <a
          className="block hover:text-emerald-200"
          href={profile.linkedin}
          target="_blank"
        >
          linkedin: {profile.linkedin}
        </a>
      </div>
    </section>
  );
}

import { profile } from "../../data/content";

export default function ContactWindow() {
  return (
    <section className="space-y-4 text-slate-200">
      <h2 className="text-xl font-semibold text-slate-100">Contact</h2>
      <p className="text-sm text-slate-300">
        I’m open to AI Engineer roles, freelance ML projects, and
        collaborations.
      </p>

      <div className="space-y-2 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="block hover:text-cyan-300"
        >
          Email: {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          className="block hover:text-cyan-300"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          className="block hover:text-cyan-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

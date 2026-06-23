import { profile } from "../../data/content";

export default function TerminalWindow() {
  return (
    <section className="h-full rounded-xl border border-emerald-400/20 bg-black/60 p-4 font-mono text-sm text-emerald-300">
      <p>$ whoami</p>
      <p className="mb-3 text-emerald-200">{profile.name} - AI Engineer</p>

      <p>$ cat mission.txt</p>
      <p className="mb-3 text-emerald-200">
        Build reliable AI products that solve real business problems.
      </p>

      <p>$ ls skills/</p>
      <p className="text-emerald-200">
        llm-rag mlops model-serving backend cloud-observability
      </p>
    </section>
  );
}

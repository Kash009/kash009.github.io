export default function MainWindow() {
  return (
    <div className="flex-1 p-6 bg-[#0B0F14] overflow-y-auto">
      <div
        className="
        border border-white/10
        rounded-2xl
        bg-[#0F141B]
        p-6
        shadow-2xl
      "
      >
        <h1 className="text-xl font-semibold">AI Engineer & System Designer</h1>

        <p className="text-white/60 mt-2">
          Building LLM systems, RAG pipelines, and intelligent products.
        </p>

        {/* STATUS CARDS */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <Card title="Models" value="LLM / CV / NLP" />
          <Card title="Experience" value="5+ Years" />
          <Card title="Systems" value="Production AI" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      className="
      border border-white/10
      rounded-xl
      p-4
      bg-white/5
    "
    >
      <div className="text-xs text-white/40">{title}</div>
      <div className="text-sm mt-1">{value}</div>
    </div>
  );
}

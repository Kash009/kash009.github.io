const items = ["Overview", "Experience", "Projects", "Skills", "Contact"];

export default function Sidebar() {
  return (
    <div
      className="
      w-60
      border-r border-white/10
      bg-[#0F141B]
      p-4
      space-y-2
    "
    >
      <div className="text-xs text-white/40 mb-4">SYSTEM NAVIGATION</div>

      {items.map((item) => (
        <div
          key={item}
          className="
            px-3 py-2
            rounded-lg
            text-sm
            text-white/70
            hover:bg-white/5
            cursor-pointer
            transition
          "
        >
          {item}
        </div>
      ))}
    </div>
  );
}

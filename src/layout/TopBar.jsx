export default function TopBar() {
  return (
    <div
      className="
      h-12
      flex items-center justify-between
      px-5
      border-b border-white/10
      bg-[#0F141B]
      backdrop-blur-xl
    "
    >
      {/* LEFT: SYSTEM DOTS */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      {/* CENTER: SYSTEM TITLE */}
      <div className="text-xs text-white/50 tracking-widest">
        AI PORTFOLIO OS
      </div>

      {/* RIGHT: STATUS */}
      <div className="text-xs text-green-400 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        ONLINE
      </div>
    </div>
  );
}

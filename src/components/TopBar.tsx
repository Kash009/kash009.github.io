type Props = {
  focusedTitle?: string;
  onExportPdf?: () => void;
  exportingPdf?: boolean;
  layoutMode: "tiling" | "floating";
  onToggleLayoutMode: () => void;
};

export default function TopBar({
  focusedTitle,
  onExportPdf,
  exportingPdf = false,
  layoutMode,
  onToggleLayoutMode,
}: Props) {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] flex h-10 items-center justify-between border-b border-emerald-400/20 bg-[#070b10]/85 px-4 backdrop-blur-xl">
      <div className="text-xs uppercase tracking-[0.2em] text-emerald-300">
        Terminal OS
      </div>

      <div className="text-xs text-emerald-200/80">
        {focusedTitle
          ? `session://${focusedTitle.toLowerCase()}`
          : "session://desktop"}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onToggleLayoutMode}
          className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] uppercase tracking-wider text-emerald-200 hover:bg-emerald-400/20"
          title="Toggle layout mode"
        >
          {layoutMode === "tiling" ? "Tiling" : "Floating"}
        </button>

        <button
          onClick={onExportPdf}
          disabled={exportingPdf}
          className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] uppercase tracking-wider text-emerald-200 hover:bg-emerald-400/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {exportingPdf ? "Exporting..." : "Export PDF"}
        </button>

        <div className="text-xs text-emerald-300/90">{time}</div>
      </div>
    </header>
  );
}

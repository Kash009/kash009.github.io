// src/components/TopBar.tsx
type Props = {
  focusedTitle?: string;
  onExportPdf?: () => void;
  exportingPdf?: boolean;
  layoutMode: "tiling" | "floating";
  onToggleLayoutMode: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function TopBar({
  focusedTitle,
  onExportPdf,
  exportingPdf = false,
  layoutMode,
  onToggleLayoutMode,
  theme,
  onToggleTheme,
}: Props) {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header
      className="sticky inset-x-0 top-0 z-[1200] flex h-[50px] items-center gap-2 px-2 sm:px-4 backdrop-blur-md"
      style={{
        borderBottom: "1px solid var(--line)",
        background: "var(--panel-2)",
      }}
    >
      <div
        className="shrink-0 text-[10px] uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.2em]"
        style={{ color: "var(--accent)" }}
      >
        Terminal OS
      </div>

      <div
        className="hidden min-w-0 flex-1 truncate text-xs md:block"
        style={{ color: "var(--muted)" }}
      >
        {focusedTitle
          ? `session://${focusedTitle.toLowerCase()}`
          : "session://desktop"}
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <button
          onClick={onToggleTheme}
          className="inline-flex touch-manipulation whitespace-nowrap rounded px-1.5 py-1 text-[10px] uppercase tracking-wider sm:px-2"
          style={{
            border: "1px solid var(--line)",
            background: "var(--surface-tint-2)",
            color: "var(--text)",
          }}
          title="Toggle theme"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <button
          onClick={onToggleLayoutMode}
          className="hidden touch-manipulation rounded px-2 py-1 text-[10px] uppercase tracking-wider md:inline-flex"
          style={{
            border: "1px solid var(--line)",
            background: "var(--surface-tint-2)",
            color: "var(--text)",
          }}
          title="Toggle layout mode"
        >
          {layoutMode === "tiling" ? "Tiling" : "Floating"}
        </button>

        <button
          onClick={onExportPdf}
          disabled={exportingPdf}
          className="touch-manipulation whitespace-nowrap rounded px-2 py-1 text-[10px] uppercase tracking-wider disabled:cursor-not-allowed disabled:opacity-60"
          style={{
            border: "1px solid var(--line)",
            background: "var(--surface-tint-2)",
            color: "var(--text)",
          }}
        >
          {exportingPdf ? "Exporting..." : "Export PDF"}
        </button>

        <div
          className="hidden text-xs sm:block"
          style={{ color: "var(--muted)" }}
        >
          {time}
        </div>
      </div>
    </header>
  );
}

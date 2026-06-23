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
      className="fixed inset-x-0 top-0 z-[1000] flex h-10 items-center justify-between px-4 backdrop-blur-xl"
      style={{
        borderBottom: "1px solid var(--line)",
        background: "var(--panel-2)",
      }}
    >
      <div
        className="text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--accent)" }}
      >
        Terminal OS
      </div>

      <div className="text-xs" style={{ color: "var(--muted)" }}>
        {focusedTitle
          ? `session://${focusedTitle.toLowerCase()}`
          : "session://desktop"}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onToggleTheme}
          className="rounded px-2 py-1 text-[10px] uppercase tracking-wider"
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
          className="rounded px-2 py-1 text-[10px] uppercase tracking-wider"
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
          className="rounded px-2 py-1 text-[10px] uppercase tracking-wider disabled:cursor-not-allowed disabled:opacity-60"
          style={{
            border: "1px solid var(--line)",
            background: "var(--surface-tint-2)",
            color: "var(--text)",
          }}
        >
          {exportingPdf ? "Exporting..." : "Export PDF"}
        </button>

        <div className="text-xs" style={{ color: "var(--muted)" }}>
          {time}
        </div>
      </div>
    </header>
  );
}

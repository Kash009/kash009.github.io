import { useEffect, useMemo, useState } from "react";

type Props = {
  onComplete: () => void;
  minDurationMs?: number;
};

const bootLines = [
  "[ OK ] Initializing Terminal OS kernel...",
  "[ OK ] Mounting /portfolio filesystem...",
  "[ OK ] Loading AI Engineer modules...",
  "[ OK ] Starting window manager...",
  "[ OK ] Syncing recruiter view...",
  "[ OK ] System ready.",
];

export default function BootLoader({
  onComplete,
  minDurationMs = 2200,
}: Props) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);

  const lineInterval = useMemo(
    () => Math.max(180, Math.floor(minDurationMs / (bootLines.length + 2))),
    [minDurationMs],
  );

  useEffect(() => {
    const start = Date.now();

    const lineTimer = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= bootLines.length) {
          clearInterval(lineTimer);
          return v;
        }
        return v + 1;
      });
    }, lineInterval);

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / minDurationMs) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(progressTimer);
        setTimeout(onComplete, 220);
      }
    }, 40);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
    };
  }, [lineInterval, minDurationMs, onComplete]);

  return (
    <div className="terminal-scanlines terminal-vignette fixed inset-0 z-[3000] flex items-center justify-center bg-[#05070a]">
      <div className="w-[92%] max-w-2xl rounded-md border border-emerald-400/30 bg-[#070d12]/95 p-5 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
        <div className="mb-4 flex items-center justify-between border-b border-emerald-400/20 pb-2">
          <span className="text-xs uppercase tracking-widest text-emerald-300">
            Boot Sequence
          </span>
          <span className="text-xs text-emerald-200/80">v1.0.0</span>
        </div>

        <div className="space-y-1 font-mono text-xs text-emerald-200">
          {bootLines.slice(0, visibleLines).map((line) => (
            <p key={line}>{line}</p>
          ))}
          {visibleLines < bootLines.length && (
            <p className="animate-pulse text-emerald-400">▋</p>
          )}
        </div>

        <div className="mt-5">
          <div className="mb-1 flex items-center justify-between text-[11px] text-emerald-300/90">
            <span>Loading system</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded bg-emerald-900/30">
            <div
              className="h-full bg-emerald-400 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

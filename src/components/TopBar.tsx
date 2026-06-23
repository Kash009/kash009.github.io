type Props = {
  focusedTitle?: string;
};

export default function TopBar({ focusedTitle }: Props) {
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
      <div className="text-xs text-emerald-300/90">{time}</div>
    </header>
  );
}

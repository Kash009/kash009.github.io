import { motion } from "framer-motion";
import { AppDefinition } from "../types";

type Props = {
  app: AppDefinition;
  onOpen: (id: AppDefinition["id"]) => void;
};

export default function DesktopIcon({ app, onOpen }: Props) {
  const Icon = app.icon;

  return (
    <button
      onDoubleClick={() => onOpen(app.id)}
      onClick={() => onOpen(app.id)}
      className="desktop-icon group flex w-28 flex-col items-start gap-2 rounded-md border p-2 text-left text-[11px] transition"
      style={{ borderColor: "transparent", color: "var(--text)" }}
      title={`Open ${app.title}`}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="grid h-10 w-10 place-items-center rounded-md border"
        style={{
          borderColor: "var(--line)",
          background: "var(--panel-2)",
          color: "var(--accent)",
        }}
      >
        <Icon size={17} />
      </motion.div>
      <span className="tracking-wide" style={{ color: "var(--text)" }}>
        {app.title}.exe
      </span>
    </button>
  );
}

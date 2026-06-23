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
      className="group flex w-28 flex-col items-start gap-2 rounded-md border border-emerald-400/0 p-2 text-left text-[11px] text-emerald-200 transition hover:border-emerald-400/30 hover:bg-emerald-400/5"
      title={`Open ${app.title}`}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="grid h-10 w-10 place-items-center rounded-md border border-emerald-400/25 bg-[#0a1117] text-emerald-300"
      >
        <Icon size={17} />
      </motion.div>
      <span className="tracking-wide text-emerald-100/90">{app.title}.exe</span>
    </button>
  );
}

import { appDefinitions } from "../data/apps";
import { WindowId } from "../types";

type Props = {
  onOpen: (id: WindowId) => void;
};

export default function Dock({ onOpen }: Props) {
  return (
    <div
      className="fixed bottom-4 left-1/2 z-[1000] -translate-x-1/2 rounded-md border px-2 py-2 backdrop-blur-xl"
      style={{
        borderColor: "var(--line)",
        background: "var(--panel)",
      }}
    >
      <div className="flex items-center gap-2">
        {appDefinitions.map((app) => {
          const Icon = app.icon;
          return (
            <button
              key={app.id}
              onClick={() => onOpen(app.id)}
              className="dock-button grid h-9 w-9 place-items-center rounded-md border transition hover:-translate-y-0.5"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-tint-1)",
                color: "var(--accent)",
              }}
              title={app.title}
            >
              <Icon size={15} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

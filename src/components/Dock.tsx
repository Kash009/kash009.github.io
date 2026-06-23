import { appDefinitions } from "../data/apps";
import { WindowId } from "../types";

type Props = {
  onOpen: (id: WindowId) => void;
};

export default function Dock({ onOpen }: Props) {
  return (
    <div className="fixed bottom-4 left-1/2 z-[1000] -translate-x-1/2 rounded-md border border-emerald-400/25 bg-[#070d12]/90 px-2 py-2 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        {appDefinitions.map((app) => {
          const Icon = app.icon;
          return (
            <button
              key={app.id}
              onClick={() => onOpen(app.id)}
              className="grid h-9 w-9 place-items-center rounded-md border border-emerald-400/20 bg-emerald-400/5 text-emerald-300 transition hover:-translate-y-0.5 hover:bg-emerald-400/15"
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

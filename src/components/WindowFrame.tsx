// src/components/WindowFrame.tsx
import { Rnd, RndDragCallback, RndResizeCallback } from "react-rnd";
import { Minus, Square, X } from "lucide-react";
import { ReactNode } from "react";
import { WindowState } from "../types";

type Props = {
  win: WindowState;
  isFocused: boolean;
  mobileMode?: boolean;
  onFocus: (id: WindowState["id"]) => void;
  onClose: (id: WindowState["id"]) => void;
  onMinimize: (id: WindowState["id"]) => void;
  onToggleMaximize: (id: WindowState["id"]) => void;
  onDragStop: (id: WindowState["id"], x: number, y: number) => void;
  onResizeStop: (
    id: WindowState["id"],
    width: number,
    height: number,
    x: number,
    y: number,
  ) => void;
  children: ReactNode;
};

export default function WindowFrame({
  win,
  isFocused,
  mobileMode = false,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  onDragStop,
  onResizeStop,
  children,
}: Props) {
  if (!win.isOpen || win.minimized) return null;

  if (mobileMode) {
    return (
      <article
        className="glow-border mb-3 overflow-hidden rounded-md"
        style={{ background: "var(--panel)" }}
      >
        <div
          className="flex h-10 items-center justify-between px-3"
          style={{
            borderBottom: "1px solid var(--line)",
            background: "var(--panel-2)",
          }}
        >
          <div
            className="text-xs uppercase tracking-wider"
            style={{ color: "var(--accent)" }}
          >
            {win.title}.sys
          </div>
          <button
            onClick={() => onClose(win.id)}
            className="grid h-6 w-6 place-items-center rounded border"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-tint-2)",
              color: "var(--text)",
            }}
            aria-label={`Close ${win.title}`}
          >
            <X size={13} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-auto p-4">{children}</div>
      </article>
    );
  }

  const dragStop: RndDragCallback = (_e, d) => onDragStop(win.id, d.x, d.y);

  const resizeStop: RndResizeCallback = (_e, _dir, ref, _delta, pos) => {
    onResizeStop(win.id, ref.offsetWidth, ref.offsetHeight, pos.x, pos.y);
  };

  return (
    <Rnd
      size={{ width: win.width, height: win.height }}
      position={{ x: win.x, y: win.y }}
      minWidth={360}
      minHeight={220}
      bounds="window"
      dragHandleClassName="window-drag-handle"
      cancel=".window-controls,button,a,input,textarea"
      disableDragging={win.maximized}
      enableResizing={!win.maximized}
      style={{
        zIndex: win.z,
        background: "var(--panel)",
      }}
      onDragStart={() => onFocus(win.id)}
      onMouseDown={() => onFocus(win.id)}
      onDragStop={dragStop}
      onResizeStop={resizeStop}
      className="glow-border overflow-hidden rounded-md backdrop-blur-xl"
    >
      <div
        className="window-drag-handle flex h-10 cursor-move items-center justify-between px-3"
        style={{
          borderBottom: "1px solid var(--line)",
          background: "var(--panel-2)",
        }}
      >
        <div
          className="text-xs uppercase tracking-wider"
          style={{ color: "var(--accent)" }}
        >
          {win.title}.sys
        </div>

        <div className="window-controls flex items-center gap-1.5">
          <button
            onClick={() => onMinimize(win.id)}
            className="grid h-6 w-6 place-items-center rounded border"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-tint-2)",
              color: "var(--text)",
            }}
          >
            <Minus size={13} />
          </button>

          <button
            onClick={() => onToggleMaximize(win.id)}
            className="grid h-6 w-6 place-items-center rounded border"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-tint-2)",
              color: "var(--text)",
            }}
          >
            <Square size={11} />
          </button>

          <button
            onClick={() => onClose(win.id)}
            className="grid h-6 w-6 place-items-center rounded border"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-tint-2)",
              color: "var(--text)",
            }}
          >
            <X size={13} />
          </button>
        </div>
      </div>

      <div
        className={`h-[calc(100%-40px)] overflow-auto p-5 ${
          isFocused ? "opacity-100" : "opacity-85"
        }`}
      >
        {children}
      </div>
    </Rnd>
  );
}

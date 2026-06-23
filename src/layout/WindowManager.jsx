import { useState } from "react";
import Window from "./Window";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";

let idCounter = 0;

const componentMap = {
  Home,
  Projects,
  Experience,
  Contact,
};

export default function WindowManager() {
  const [windows, setWindows] = useState([]);

  const openWindow = (type) => {
    const id = idCounter++;

    setWindows((prev) => [
      ...prev,
      {
        id,
        type,
        x: 120 + id * 20,
        y: 80 + id * 20,
        z: id,
      },
    ]);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const updateWindow = (id, data) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, ...data } : w)),
    );
  };

  const bringToFront = (id) => {
    const maxZ = Math.max(...windows.map((w) => w.z), 0);

    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, z: maxZ + 1 } : w)),
    );
  };

  return (
    <div className="w-full h-screen bg-[#0B0F14] overflow-hidden relative">
      {/* SIDEBAR */}
      <div className="absolute left-0 top-0 bottom-0 w-56 border-r border-white/10 bg-[#0F141B] p-4">
        <div className="text-xs text-white/40 mb-4">APPLICATIONS</div>

        {Object.keys(componentMap).map((key) => (
          <div
            key={key}
            onClick={() => openWindow(key)}
            className="px-3 py-2 text-sm text-white/70 hover:bg-white/5 rounded-lg cursor-pointer"
          >
            {key}
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="ml-56 relative w-full h-full">
        {windows.map((win) => {
          const Component = componentMap[win.type];

          return (
            <Window
              key={win.id}
              title={win.type}
              x={win.x}
              y={win.y}
              z={win.z}
              onClose={() => closeWindow(win.id)}
              onDrag={(x, y) => updateWindow(win.id, { x, y })}
              onFocus={() => bringToFront(win.id)}
            >
              <Component />
            </Window>
          );
        })}
      </div>
    </div>
  );
}

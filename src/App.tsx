import { useMemo, useState } from "react";
import DesktopIcon from "./components/DesktopIcon";
import Dock from "./components/Dock";
import TopBar from "./components/TopBar";
import WindowFrame from "./components/WindowFrame";
import { appDefinitions } from "./data/apps";
import { WindowId, WindowState } from "./types";
import AboutWindow from "./components/windows/AboutWindow";
import ProjectsWindow from "./components/windows/ProjectsWindow";
import SkillsWindow from "./components/windows/SkillsWindow";
import ExperienceWindow from "./components/windows/ExperienceWindow";
import ResumeWindow from "./components/windows/ResumeWindow";
import ContactWindow from "./components/windows/ContactWindow";
import TerminalWindow from "./components/windows/TerminalWindow";

const initialWindows: Record<WindowId, WindowState> = {
  about: {
    id: "about",
    title: "About",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 2,
    x: 90,
    y: 80,
    width: 460,
    height: 340,
  },
  projects: {
    id: "projects",
    title: "Projects",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 3,
    x: 320,
    y: 110,
    width: 580,
    height: 420,
  },
  skills: {
    id: "skills",
    title: "Skills",
    isOpen: false,
    minimized: false,
    maximized: false,
    z: 1,
    x: 250,
    y: 130,
    width: 460,
    height: 360,
  },
  experience: {
    id: "experience",
    title: "Experience",
    isOpen: false,
    minimized: false,
    maximized: false,
    z: 1,
    x: 430,
    y: 95,
    width: 540,
    height: 400,
  },
  resume: {
    id: "resume",
    title: "Resume",
    isOpen: false,
    minimized: false,
    maximized: false,
    z: 1,
    x: 300,
    y: 140,
    width: 440,
    height: 280,
  },
  contact: {
    id: "contact",
    title: "Contact",
    isOpen: false,
    minimized: false,
    maximized: false,
    z: 1,
    x: 500,
    y: 150,
    width: 420,
    height: 300,
  },
  terminal: {
    id: "terminal",
    title: "Terminal",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 4,
    x: 170,
    y: 180,
    width: 620,
    height: 320,
  },
};

export default function App() {
  const [windows, setWindows] =
    useState<Record<WindowId, WindowState>>(initialWindows);
  const [zCounter, setZCounter] = useState(10);

  const focused = useMemo(
    () =>
      Object.values(windows)
        .filter((w) => w.isOpen && !w.minimized)
        .sort((a, b) => b.z - a.z)[0],
    [windows],
  );

  const bringToFront = (id: WindowId) => {
    setZCounter((prev) => {
      const next = prev + 1;
      setWindows((curr) => ({ ...curr, [id]: { ...curr[id], z: next } }));
      return next;
    });
  };

  const openWindow = (id: WindowId) => {
    setWindows((curr) => ({
      ...curr,
      [id]: { ...curr[id], isOpen: true, minimized: false },
    }));
    bringToFront(id);
  };

  const closeWindow = (id: WindowId) => {
    setWindows((curr) => ({
      ...curr,
      [id]: { ...curr[id], isOpen: false, minimized: false, maximized: false },
    }));
  };

  const minimizeWindow = (id: WindowId) => {
    setWindows((curr) => ({ ...curr, [id]: { ...curr[id], minimized: true } }));
  };

  const toggleMaximize = (id: WindowId) => {
    setWindows((curr) => {
      const target = curr[id];
      if (!target.maximized) {
        return {
          ...curr,
          [id]: {
            ...target,
            maximized: true,
            x: 0,
            y: 40,
            width: window.innerWidth,
            height: window.innerHeight - 96,
          },
        };
      }
      return {
        ...curr,
        [id]: {
          ...target,
          maximized: false,
          width: 540,
          height: 380,
          x: 170,
          y: 100,
        },
      };
    });
    bringToFront(id);
  };

  const onDragStop = (id: WindowId, x: number, y: number) => {
    setWindows((curr) => ({ ...curr, [id]: { ...curr[id], x, y } }));
  };

  const onResizeStop = (
    id: WindowId,
    width: number,
    height: number,
    x: number,
    y: number,
  ) => {
    setWindows((curr) => ({
      ...curr,
      [id]: { ...curr[id], width, height, x, y },
    }));
  };

  const renderContent = (id: WindowId) => {
    switch (id) {
      case "about":
        return <AboutWindow />;
      case "projects":
        return <ProjectsWindow />;
      case "skills":
        return <SkillsWindow />;
      case "experience":
        return <ExperienceWindow />;
      case "resume":
        return <ResumeWindow />;
      case "contact":
        return <ContactWindow />;
      case "terminal":
        return <TerminalWindow />;
      default:
        return null;
    }
  };

  return (
    <main className="terminal-scanlines terminal-vignette relative h-screen w-full overflow-hidden bg-[#05070a]">
      {/* grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(74,222,128,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />
      {/* green glow blob */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <TopBar focusedTitle={focused?.title} />

      <section className="relative z-10 grid grid-cols-2 gap-2 px-4 pt-14 sm:grid-cols-4 md:w-[460px]">
        {appDefinitions.map((app) => (
          <DesktopIcon key={app.id} app={app} onOpen={openWindow} />
        ))}
      </section>

      <section className="relative z-20">
        {Object.values(windows).map((win) => (
          <WindowFrame
            key={win.id}
            win={win}
            isFocused={focused?.id === win.id}
            onFocus={bringToFront}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onToggleMaximize={toggleMaximize}
            onDragStop={onDragStop}
            onResizeStop={onResizeStop}
          >
            {renderContent(win.id)}
          </WindowFrame>
        ))}
      </section>

      <Dock onOpen={openWindow} />
    </main>
  );
}

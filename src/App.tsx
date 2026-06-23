import { useMemo, useRef, useState } from "react";
import { exportElementToPdf } from "./utils/exportPdf";
import { useMediaQuery } from "./hooks/useMediaQuery";

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
    x: 40,
    y: 64,
    width: 360,
    height: 260,
  },
  projects: {
    id: "projects",
    title: "Projects",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 3,
    x: 420,
    y: 64,
    width: 560,
    height: 320,
  },
  skills: {
    id: "skills",
    title: "Skills",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 4,
    x: 40,
    y: 340,
    width: 420,
    height: 260,
  },
  experience: {
    id: "experience",
    title: "Experience",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 5,
    x: 480,
    y: 400,
    width: 500,
    height: 280,
  },
  resume: {
    id: "resume",
    title: "Resume",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 6,
    x: 1000,
    y: 64,
    width: 300,
    height: 210,
  },
  contact: {
    id: "contact",
    title: "Contact",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 7,
    x: 1000,
    y: 290,
    width: 300,
    height: 180,
  },
  terminal: {
    id: "terminal",
    title: "Terminal",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 8,
    x: 1000,
    y: 484,
    width: 300,
    height: 200,
  },
};

export default function App() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleExportPdf = async () => {
    if (!desktopRef.current) return;
    await exportElementToPdf(desktopRef.current, {
      fileName: "kashif-ai-engineer-portfolio.pdf",
      scale: 2,
    });
  };

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
    <main
      ref={desktopRef}
      className="terminal-scanlines terminal-vignette relative h-screen w-full overflow-hidden bg-[#05070a]"
    >
      {/* grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(74,222,128,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />
      {/* green glow blob */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <TopBar focusedTitle={focused?.title} onExportPdf={handleExportPdf} />

      {isDesktop && (
        <section className="relative z-10 grid grid-cols-2 gap-2 px-4 pt-14 sm:grid-cols-4 md:w-[460px]">
          {appDefinitions.map((app) => (
            <DesktopIcon key={app.id} app={app} onOpen={openWindow} />
          ))}
        </section>
      )}

      <section
        className={`relative z-20 ${isDesktop ? "" : "px-3 pb-24 pt-14"}`}
      >
        {Object.values(windows).map((win) => (
          <WindowFrame
            key={win.id}
            win={win}
            mobileMode={!isDesktop}
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

      {isDesktop && <Dock onOpen={openWindow} />}
    </main>
  );
}

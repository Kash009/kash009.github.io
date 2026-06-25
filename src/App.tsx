import { useEffect, useMemo, useRef, useState } from "react";

import { exportElementToPdf } from "./utils/exportPdf";
import { useMediaQuery } from "./hooks/useMediaQuery";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import PdfExportLayout from "./components/PdfExportLayout";

import ProfessionalSummaryWindow from "./components/windows/ProfessionalSummaryWindow";
import CoreExpertiseWindow from "./components/windows/CoreExpertiseWindow";
import TechnicalStackWindow from "./components/windows/TechnicalStackWindow";
import SelectedResearchEngineeringProjectsWindow from "./components/windows/SelectedResearchEngineeringProjectsWindow";
import SelectedProductsLeadershipWindow from "./components/windows/SelectedProductsLeadershipWindow";
import LeadershipStrengthsWindow from "./components/windows/LeadershipStrengthsWindow";
import EducationWindow from "./components/windows/EducationWindow";
import CertificatesWindow from "./components/windows/CertificatesWindow";

import DesktopIcon from "./components/DesktopIcon";
import BootLoader from "./components/BootLoader";
import Dock from "./components/Dock";
import TopBar from "./components/TopBar";
import WindowFrame from "./components/WindowFrame";
import { appDefinitions } from "./data/apps";
import { WindowId, WindowState } from "./types";
import AboutWindow from "./components/windows/AboutWindow";
import ProjectsWindow from "./components/windows/ProjectsWindow";
import SkillsWindow from "./components/windows/SkillsWindow";
import ExperienceWindow from "./components/windows/ExperienceWindow";
import PersonalProjectsWindow from "./components/windows/PersonalProjectsWindow";
import ResearchInterestsWindow from "./components/windows/ResearchInterestsWindow";
// import ResumeWindow from "./components/windows/ResumeWindow";
import ContactWindow from "./components/windows/ContactWindow";
import TerminalWindow from "./components/windows/TerminalWindow";

const TOPBAR_HEIGHT = 50;
const BOTTOM_GAP = 56;

const initialWindows: Record<WindowId, WindowState> = {
  about: {
    id: "about",
    title: "About",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 2,
    x: 210,
    y: 64,
    width: 360,
    height: 260,
  },
  professionalSummary: {
    id: "professionalSummary",
    title: "Professional Summary",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 3,
    x: 590,
    y: 64,
    width: 500,
    height: 280,
  },
  coreExpertise: {
    id: "coreExpertise",
    title: "Core Expertise",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 4,
    x: 1110,
    y: 64,
    width: 430,
    height: 280,
  },
  technicalStack: {
    id: "technicalStack",
    title: "Technical Stack",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 5,
    x: 210,
    y: 360,
    width: 520,
    height: 320,
  },
  experience: {
    id: "experience",
    title: "Experience",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 6,
    x: 750,
    y: 360,
    width: 790,
    height: 340,
  },
  selectedResearchEngineeringProjects: {
    id: "selectedResearchEngineeringProjects",
    title: "Selected Research & Engineering Projects",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 7,
    x: 210,
    y: 720,
    width: 660,
    height: 320,
  },
  selectedProductsLeadership: {
    id: "selectedProductsLeadership",
    title: "Selected Products & Leadership",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 8,
    x: 890,
    y: 720,
    width: 650,
    height: 320,
  },
  leadershipStrengths: {
    id: "leadershipStrengths",
    title: "Leadership strengths",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 9,
    x: 210,
    y: 1060,
    width: 430,
    height: 260,
  },
  education: {
    id: "education",
    title: "Education",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 10,
    x: 660,
    y: 1060,
    width: 430,
    height: 260,
  },
  certificates: {
    id: "certificates",
    title: "Certificates",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 11,
    x: 1110,
    y: 1060,
    width: 430,
    height: 260,
  },
  personalProjects: {
    id: "personalProjects",
    title: "Personal Projects",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 12,
    x: 210,
    y: 1360,
    width: 560,
    height: 280,
  },
  researchInterests: {
    id: "researchInterests",
    title: "Research Interests",
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 13,
    x: 790,
    y: 1360,
    width: 760,
    height: 280,
  },
};

// const tileSpanClass: Record<WindowId, string> = {
//   about: "col-span-12 lg:col-span-4",
//   // terminal: "col-span-12 lg:col-span-4",
//   contact: "col-span-12 lg:col-span-4",
//   skills: "col-span-12 lg:col-span-4",
//   projects: "col-span-12 lg:col-span-8",
//   experience: "col-span-12 lg:col-span-8",
// };

function TiledCard({
  title,
  children,
  dragHandleProps,
}: {
  title: string;
  children: React.ReactNode;
  dragHandleProps?: React.HTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <article
      className="glow-border flex h-full min-h-0 flex-col overflow-hidden rounded-md"
      style={{ background: "var(--panel)" }}
    >
      <header
        className="flex h-10 shrink-0 items-center justify-between px-3"
        style={{
          borderBottom: "1px solid var(--line)",
          background: "var(--panel-2)",
        }}
      >
        <span
          className="text-xs uppercase tracking-wider"
          style={{ color: "var(--accent)" }}
        >
          {title}.sys
        </span>

        <button
          {...dragHandleProps}
          className="cursor-grab active:cursor-grabbing rounded border px-2 py-1 text-[10px] uppercase tracking-wider"
          style={{
            borderColor: "var(--line)",
            background: "var(--surface-tint-2)",
            color: "var(--text)",
          }}
          title="Drag to reorder tile"
        >
          Move
        </button>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>
    </article>
  );
}

function SortableTile({
  id,
  className,
  children,
}: {
  id: WindowId;
  className?: string;
  children: React.ReactNode;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${className ?? ""} min-h-0 ${isDragging ? "opacity-70" : ""}`}
    >
      {/* drag handle props injected via context-like clone */}
      {typeof children === "object" && children !== null
        ? (children as React.ReactElement<any>)
        : children}
      {/* hidden handle passthrough container */}
      <div className="hidden" {...attributes} {...listeners} />
    </div>
  );
}

export default function App() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);
  const restoreSnapshotRef = useRef<
    Partial<Record<WindowId, Pick<WindowState, "x" | "y" | "width" | "height">>>
  >({});

  const [bootDone, setBootDone] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [layoutMode, setLayoutMode] = useState<"tiling" | "floating">(
    "floating",
  );
  const [swapSource, setSwapSource] = useState<WindowId | null>(null);
  const [tileOrder, setTileOrder] = useState<WindowId[]>([
    "about",
    "professionalSummary",
    "coreExpertise",
    "technicalStack",
    "experience",
    "selectedResearchEngineeringProjects",
    "selectedProductsLeadership",
    "leadershipStrengths",
    "education",
    "certificates",
    "personalProjects",
    "researchInterests",
  ]);

  const tileAreaClass: Record<WindowId, string> = {
    about: "tile-about",
    professionalSummary: "tile-summary",
    coreExpertise: "tile-core",
    technicalStack: "tile-stack",
    experience: "tile-experience",
    selectedResearchEngineeringProjects: "tile-research",
    selectedProductsLeadership: "tile-products",
    leadershipStrengths: "tile-leadership",
    education: "tile-education",
    certificates: "tile-certificates",
    personalProjects: "tile-personal-projects",
    researchInterests: "tile-research-interests",
  };

  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const seen = sessionStorage.getItem("bootSeen");
    if (seen === "1") setBootDone(true);
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem("bootSeen", "1");
    setBootDone(true);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleTileDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTileOrder((items) => {
      const oldIndex = items.indexOf(active.id as WindowId);
      const newIndex = items.indexOf(over.id as WindowId);
      if (oldIndex < 0 || newIndex < 0) return items;
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  function SortableTileCard({
    id,
    className,
    title,
    children,
  }: {
    id: WindowId;
    className?: string;
    title: string;
    children: React.ReactNode;
  }) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id });

    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`${className ?? ""} min-h-0 ${isDragging ? "z-50 opacity-80" : ""}`}
      >
        <TiledCard
          title={title}
          dragHandleProps={{ ...attributes, ...listeners }}
        >
          {children}
        </TiledCard>
      </div>
    );
  }

  const swapTiles = (a: WindowId, b: WindowId) => {
    if (a === b) return;
    setTileOrder((prev) => {
      const next = [...prev];
      const ai = next.indexOf(a);
      const bi = next.indexOf(b);
      if (ai === -1 || bi === -1) return prev;
      [next[ai], next[bi]] = [next[bi], next[ai]];
      return next;
    });
  };

  const onTileSwapClick = (id: WindowId) => {
    if (!swapSource) {
      setSwapSource(id);
      return;
    }
    swapTiles(swapSource, id);
    setSwapSource(null);
  };

  const handleExportPdf = async () => {
    if (isExportingPdf) return;
    if (!pdfRef.current) return;

    try {
      setIsExportingPdf(true);
      await exportElementToPdf(
        pdfRef.current,
        "kashif-ai-engineer-portfolio.pdf",
        {
          marginMm: 0,
          continuationTopGapMm: 3,
          backgroundColor: theme === "light" ? "#f4f7fb" : "#05070a",
        },
      );
    } finally {
      setIsExportingPdf(false);
    }
  };

  const [windows, setWindows] =
    useState<Record<WindowId, WindowState>>(initialWindows);
  const [zCounter, setZCounter] = useState(100);

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

  const ICON_LANE_WIDTH = 170;
  const SAFE_LEFT = ICON_LANE_WIDTH + 20;

  const openWindow = (id: WindowId) => {
    setWindows((curr) => {
      const w = curr[id];

      // Always spawn to the right of icon lane
      const baseX = SAFE_LEFT + (zCounter % 5) * 16;
      const baseY = TOPBAR_HEIGHT + 24 + (zCounter % 5) * 14;

      const nextX = Math.max(baseX, SAFE_LEFT);
      const nextY = Math.max(baseY, TOPBAR_HEIGHT + 12);

      return {
        ...curr,
        [id]: {
          ...w,
          isOpen: true,
          minimized: false,
          x: nextX,
          y: nextY,
        },
      };
    });

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
        restoreSnapshotRef.current[id] = {
          x: target.x,
          y: target.y,
          width: target.width,
          height: target.height,
        };

        return {
          ...curr,
          [id]: {
            ...target,
            maximized: true,
            x: 0,
            y: TOPBAR_HEIGHT,
            width: window.innerWidth,
            height: window.innerHeight - TOPBAR_HEIGHT - BOTTOM_GAP,
          },
        };
      }

      const restore = restoreSnapshotRef.current[id];
      return {
        ...curr,
        [id]: {
          ...target,
          maximized: false,
          x: restore?.x ?? target.x,
          y: restore?.y ?? target.y,
          width: restore?.width ?? target.width,
          height: restore?.height ?? target.height,
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
      case "professionalSummary":
        return <ProfessionalSummaryWindow />;
      case "experience":
        return <ExperienceWindow />;

      case "coreExpertise":
        return <CoreExpertiseWindow />;
      case "technicalStack":
        return <TechnicalStackWindow />;
      case "selectedResearchEngineeringProjects":
        return <SelectedResearchEngineeringProjectsWindow />;
      case "selectedProductsLeadership":
        return <SelectedProductsLeadershipWindow />;
      case "leadershipStrengths":
        return <LeadershipStrengthsWindow />;
      case "education":
        return <EducationWindow />;
      case "certificates":
        return <CertificatesWindow />;
      case "personalProjects":
        return <PersonalProjectsWindow />;
      case "researchInterests":
        return <ResearchInterestsWindow />;
      default:
        return null;
    }
  };

  if (!bootDone) {
    return <BootLoader onComplete={handleBootComplete} minDurationMs={2200} />;
  }

  return (
    <main
      ref={desktopRef}
      className={`terminal-scanlines terminal-vignette relative w-full ${
        isDesktop ? "h-screen overflow-hidden" : "min-h-screen overflow-y-auto"
      }`}
      style={{ background: "var(---bg-gradient)" }}
    >
      <div className="animate-[fadeIn_.35s_ease-out]">
        {/* grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: theme === "light" ? 0.16 : 0.3,
            backgroundImage:
              "linear-gradient(rgba(74,222,128,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(74,222,128,0.07) 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* green glow blob */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <TopBar
          focusedTitle={focused?.title}
          onExportPdf={handleExportPdf}
          exportingPdf={isExportingPdf}
          layoutMode={layoutMode}
          onToggleLayoutMode={() =>
            setLayoutMode((m) => (m === "tiling" ? "floating" : "tiling"))
          }
          theme={theme}
          onToggleTheme={() =>
            setTheme((t) => (t === "dark" ? "light" : "dark"))
          }
        />

        {/*<div className="relative z-30 px-4 pt-12">
        <button
          onClick={() =>
            setLayoutMode((m) => (m === "tiling" ? "floating" : "tiling"))
          }
          className="rounded border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-wider text-emerald-200 hover:bg-emerald-400/20"
        >
          Mode: {layoutMode === "tiling" ? "Tiling" : "Floating"}
        </button>
      </div>*/}

        {isDesktop && layoutMode === "floating" && (
          <section
            className="fixed left-4 top-14 z-40 w-[150px] overflow-y-auto overflow-x-hidden pr-1"
            style={{ height: "calc(100vh - 80px)" }}
          >
            <div className="grid grid-cols-1 gap-2">
              {appDefinitions.map((app) => (
                <DesktopIcon key={app.id} app={app} onOpen={openWindow} />
              ))}
            </div>
          </section>
        )}

        {isDesktop && layoutMode === "tiling" ? (
          <section
            className={`relative z-20 ${
              isDesktop
                ? "h-[calc(100vh-50px)] overflow-y-auto px-2 pt-2 pb-28"
                : "px-3 pt-2 pb-28"
            }`}
          >
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleTileDragEnd}
            >
              <SortableContext items={tileOrder} strategy={rectSortingStrategy}>
                <div className="tile-grid-dense min-h-0">
                  {tileOrder.map((id) => (
                    <SortableTileCard
                      key={id}
                      id={id}
                      title={initialWindows[id].title}
                      className={tileAreaClass[id]}
                    >
                      {renderContent(id)}
                    </SortableTileCard>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </section>
        ) : (
          <section
            className={`relative z-20 ${isDesktop ? "h-[calc(100vh-50px)] overflow-y-auto overflow-x-hidden pt-2" : "px-3 pt-2 pb-28"}`}
          >
            <div
              className={`${isDesktop ? "relative min-h-[1400px] pb-28" : ""}`}
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
            </div>
          </section>
        )}

        {isDesktop && layoutMode === "floating" && <Dock onOpen={openWindow} />}

        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            pointerEvents: "none",
            opacity: 0,
            zIndex: -1,
          }}
        >
          <div ref={pdfRef}>
            <PdfExportLayout theme={theme} />
          </div>
        </div>
      </div>
    </main>
  );
}

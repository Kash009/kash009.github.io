import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import MainWindow from "./MainWindow";

export default function OSLayout() {
  return (
    <div className="h-screen w-full bg-[#0B0F14] text-white flex flex-col">
      {/* TOP SYSTEM BAR */}
      <TopBar />

      {/* MAIN AREA */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT NAV PANEL */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <MainWindow />
      </div>
    </div>
  );
}

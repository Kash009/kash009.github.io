import { useRef } from "react";

export default function Window({
  children,
  title,
  x,
  y,
  z,
  onClose,
  onFocus,
  onDrag,
}) {
  const ref = useRef(null);

  const drag = useRef({
    active: false,
    offsetX: 0,
    offsetY: 0,
  });

  const velocity = useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  // 🟢 START DRAG
  const handleMouseDown = (e) => {
    e.preventDefault();

    const rect = ref.current.getBoundingClientRect();

    drag.current = {
      active: true,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };

    velocity.current = {
      x: 0,
      y: 0,
      lastX: e.clientX,
      lastY: e.clientY,
    };

    onFocus?.();
  };

  // 🟡 DRAG MOVE (1:1 tracking)
  const handleMouseMove = (e) => {
    if (!drag.current.active) return;

    const newX = e.clientX - drag.current.offsetX;
    const newY = e.clientY - drag.current.offsetY;

    // track velocity for inertia
    velocity.current = {
      x: e.clientX - velocity.current.lastX,
      y: e.clientY - velocity.current.lastY,
      lastX: e.clientX,
      lastY: e.clientY,
    };

    onDrag?.(newX, newY);
  };

  // 🔴 RELEASE + CONTROLLED INERTIA
  const handleMouseUp = () => {
    if (!drag.current.active) return;

    drag.current.active = false;

    let vx = velocity.current.x * 0.5; // reduced force (NOT floaty)
    let vy = velocity.current.y * 0.5;

    let currentX = x;
    let currentY = y;

    const decay = 0.88; // strong damping (macOS-like)
    const minVelocity = 0.6;

    const animate = () => {
      if (Math.abs(vx) < minVelocity && Math.abs(vy) < minVelocity) return;

      currentX += vx;
      currentY += vy;

      vx *= decay;
      vy *= decay;

      onDrag?.(currentX, currentY);

      requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <div
      ref={ref}
      className="
        absolute
        w-[720px]
        rounded-2xl
        overflow-hidden
        select-none

        bg-white/5
        backdrop-blur-xl

        border border-white/10

        shadow-[0_20px_60px_rgba(0,0,0,0.55)]
      "
      style={{
        transform: `translate(${x}px, ${y}px)`,
        zIndex: z,
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={onFocus}
    >
      {/* 🍎 MACOS TITLE BAR */}
      <div
        onMouseDown={handleMouseDown}
        className="
          flex items-center justify-between
          px-4 py-2

          bg-white/5
          backdrop-blur-xl

          border-b border-white/10

          shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]

          cursor-grab active:cursor-grabbing
        "
      >
        {/* TRAFFIC LIGHTS */}
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 bg-red-500 rounded-full hover:opacity-80 transition"
            onClick={onClose}
          />
          <div className="w-3 h-3 bg-yellow-400 rounded-full hover:opacity-80 transition" />
          <div className="w-3 h-3 bg-green-500 rounded-full hover:opacity-80 transition" />
        </div>

        {/* TITLE */}
        <div className="text-xs text-white/50 uppercase tracking-widest">
          {title}
        </div>

        {/* STATUS */}
        <div className="text-xs text-green-400">● macOS-style</div>
      </div>

      {/* CONTENT */}
      <div className="p-5 text-white">{children}</div>
    </div>
  );
}

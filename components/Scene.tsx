import React, { forwardRef, useRef, useEffect, useState, useId } from "react";
import { motion } from "framer-motion";

// ─── AnimatedBeam (self-contained, no shadcn dep) ───────────────────────────

interface BeamProps {
  containerRef: React.RefObject<HTMLDivElement>;
  fromRef: React.RefObject<HTMLDivElement>;
  toRef: React.RefObject<HTMLDivElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  endYOffset?: number;
}

const AnimatedBeam: React.FC<BeamProps> = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 4,
  delay = 0,
  pathColor = "rgba(255,255,255,0.07)",
  pathWidth = 1.5,
  pathOpacity = 1,
  gradientStartColor = "#ffffff",
  gradientStopColor = "#888888",
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const gradientCoords = reverse
    ? { x1: ["90%", "-10%"], x2: ["100%", "0%"], y1: ["0%", "0%"], y2: ["0%", "0%"] }
    : { x1: ["10%", "110%"], x2: ["0%", "100%"], y1: ["0%", "0%"], y2: ["0%", "0%"] };

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;
      const cRect = containerRef.current.getBoundingClientRect();
      const aRect = fromRef.current.getBoundingClientRect();
      const bRect = toRef.current.getBoundingClientRect();
      setSvgDimensions({ width: cRect.width, height: cRect.height });
      const sx = aRect.left - cRect.left + aRect.width / 2;
      const sy = aRect.top - cRect.top + aRect.height / 2;
      const ex = bRect.left - cRect.left + bRect.width / 2;
      const ey = bRect.top - cRect.top + bRect.height / 2 + endYOffset;
      const cy = sy - curvature;
      setPathD(`M ${sx},${sy} Q ${(sx + ex) / 2},${cy} ${ex},${ey}`);
    };
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    update();
    return () => ro.disconnect();
  }, [containerRef, fromRef, toRef, curvature, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      className="pointer-events-none absolute left-0 top-0"
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity} strokeLinecap="round" />
      <path d={pathD} strokeWidth={pathWidth} stroke={`url(#${id})`} strokeOpacity="1" strokeLinecap="round" />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={{ x1: gradientCoords.x1, x2: gradientCoords.x2, y1: gradientCoords.y1, y2: gradientCoords.y2 }}
          transition={{ delay, duration, ease: [0.16, 1, 0.3, 1], repeat: Infinity, repeatDelay: 0 }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

// ─── Circle node ─────────────────────────────────────────────────────────────

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => (
  <div className="flex flex-col items-center gap-2">
    <div
      ref={ref}
      className={`z-10 flex size-12 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] p-2.5 ${className ?? ""}`}
    >
      {children}
    </div>
    {label && (
      <span className="text-[8px] font-mono text-white/20 uppercase tracking-wider text-center leading-tight max-w-[56px]">
        {label}
      </span>
    )}
  </div>
));
Circle.displayName = "Circle";

// ─── Tech Stack Icons (inline SVG, B&W) ──────────────────────────────────────

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round">
    <ellipse cx="12" cy="12" rx="10" ry="3.6" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" transform="rotate(-60 12 12)" />
    <circle cx="12" cy="12" r="1.6" fill="white" stroke="none" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8.66 5v10L12 22 3.34 17V7z" />
    <path d="M9 8v8l6-8v8" strokeWidth="1.3" />
  </svg>
);

const LangGraphIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="5" cy="12" r="2.5" strokeOpacity="0.8" />
    <circle cx="19" cy="7" r="2" strokeOpacity="0.8" />
    <circle cx="19" cy="17" r="2" strokeOpacity="0.8" />
    <line x1="7.4" y1="11.1" x2="17" y2="7.8" />
    <line x1="7.4" y1="12.9" x2="17" y2="16.2" />
    <path d="M14.5 7l2.5.8-.8 2.2" />
    <path d="M14.5 17l2.5-.8-.8-2.2" />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4v16l14-16v16" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="9" width="4" height="3" rx="0.5" />
    <rect x="7" y="9" width="4" height="3" rx="0.5" />
    <rect x="12" y="9" width="4" height="3" rx="0.5" />
    <rect x="7" y="5" width="4" height="3" rx="0.5" />
    <path d="M0 13h20" />
    <path d="M17 9c2 0 3-1.5 3-3" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M6 8h5M8.5 8v8" />
    <path d="M14 14.5c0 1.1.9 1.5 2 1.5s2-.4 2-1.5-.8-1.5-2-1.5-2-.5-2-1.5.8-1.5 2-1.5 2 .4 2 1.5" />
  </svg>
);

// Center: Human/Agent icon
const AgentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {/* Robot head */}
    <rect x="7" y="4" width="10" height="9" rx="2" />
    {/* Eyes */}
    <circle cx="10" cy="8" r="1.3" fill="white" stroke="none" />
    <circle cx="14" cy="8" r="1.3" fill="white" stroke="none" />
    {/* Mouth */}
    <path d="M10 11h4" strokeWidth="1.2" />
    {/* Antenna */}
    <line x1="12" y1="4" x2="12" y2="1.5" />
    <circle cx="12" cy="1.5" r="0.8" fill="white" stroke="none" />
    {/* Neck + shoulders */}
    <path d="M10 13v2M14 13v2" />
    <path d="M6 15h12v5a1 1 0 01-1 1H7a1 1 0 01-1-1v-5z" />
    {/* Chest circuit */}
    <path d="M10 18h4M12 17v2" strokeWidth="1" strokeOpacity="0.6" />
  </svg>
);

// ─── Main Scene ───────────────────────────────────────────────────────────────

const Scene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactRef    = useRef<HTMLDivElement>(null);
  const nodeRef     = useRef<HTMLDivElement>(null);
  const langRef     = useRef<HTMLDivElement>(null);
  const agentRef    = useRef<HTMLDivElement>(null);
  const nextRef     = useRef<HTMLDivElement>(null);
  const dockerRef   = useRef<HTMLDivElement>(null);
  const tsRef       = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center overflow-hidden p-8 lg:p-12"
    >
      {/* Node layout */}
      <div className="flex size-full flex-col max-w-sm max-h-[300px] items-stretch justify-between gap-8 z-10">

        {/* Row 1 */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={reactRef} label="React">
            <ReactIcon />
          </Circle>
          <Circle ref={nextRef} label="Next.js">
            <NextIcon />
          </Circle>
        </div>

        {/* Row 2 — center agent */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={nodeRef} label="Node.js">
            <NodeIcon />
          </Circle>
          <Circle
            ref={agentRef}
            label="Engineer"
            className="!size-16 border-white/20 bg-[#111111]"
          >
            <AgentIcon />
          </Circle>
          <Circle ref={dockerRef} label="Docker">
            <DockerIcon />
          </Circle>
        </div>

        {/* Row 3 */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={langRef} label="LangGraph">
            <LangGraphIcon />
          </Circle>
          <Circle ref={tsRef} label="TypeScript">
            <TypeScriptIcon />
          </Circle>
        </div>
      </div>

      {/* Beams: left side → agent */}
      <AnimatedBeam containerRef={containerRef} fromRef={reactRef} toRef={agentRef} curvature={-70} endYOffset={-10} delay={0} duration={4} />
      <AnimatedBeam containerRef={containerRef} fromRef={nodeRef}  toRef={agentRef} delay={0.5} duration={4.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={langRef}  toRef={agentRef} curvature={70} endYOffset={10} delay={1} duration={4} />

      {/* Beams: agent → right side */}
      <AnimatedBeam containerRef={containerRef} fromRef={nextRef}   toRef={agentRef} curvature={-70} endYOffset={-10} reverse delay={0.2} duration={4} />
      <AnimatedBeam containerRef={containerRef} fromRef={dockerRef} toRef={agentRef} reverse delay={0.8} duration={4.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={tsRef}     toRef={agentRef} curvature={70} endYOffset={10} reverse delay={1.4} duration={4} />
    </div>
  );
};

export default Scene;

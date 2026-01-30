"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const [activeStep, setActiveStep] = useState(0);
  const [playKey, setPlayKey] = useState(0);

  //const hasAnimated = useRef(false);

useEffect(() => {
  if (isInView) {
    setActiveStep(0);
    setPlayKey((k) => k + 1);
  } else {
    // reset steps so it can replay next time
    setActiveStep(0);
  }
}, [isInView]);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen relative"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center pt-32 text-[#005143]">
        Our Journey
      </h1>
      <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto">
        Why we built OfficeFlow AI and how it continues to evolve.
      </p>

      <div className="max-w-6xl mx-auto mt-20 h-full flex gap-16 px-10">
  
  {/* SVG (dots + line) */}
  <div className="flex-shrink-0">
    <svg
      key={playKey}
      width="40"
      height="640"
      viewBox="0 0 40 640"
      fill="none"
    >
        <defs>
  <filter id="dotShadow" x="-50%" y="-50%" width="200%" height="200%">
    <feDropShadow
      dx="0"
      dy="3"
      stdDeviation="4"
      floodColor="#000"
      floodOpacity="0.25"
    />
  </filter>
</defs>
      <motion.path
        d="M 20 20 L 20 160 L 20 300 L 20 520"
        stroke="#bfc3c9"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        onUpdate={(latest) => {
          if (latest.pathLength > 0.25) setActiveStep(1);
          if (latest.pathLength > 0.5) setActiveStep(2);
          if (latest.pathLength > 0.75) setActiveStep(3);
          if (latest.pathLength > 0.95) setActiveStep(4);
        }}
      />

      <Dot cx={20} cy={20} active={activeStep >= 1} />
      <Dot cx={20} cy={160} active={activeStep >= 2} />
      <Dot cx={20} cy={300} active={activeStep >= 3} />
      <Dot cx={20} cy={440} active={activeStep >= 4} />
    </svg>
  </div>

  {/* TEXT */}
  <div className="flex flex-col gap-[72px] text-left">
    <StepText show={activeStep >= 1} title="The Problem We Saw">
      Modern organizations rely on too many disconnected systems. HR, finance, procurement, and operations often run on separate tools, spreadsheets, and manual approvals leading to delays, errors, and limited visibility.
    </StepText>

    <StepText show={activeStep >= 2} title="The Insight">
     We realized that operational problems aren’t isolated. They’re connected. Solving them required a single platform that could unify workflows, enforce accountability, and provide real-time insight across teams.
    </StepText>

    <StepText show={activeStep >= 3} title="The Solution">
     OfficeFlow AI was built as a modular, intelligent operations platform. Each module works independently, but together they form a connected system powered by automation, AI-driven insights, and enterprise-grade controls.
    </StepText>

    <StepText show={activeStep >= 4} title="Where We're Headed">
      We continue to evolve OfficeFlow AI with a focus on predictive intelligence, proactive risk management, and scalable workflows helping organizations move from reactive operations to confident decision-making.
    </StepText>
  </div>

</div>

    </section>
  );
}

/* ---------- Helpers ---------- */

function Dot({ cx, cy, active }: { cx: number; cy: number; active: boolean }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="12"
      fill="#39E0A5"
      stroke="#d6f7d5"
      strokeWidth="3"
      filter="url(#dotShadow)"
      initial={{ scale: 0 }}
      animate={{ scale: active ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}

function StepText({
  title,
  children,
  show,
  className = "",
  style = {},
}: {
  title: string;
  children: React.ReactNode;
  show: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 12 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      <h3 className="font-semibold text-[#005143]">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{children}</p>
    </motion.div>
  );
}

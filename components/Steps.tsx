"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const [activeStep, setActiveStep] = useState(0);
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setActiveStep(0);
      setPlayKey((k) => k + 1);
    } else {
      setActiveStep(0);
    }
  }, [isInView]);

  return (
    <section
  ref={ref}
  className="
    w-full
    min-h-screen
    relative
    px-4
    bg-no-repeat
    bg-[length:140%]
    bg-[position:center_140px]
    sm:bg-cover
    sm:bg-center
  "
  style={{ backgroundImage: "url('/steps_bg.svg')" }}
>
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center pt-24 md:pt-32 text-[#005143]">
        How It Works
      </h1>
      <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
        Discover the simplicity and efficiency of OfficeFlow AI through these
        three easy steps.
      </p>

      {/* SVG LINE */}
      <div className="relative mt-12 md:mt-15 flex justify-center overflow-x-auto">
        <svg
          key={playKey}
          viewBox="0 0 900 220"
          className="w-[700px] md:w-[900px] h-auto"
          fill="none"
        >
          <motion.path
            d="M 40 160 L 300 8 L 585 160 L 880 10"
            stroke="#005143"
            strokeWidth="3"
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

          <Dot cx={40} cy={160} active={activeStep >= 1} />
          <Dot cx={300} cy={8} active={activeStep >= 2} />
          <Dot cx={585} cy={160} active={activeStep >= 3} />
          <Dot cx={880} cy={10} active={activeStep >= 4} />
        </svg>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-center px-2 md:px-10">
        <StepText show={activeStep >= 1} title="You Ask">
          Type a question or give a command in plain language.
        </StepText>

        <StepText
          show={activeStep >= 2}
          title="It Understands"
          className="md:-mt-40"
        >
          The AI reads intent, context, and your permissions.
        </StepText>

        <StepText show={activeStep >= 3} title="It Does the Work">
          Records are created, updated, or workflows triggered.
        </StepText>

        <StepText
          show={activeStep >= 4}
          title="You Get Results"
          className="md:-mt-40"
        >
          Instant confirmation or completed output, in real time.
        </StepText>
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
      r="7"
      fill="#005143"
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

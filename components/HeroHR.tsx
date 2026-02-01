"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroHR() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 px-6 lg:px-0 mt-12 lg:mt-20 mb-12 lg:mb-20 relative">
      {/* LEFT CONTENT */}
      <div className="relative max-w-full lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left pl-0 sm:pl-20">
        <span className="text-emerald-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
          AI-Powered Business Operations Platform
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004E40] mt-4 leading-snug sm:leading-tight relative inline-block">
          Manage Your Entire Workforce Effortlessly

          {/* Curved line */}
          <svg
            className="hidden sm:block w-full h-12 sm:h-16 lg:h-20 mt-2 pr-30"
            viewBox="0 0 200 50"
            fill="none"
          >
            <path
              d="M 0 40 Q 150 0 380 70"
              stroke="#39E0A5"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-4 sm:mt-6 max-w-full sm:max-w-2xl mx-auto lg:mx-0">
          Track attendance, manage leaves, process payroll, and organize employee records without spreadsheets or manual work.
        </p>

        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
          <button
            style={{
              background:
                "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)",
            }}
            className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all shadow-xl hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95"
          >
            Start Free Trial
          </button>

          <button className="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-emerald-50 transition">
            Watch Demo
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0 lg:mr-20">
        <FloatingSvg
          src="/payment.png"
          size={160}
          delay={0}
          className="top-10 lg:top-30 left-0 lg:left-30 z-10"
        />

        <Image
          src="/HRDashboard.png"
          alt="Dashboard"
          width={600}
          height={536}
          className="mt-8 sm:mt-12 filter drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] block"
        />

        <FloatingSvg
          src="/planning.png"
          size={180}
          className="top-46 lg:top-106 right-20 lg:right-80"
          delay={3}
        />

        <FloatingSvg
          src="/attendance.png"
          size={160}
          className="top-10 lg:top-28 right-0 lg:right-0"
          delay={1.5}
        />
      </div>
    </div>
  );
}

function FloatingSvg({
  src,
  size = 64,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      <Image src={src} alt="" width={size} height={size} />
    </motion.div>
  );
}

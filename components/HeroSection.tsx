"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 px-6 lg:px-0 mt-12 lg:mt-20 mb-12 lg:mb-20 relative">
      {/* LEFT CONTENT */}
      <div className="relative max-w-full lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left pl-0 sm:pl-20">
        <span className="text-emerald-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
          AI-Powered Business Operations Platform
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#004E40] mt-4 leading-snug sm:leading-tight lg:leading-tight relative inline-block">
          Defining the Future <br />of Business Flow

          {/* Curved line directly under the text */}
          <svg
            className="hidden sm:block w-full h-12 sm:h-16 lg:h-20 mt-2 pr-10"
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
          OfficeFlow AI helps teams automate processes, gain insights, and make data-driven decisions across HR, Finance, Sales, and Operations.
        </p>

        <p className="text-sm sm:text-md text-[#00C99C] mt-4 sm:mt-6 max-w-full sm:max-w-xl mx-auto lg:mx-0">
          We built OfficeFlow AI to replace fragmented tools, manual workflows, and operational blind spots. Our platform brings structure, automation, and real-time insight to how teams work so decisions are faster, processes are cleaner, and growth is controlled.
        </p>

        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
          <button className="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-emerald-50 transition">
            Explore our Platform
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
        <FloatingSvg src="/dash1.png" size={160} delay={0} className="top-10 lg:top-32 left-0 lg:left-50" />
        <Image src="/dash.svg" alt="Dashboard" width={590} height={498} className="mt-8 sm:mt-20 mr-0 sm:mr-20" />
        <FloatingSvg src="/dash2.png" size={180} className="top-36 lg:top-100 right-26 lg:right-100" delay={3} />
        <FloatingSvg src="/dash3.png" size={140} className="top-10 lg:top-32 right-0 lg:right-30" delay={1.5} />
      </div>
    </div>
  );
}

function FloatingSvg({
  src,
  size = 64,
  className = "",
  delay = 0,
}: {
  src: string;
  size?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -12, 0],
        x: [0, 6, 0],
      }}
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

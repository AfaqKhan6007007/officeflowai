"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function HeroSection() {
    return (
        <div className="flex gap-10 ml-25 mt-20 mb-20">
            {/* LEFT CONTENT */}
            <div className="relative max-w-2xl">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">
                AI-Powered Business Operations Platform
            </span>

            <h1 className="text-6xl font-extrabold text-[#004E40] mt-4 leading-tight relative inline-block">
                Defining the Future of Business Flow

                {/* Curved line directly under the text */}
                <svg className="w-full h-20 ml-[-120]" viewBox="0 0 200 50" fill="none">
                <path
                    d="M 0 50 Q 150 0 380 80"
                    stroke="#39E0A5"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                </svg>
            </h1>

            <p className="text-lg text-slate-600 mt-6 max-w-2xl">
                OfficeFlow AI helps teams automate processes, gain insights, and make data-driven decisions across HR, Finance, Sales, and Operations.
            </p>

            <p className="text-md text-[#00C99C] mt-6 max-w-2xl">
                We built OfficeFlow AI to replace fragmented tools, manual workflows, and operational blind spots. Our platform brings structure, automation, and real-time insight to how teams work so decisions are faster, processes are cleaner, and growth is controlled.
            </p>

            <div className="mt-10 flex gap-4">
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition">
                    Explore our Platform
                </button>
            </div>
            </div>
            <div>
                 <FloatingSvg
        src="/dash1.png"
        size={224}
        delay={0}
        />
        <Image src="/dash.svg" alt="Dashboard" width={600} height={536} className="mt-20"/>
        <FloatingSvg
        src="/dash2.png"
        size={244}
        className="top-146 right-100"
        delay={3}
        />
        <FloatingSvg
        src="/dash3.png"
        size={224}
        className="top-68 right-20"
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
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function HeroHR() {
    return (
        <div className="flex gap-10 ml-25 mt-20 mb-20">
            {/* LEFT CONTENT */}
            <div className="relative max-w-2xl">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">
                AI-Powered Business Operations Platform
            </span>

            <h1 className="text-5xl font-extrabold text-[#004E40] mt-4 leading-tight relative inline-block">
                Manage Your Entire Workforce Effortlessly

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
               Track attendance, manage leaves, process payroll, and organize employee records without spreadsheets or manual work.
            </p>

            
            <div className="mt-10 flex gap-4">
    <button 
      style={{ background: "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)" }} 
      className="text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95"
    >
      Start Free Trial
    </button>
    <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition">
      Watch Demo
    </button>
  </div>
            </div>
            <div>
                 <FloatingSvg
        src="/dash1.png"
        size={224}
        delay={0}
        className="top-80"
        />
        <Image src="/dash.svg" alt="Dashboard" width={600} height={536} className="mt-20 rotate-6"/>
        <FloatingSvg
        src="/dash2.png"
        size={244}
        className="top-146 right-80"
        delay={3}
        />
        <FloatingSvg
        src="/dash3.png"
        size={224}
        className="top-68 right-10"
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
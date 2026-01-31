"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const nodes = [
  { text: "Secure & Compliant", x: 0, y: -260 },
  { text: "Scalable Modules", x: 310, y: -120 },
  { text: "AI-Powered Actions", x: 310, y: 80 },
  { text: "Cross-Team Visibility", x: 0, y: 260 },
  { text: "Real-Time Insights", x: -310, y: 80 },
  { text: "Workflow Automation", x: -310, y: -120 },
];

const barHeights = ["40%", "50%", "60%", "70%", "80%"];

export default function Categories() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const totalBars = barHeights.length;

  const listItems = [
    {
      title: "Manual Workflows",
      description: "Streamline repetitive tasks and reduce administrative load."
    },
    {
      title: "Disconnected Systems",
      description: "Connect departments for seamless collaboration."
    },
    {
      title: "Time-Consuming Tasks",
      description: "Automate processes to save valuable time."
    },
    {
      title: "Lack of Insights",
      description: "Access real-time data to make informed decisions."
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col py-24 bg-white overflow-hidden px-0 md:px-0"
    >
      {/* Header */}
      <div className="relative flex flex-col gap-4 mb-24 md:mb-32 z-30 max-w-7xl md:pl-30 text-left">
        <h1 className="text-2xl md:text-5xl font-bold text-left text-[#005143]">
          Simplifying Office Operations for Growing Teams
        </h1>
        <p className="text-left text-gray-700 max-w-6xl">
          OfficeFlowAI eliminates manual workflows, connects all departments, and provides real-time insights so your team can focus on what matters.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full gap-16 lg:gap-28">
        
        {/* Visualization */}
        <div
  key={isInView ? "visible" : "hidden"}
  className="relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]
             scale-[0.5] sm:scale-90 lg:scale-90
             lg:ml-60
             max-w-[700px] w-full
             overflow-visible lg:overflow-visible"
>
          {/* SVG Connector Lines */}
          <svg className="absolute overflow-visible" width="1" height="1">
            {nodes.map((node, i) => (
              <motion.line
                key={`line-${i}`}
                x1="0"
                y1="0"
                x2={node.x}
                y2={node.y}
                stroke="#e2e8f0"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 1.5 }}
              />
            ))}
          </svg>

          {/* Central Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="w-72 sm:w-80 h-48 bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col p-6 z-10 relative"
          >
            <div className="bg-emerald-50 text-emerald-600 text-[10px] tracking-widest font-bold px-3 py-1 rounded-full self-center mb-2 border border-emerald-100 uppercase">
                OfficeFlowAI
            </div>
            
            <div className="flex items-center h-full divide-x divide-gray-300 px-2">
                
            <div className="relative w-24 h-24 flex flex-col items-center justify-center pr-6">
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {/* ENTIRE GROUP ROTATION */}
        <motion.g
        animate={isInView ? { rotate: [0, 360, 360, 360] } : {}}
        transition={{
            duration: 5,          // total duration of rotation + segment pop
            repeat: Infinity,
            times: [0, 0.4, 0.4, 1], // 0→0.4: rotation, 0.4→1: hold
            ease: "easeInOut",
        }}
        style={{ transformOrigin: "50% 50%" }}
        >
        {/* MAIN BASE */}
        <path
            d="M 50 50 L 90 50 A 40 40 0 1 1 50 10 Z"
            fill="#fbbf24"
        />

        {/* DETACHING SEGMENT */}
        <motion.path
            d="M 50 50 L 50 10 A 40 40 0 0 1 90 50 Z"
            fill="#fbbf24"
            animate={isInView ? { 
            x: [3, 3, 11, 11, 3], // base gap + pop-out
            y: [-3, -3, -11, -11, -3]
            } : {}}
            transition={{
            duration: 5,          // matches the group duration
            repeat: Infinity,
            times: [0, 0.4, 0.6, 0.8, 1], // 0→0.4: hold (no move), 0.4→0.6 pop out, 0.6→0.8 hold, 0.8→1 return
            ease: "easeInOut",
            }}
            style={{
            transformOrigin: "50% 50%",
            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.08))",
            }}
        />
        </motion.g>
    </svg>

    {/* Horizontal detail lines */}
    <div className="absolute -bottom-4 left-0 w-full flex flex-col gap-1.5 px-2 opacity-20">
        <div className="h-[4px] w-full bg-green-400 rounded" />
        <div className="h-[4px] w-full bg-blue-400 rounded" />
        <div className="h-[4px] w-full bg-slate-400 rounded" />
    </div>
    </div>





                {/* BAR CHART */}
                <div className="pl-6">
                    <div className="flex gap-2.5 h-24 items-end">
                    {barHeights.map((h, i) => {
                    const drainStart = 0.4 + ((totalBars - 1 - i) * 0.1); 
                    const drainEnd = drainStart + 0.15;
                    return (
                        <div key={i} className="w-4 bg-slate-100 rounded-t-sm relative overflow-hidden" style={{ height: h }}>
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 bg-emerald-400"
                            initial={{ height: "0%" }}
                            animate={isInView ? { height: ["0%", "100%", "100%", "0%", "0%"] } : {}}
                            transition={{
                            duration: 5,
                            repeat: Infinity,
                            times: [0, 0.2, drainStart, drainEnd, 1],
                            delay: i * 0.15,
                            ease: "easeInOut"
                            }}
                        />
                        </div>
                    );
                    })}
                </div>
                <div className="h-[2px] w-full bg-green-200 rounded mt-3" />
                </div>
                
                
            </div>
            
            
          </motion.div>

          {/* Bubble Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center text-center p-3 sm:p-4
                         text-[10px] sm:text-xs font-semibold text-slate-700
                         bg-[#bed4be]/60 backdrop-blur-md rounded-full z-20
                         shadow-[0_120px_120px_rgba(0,0,0,0.15),inset_5px_5px_5px_rgba(0,0,0,0.15)]"
              style={{ x: node.x, y: node.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.8 + i * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 12
              }}
            >
              <span>{node.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Text List */}
        <div className="max-w-2xl w-full px-2 sm:px-8">
          <ul className="space-y-10 sm:space-y-18">
            {listItems.map((item, index) => (
              <li key={index} className="flex gap-4 items-start group">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-black shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <button
            style={{
              background:
                "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)",
            }}
            className="text-white px-8 py-4 rounded-lg font-bold shadow-xl
                       hover:brightness-110 active:scale-95 mt-10 ml-0 sm:ml-5"
          >
            Explore Modules
          </button>
        </div>
      </div>
    </section>
  );
}

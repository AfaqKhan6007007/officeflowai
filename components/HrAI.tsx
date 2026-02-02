"use client";
import { MoveRightIcon } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AnimatedPath = ({ d, isInView }) => {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={
        isInView
          ? { pathLength: 1, opacity: 1 }
          : { pathLength: 0, opacity: 0 }
      }
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  );
};

const WordByWordAnimation = ({ sentence }) => {
  const letters = sentence.split("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const typingSpeed = 0.08;
  const pauseAtEnd = 1.5; 
  const totalDuration = letters.length * typingSpeed + pauseAtEnd;

  return (
    <div 
      ref={containerRef} 
      className="inline-flex min-h-[1.5em] min-w-[200px]"
    >
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div 
            key="animation-container" 
            className="flex"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={`${index}-${isInView}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.01,
                  delay: index * typingSpeed, 
                  repeatDelay: totalDuration - 0.01,
                }}
                className="whitespace-pre"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function HrAI() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  const gridVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { 
      opacity: 1, 
      height: "auto", 
      transition: { duration: 0.6, ease: "easeInOut" } 
    }
  };

  const gridItems = [
    { img: "/acquisition.png", text: "Resume Acquisition" },
    { img: "/parsing.png", text: "Resume Parsing" },
    { img: "/candidate.png", text: "Candidate Profile Creation" },
    { img: "/final.png", text: "Final Selection" },
    { img: "/interview.png", text: "Interview Scheduling" },
    { img: "/tick.png", text: "Candidate Shortlisting" },
    { img: "/search.png", text: "Candidate Screening" },
  ];

  return (
    <div className="p-6 md:p-12 bg-emerald-900">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center text-center mt-10 px-4 md:px-0">
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          Meet Your HR AI Agents
        </h1>
        <p className="text-white max-w-6xl">
          Smart assistants that automate, analyze, and optimize HR operations
        </p>
      </div>

      {/* Recruitment Agent Section */}
      <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-0 ml-0 lg:ml-10">
          <h2 className="text-2xl font-semibold">Recruitement Agent</h2>
          <p className="font-semibold">Automates hiring from resumes to final selection.</p>
          <p>
            Collects resumes, creates structured candidate profiles, screens applicants, and<br/> 
            shortlists the best matches so HR can schedule interviews and hire faster.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <div className="bg-white w-full lg:w-1/3 flex flex-col gap-4 md:gap-5 rounded-md p-4 lg:ml-auto lg:mr-10">
          <div className="bg-[#dff1e6] rounded-sm text-[#005143] px-3 text-left font-semibold p-4">
            Recruitment Agent
          </div>
          <div className="bg-[#005143] w-full sm:w-3/4 rounded-sm text-white px-3 p-4">
            How can I help you?
          </div>
          <div className="bg-[#dff1e6] w-full sm:w-[300px] rounded-sm text-[#005143] px-3 text-left p-4 ml-auto">
            Find 3 frontend developers with 3+ years of experience
          </div>
          <div className="bg-[#005143] w-full sm:w-3/4 rounded-sm text-white px-3 p-4">
            <WordByWordAnimation sentence="Scanning resumes..." />
          </div>
          <div className="bg-gray-200 w-full sm:w-3/4 rounded-sm text-white px-3 h-[40px] p-4 ml-auto"></div>
        </div>
      </div>

      {/* "See How it works" Section */}
      <motion.div 
        ref={containerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={gridVariants}
        className="flex flex-col gap-4 md:gap-6 mt-20 px-4 md:px-0"
      >
        <h1 className="text-white text-2xl md:text-3xl text-center mb-5">
          See How it works
        </h1>
        <div className="relative mt-10 w-full">
          {/* SVG Lines */}
          <svg className="absolute w-full h-full pointer-events-none hidden sm:block" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <AnimatedPath isInView={isInView} d="
              M150 150
              H1000
              V350
              H0
              V540
              H1000
              V880
              H600
            " />
          </svg>

          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 items-center justify-items-center gap-4 sm:gap-6 lg:gap-10 px-2 sm:px-4 lg:px-0">
            {gridItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 sm:gap-6 bg-[#1F7A5A] text-white rounded-lg p-4 text-lg sm:text-xl font-semibold w-full sm:max-w-[350px] z-10
                  ${idx === 6 ? "sm:col-start-2 lg:col-start-2" : ""}
                `}
              >
                <Image src={item.img} alt={item.text} width={39} height={30} />
                <span className="mt-1">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

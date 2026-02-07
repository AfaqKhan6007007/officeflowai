"use client";
import {useState, useEffect, useRef} from "react";
import { AnimatePresence, useInView, motion } from "framer-motion";
import Image from "next/image";
import { MoveRightIcon } from "lucide-react";



const AnimatedPath = ({ d, isInView,isAI }) => {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={isAI ?"#005143":"#FFFFFF"}
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: isInView ? 1 : 0,
        opacity: isInView ? 1 : 0,
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  );
};

function WorkflowSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.3,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const gridItemsChat = [
    { img: "/dependency.png", text: "Identify Tasks & Dependencies" },
    { img: "/ingestion.png", text: "Sequence & Prioritize Workflow" },
    { img: "/community.png", text: "Assign Tasks to Employees" },
    { img: "/view.png", text: "Monitor Execution" },
    { img: "/alert.png", text: "Exception Handling" },
    { img: "/copy_new.png", text: "Performance Reporting" },
  ];
  const gridVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { 
      opacity: 1, 
      height: "auto", 
      transition: { duration: 0.6, ease: "easeInOut" } 
    }
  };
  const cards = [
    {
      title: "Staffing Matrix Alignment",
      img:"/tick.png"
    },
    {
      title: "Workspace utilization verify",
      img:"/tick.png"
    },
    {
      title: "Inventory sync complete",
      img:"/tick.png"
    
    },
    {
        title:"Conflict Resolution: 1 potential overlap resolved. "
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // cards appear one by one
      },
    },
  };

  const itemVariants = {
  hidden: (direction = "up") => ({
    opacity: 0,
    x: direction === "right" ? 40 : 0,
    y: direction === "up" ? 20 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

  const cardVariants = {
  hidden: (custom: number) => {
    if (custom === 3) {
      return {
        opacity: 0,
        scale: 0.6,
      };
    }

    return {
      opacity: 0,
      y: 50,
    };
  },

  visible: (custom: number) => {
    if (custom === 0) {
      return {
        opacity: 1,
        scale: 0.8,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 3,
        },
      };
    }

    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    };
  },
};


    return (
        <>
        <motion.div 
        initial="hidden"
        variants={gridVariants}
        animate="visible"   // ✅ REQUIRED
        exit="hidden"
        className="flex flex-col gap-4 md:gap-6 mt-20 px-4 md:px-0"
      >
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10 shadow-[inset_0_0_4px_4px_#02ab81,_0_0_10px_#02ab81]">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-45 ml-0 lg:ml-10">
          <h2 className="text-2xl font-semibold">Workflow Orchestrator Agent</h2>
          <p className="font-semibold">Coordinates tasks, people, and priorities across your operations.</p>
          <p>
            Automatically identifies task dependencies, sequences work in the right order,<br/> assigns responsibilities, and monitors execution in real time keeping workflows<br/> moving smoothly while capturing performance insights.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="relative overflow-visible bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 p-4 lg:p-6 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <div className="bg-[#005143] w-full text-center rounded-lg text-white px-6 p-4 font-semibold text-xl">
            New Hire Onboarding 
        </div>
        <div className="text-sm text-[#005143] text-left ml-5 mt-4">
            Orchestration Engine
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:ml-5">
            <div className="flex flex-row gap-5">
                <Image src="/points.svg" alt="points" width={14} height={30} className="hidden sm:block" />
                <div className="flex flex-col gap-10 mt-2">
                    <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-[#005143]">
                            Dependancy Mapping
                        </span>
                        <span className="text-sm text-[#005143]">
                            Task relatioships identified
                        </span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-[#005143]">
                            Sequencing & Prioritization
                        </span>
                        <span className="text-sm text-[#005143]">
                            Execution order optimized
                        </span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-[#005143]">
                            Assignment Engine
                        </span>
                        <span className="text-sm text-[#005143]">
                            Work distributed automatically
                        </span>
                    </motion.div>
                </div>
            </div>
            <motion.div variants={itemVariants} custom="right" className="bg-[#dff1e6] border-2 border-[#005143] p-5 flex flex-col gap-4 sm:w-[45%] rounded-lg mx-auto">
                <div className="text-sm text-[#005143]">Live Status</div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                        <div className="text-[80%] text-[#005143]">HR</div>
                        <div className="text-[80%] text-[#005143]">70%</div>
                    </div>
                    <div className="w-full bg-[linear-gradient(to_right,#143f87_70%,#d6d8d9_60%)] h-2 rounded-4xl" />     
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                        <div className="text-[80%] text-[#005143]">Finance</div>
                        <div className="text-[80%] text-[#005143]">60%</div>
                    </div>
                    <div className="w-full bg-[linear-gradient(to_right,#ff751f_60%,#d6d8d9_60%)] h-2 rounded-4xl" />     
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                        <div className="text-[80%] text-[#005143]">Procurement</div>
                        <div className="text-[80%] text-[#005143]">100%</div>
                    </div>
                    <div className="w-full bg-[linear-gradient(to_right,#6fd8a8_100%,#d6d8d9_60%)] h-2 rounded-4xl" />     
                </div>
            </motion.div>
            
        </div>
        <motion.div variants={itemVariants} className="p-5 rounded-lg w-full border-2 border-[#005143] flex flex-col gap-3 mt-4">
            <span className="text-sm text-[#005143]">Workflow Performance</span>
            <span className="text-sm text-[#005143] font-semibold">Cycle Time reduced by 32%</span>
        </motion.div>
        
    </motion.div>
      </div>
        <h1 className="text-white text-2xl md:text-3xl text-center mb-4 mt-12" ref={seeHowRef}>
          See How it works
        </h1>
        <motion.div
  initial={false}
  animate={seeHowInView ? "open" : "closed"}
  variants={{
    closed: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.6, ease: "easeInOut" },
        opacity: { duration: 0.4, delay: 0.2 },
      },
    },
  }}
  className="relative mt-10 w-full"
>
          {/* SVG Lines */}
          <svg className="absolute w-full h-full pointer-events-none hidden sm:block" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <AnimatedPath isInView={seeHowInView} d="
              M150 290
              H1000
              V550
              H0
              V820
              H800
            " />
          </svg>

          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 items-center justify-items-center gap-4 sm:gap-6 lg:gap-10 px-2 sm:px-4 lg:px-0">
            {gridItemsChat.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 sm:gap-6 bg-[#1F7A5A] text-white rounded-lg p-4 text-lg sm:text-xl font-semibold w-full sm:max-w-[400px] z-10 justify-center
                  ${idx === 6 ? "sm:col-start-2 lg:col-start-2" : ""}
                `}
              >
                <Image src={item.img} alt={item.text} width={39} height={30} />
                <span className="mt-1">{item.text}</span>
              </div>
            ))}
          </div>
          </motion.div>
      </motion.div>
        </>
    )
}

function ResourceSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.3,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const gridItemsChat = [
    { img: "/cal.png", text: "Project / Shift Definition" },
    { img: "/community.png", text: "Skill & Availability Mapping" },
    { img: "/stack.png", text: "Workload & Capacity Analysis" },
    { img: "/dependency.png", text: "Resource Assignment" },
    { img: "/alert.png", text: "Conflict Detection" },
    { img: "/cal.png", text: "Schedule Finalization" },
  ];
  const gridVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { 
      opacity: 1, 
      height: "auto", 
      transition: { duration: 0.6, ease: "easeInOut" } 
    }
  };
  const cards = [
    {
      title: "Staffing Matrix Alignment",
      img:"/tick.png"
    },
    {
      title: "Workspace utilization verify",
      img:"/tick.png"
    },
    {
      title: "Inventory sync complete",
      img:"/tick.png"
    
    },
    {
        title:"Conflict Resolution: 1 potential overlap resolved. "
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // cards appear one by one
      },
    },
  };

  const itemVariants = {
  hidden: (direction = "up") => ({
    opacity: 0,
    x: direction === "right" ? 40 : 0,
    y: direction === "up" ? 20 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

  const cardVariants = {
  hidden: (custom: number) => {
    if (custom === 3) {
      return {
        opacity: 0,
        scale: 0.6,
      };
    }

    return {
      opacity: 0,
      y: 50,
    };
  },

  visible: (custom: number) => {
    if (custom === 0) {
      return {
        opacity: 1,
        scale: 0.8,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 3,
        },
      };
    }

    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    };
  },
};


    return (
        <>
        <motion.div 
        initial="hidden"
        variants={gridVariants}
        animate="visible"   // ✅ REQUIRED
        exit="hidden"
        className="flex flex-col gap-4 md:gap-6 mt-20 px-4 md:px-0"
      >
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10 shadow-[inset_0_0_4px_4px_#02ab81,_0_0_10px_#02ab81]">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-45 ml-0 lg:ml-10">
          <h2 className="text-2xl font-semibold">Resource Allocation Agent</h2>
          <p className="font-semibold">Aligns people, skills, and capacity before work begins.</p>
          <p>
            Plans projects and shifts by intelligently mapping skills, availability, and workload.<br/> The agent assigns resources, detects conflicts early, and finalizes balanced<br/> schedules that keep teams productive without overload.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="relative overflow-visible bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 p-4 lg:p-6 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <div className="bg-[#005143] w-full text-center rounded-lg text-white px-6 p-4 font-semibold text-xl flex flex-row justify-between">
            <span>Active Project</span>
            <span>Project A</span>
        </div>
        <div className="text-sm text-[#005143] text-left mt-2">
            Resource Allocation
        </div>
        <motion.div variants={itemVariants} className="p-5 rounded-lg w-full border-2 border-[#005143] flex flex-col gap-1 mt-2 bg-[#dff1e6]">
            <span className="text-sm text-[#005143]">Design Task</span>
            <span className="text-sm text-[#005143] font-semibold">Ailah, Hani</span>
        </motion.div>
        <motion.div variants={itemVariants} className="p-5 rounded-lg w-full border-2 border-[#005143] flex flex-col gap-1 mt-2 bg-[#dff1e6]">
            <span className="text-sm text-[#005143]">Development</span>
            <span className="text-sm text-[#005143] font-semibold">Dev Team A → Ali, Hamza</span>
        </motion.div>
        <motion.div variants={itemVariants} className="p-5 rounded-lg w-full border-2 border-[#005143] flex flex-col gap-1 mt-2 bg-[#dff1e6]">
            <span className="text-sm text-[#005143]">QA Testing</span>
            <span className="text-sm text-[#005143] font-semibold">Sarah Khan</span>
        </motion.div>
        <motion.div variants={itemVariants} className="p-5 rounded-lg w-full border-2 border-[#005143] flex flex-col gap-1 mt-2 bg-[#dff1e6]">
            <span className="text-sm text-[#005143]">Support Ops</span>
            <span className="text-sm text-[#005143] font-semibold">Ahmed</span>
        </motion.div>
        
    </motion.div>
      </div>
        <h1 className="text-white text-2xl md:text-3xl text-center mb-4 mt-12" ref={seeHowRef}>
          See How it works
        </h1>
        <motion.div
  initial={false}
  animate={seeHowInView ? "open" : "closed"}
  variants={{
    closed: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.6, ease: "easeInOut" },
        opacity: { duration: 0.4, delay: 0.2 },
      },
    },
  }}
  className="relative mt-10 w-full"
>
          {/* SVG Lines */}
          <svg className="absolute w-full h-full pointer-events-none hidden sm:block" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <AnimatedPath isInView={seeHowInView} d="
              M150 290
              H1000
              V550
              H0
              V820
              H800
            " />
          </svg>

          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 items-center justify-items-center gap-4 sm:gap-6 lg:gap-10 px-2 sm:px-4 lg:px-0">
            {gridItemsChat.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 sm:gap-6 bg-[#1F7A5A] text-white rounded-lg p-4 text-lg sm:text-xl font-semibold w-full sm:max-w-[400px] z-10 justify-center
                  ${idx === 6 ? "sm:col-start-2 lg:col-start-2" : ""}
                `}
              >
                <Image src={item.img} alt={item.text} width={39} height={30} />
                <span className="mt-1">{item.text}</span>
              </div>
            ))}
          </div>
          </motion.div>
      </motion.div>
        </>
    )
}

function RiskSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/layers.png", text: "Data Aggregation" },
    { img: "/warning.png", text: "Risk Identification" },
    { img: "/meter.png", text: "Risk Scoring & Prioritization" },
    { img: "/bell.png", text: "Alerts & Escalation" },
    { img: "/verify_badge.png", text: "Mitigation Recommendations" },
    { img: "/copy_new.png", text: "Reporting & Audit" },
  ];
  const gridVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { 
      opacity: 1, 
      height: "auto", 
      transition: { duration: 0.6, ease: "easeInOut" } 
    }
  };
  const cards = [
    {
      title: "Staffing Matrix Alignment",
      img:"/tick.png"
    },
    {
      title: "Workspace utilization verify",
      img:"/tick.png"
    },
    {
      title: "Inventory sync complete",
      img:"/tick.png"
    
    },
    {
        title:"Conflict Resolution: 1 potential overlap resolved. "
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // cards appear one by one
      },
    },
  };

  const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

  const cardVariants = {
  hidden: (custom: number) => {
    if (custom === 3) {
      return {
        opacity: 0,
        scale: 0.6,
      };
    }

    return {
      opacity: 0,
      y: 50,
    };
  },

  visible: (custom: number) => {
    if (custom === 3) {
      return {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 4,
        },
      };
    }

    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    };
  },
};


    return (
        <>
        <motion.div 
        initial="hidden"
        variants={gridVariants}
        animate="visible"   // ✅ REQUIRED
        exit="hidden"
        className="flex flex-col gap-4 md:gap-6 mt-20 px-4 md:px-0"
      >
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10 shadow-[inset_0_0_4px_4px_#02ab81,_0_0_10px_#02ab81]">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-45 ml-0 lg:ml-10">
          <h2 className="text-2xl font-semibold">Risk Monitoring Agent</h2>
          <p className="font-semibold">Identifies, prioritizes, and mitigates operational risks in real time.</p>
          <p>
            Continuously aggregates data across operations, finance, and market signals to<br/> detect emerging risks, assess their impact, trigger timely alerts, and recommend<br/> mitigation actions while maintaining a complete audit trail.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="relative overflow-visible bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 p-4 lg:p-6 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <div className="bg-[#005143] w-full text-center rounded-lg text-white px-6 p-4 font-semibold text-xl">
            Risk Monitoring Agent
        </div>
        <motion.div variants={itemVariants}>
            <ul className="list-disc pl-5 mt-2 mb-3">
                <li className="text-sm font-semibold text-[#005143]">
                    Risk Identified
                </li>
            </ul>
            <div className="bg-[#dff1e6] text-sm text-[#005143] p-5 rounded-lg w-[90%] mx-auto">Supplier delay detected in regional hub. </div>
        </motion.div>
        <motion.div variants={itemVariants}>
            <div className="flex flex-row justify-between">
                <ul className="list-disc pl-5 mt-2 mb-3">
                    <li className="text-sm font-semibold text-[#005143]">
                        Risk Score
                    </li>
                </ul>
                <div className="text-sm text-[#005143] flex flex-col justify-center">Medium</div>
            </div>
            
            <div className="w-full bg-[linear-gradient(to_right,#e7e98b_90%,#d6d8d9_60%)] h-3 rounded-4xl" />     
        </motion.div>

        <motion.div variants={itemVariants}>
            <ul className="list-disc pl-5 mt-2 mb-3">
                <li className="text-sm font-semibold text-[#005143]">
                    Priority Level
                </li>
            </ul>
            <div className="bg-[#eeeeee] text-sm text-[#5e5d5b] p-5 rounded-lg w-[90%] mx-auto font-semibold">Action Required </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-[90%] p-5 mx-auto rounded-lg">
            <div className="text-sm text-[#005143] font-semibold">Autonomous Monitoring</div>
            <div className="text-sm text-[#005143] mt-2">
                The agent continously scans global supply chain data, financial markets, and internal operations to identify bottlenecks before they impact delivery. 
            </div>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-[93%] p-5 mx-auto rounded-lg">
            <div className="text-sm text-[#005143] font-semibold">Predictive Analytics</div>
            <div className="text-sm text-[#005143] mt-2">
                Using properiety scoring models, Officeflow AI determines the priority suggests the optimal mitigation startegy based on historical success rates.
            </div>
        </motion.div>
        
        
    </motion.div>
      </div>
        <h1 className="text-white text-2xl md:text-3xl text-center mb-4 mt-12" ref={seeHowRef}>
          See How it works
        </h1>
        <motion.div
  initial={false}
  animate={seeHowInView ? "open" : "closed"}
  variants={{
    closed: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.6, ease: "easeInOut" },
        opacity: { duration: 0.4, delay: 0.2 },
      },
    },
  }}
  className="relative mt-10 w-full"
>
          {/* SVG Lines */}
          <svg className="absolute w-full h-full pointer-events-none hidden sm:block" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <AnimatedPath isInView={seeHowInView} d="
              M150 290
              H1000
              V550
              H0
              V820
              H800
            " />
          </svg>

          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 items-center justify-items-center gap-4 sm:gap-6 lg:gap-10 px-2 sm:px-4 lg:px-0">
            {gridItemsChat.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 sm:gap-6 bg-[#1F7A5A] text-white rounded-lg p-4 text-lg sm:text-xl font-semibold w-full sm:max-w-[400px] z-10 justify-center
                  ${idx === 6 ? "sm:col-start-2 lg:col-start-2" : ""}
                `}
              >
                <Image src={item.img} alt={item.text} width={39} height={30} />
                <span className="mt-1">{item.text}</span>
              </div>
            ))}
          </div>
          </motion.div>
      </motion.div>
        </>
    )
}






export default function OperationsAI() {
  const TOTAL_SECTIONS = 3;
  const [activeSection, setActiveSection] = useState(0);

  {/*useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % TOTAL_SECTIONS);
    }, 8000);

    return () => clearInterval(interval);
  }, []);*/}

  // Advance to next section on click
  const handleSectionClick = () => {
    setActiveSection(prev => (prev + 1) % TOTAL_SECTIONS);
  };

  return (
    <div className="p-6 md:p-12 bg-emerald-900">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center text-center mt-10 px-4 md:px-0">
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          AI Agents Supporting Daily Operations
        </h1>
        <p className="text-white max-w-6xl">
         Stay ahead of shortages, delays, and asset issues with intelligent, always-on support.
        </p>
      </div>

      {/* Clickable Section */}
      <AnimatePresence mode="wait">
        {activeSection === 0 && (
          <div onClick={handleSectionClick}>
            <WorkflowSection key="workflow" />
          </div>
        )}
        {activeSection === 1 && (
          <div onClick={handleSectionClick}>
            <ResourceSection key="resource" />
          </div>
        )}
        {activeSection === 2 && (
          <div onClick={handleSectionClick}>
            <RiskSection key="risk" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

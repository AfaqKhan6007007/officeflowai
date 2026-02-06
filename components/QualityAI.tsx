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

function ComplianceSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.3,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const gridItemsChat = [
    { img: "/ingestion.png", text: "Policy & Regulation Ingestion" },
    { img: "/view.png", text: "Monitoring & Tracking" },
    { img: "/tick_badge.png", text: "Compliance Check" },
    { img: "/warning.png", text: "Exception & Violation Detection" },
    { img: "/bell.png", text: "Alert & Escalation" },
    { img: "/copy_new.png", text: "Reporting & Audit Logging" },
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
    y: 20,
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
          <h2 className="text-2xl font-semibold">Compliance Monitoring Agent</h2>
          <p className="font-semibold">Continuously monitors compliance so your business stays protected.</p>
          <p>
            Automatically ingests policies and regulations, monitors ongoing activities, detects<br/> violations early, and maintains complete audit trails helping teams stay compliant<br/> without manual oversight or last-minute surprises.
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
            Compliance Monitoring Agent 
        </div>
        <div className="text-[100%] text-[#005143] font-semibold">
            Policy Ingestion
        </div>
        <motion.div variants={itemVariants} className="border-2 border-[#005143] mx-5 flex flex-row gap-4 p-4 rounded-lg">
            <Image src="/tick_final.svg" alt="tick" width={25} height={20} style={{width:"23px",height:"20px"}} />
            <div className="text-sm text-[#005143]">
                Tax Policy
            </div>
        </motion.div>
        <motion.div variants={itemVariants} className="border-2 border-[#005143] mx-5 flex flex-row gap-4 p-4 rounded-lg">
            <Image src="/tick_final.svg" alt="tick" width={25} height={20} style={{width:"23px",height:"20px"}} />
            <div className="text-sm text-[#005143]">
                HR Regulation
            </div>
        </motion.div>
        <motion.div variants={itemVariants} className="border-2 border-[#005143] mx-5 flex flex-row gap-4 p-4 rounded-lg">
            <Image src="/tick_final.svg" alt="tick" width={25} height={20} style={{width:"23px",height:"20px"}} />
            <div className="text-sm text-[#005143]">
                Finance Rule
            </div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-3 border-2 rounded-lg text-center py-6 font-semibold bg-[#dff1e6] text-[#005143] border-[#005143]">
            <div className="border-b-2 border-[#005143] pb-4">Compliance Monitoring Engine</div>
            <div className="text-sm font-normal px-5 py-6">Automated background monitoring ensuring continuous adherence to global policy frameworks. </div>
            <div className="flex flex-col sm:flex-row gap-8 px-5 sm:px-0 justify-center">
                <div className="text-white bg-[#005143] py-2 px-8 rounded-lg">
                    View Full Audit
                </div>
                <div className="text-black bg-[#d9d9d9] py-2 px-8 border-2 rounded-lg border-[#5e5d5b]">
                    Configure Rules
                </div>
            </div>
            <p className="text-[#005143] text-[70%]">System Live</p>
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

function IncidentSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/incident.png", text: "Incident Detection" },
    { img: "/layers.png", text: "Classification & Prioritization" },
    { img: "/copy_new.png", text: "Automated or Manual Assignment" },
    { img: "/investigate.png", text: "Investigation & Resolution" },
    { img: "/message.png", text: "Communication / Escalation" },
    { img: "/ingestion.png", text: "Logging & Reporting" },
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
          <h2 className="text-2xl font-semibold">Incident Management Agent</h2>
          <p className="font-semibold">Detects, prioritizes, and resolves incidents before they disrupt operations.</p>
          <p>
            Continuously monitors activity to detect incidents, classifies their impact, assigns<br/> them to the right teams, and tracks resolution while keeping stakeholders informed<br/> and maintaining complete incident records.
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
            Incident Management Agent
        </div>
        <ul className="list-disc pl-5 mt-2">
            <li className="text-sm font-semibold text-[#005143]">
                Incident Detected
            </li>
        </ul>
        <motion.div variants={itemVariants} className="bg-[#005143] text-center rounded-lg text-white px-6 p-4 font-semibold text-xl flex flex-row justify-between mx-4">
            <div className="flex flex-col">
                <span className="text-sm font-normal">
                    System outage detected.
                </span>
                <span className="text-sm font-semibold text-left">
                    Affected service: Biling 
                </span>
            </div>
            <Image src="/light_fill.svg" alt="light" width={40} height={30} />
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center sm:mt-0 mt-3">
            <motion.div variants={itemVariants} className="bg-[#e7f2ff] rounded-lg p-6 text-center text-sm flex flex-col shadow-[-8px_-8px_0px_0px_#005143] sm:w-[39%]">
                <span className="text-[#005143] font-semibold">Classification</span>
                <span className="text-[#005143]">Impact: Medium</span>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-[#e7f2ff] rounded-lg p-6 text-center text-sm flex flex-col shadow-[-8px_-8px_0px_0px_#005143] sm:w-[39%]">
                <span className="text-[#005143] font-semibold">Assignment</span>
                <span className="text-[#005143]">Assigned to Ops Team</span>
            </motion.div>
        </div>
        <motion.div variants={itemVariants} className="bg-[#dff0f1] rounded-lg p-6 text-center text-sm flex flex-col shadow-[-8px_-8px_0px_0px_#005143] sm:w-[39%] mx-auto mt-5 sm:mt-0">
            <span className="text-[#005143] font-semibold">Resolution</span>
            <span className="text-[#005143]">Issue Resolved</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#dff1e6] rounded-lg p-6 text-center text-sm flex flex-col sm:flex-row shadow-[-8px_-8px_0px_0px_#005143] mx-4 justify-between sm:mt-0 mt-5">
            <div className="flex flex-col">
                <span className="text-[#005143] font-semibold">Human Escalation</span>
                <span className="text-[#005143] text-left">Not Required</span>
            </div>
            <div className="bg-[#d9d9d9] border-2 border-[#5e5d5b] p-5 text-black rounded-lg sm:w-[30%] font-semibold py-3">
                Inactive
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






export default function QualityAI() {
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
          AI Agents for Smarter Quality Management
        </h1>
        <p className="text-white max-w-6xl">
          Detect risks early, ensure compliance, and automate corrective actions with intelligent insights.
        </p>
      </div>

      {/* Clickable Section */}
      <AnimatePresence mode="wait">
        {activeSection === 0 && (
          <div onClick={handleSectionClick}>
            <ComplianceSection key="compliance" />
          </div>
        )}
        {activeSection === 1 && (
          <div onClick={handleSectionClick}>
            <IncidentSection key="incident" />
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

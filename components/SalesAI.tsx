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

function CustomerSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.3,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const gridItemsChat = [
    { img: "/message.png", text: "Customer Query Intake" },
    { img: "/ai.png", text: "Intent Classification" },
    { img: "/neural.png", text: "Knowledge Base Search" },
    { img: "/message.png", text: "Response Generation" },
    { img: "/tick.png", text: "Automated Resolution" },
    { img: "/headset.png", text: "Escalation to Human Agent" },
    { img: "/copy_new.png", text: "Feedback Logging" },
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
          <h2 className="text-2xl font-semibold">Customer Support Agent</h2>
          <p className="font-semibold">Smart AI that resolves queries instantly and escalates only when necessary.</p>
          <p>
            Automates the handling of customer questions from intake to resolution. Reads<br/> intent, searches the knowledge base, provides accurate responses, and logs<br/> feedback all without human intervention unless needed.
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
        <div className="bg-[#005143] w-full text-left rounded-lg text-white px-6 p-4 font-semibold text-xl">
            <span className="text-sm text-[#6FD8A8]">Contract Draft</span>
            <br/>Customer Support Agent
        </div>
        <div className="bg-[#005143] w-full text-left rounded-lg text-white px-6 p-4 font-semibold text-xl flex flex-col gap-0">
            <span>Status processing</span>
            <span className="text-sm font-normal">Complaint No # 1042</span>
            <motion.div variants={itemVariants} className="bg-[#DFF1E6] p-5 flex flex-col gap-3 rounded-lg text-sm text-[#005143] mt-5">
                <div className="font-semibold">Login issue after password reset</div>
                <div className="text-[12px] font-normal flex flex-row gap-1"><span>Sarah Khan</span><div className="flex flex-col justify-center items-center h-4"><MoveRightIcon width={15} className="my-auto"/></div><span>Marketing Department</span></div>
                <div className="font-normal">I changed my password yesterday but i cant seem to login to my account anymore...</div>
                <div className="text-white text-sm text-center bg-[#57B887] px-6 mt-4 py-3 rounded-lg ml-auto">Proceed</div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-0">
                <span className="mt-6">Status processing</span>
                <span className="text-sm font-normal">Request</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-[#DFF1E6] p-5 flex flex-col gap-3 rounded-lg text-sm text-[#005143] mt-5">
                <div className="font-semibold">Intent Analysis</div>
                <div className="text-[12px] font-normal flex flex-row gap-1"><span>Sarah Khan</span><div className="flex flex-col justify-center items-center h-4"><MoveRightIcon width={15} className="my-auto"/></div><span>Marketing Department</span></div>
            </motion.div>
        </div>
        
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
               M150 150
              H1000
              V360
              H0
              V520
              H1000
              V880
              H600
              
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

function LeadSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.3,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const gridItemsChat = [
    { img: "/dependency.png", text: "Lead Source Identification" },
    { img: "/copy_new.png", text: "Lead Data Extraction" },
    { img: "/ingestion.png", text: "Qualification & Scoring" },
    { img: "/stack.png", text: " CRM Record Creation" },
    { img: "/copy_new.png", text: "Lead Assignment" },
    { img: "/cal.png", text: "Follow-Up Scheduling" },
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
    x: -40,
    y:0
  },
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
          <h2 className="text-2xl font-semibold">Lead Capturing Agent</h2>
          <p className="font-semibold">Automatically collects, qualifies, and routes leads to your team.</p>
          <p>
            Captures leads from multiple sources, extracts relevant data, scores their quality,<br/> creates CRM records, assigns them to the right team member, and schedules<br/> follow-ups so sales never miss an opportunity.
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
            <span>Lead Capture Agent</span>
        </div>
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-center rounded-lg text-[#005143] px-6 p-4 font-semibold text-sm flex flex-row gap-3">
            <Image src="/tick_final.svg" alt="tick" width={25} height={20} />
            <span>Data extracted</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-center rounded-lg text-[#005143] px-6 p-4 font-semibold text-sm flex flex-row gap-3">
            <Image src="/tick_final.svg" alt="tick" width={25} height={20} />
            <span>Lead Scored</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-center rounded-lg text-[#005143] px-6 p-4 font-semibold text-sm flex flex-row gap-3">
            <Image src="/tick_final.svg" alt="tick" width={25} height={20} />
            <span>Qualified</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-center rounded-lg text-[#005143] px-6 p-4 font-semibold text-sm flex flex-row gap-3">
            <Image src="/tick_final.svg" alt="tick" width={25} height={20} />
            <span>CRM record created</span>
        </motion.div>
        <hr className="border-[#dff1e6] sm:-mx-6" />
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-left rounded-lg text-[#005143] px-6 p-4 font-semibold text-xl flex flex-col gap-0">
            <span className="font-semibold text-sm">Instant Capture</span>
            <span className="font-normal text-[13px]">Convert leads in seconds from any digial touchpoint with AI powered intake. </span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-left rounded-lg text-[#005143] px-6 p-4 font-semibold text-xl flex flex-col gap-0">
            <span className="font-semibold text-sm">Intelligent Scoring</span>
            <span className="font-normal text-[13px]">Automatically qualify prospects based on company size, intent and historical data. </span>
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


function SalesSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.3,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const gridItemsChat = [
    { img: "/stack.png", text: "Historical Data Collection" },
    { img: "/pattern.png", text: "Trend & Pattern Analysis" },
    { img: "/dependency.png", text: "Predictive Modeling" },
    { img: "/pattern.png", text: "Forecast Generation" },
    { img: "/block.png", text: "Scenario Simulation" },
    { img: "/copy_new.png", text: "Stakeholder Reporting" },
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
    x: -40,
    y:0
  },
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
      y: -5,
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
          <h2 className="text-2xl font-semibold">Sales Forecasting Agent</h2>
          <p className="font-semibold">Predict future sales trends with AI-powered insights.</p>
          <p>
            Analyzes historical sales data, identifies patterns, runs predictive models, generates<br/> forecasts, simulates different scenarios, and provides clear reports for stakeholders<br/> helping your team make informed decisions and plan ahead.
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
            <span>Sales Forecasting Agent</span>
        </div>
       <div className="flex flex-row gap-1 justify-center scale-65 sm:scale-100">
        <div className="flex flex-col gap-4">
            <motion.div variants={cardVariants} custom={0} className="bg-[#dff1e6] border-[#6fd8a8] border p-5 px-4 text-[#005143] rounded-lg text-sm text-center z-10">Past Sales</motion.div>
            <motion.div variants={cardVariants} custom={0} className="bg-[#dff1e6] border-[#6fd8a8] border p-5 px-4 text-[#005143] rounded-lg text-sm text-center z-10">Seasonality</motion.div>
            <motion.div variants={cardVariants} custom={0} className="bg-[#dff1e6] border-[#6fd8a8] border p-5 px-4 text-[#005143] rounded-lg text-sm text-center z-10">Market Signals</motion.div>
        </div>
        <div className="flex flex-col gap-8">
            <motion.hr variants={cardVariants} custome={0} className="w-10 border border-[#005143] border-dashed [border-dasharray:12_8] rotate-[50deg] origin-left -mx-5 mt-8" />
            <motion.hr variants={cardVariants} className="w-10 border border-[#005143] border-dashed [border-dasharray:12_8] origin-left mt-10 -mx-5" />
            <motion.hr variants={cardVariants} className="w-10 border border-[#005143] border-dashed [border-dasharray:12_8] rotate-[-50deg] origin-left -mx-5 mt-11" />
        </div>
        
        <div className="bg-[#dff1e6] border-[#6fd8a8] border py-9 px-3 text-[#005143] rounded-lg text-sm text-center font-semibold my-auto z-10">Predictive Model</div>
        <motion.hr variants={cardVariants} className="w-8 border border-[#005143] border-dashed [border-dasharray:12_8] origin-left mt-[105px] mr-0 sm:-mr-5 sm:-ml-1 ml-0" />
        <motion.div variants={cardVariants} custom={0} className="bg-[#dff1e6] border-[#6fd8a8] border p-5 px-4 text-[#005143] rounded-lg text-sm text-center my-auto -ml-3 sm:ml-0 z-10 ">Forecast Generated</motion.div>
       </div>
        <hr className="border-[#dff1e6] sm:-mx-6" />
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-left rounded-lg text-[#005143] px-6 p-4 font-semibold text-xl flex flex-col gap-0">
            <span className="font-semibold text-sm">Past Sales </span>
            <span className="font-normal text-[13px]">Deep historical data analysis across all regions.</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-left rounded-lg text-[#005143] px-6 p-4 font-semibold text-xl flex flex-col gap-0">
            <span className="font-semibold text-sm">Market Signals</span>
            <span className="font-normal text-[13px]">Global economic indicators integrated in real-time.</span>
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



function PricingSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.3,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const gridItemsChat = [
    { img: "/stack.png", text: "Competitor Data Collection" },
    { img: "/pattern.png", text: "Demand & Cost Analysis" },
    { img: "/calculator.png", text: "Price Elasticity Calculation" },
    { img: "/tag.png", text: "Optimal Pricing Recommendation" },
    { img: "/tick.png", text: "Approval & Implementation" },
    { img: "/person.png", text: "Performance Monitoring" },
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
  hidden: (custom:number) => {
    if(custom===3){
        return {
            opacity: 0,
            y: 50,
            x:0
        }
    }
    return {
        opacity: 0,
        x: -40,
        y:0
    }
    
  },
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
      y: -5,
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
          <h2 className="text-2xl font-semibold">Pricing Optimization Agent</h2>
          <p className="font-semibold">Set the right price at the right time, backed by data and AI.</p>
          <p>
            Continuously analyzes market signals, demand patterns, and cost structures to<br/> recommend optimal pricing. Simulates elasticity, supports approvals, and tracks<br/> performance so pricing decisions stay competitive, profitable, and controlled.
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
            <span className="text-center">Pricing Optimization Agent</span>
        </div>
       <div className="flex flex-col sm:flex-row gap-8 px-5 mt-4">
            <div className="flex flex-col gap-3">
                <motion.div variants={itemVariants} className="flex flex-row gap-5 border border-[#6fd8a8] rounded-lg text-sm font-semibold text-[#005143] px-6 py-3">
                    <Image src="/market.svg" alt="market" width={35} height={20} />
                    <span className="flex flex-col justify-center">Market Data</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-row gap-5 border border-[#6fd8a8] rounded-lg text-sm font-semibold text-[#005143] px-6 py-3">
                    <Image src="/demand_logo.svg" alt="market" width={35} height={20} />
                    <span className="flex flex-col justify-center">Demand</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-row gap-5 border border-[#6fd8a8] rounded-lg text-sm font-semibold text-[#005143] px-6 py-3">
                    <Image src="/cost.svg" alt="market" width={35} height={20} />
                    <span className="flex flex-col justify-center">Costs</span>
                </motion.div>
            </div>
            <div className="rounded-lg bg-[#dff0f1] border border-[#6fd8a8] flex flex-col gap-0 p-8 justify-center items-center">
                <Image src="/engine.svg" alt="engine" width={75} height={80} />
                <div className="flex flex-col gap-0 pt-2">
                    <span className="text-sm text-[#005143] text-center font-semibold">Optimization Engine</span>
                    <span className="text-sm text-[#005143] text-center">Simulating Price Elasticity...</span>
                </div>
            </div>
       </div>
       <hr className="border-[#dff1e6] sm:-mx-6" />
       <div className="rounded-lg p-4 flex flex-row justify-between border border-[#6fd8a8] bg-[#dff1e6]">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-0">
                    <span className="text-sm text-[#005143] font-semibold">Optimal Pricing Recommenddations</span>
                    <span className="text-sm text-[#005143] font-semibold">$142.50</span>
                </div>
                <div className="bg-white border border-[#6fd8a8] rounded-lg text-[#005143] text-sm font-semibold text-center p-4">Approved & Monitored</div>
            </div>
            <motion.div variants={itemVariants} custom={3} className="mt-auto">
                <Image src="/optimal.svg" alt="optimal" width={200} height={100} className="mt-auto hidden sm:block" />
            </motion.div>
            
       </div>
        
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


function MarketingSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.3,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const gridItemsChat = [
    { img: "/stack.png", text: "Historical Data Collection" },
    { img: "/pattern.png", text: "Trend & Pattern Analysis" },
    { img: "/dependency.png", text: "Predictive Modeling" },
    { img: "/pattern.png", text: "Forecast Generation" },
    { img: "/block.png", text: "Scenario Simulation" },
    { img: "/copy_new.png", text: "Stakeholder Reporting" },
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
    x: -40,
    y:0
  },
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
      y: -5,
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
          <h2 className="text-2xl font-semibold">Sales Forecasting Agent</h2>
          <p className="font-semibold">Predict future sales trends with AI-powered insights.</p>
          <p>
            Analyzes historical sales data, identifies patterns, runs predictive models, generates<br/> forecasts, simulates different scenarios, and provides clear reports for stakeholders<br/> helping your team make informed decisions and plan ahead.
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
            <span>Sales Forecasting Agent</span>
        </div>
       <div className="flex flex-row gap-1 justify-center scale-65 sm:scale-100">
        <div className="flex flex-col gap-4">
            <motion.div variants={cardVariants} custom={0} className="bg-[#dff1e6] border-[#6fd8a8] border p-5 px-4 text-[#005143] rounded-lg text-sm text-center z-10">Past Sales</motion.div>
            <motion.div variants={cardVariants} custom={0} className="bg-[#dff1e6] border-[#6fd8a8] border p-5 px-4 text-[#005143] rounded-lg text-sm text-center z-10">Seasonality</motion.div>
            <motion.div variants={cardVariants} custom={0} className="bg-[#dff1e6] border-[#6fd8a8] border p-5 px-4 text-[#005143] rounded-lg text-sm text-center z-10">Market Signals</motion.div>
        </div>
        <div className="flex flex-col gap-8">
            <motion.hr variants={cardVariants} custome={0} className="w-10 border border-[#005143] border-dashed [border-dasharray:12_8] rotate-[50deg] origin-left -mx-5 mt-8" />
            <motion.hr variants={cardVariants} className="w-10 border border-[#005143] border-dashed [border-dasharray:12_8] origin-left mt-10 -mx-5" />
            <motion.hr variants={cardVariants} className="w-10 border border-[#005143] border-dashed [border-dasharray:12_8] rotate-[-50deg] origin-left -mx-5 mt-11" />
        </div>
        
        <div className="bg-[#dff1e6] border-[#6fd8a8] border py-9 px-3 text-[#005143] rounded-lg text-sm text-center font-semibold my-auto z-10">Predictive Model</div>
        <motion.hr variants={cardVariants} className="w-8 border border-[#005143] border-dashed [border-dasharray:12_8] origin-left mt-[105px] mr-0 sm:-mr-5 sm:-ml-1 ml-0" />
        <motion.div variants={cardVariants} custom={0} className="bg-[#dff1e6] border-[#6fd8a8] border p-5 px-4 text-[#005143] rounded-lg text-sm text-center my-auto -ml-3 sm:ml-0 z-10 ">Forecast Generated</motion.div>
       </div>
        <hr className="border-[#dff1e6] sm:-mx-6" />
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-left rounded-lg text-[#005143] px-6 p-4 font-semibold text-xl flex flex-col gap-0">
            <span className="font-semibold text-sm">Past Sales </span>
            <span className="font-normal text-[13px]">Deep historical data analysis across all regions.</span>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-[#dff1e6] w-full text-left rounded-lg text-[#005143] px-6 p-4 font-semibold text-xl flex flex-col gap-0">
            <span className="font-semibold text-sm">Market Signals</span>
            <span className="font-normal text-[13px]">Global economic indicators integrated in real-time.</span>
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




export default function SalesAI() {
  const TOTAL_SECTIONS = 5;
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
          AI Agents Powering Sales & Marketing
        </h1>
        <p className="text-white max-w-6xl">
         Intelligent assistants that help your teams prioritize the right leads, protect deals in motion, and act at the right moment.
        </p>
      </div>

      {/* Clickable Section */}
      <AnimatePresence mode="wait">
        {activeSection === 0 && (
          <div onClick={handleSectionClick}>
            <CustomerSection key="customer" />
          </div>
        )}
        {activeSection === 1 && (
          <div onClick={handleSectionClick}>
            <LeadSection key="lead" />
          </div>
        )}
        {activeSection === 2 && (
          <div onClick={handleSectionClick}>
            <SalesSection key="sales" />
          </div>
        )}
        {activeSection === 3 && (
          <div onClick={handleSectionClick}>
            <PricingSection key="pricing" />
          </div>
        )}
        {activeSection === 4 && (
          <div onClick={handleSectionClick}>
            <MarketingSection key="marketing" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

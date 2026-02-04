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

function InvoiceSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.8 });
  const gridItemsChat = [
    { img: "/receipt.png", text: "Invoice Receipt & Capture" },
    { img: "/extract.png", text: "Data Extraction & Validation" },
    { img: "/verify.png", text: "Vendor / Client Verification" },
    { img: "/fishy.png", text: "Exception Detection" },
    { img: "/true.png", text: "Approval Routing" },
    { img: "/stack.png", text: "Accounting System Update" },
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
          <h2 className="text-2xl font-semibold">Invoice Processing Agent</h2>
          <p className="font-semibold">Automated invoice handling from intake to ledger</p>
          <p>
            This agent captures invoices, extracts and validates key data, verifies vendors or<br/> clients, flags exceptions, and routes invoices for approval before updating the<br/> accounting system automatically. It reduces manual entry, prevents errors, and<br/> keeps financial records continuously up to date.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="relative overflow-visible bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 rounded-md p-4 lg:p-10 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <h2 className="bg-[#005143] w-full rounded-lg text-white px-6 p-4 text-center font-semibold text-xl">
            Invoice Processing Agent<br/>
            <p className="text-sm font-normal mt-2">Real-time visualization of automated extraction and verification</p>
        </h2>
        <div className="bg-[#005143] w-full rounded-lg text-white px-4 p-4 flex-col justify-center items-center gap-4">
            <div className="gap-3 mr-auto ml-auto mb-5 text-sm items-center sm:flex hidden">
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-5 py-3">Step:1 Ingestion</div>
            </div>
            <div className="bg-emerald-50 w-full rounded-lg text-white px-6 py-6 font-semibold text-sm flex gap-6 mt-3">
                <Image src="/inv.png" alt="invoice" width={30} height={7} className="hidden sm:block"/>
                <div className="overflow-hidden">
                    <p className="text-emerald-800 font-semibold">INV-001</p>
                    <p className="text-emerald-700 overflow-hidden">Source: Supplier_portal@acme.com</p>
                </div>
            
            </div>
            
        </div>
        {/* CONNECTING LINE */}
        <motion.div variants={cardVariants}>
  <svg
    className="absolute left-1/2 -translate-x-1/2 pointer-events-none mt-[-4.2%]"
    width="4"
    height="192"
    viewBox="0 0 4 192"
  >
    <AnimatedPath
      isInView={isInView}
      d="M2 0 V192"
      isAI={true}
    />
  </svg>
</motion.div>
        

        {/* APPROVED CIRCLE */}
        <motion.div
            variants={cardVariants}
            className="mt-20 flex items-center justify-center mb-10"
            custom={0}
        >
            <div className="rounded-full bg-[#005143] border-8 border-[#00c99c] w-36 h-36 flex items-center justify-center text-white">
            Approved
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
              M150 250
              H1000
              V550
              H0
              V790
              H800
            " isAI={false}/>
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

function FraudSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/assessment.png", text: "Smart Profile Assessment" },
    { img: "/target.png", text: "AI Skill Gap Detection" },
    { img: "/future.png", text: "Role, Project & Future Demand Mapping" },
    { img: "/book.png", text: "Personalized Learning Recommendation" },
    { img: "/score.png", text: "Readiness & Impact Scoring" },
    { img: "/tick.png", text: "Approval & Assignment" },
    { img: "/progress.png", text: "Progress Tracking" },
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
    if (custom === 3) {
      return {
        opacity: 1,
        scale: 0.9,
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
          <h2 className="text-2xl font-semibold">Learning & Development (L&D) Recommendation Agent</h2>
          <p className="font-semibold">Intelligent Growth Planning</p>
          <p>
            Identifies skill gaps, aligns learning with future roles and projects, and recommends<br/> personalized development paths helping teams grow where it matters most.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 rounded-md p-4 lg:p-10 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <h2 className="bg-[#005143] w-full rounded-lg text-white px-6 p-4 text-center font-semibold text-xl">
            Growth Planning Engine<br/>
            <p className="text-sm font-normal mt-2">Automated career pathing and readiness analysis</p>
        </h2>
        <div className="bg-[#005143] w-full rounded-lg text-white px-4 p-4 flex-col justify-center items-center gap-4">
            <Image src="/profile.png" alt="profile" width={100} height={100} className="ml-auto mr-auto" />
            <h2 className="text-center font-semibold mt-1">Current Status: Senior Lead</h2>
            <div className="gap-3 mr-auto ml-auto my-6 text-sm items-center justify-center sm:flex hidden">
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-5 py-3">Product Startegy</div>
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-4 py-3">Project Management</div>
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-3 py-3">AI/ML Ops</div>
            </div>
            <motion.div variants={itemVariants} className="bg-emerald-50 w-full rounded-lg text-white px-3 py-6 font-semibold text-sm flex gap-2 mt-3">
                    <Image src="/gemini.png" alt="gemini" width={28} height={8} className="hidden sm:block"/>
                    <div>
                        <p className="text-emerald-800 font-semibold">AI Recommendation</p>
                        <p className="text-emerald-700">Next role recommended: Excutive Operational Manager</p>
                    </div>
            
                </motion.div>
            <motion.div variants={itemVariants}>
                <div className="flex justify-between text-white text-md mt-6">
                    <p>System Readiness</p>
                    <p className="text-sm">Aligned</p>
                </div>
                <div className="w-full h-2 rounded-lg bg-emerald-400 mt-2 mb-5" />
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

function AccountSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/assessment.png", text: "Smart Profile Assessment" },
    { img: "/target.png", text: "AI Skill Gap Detection" },
    { img: "/future.png", text: "Role, Project & Future Demand Mapping" },
    { img: "/book.png", text: "Personalized Learning Recommendation" },
    { img: "/score.png", text: "Readiness & Impact Scoring" },
    { img: "/tick.png", text: "Approval & Assignment" },
    { img: "/progress.png", text: "Progress Tracking" },
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
    if (custom === 3) {
      return {
        opacity: 1,
        scale: 0.9,
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
          <h2 className="text-2xl font-semibold">Learning & Development (L&D) Recommendation Agent</h2>
          <p className="font-semibold">Intelligent Growth Planning</p>
          <p>
            Identifies skill gaps, aligns learning with future roles and projects, and recommends<br/> personalized development paths helping teams grow where it matters most.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 rounded-md p-4 lg:p-10 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <h2 className="bg-[#005143] w-full rounded-lg text-white px-6 p-4 text-center font-semibold text-xl">
            Growth Planning Engine<br/>
            <p className="text-sm font-normal mt-2">Automated career pathing and readiness analysis</p>
        </h2>
        <div className="bg-[#005143] w-full rounded-lg text-white px-4 p-4 flex-col justify-center items-center gap-4">
            <Image src="/profile.png" alt="profile" width={100} height={100} className="ml-auto mr-auto" />
            <h2 className="text-center font-semibold mt-1">Current Status: Senior Lead</h2>
            <div className="gap-3 mr-auto ml-auto my-6 text-sm items-center justify-center sm:flex hidden">
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-5 py-3">Product Startegy</div>
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-4 py-3">Project Management</div>
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-3 py-3">AI/ML Ops</div>
            </div>
            <motion.div variants={itemVariants} className="bg-emerald-50 w-full rounded-lg text-white px-3 py-6 font-semibold text-sm flex gap-2 mt-3">
                    <Image src="/gemini.png" alt="gemini" width={28} height={8} className="hidden sm:block"/>
                    <div>
                        <p className="text-emerald-800 font-semibold">AI Recommendation</p>
                        <p className="text-emerald-700">Next role recommended: Excutive Operational Manager</p>
                    </div>
            
                </motion.div>
            <motion.div variants={itemVariants}>
                <div className="flex justify-between text-white text-md mt-6">
                    <p>System Readiness</p>
                    <p className="text-sm">Aligned</p>
                </div>
                <div className="w-full h-2 rounded-lg bg-emerald-400 mt-2 mb-5" />
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

function TaxSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/assessment.png", text: "Smart Profile Assessment" },
    { img: "/target.png", text: "AI Skill Gap Detection" },
    { img: "/future.png", text: "Role, Project & Future Demand Mapping" },
    { img: "/book.png", text: "Personalized Learning Recommendation" },
    { img: "/score.png", text: "Readiness & Impact Scoring" },
    { img: "/tick.png", text: "Approval & Assignment" },
    { img: "/progress.png", text: "Progress Tracking" },
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
    if (custom === 3) {
      return {
        opacity: 1,
        scale: 0.9,
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
          <h2 className="text-2xl font-semibold">Learning & Development (L&D) Recommendation Agent</h2>
          <p className="font-semibold">Intelligent Growth Planning</p>
          <p>
            Identifies skill gaps, aligns learning with future roles and projects, and recommends<br/> personalized development paths helping teams grow where it matters most.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 rounded-md p-4 lg:p-10 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <h2 className="bg-[#005143] w-full rounded-lg text-white px-6 p-4 text-center font-semibold text-xl">
            Growth Planning Engine<br/>
            <p className="text-sm font-normal mt-2">Automated career pathing and readiness analysis</p>
        </h2>
        <div className="bg-[#005143] w-full rounded-lg text-white px-4 p-4 flex-col justify-center items-center gap-4">
            <Image src="/profile.png" alt="profile" width={100} height={100} className="ml-auto mr-auto" />
            <h2 className="text-center font-semibold mt-1">Current Status: Senior Lead</h2>
            <div className="gap-3 mr-auto ml-auto my-6 text-sm items-center justify-center sm:flex hidden">
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-5 py-3">Product Startegy</div>
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-4 py-3">Project Management</div>
                <div className="bg-[#1f7a4d] text-white rounded-4xl px-3 py-3">AI/ML Ops</div>
            </div>
            <motion.div variants={itemVariants} className="bg-emerald-50 w-full rounded-lg text-white px-3 py-6 font-semibold text-sm flex gap-2 mt-3">
                    <Image src="/gemini.png" alt="gemini" width={28} height={8} className="hidden sm:block"/>
                    <div>
                        <p className="text-emerald-800 font-semibold">AI Recommendation</p>
                        <p className="text-emerald-700">Next role recommended: Excutive Operational Manager</p>
                    </div>
            
                </motion.div>
            <motion.div variants={itemVariants}>
                <div className="flex justify-between text-white text-md mt-6">
                    <p>System Readiness</p>
                    <p className="text-sm">Aligned</p>
                </div>
                <div className="w-full h-2 rounded-lg bg-emerald-400 mt-2 mb-5" />
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




export default function FinanceAI() {
  const TOTAL_SECTIONS = 4;
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
          AI Agents for Accounting & Finance
        </h1>
        <p className="text-white max-w-6xl">
          Built to reduce manual work, prevent errors, and give finance teams clarity in real time.
        </p>
      </div>

      {/* Clickable Section */}
      <AnimatePresence mode="wait">
        {activeSection === 0 && (
          <div onClick={handleSectionClick}>
            <InvoiceSection key="invoice" />
          </div>
        )}
        {activeSection === 1 && (
          <div onClick={handleSectionClick}>
            <FraudSection key="fraud" />
          </div>
        )}
        {activeSection === 2 && (
          <div onClick={handleSectionClick}>
            <AccountSection key="account" />
          </div>
        )}
        {activeSection === 3 && (
          <div onClick={handleSectionClick}>
            <TaxSection key="tax" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

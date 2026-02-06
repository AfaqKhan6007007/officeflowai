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

function QuotationSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/consolidate.png", text: "Quotation Consolidation" },
    { img: "/term.png", text: "Price & Term Comparison" },
    { img: "/meter.png", text: "Vendor Scoring" },
    { img: "/tick.png", text: "Compliance & Policy Check" },
    { img: "/generate.png", text: "Recommendation Generation" },
    { img: "/approve.png", text: "Approval Workflow" },
    { img: "/finalize.png", text: "Vendor Finalization" },
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
          <h2 className="text-2xl font-semibold">Quotation Evaluation Agent</h2>
          <p className="font-semibold">Analyze quotes, score vendors, and recommend the best options automatically.</p>
          <p>
            Automate the evaluation of vendor quotations compare pricing, terms,<br/> quality, and compliance so your procurement decisions are faster, smarter,<br/> and more consistent.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 p-4 lg:p-5 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <div className="bg-[#005143] w-full rounded-lg text-white px-6 p-4 text-left font-semibold text-xl flex flex-col justify-center items-center gap-4">
            <span className="mr-auto">Quotation Evaluation Agent</span>
            <p className="text-sm font-normal mt-2 text-[60%] mr-auto">Visualizing the automated workflows from purchase intent to vendor dispatch. </p>
            <div className="bg-[#dff1e6] rounded-lg p-5 flex flex-col justify-center items-center gap-4 w-[100%]">

            
            <div className="bg-[#005143] text-white text-sm sm:text-sm text-center w-[70%] px-2 sm:px-8 py-6 rounded-lg">
                Purchase Request
            </div>
            <div className="bg-[#005143] text-white text-sm sm:text-sm text-center w-[100%] px-2 sm:px-4 py-4 rounded-lg flex flex-col gap-4 opacity-50">
                <p className="text-left">Quote A</p>
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="bg-[#57b887] rounded-4xl px-4 py-2 text-[80%]">
                        Price High
                    </div>
                    <div className="ml-auto text-[#6fd8a8] flex justify-center items-center">
                        72% Score
                    </div>
                    
                </div>
                <div className="w-full bg-[linear-gradient(to_right,#6fd8a8_72%,white_72%)] h-2 rounded-4xl" />
            </div>
            <motion.div variants={cardVariants} custom={3} className="bg-[#005143] text-white text-sm sm:text-sm text-center w-[100%] px-2 sm:px-4 py-4 rounded-lg flex flex-col gap-4">
                <p className="text-left">Quote B</p>
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                    <div className="bg-[#57b887] rounded-4xl px-3 py-2 text-[80%]">
                        Price: Optimized
                    </div>
                    <div className="bg-[#57b887] rounded-4xl px-3 py-2 text-[80%]">
                        Terms: Net 30
                    </div>
                    <div className="ml-auto text-[#6fd8a8] flex justify-center items-center">
                        95% Score
                    </div>
                    
                </div>
                <div className="w-full bg-[linear-gradient(to_right,#6fd8a8_95%,white_72%)] h-2 rounded-4xl" />
            </motion.div>
            <div className="bg-[#005143] text-white text-sm sm:text-sm text-center w-[100%] px-2 sm:px-4 py-4 rounded-lg flex flex-col gap-4 opacity-50">
                <p className="text-left">Quote C</p>
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="bg-[#57b887] rounded-4xl px-4 py-2 text-[80%]">
                        Price Mid
                    </div>
                    <div className="ml-auto text-[#6fd8a8] flex justify-center items-center">
                        60% Score
                    </div>
                    
                </div>
                <div className="w-full bg-[linear-gradient(to_right,#6fd8a8_60%,white_60%)] h-2 rounded-4xl" />
            </div>
            </div>
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
              V390
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

function PurchaseSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/copy.png", text: "Approved Vendor" },
    { img: "/draft.png", text: "PO Draft Generation" },
    { img: "/conditions.png", text: "Terms & Conditions Alignment" },
    { img: "/verify_badge.png", text: "Budget & Authority Check" },
    { img: "/copy.png", text: "Approval Workflow" },
    { img: "/send.png", text: "PO Issuance to Vendor" },
    { img: "/po.png", text: "PO Record & Audit Trail" },
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
          <h2 className="text-2xl font-semibold">Purchase Order Creation Agent</h2>
          <p className="font-semibold">Generate, approve, and issue purchase orders seamlessly.</p>
          <p>
            Automate the creation of purchase orders from vendor selection and draft<br/> generation to approval and issuance ensuring accurate, compliant, and traceable<br/> procurement operations.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 p-4 lg:p-7 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
       <div className="bg-[#005143] w-full rounded-lg text-white text-left font-semibold text-xl flex flex-col shadow-[-8px_-8px_0px_0px_rgba(0,0,0,1)] mb-3 sm:mb-0">
            <div className="px-6 py-4 mb-1">
                Approved Vendors<br/>
                <div className="flex flex-row gap-2">
                    <div className="text-sm">Verified Vendor</div>
                    <Image src="/tick_filled.png" alt="tick" width={20} height={20} />
                </div>
            </div>
        </div>
        <motion.div variants={itemVariants} className="bg-[#005143] w-full rounded-lg text-white text-left font-semibold text-xl flex flex-col shadow-[-8px_-8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-row justify-between px-5 py-5">
                <div className="flex flex-col p-5 gap-2">
                    <span className="text-sm text-[#6fd8a8]">AI Generation In Progress</span>
                    <span className="font-semibold text-sm">Purchase Order</span>
                    <span className="text-[80%]"># PO - 2025 - 882</span>
                </div>
                <div className="bg-[#6fd8a8] p-4 rounded-lg justify-center h-[70%] mt-5 mr-5 hidden sm:flex">
                    <Image src="/pager.png" alt="pager" width={40} height={20} />
                </div>
            </div>
            <div className="bg-[#d9d9d9] w-[84%] h-4 rounded-lg my-4 mx-auto" />
            <div className="bg-[#d9d9d9] w-[84%] h-4 rounded-lg my-4 mx-auto" />
            <div className="bg-[#d9d9d9] w-[44%] h-4 rounded-lg my-4 ml-10" />
            <div className="flex flex-col sm:flex-row gap-4 sm:pl-10 my-10 mx-5 sm:mx-0">
                <div className="rounded-4xl text-white p-3 bg-[#57b887] text-sm text-center">
                    Budget Validated
                </div>
                <div className="rounded-4xl text-[#5170ff] p-3 bg-[white] text-sm text-center">
                    Clause Matched
                </div>
            </div>
        </motion.div>
        <motion.div variants={itemVariants} className="text-sm text-white bg-black text-center rounded-lg w-full p-4 font-semibold">
            PO Issued & Recorded
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
               M150 150
              H1000
              V390
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
            <QuotationSection key="quotation" />
          </div>
        )}
        {activeSection === 2 && (
          <div onClick={handleSectionClick}>
            <PurchaseSection key="purchase" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

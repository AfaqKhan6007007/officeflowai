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
    { img: "/layout.png", text: "Transaction / Activity Monitoring" },
    { img: "/pattern.png", text: "Pattern Analysis" },
    { img: "/anamoly.png", text: "Anomaly Detection" },
    { img: "/scoring.png", text: "Risk Scoring" },
    { img: "/alert.png", text: "Alert Generation" },
    { img: "/correct.png", text: "Escalation to Compliance Team" },
    { img: "/log.png", text: "Case Logging & Audit" },
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
          <h2 className="text-2xl font-semibold">Fraud Detection Agent</h2>
          <p className="font-semibold">Continuous monitoring to detect financial risk before it escalates</p>
          <p>
            This agent quietly monitors transactions and account activity, analyzes behavior<br/> patterns, detects anomalies, assigns risk scores, and generates alerts only when<br/> needed. High-risk cases are escalated to compliance teams and logged automatically<br/> for audit and traceability.
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
            Fraud Detection Agent<br/>
            <p className="text-sm font-normal mt-2">Continuous monitoring to detect financial risk before it escalates</p>
        </h2>
        <h2 className="bg-[#005143] w-full rounded-lg text-white px-6 p-4 text-left font-semibold text-sm flex gap-3 justify-between">
            <span>Live Transaction Monitoring</span>
            <div className="w-[15%] h-5 rounded-3xl bg-[linear-gradient(to_left,red_76%,white_24%)] text-right px-1 gap-3 sm:flex hidden">
                <motion.div className="w-2 h-2 rounded-full bg-[red] my-auto" animate={{
                    opacity: [1,0.8,.6,.4,.2,0,.2,.4,.6,.8],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease:"easeInOut",
                    repeatType:"loop",
                    repeatDelay:0.4
                }}></motion.div>
                <span>LIVE</span>
            </div>
        </h2>
        <motion.div variants={itemVariants} className="bg-[#005143] w-full rounded-lg px-4 p-8 flex flex-col justify-center items-center gap-7">
            
            <h2 className="text-center font-semibold mt-1 text-white">Anamoly Detected</h2>
            <div
                className="w-40 h-40 rounded-full flex items-center justify-center"
                style={{
                    background: `conic-gradient(#d6d94e 0% 30%, white 30% 100%)`,
                }}
            >
                <div className="w-[130px] h-[130px] rounded-full bg-[#005143] flex items-center justify-center text-4xl font-semibold text-white">
                    30%
                </div>
            </div>
            <div className="text-[#005143] bg-white  rounded-4xl px-5 py-3 w-3/4 sm:w-1/2 mx-auto text-center font-semibold border-1 border-[#d6d94e]">Low medium risk</div>
               
            
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

function AccountSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/data.png", text: "Data Collection" },
    { img: "/transaction.png", text: "Transaction Matching" },
    { img: "/identity.png", text: "Exception Identification" },
    { img: "/suggestion.png", text: "Adjustment Suggestion" },
    { img: "/tick.png", text: "Approval & Posting" },
    { img: "/reconciliation.png", text: "Reconciliation Reporting" },
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
          <h2 className="text-2xl font-semibold">Account Reconciliation Agent</h2>
          <p className="font-semibold">Automatically aligning records for accurate, audit-ready accounts</p>
          <p>
            This agent collects data from banks and internal ledgers, matches transactions<br/> intelligently, flags exceptions, suggests adjustments, and finalizes reconciliations<br/> with approval and reporting. The result is clean books, fewer manual checks, and<br/> confidence in every close.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 rounded-md p-4 lg:p-7 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <div className="bg-[#005143] w-full rounded-lg text-white text-left font-semibold text-xl flex flex-col">
            <div className="px-6 py-4 mb-1">
            Reconciliation Agent<br/>
            <ul className="list-disc pl-5 mt-2">
                <li className="text-sm font-normal">
                    Active Process
                </li>
            </ul>
            <hr className="-mx-6 border-[#6fd8a8] mt-4 mb-8"/>
            <div className="flex sm:flex-row flex-col gap-15 justify-center mb-10">
                <div className="flex flex-col w-1/5 gap-3">
                    <div className="bg-[#57b887] p-4 rounded-lg w-full flex justify-center">
                        <Image src="/bank.png" alt="alt" width={48} height={20} />
                    </div>
                    <p className="text-sm text-center">Bank API</p>
                </div>
                <div className="flex flex-col w-1/5 gap-3">
                    <div className="bg-[#57b887] p-4 rounded-lg w-full flex justify-center">
                        <Image src="/erp.png" alt="erp" width={34} height={20} />
                    </div>
                    <p className="text-sm text-center">ERP Ledger</p>
                </div>
                <div className="flex flex-col w-1/5 gap-3">
                    <div className="bg-[#57b887] p-4 rounded-lg w-full flex justify-center">
                        <Image src="/paper.png" alt="paper" width={50} height={20} />
                    </div>
                    <p className="text-sm text-center">Invoices</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 border-2 border-[#6fd8a8] p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between">
                    <p className="text-sm font-semibold">Real Time Matching</p>
                    <p className="text-[#6fd8a8] text-sm">342 matches</p>
                </div>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row border-2 border-[#6fd8a8] p-6 rounded-xl bg-[#046554] gap-3 overflow-hidden">
                    <Image src="/fix.png" alt="fix" width={30} height={10} />
                    <div>
                        <p className="text-sm">TXN-239 Stripe payout</p>
                        <p className="text-[12px]">$12,000 matched</p>
                    </div>
                    <div className="text-[#6fd8a8] text-sm ml-auto">100% matched</div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row border-2 border-[#a0a323] p-6 rounded-xl bg-[#576504] gap-3 overflow-hidden">
                    <Image src="/sign.png" alt="fix" width={30} height={10} />
                    <div>
                        <p className="text-sm">Adjustment Needed</p>
                        <p className="text-[12px]">Unrecognized Fee: $1400</p>
                    </div>
                    <div className="text-[white] text-sm ml-auto bg-[#b9bc3d] border-2 border-[#a0a323] py-2 px-5 rounded-xl sm:block hidden">Resolve</div>
                </motion.div>
            </div>
            </div>
            <motion.div variants={itemVariants} className="bg-[#056554] text-white mt-auto flex p-6 gap-3 rounded-xl">
                <Image src="/fix.png" alt="fix" width={30} height={20} />
                <div className="text-lg">Reconciliation Complete</div>
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

function TaxSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/stack.png", text: "Data Aggregation" },
    { img: "/calculator.png", text: "Tax Liability Calculation" },
    { img: "/ok.png", text: "Compliance Check" },
    { img: "/filing.png", text: "Filing Preparation" },
    { img: "/yes.png", text: "Approval & Submission" },
    { img: "/archival.png", text: "Record Archival & Audit Trail" },
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
          <h2 className="text-2xl font-semibold">Tax Handling Agent</h2>
          <p className="font-semibold">Accurate tax calculation, compliant filing, zero last-minute stress</p>
          <p>
            This agent gathers tax-relevant data from payroll, invoices, and expenses,<br/> calculates liabilities automatically, checks compliance, prepares filings, and submits<br/> them with approval. Every step is logged, archived, and ready for audit when<br/> needed.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-white w-full lg:w-[550px] flex flex-col gap-2 md:gap-6 rounded-md p-4 lg:p-7 lg:ml-auto lg:mr-10 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <div className="bg-[#005143] w-full rounded-lg text-white text-left font-semibold text-xl flex flex-col gap-4">
            <div className="px-6 py-4 mb-1">
                Tax Handling System<br/>
                <ul className="list-disc pl-5 mt-2">
                    <li className="text-sm font-normal">
                        Active Process
                    </li>
                </ul>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row border-2 border-[#6fd8a8] p-6 rounded-xl bg-[#046554] gap-3 overflow-hidden mt-8">
                    <Image src="/fix.png" alt="fix" width={30} height={10} />
                    <p className="text-sm flex justify-center items-center">Payroll Total</p>

                    <div className="text-white text-sm ml-auto flex items-center font-semibold">$142,500</div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row border-2 border-[#6fd8a8] p-6 rounded-xl bg-[#046554] gap-3 overflow-hidden mt-8">
                    <Image src="/fix.png" alt="fix" width={30} height={10} />
                    <p className="text-sm flex justify-center items-center">Invoice Tax</p>

                    <div className="text-white text-sm ml-auto flex items-center font-semibold">$12,825</div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row border-2 border-[#6fd8a8] p-6 rounded-xl bg-[#046554] gap-3 overflow-hidden mt-8">
                    <Image src="/fix.png" alt="fix" width={30} height={10} />
                    <p className="text-sm flex justify-center items-center">Expense Deduction</p>

                    <div className="text-white text-sm ml-auto flex items-center font-semibold">$4,200</div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row border-2 border-[#6fd8a8] p-6 rounded-xl bg-[#046554] gap-3 overflow-hidden mt-8">
                    <Image src="/fix.png" alt="fix" width={30} height={10} />
                    <p className="text-sm flex justify-center items-center">Net Tax Liability</p>

                    <div className="text-white text-sm ml-auto flex items-center font-semibold">$8,625.00</div>
                </motion.div>
            </div>
            <motion.div variants={itemVariants} className="bg-[#056554] text-white mt-auto flex p-6 gap-6 rounded-xl">
                <Image src="/archive.png" alt="fix" width={30} height={20} className="hidden sm:block"/>
                <div className="text-sm">Archive / Audit Log<br/>Record Stored</div>
                <div className="text-sm ml-auto text-[#6fd8a8] flex items-center">secure</div>
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





export default function FinanceAI() {
  const TOTAL_SECTIONS = 4;
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % TOTAL_SECTIONS);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

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

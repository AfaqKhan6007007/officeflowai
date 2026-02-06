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

function RFQSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.8 });
  const gridItemsChat = [
    { img: "/input.png", text: "Purchase Request Input" },
    { img: "/rfq.png", text: "RFQ Generation" },
    { img: "/register.png", text: "RFQ Opened to Registered Vendors" },
    { img: "/bell.png", text: "Automated Vendor Notifications" },
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
          <h2 className="text-2xl font-semibold">RFQ Orchestration Agent</h2>
          <p className="font-semibold">Streamline requests, generate quotations, and notify vendors automatically.</p>
          <p>
            Automate the entire request-for-quotation process from request creation to vendor<br/> notifications so your procurement team can move faster and reduce manual follow-<br/>ups.
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
        <div className="bg-[#005143] w-full rounded-lg text-white px-6 p-4 text-left font-semibold text-xl">
            RFQ Orchestration Agent<br/>
            <p className="text-[60%] font-normal mt-1">Visualizing the automated workflows from purchase intent to vendor dispatch. </p>
        </div>
        <div className="bg-[#046554] rounded-lg p-6 flex flex-col justify-center items-center">
            <div className="bg-[#005143] text-white text-sm sm:text-xl text-center w-[70%] px-2 sm:px-8 py-6 rounded-xl">
                Purchase Request
            </div>
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-48 mt-5">
                <div>
                    <div className="bg-[#57b887] p-5 rounded-xl">
                    <Image src="/vendorA.png" alt="vendor" width={50} height={20} />
                </div>
                <p className="text-white text-center mt-2">Vendor A</p>
                </div>
                
                <div>
                    <div className="bg-[#57b887] p-5 rounded-xl">
                    <Image src="/vendorA.png" alt="vendor" width={50} height={20} />
                </div>
                <p className="text-white text-center mt-2">Vendor B</p>
                </div>
                
            </div>
            <div className="bg-[#005143] text-white text-xl text-center w-[80%] px-8 py-6 rounded-xl mt-30 z-10">
                <div className="flex flex-row justify-between">
                    <div>
                        <p className="text-sm text-left">Active Agents</p>
                        <p className="text-md text-left font-semibold">RFQ Drafts</p>
                    </div>  
                    <Image src="/stars.png" alt="stars" width={40} height={30} className="hidden sm:block"/>  
                </div>
                <div className="bg-[#57b887] text-white text-[90%] font-semibold p-5 rounded-xl w-[80%] mx-auto mt-5 hidden sm:block">
                    Approved Template
                </div>
            </div>
            <div className="text-white mt-3">Vendor C</div>
           <AnimatePresence>
  {isInView && (
    <svg
      className="absolute inset-0 pointer-events-none z-0 hidden sm:block mt-37"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Mask 1: Disappear Top to Bottom */}
        <mask id="mask1">
          <motion.path
            d="M25 35 L40 63"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            exit={{ pathOffset: 1 }} // Pulls the top toward the bottom
            transition={{ duration: 0.7, ease: "linear" }}
          />
        </mask>

        {/* Mask 2: Disappear Bottom to Top */}
        <mask id="mask2">
          <motion.path
            d="M60 63 L75 35"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            exit={{ pathOffset: 1 }} // Pulls the bottom toward the top
            transition={{ duration: 0.7, ease: "linear", delay: 1 }}
          />
        </mask>
      </defs>
      
      {/* Line 1 */}
      <path
        d="M25 35 L40 63"
        fill="none"
        stroke="white"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeDasharray="0 1.8"
        mask="url(#mask1)"
      />

      {/* Line 2 */}
      <path
        d="M60 63 L75 35"
        fill="none"
        stroke="white"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeDasharray="0 1.95"
        mask="url(#mask2)"
      />
    </svg>
  )}
</AnimatePresence>
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
              M150 250
              H1000
              V520
              H0
              V790
              H800
            " isAI={false}/>
          </svg>

          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-5 items-center justify-items-center gap-4 sm:gap-6 lg:gap-10 px-2 sm:px-4 lg:px-0">
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

function VendorSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/stack.png", text: "Historical Data Aggregation" },
    { img: "/calculator.png", text: "Performance Metrics Calculation" },
    { img: "/meter.png", text: "Scoring & Ranking" },
    { img: "/insight.png", text: "Trend Analysis & Insights" },
    { img: "/engagement.png", text: "Recommendation for Future Engagement" },
    { img: "/po.png", text: "Record Archival & Audit Trail" },
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
          <h2 className="text-2xl font-semibold">Vendor Performance Agent</h2>
          <p className="font-semibold">Evaluate vendors, track performance, and guide future engagements<br/> automatically.</p>
          <p>
            Aggregate historical vendor data, calculate performance metrics, and generate<br/> insights to help procurement teams make informed, data-driven decisions for<br/> supplier management.
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
        <div className="bg-[#005143] w-full rounded-lg text-white text-left font-semibold text-xl flex flex-col mb-3 sm:mb-0 sm:gap-0 gap-10">
            <div className="px-8 py-6 mb-1 flex flex-col sm:flex-row justify-between sm:gap-0 gap-10">
                <div>
                    <span className="text-[90%]">Vendor Performance Summary</span>
                    <br/>
                    <span className="text-[70%]">Based on historical data</span>
                </div>
               <div className="relative w-20 h-20 rounded-full flex justify-center items-center p-[5px] bg-[conic-gradient(#6fd8a8_80%,#000_0%)]">
                    {/* The Inner Circle (White part) */}
                    <div className="bg-white w-full h-full rounded-full flex justify-center items-center text-black text-[95%] font-bold">
                        80%
                    </div>
                </div>
            </div>
        </div>
        <motion.div variants={itemVariants} className="flex flex-col gap-3 mt-4">
            <div className="flex flex-row gap-5 ml-2">
                <Image src="/car.png" alt="car" width={35} height={20} />
                <span className="text-[#005143] font-semibold flex flex-col justify-center items-center">Delivery</span>
            </div>
            <div className="bg-[linear-gradient(to_right,#6fd8a8_80%,#d6d8d9_72%)] h-3 rounded-lg" />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <div className="flex flex-row gap-8 ml-2">
                <Image src="/badge_fill.png" alt="badge" width={23} height={29} />
                <span className="text-[#005143] font-semibold flex flex-col justify-center items-center">Quality</span>
            </div>
            <div className="bg-[linear-gradient(to_right,#6fd8a8_80%,#d6d8d9_72%)] h-3 rounded-lg" />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <div className="flex flex-row gap-8 ml-2">
                <Image src="/money_fill.png" alt="money" width={23} height={29} />
                <span className="text-[#005143] font-semibold flex flex-col justify-center items-center">Cost</span>
            </div>
            <div className="bg-[linear-gradient(to_right,#6fd8a8_80%,#d6d8d9_72%)] h-3 rounded-lg" />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <div className="flex flex-row gap-8 ml-2">
                <Image src="/compliance_fill.png" alt="compliance" width={23} height={29} />
                <span className="text-[#005143] font-semibold flex flex-col justify-center items-center">Compliance</span>
            </div>
            <div className="bg-[linear-gradient(to_right,#6fd8a8_80%,#d6d8d9_72%)] h-3 rounded-lg" />
        </motion.div>
        <motion.div variants={cardVariants} custom={3} className="bg-[#005143] rounded-lg text-white text-center font-semibold text-sm flex flex-col p-4 w-1/2 mx-auto mb-10 mt-10 overflow-hidden">
            Recommended Vendor
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





export default function ProcurementAI() {
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
          AI Agents for Smarter Procurement
        </h1>
        <p className="text-white max-w-6xl">
          Automate risk assessment, contract oversight, and demand planning to keep procurement efficient and controlled.
        </p>
      </div>

      {/* Clickable Section */}
      <AnimatePresence mode="wait">
        {activeSection === 0 && (
          <div onClick={handleSectionClick}>
            <RFQSection key="rfq" />
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
        {activeSection === 3 && (
          <div onClick={handleSectionClick}>
            <VendorSection key="vendor" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

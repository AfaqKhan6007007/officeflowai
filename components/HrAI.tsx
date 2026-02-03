"use client";
import { MoveRightIcon } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import "../app/globals.css";

import { useEffect, useState } from "react";


function RecruitementSection () {

    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.1,
  });
    const gridItems = [
    { img: "/acquisition.png", text: "Resume Acquisition" },
    { img: "/parsing.png", text: "Resume Parsing" },
    { img: "/candidate.png", text: "Candidate Profile Creation" },
    { img: "/final.png", text: "Final Selection" },
    { img: "/interview.png", text: "Interview Scheduling" },
    { img: "/tick.png", text: "Candidate Shortlisting" },
    { img: "/search.png", text: "Candidate Screening" },
  ];
  const gridVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { 
      opacity: 1, 
      height: "auto", 
      transition: { duration: 0.6, ease: "easeInOut" } 
    }
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
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-20 ml-0 lg:ml-10">
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
            {gridItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 sm:gap-6 bg-[#1F7A5A] text-white rounded-lg p-4 text-lg sm:text-xl font-semibold w-full sm:max-w-[350px] z-10 justify-center
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

function PayrollSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.1,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
    const gridItemsChat = [
    { img: "/smart.png", text: "Smart Attendance Analysis" },
    { img: "/adjustment.png", text: "Automated Adjustments" },
    { img: "/calculation.png", text: "AI-Driven Calculation" },
    { img: "/warning.png", text: "Exception Detection" },
    { img: "/salary.png", text: "Salary Disbursement" },
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
      title: "Smart Attendance Analysis",
      desc: "Scanning bio-metric data and remote logs for 142 employees",
      img: "/analysis.png",
    },
    {
      title: "Automated Adjustments",
      desc: "Merging adjustments directly into payroll ledger.",
      img: "/adjustments.png",
    },
    {
      title: "AI Driven Calculations",
      desc: "Applying dynamic tax rules, benefits and deductions via neural engine.",
      img: "/AI.png",
    },
    {
      title: "Salary Disbursement",
      desc: "Final ledger approval and digital payslip generation.",
      img: "/disbursement.png",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // cards appear one by one
      },
    },
  };

  const cardVariants = {
  hidden: (custom: number) => ({
    opacity: 0,
    x: custom % 2 === 0 ? -50 : 50, // even index from left, odd index from right
  }),
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
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
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-25 ml-0 lg:ml-10">
          <h2 className="text-2xl font-semibold">Payroll Agent</h2>
          <p className="font-semibold">Automates payroll processing with smart AI insights and real-time accuracy.</p>
          <p>
            From attendance to payslip delivery, Payroll Agent handles calculations,<br/> adjustments, and approvals automatically minimizing errors and saving HR<br/> teams hours every month.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-emerald-100 w-full lg:w-[550px] flex flex-col gap-4 md:gap-9 rounded-md p-4 lg:p-10 lg:ml-auto lg:mr-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          className="bg-[#005143] w-full rounded-sm text-white px-6 p-4 flex justify-between shadow-[-8px_-8px_0_0_black]"
          variants={cardVariants}
          custom={idx}
        >
          <div>
            <h2 className="text-[16px] font-semibold">{card.title}</h2>
            <p className="text-[13px]">{card.desc}</p>
          </div>
          <Image
            src={card.img}
            alt={card.title}
            width={32}
            height={32}
            style={{ width: "32px", height: "32px", marginTop: 6 }}
          />
        </motion.div>
      ))}
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
              M250 250
              H1000
              V550
              H0
              V840
              H500
            " />
          </svg>

          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 items-center justify-items-center gap-4 sm:gap-6 lg:gap-10 px-2 sm:px-4 lg:px-0">
            {gridItemsChat.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 sm:gap-6 bg-[#1F7A5A] text-white rounded-lg p-4 text-lg sm:text-xl font-semibold w-full sm:max-w-[350px] z-10 justify-center
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

function AttendanceSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.5,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.9 });
    const gridItemsChat = [
    { img: "/checkin.png", text: "Employee Check-In / Out" },
    { img: "/facial.png", text: "Facial Recognition" },
    { img: "/capture.png", text: "Location Capture & Validation" },
    { img: "/work.png", text: "Remote Work Policy Check" },
    { img: "/confirmation.png", text: "Attendance Confirmation" },
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
      title: "Employee Check in",
      desc: "Session initiated by sarah",
      img: "/dig.png",
      isAnimation: false
    },
    {
        title:"Facial Recognition Verification",
        desc:"Biometric 3D match, 98.4% confidence.",
        title2:"Location Capture & Validation",
        desc2:"NSTP, Islamabad",
        img2:"/loc.png",
        isAnimation: true,
        img3:"/avatar.jpg",
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

  const cardVariants = {
  hidden: (custom: number) => {
    if (custom === 0) {
      // first card from left
      return { opacity: 0, x: 50 };
    } else if (custom === 1) {
      // second card from below
      return { opacity: 0, y: 50, x:0 };
    } 
    return { opacity: 0, x: 0, y: 0 }; // fallback
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
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
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-25 ml-0 lg:ml-10">
          <h2 className="text-2xl font-semibold">Attendance Agent</h2>
          <p className="font-semibold">Tracks employee attendance automatically with identity, location, and<br/> policy checks.</p>
          <p>
            Attendance Agent captures check-ins and check-outs in real time, verifies identity<br/> and location, applies remote work rules, and securely stores accurate time logs no<br/> manual corrections needed.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-emerald-100 w-full lg:w-[550px] flex flex-col gap-4 md:gap-9 rounded-md p-4 lg:p-10 lg:ml-auto lg:mr-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          className="bg-[white] w-full rounded-lg text-black px-6 p-4 flex justify-between border-2 border-emerald-700"
          variants={cardVariants}
          custom={idx}
        >
          <div>
            <h2 className="text-[16px] font-semibold mb-3 text-emerald-800">{card.title}</h2>
            <p className="text-[13px] mb-3 text-emerald-700">{card.desc}</p>
            {card.title2 && (
                <h2 className="text-[16px] font-semibold text-emerald-800">{card.title2}</h2>
            )}
            {card.desc2 && card.img2 &&(
                <div className="flex items-center gap-2 mt-2">
                <Image
                  src={card.img2}
                  alt={card.title2}
                  width={12}
                  height={18}
                  style={{ width: "12px", height: "18px" }}
                />
                <p className="text-[13px] text-emerald-700">{card.desc2}</p>
                </div>
            )}
          </div>
            
          {card.img &&<Image
            src={card.img}
            alt={card.title}
            width={142}
            height={30}
            style={{ width: "142px", height: "30px", marginTop: 6 }}
            className="hidden sm:block"
          />}
          {card.isAnimation && (
  <div className="relative border-8 border-blue-300 rounded-lg p-5 overflow-hidden bg-white/50 ml-[1%] justify-center items-center hidden sm:flex">
    {/* The Scanning Line */}
    <motion.div
      initial={{ top: "0%" }}
      animate={{ top: isInView ? "85%" : "25%" }}
      transition={{
        duration: 2,
        repeatType: "loop",
        ease: "linear",
      }}
      className="absolute left-0 right-0 h-[2px] bg-blue-400 shadow-[0_0_15px_2px_rgba(96,165,250,0.8)] z-10 w-3/4 mx-auto"
    />

    {/* The Image */}
    <div className="focus-box">
      <Image
      src={card.img3}
      alt={card.title}
      width={142}
      height={130}
      style={{ width: "162px", height: "150px", marginTop: 20 }}
      className="hidden sm:block relative z-0"
    />
    <div className="focus-box-tr"></div> 
    <div className="focus-box-bl"></div>
    </div>
    
  </div>
)}
        </motion.div>
      ))}
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
              M250 250
              H1000
              V550
              H0
              V840
              H500
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
                <Image src={item.img} alt={item.text} width={39} height={30} style={{ width: "39px", height: "39px" }} />
                <span className="mt-1">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
        </>
    )
}


function LeaveSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.1,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
    const gridItemsChat = [
    { img: "/calender.png", text: "Smart Leave Request" },
    { img: "/balance.png", text: "AI Leave Balance Check" },
    { img: "/intelligent.png", text: "Intelligent Workload & Shift Analysis" },
    { img: "/tick.png", text: "Automated Approval Recommendation" },
    { img: "/dollar.png", text: "Excess Leave Salary Adjustment" },
    { img: "/refresh.png", text: "Real-Time Leave Record Synchronization" },
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
      title: "Leave Request",
      desc: "Document “medical_certificate.pdf” verified.",
      img: "/right.png",
      bar: false
    },
    {
      title: "AI Leave Balance Check ",
      desc: "Remaining: 12 days",
      bar:true
    },
    {
      title: "Workload & Shift Analysis",
      desc: "No crtical shift dependencies detected.",
      img: "/shift1.png",
      bar: false
    },
    {
      title: "Salary Adjustment ",
      desc: "Calculating impact...",
      bar: false
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // cards appear one by one
      },
    },
  };

  const cardVariants = {
  hidden: (custom: number) => ({
    opacity: 0,
    y: 50, // even index from left, odd index from right
  }),
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
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
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-25 ml-0 lg:ml-10">
          <h2 className="text-2xl font-semibold">Leave Management Agent</h2>
          <p className="font-semibold">Manages employee leave intelligently without disrupting teams or payroll.</p>
          <p>
            Leave Management Agent evaluates leave requests in real time, checks<br/> balances, analyzes workload and shifts, recommends approvals, and keeps<br/> payroll and records perfectly in sync no manual follow-ups needed.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-emerald-100 w-full lg:w-[550px] flex flex-col gap-4 md:gap-9 rounded-md p-4 lg:p-10 lg:ml-auto lg:mr-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          className="bg-[white] w-full rounded-lg text-white px-6 p-4 flex justify-between shadow-[-8px_-8px_0_0_#d3d3d3]"
          variants={cardVariants}
          custom={idx}
        >
          <div className="w-full">
            <h2 className="text-[16px] font-semibold text-emerald-800">{card.title}</h2>
            {card.bar && <div className="w-full h-2 rounded-lg bg-emerald-400 my-2" />}
            <p className="text-[13px] text-emerald-700">{card.desc}</p>
          </div>
          {card.img && <Image
            src={card.img}
            alt={card.title}
            width={42}
            height={42}
            style={{ width: "42px", height: "42px", marginTop: 6 }}
            className="hidden sm:block"
          />}
        </motion.div>
      ))}
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
              M250 250
              H1000
              V550
              H0
              V840
              H800
            " />
          </svg>

          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 items-center justify-items-center gap-4 sm:gap-6 lg:gap-10 px-2 sm:px-4 lg:px-0">
            {gridItemsChat.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 sm:gap-6 bg-[#1F7A5A] text-white rounded-lg p-4 text-lg sm:text-xl font-semibold w-full sm:max-w-[350px] z-10 justify-center items-center
                  
                `}
              >
                <Image src={item.img} alt={item.text} width={29} height={20} style={{width:'39px',height:'49px'}} />
                <span className="mt-1">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
        </>
    )
}

function PolicySection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.1,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/glass.png", text: "Smart Policy Query" },
    { img: "/retrieval.png", text: "AI Policy Retrieval" },
    { img: "/book.png", text: "Context-Aware Explanation" },
    { img: "/tick.png", text: " Instant Employee Resolution" },
    { img: "/danger.png", text: "Exception Recognition" },
    { img: "/community.png", text: "Seamless Human Escalation" },
    { img: "/chart.png", text: "Case Closure Logging" },
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
        titlemain:"AI Policy Resolution Agent"
    },
    {
      title: "Policy Request Detected",
      desc: "System identified inbound query for compliance check.",
    },
    {
      title: "Relevant Policy Identified",
      desc: "Reference documents retrieved from global database. ",
    },
    {
      title: "Context & Role Evaluated",
      desc: "User permissions and environmental context verified.",
    },
    {
      title: "Clear Explanation Generated",
      desc: "Natural language reasoning synthesized for stakeholder.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // cards appear one by one
      },
    },
  };

  const cardVariants = {
  hidden: (custom: number) => ({
    opacity: 0,
    y: 50, // even index from left, odd index from right
  }),
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
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
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-35 ml-0 lg:ml-10">
          <h2 className="text-2xl font-semibold">Policy Agent</h2>
          <p className="font-semibold">Instant answers to company policies, explained clearly and applied correctly.</p>
          <p>
            The Policy Agent understands employee questions in plain language, retrieves the<br/> right policy, and explains it with real context. When something falls outside the<br/> rules, it flags exceptions and smoothly hands off to HR, with everything logged<br/> automatically.
          </p>
          <button className="flex gap-3 sm:gap-5 bg-[#1F7A5A] text-white rounded-lg p-2 sm:p-4 text-lg sm:text-xl w-full sm:w-[200px] font-semibold hover:bg-[#35bd8e] justify-center">
            <span>Try for Free </span>
            <MoveRightIcon />
          </button>
        </div>

        <motion.div
      ref={containerRef}
      className="bg-transparent w-full lg:w-[550px] flex flex-col gap-4 md:gap-9 rounded-md p-4 lg:p-10 lg:ml-auto lg:mr-10 border-14 border-white rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          className="bg-emerald-50 w-full rounded-lg text-white px-6 p-4 flex-col justify-between"
          variants={idx === 0 ? "visible" : cardVariants}
          custom={idx}
        >
            {card.titlemain && <h2 className="text-[16px] font-semibold text-emerald-800 text-center">{card.titlemain}</h2>}
            {card.title && <h2 className="text-[16px] font-semibold text-emerald-800">{card.title}</h2>}
            
            {card.desc && <p className="text-[13px] text-emerald-700">{card.desc}</p>}
        </motion.div>
      ))}
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


function ResourceSection (){
    const seeHowRef = useRef(null);
  const seeHowInView = useInView(seeHowRef, {
    once: false,
    amount: 0.1,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const gridItemsChat = [
    { img: "/definition.png", text: "Project / Shift Definition" },
    { img: "/map.png", text: "Skill & Availability Mapping" },
    { img: "/speed.png", text: "Workload & Capacity Analysis" },
    { img: "/assignment.png", text: "Resource Assignment" },
    { img: "/conflict.png", text: "Conflict Detection" },
    { img: "/schedule.png", text: "Schedule Finalization" },
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
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10">
        <div className="text-white flex flex-col gap-7 mt-4 lg:mt-45 ml-0 lg:ml-10">
          <h2 className="text-2xl font-semibold">Resource Allocation Agent</h2>
          <p className="font-semibold">Intelligent Planning & Assignment</p>
          <p>
            Automatically assigns the right people to the right work by analyzing skills,<br/> availability, and capacity in real time ensuring balanced workloads and zero<br/> conflicts.
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
            Resource Allocation Engine
        </h2>
        <div className="flex gap-2">
            <div className="bg-[#1f7a4d] text-white rounded-4xl px-6 py-3">Project X</div>
            <div className="bg-[#1f7a4d] text-white rounded-4xl px-6 py-3">Shift A</div>
        </div>
        <p className="text-emerald-600 text-md font-semibold">Capacity Analysis</p>
        <div className="w-full h-2 rounded-lg bg-emerald-400" />
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          className={idx!==3 ? "bg-[#005143] w-full rounded-lg text-white px-6 p-4 flex justify-flex-start gap-4": "bg-[#e7e98b] w-full rounded-4xl text-[#005143] px-6 p-4 gap-4 text-center"}
          variants={cardVariants}
          custom={idx}
        >
            {card.img && <Image src={card.img} alt={card.title} width={29} height={29} />}
            {card.title && <h2 className="text-[16px] mt-0">{card.title}</h2>}
            
        </motion.div>
      ))}
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
              M250 250
              H1000
              V550
              H0
              V840
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


function LearningSection (){
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
        <div className="bg-[#005143] border-white border-2 flex flex-col lg:flex-row gap-4 p-10 md:p-8 mt-10">
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


const AnimatedPath = ({ d, isInView }) => {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#FFFFFF"
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
  const TOTAL_SECTIONS = 7;
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
          Meet Your HR AI Agents
        </h1>
        <p className="text-white max-w-6xl">
          Smart assistants that automate, analyze, and optimize HR operations
        </p>
      </div>

      {/* Clickable Section */}
      <AnimatePresence mode="wait">
        {activeSection === 0 && (
          <div onClick={handleSectionClick}>
            <RecruitementSection key="recruitment" />
          </div>
        )}
        {activeSection === 1 && (
          <div onClick={handleSectionClick}>
            <PayrollSection key="payroll" />
          </div>
        )}
        {activeSection === 2 && (
          <div onClick={handleSectionClick}>
            <AttendanceSection key="attendance" />
          </div>
        )}
        {activeSection === 3 && (
          <div onClick={handleSectionClick}>
            <LeaveSection key="leave" />
          </div>
        )}
        {activeSection === 4 && (
          <div onClick={handleSectionClick}>
            <PolicySection key="policy" />
          </div>
        )}
        {activeSection === 5 && (
          <div onClick={handleSectionClick}>
            <ResourceSection key="resource" />
          </div>
        )}
        {activeSection === 6 && (
          <div onClick={handleSectionClick}>
            <LearningSection key="learning" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

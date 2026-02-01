"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function Implementation() {
    // Observe the section
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% visible
  });

  // 1. Parent controls the flow
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each card starts 0.2s after previous
      },
    },
  };

  // 2. Child defines individual entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const moduleData = [
    {   
        title: "Step 1: Set up profile",
        desc: "Add employees and set roles",
    },
    {
        title: "Step 2: Import Data",
        desc: "Bulk upload emplopyee lists or sync from your current CRM.",
    },
    {
        title: "Step 3: Automate",
        desc: "Set your workflows and let AI handle recurring tasks.",
    },
];
    return (
        <section
      ref={ref} // Observe this section
      className="py-12"
      
    >
            <div className='relative flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-10 text-center'>
                <h1 className="text-2xl md:text-5xl font-bold text-center text-[#005143]">
                Implementation in Three Simple Steps
                </h1>
                <p className="text-center text-gray-700 max-w-6xl">Get your entire organization onboard in minutes, not weeks.
          </p>
            </div>
            <div className="max-w-7xl mx-auto px-2">
                <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // Animate based on inView
                >
                {moduleData.map((item, index) => (
                    <motion.div
                    key={index}
                    variants={cardVariants}
                    className="p-10 border border-gray-200 rounded-lg bg-[#FAFBEF] shadow-sm mx-5 h-[200px]"
                    >
  <h3 className="text-xl font-semibold leading-tight pt-1 mb-4">
    {item.title}
  </h3>

                    
                    <p className="text-gray-600 mb-6">{item.desc}</p>
                    
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
    );
}

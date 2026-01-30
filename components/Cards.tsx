"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function Cards() {
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
        src: "/bulb.png",    
        title: "Innovation",
        desc: "We continuously explore smarter ways to automate workflows, apply AI meaningfully, and improve how teams operate at scale.",
    },
    {
        src: "/verified.png",
        title: "Reliability",
        desc: "OfficeFlow AI is built to be dependable every day because operational systems must work consistently, without surprises.",
    },
    {
        src: "/cycle.png",
        title: "Collaboration",
        desc: "We connect teams, departments, and systems to eliminate silos and enable smoother decision-making across the organization.",
    },
    {
        src: "/arrow.png",
        title: "Customer Success",
        desc: "Our success is measured by real outcomes time saved, errors reduced, and visibility improved for our customers.",
    },
];
    return (
        <section
      ref={ref} // Observe this section
      className="py-12 bg-green-50"
      
    >
            <div className='relative flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-10 text-center'>
                <h1 className="text-2xl md:text-5xl font-bold text-center text-[#005143]">
                What We Believe In
                </h1>
                <p className="text-center text-gray-700 max-w-6xl">
                The principles that shape how we build, innovate, and support growing organizations.
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // Animate based on inView
                >
                {moduleData.map((item, index) => (
                    <motion.div
                    key={index}
                    variants={cardVariants}
                    className="p-10 border border-gray-200 rounded-lg bg-white shadow-sm mx-15"
                    >
                        <div className="flex items-center justify-between gap-8">
  <h3 className="text-xl font-semibold mt-5 max-w-[70%]">
    {item.title}
  </h3>

  <Image 
    src={item.src} 
    alt={item.title} 
    width={80} 
    height={80} 
    priority={index < 3} 
    className="mb-4 object-contain"
  />
</div>
                    
                    <p className="text-gray-600 mb-6">{item.desc}</p>
                    
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
    );
}

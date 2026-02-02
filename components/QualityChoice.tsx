"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function QualityChoice() {
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
        src: "/efficiency.png",    
        title: "Efficiency",
        desc: "Automate risk detection, assessments, and corrective actions to reduce manual quality processes.",
    },
    {
        src: "/accuracy.png",
        title: "Accuracy",
        desc: "Leverage AI-driven analytics to identify risks early and minimize human error in quality management.",
    },
    {
        src: "/organization.png",
        title: "Organization",
        desc: "Centralize risks, incidents, policies, supplier quality data, and CAPAs in one structured system.",
    },
    {
        src: "/visibility.png",
        title: "Visibility",
        desc: "Gain real-time insight into enterprise-wide risks, compliance status, and quality performance.",
    },
];
    return (
        <section
      ref={ref} // Observe this section
      className="py-12"
      
    >
            <div className='relative flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-10 text-center'>
                <h1 className="text-2xl md:text-5xl font-bold text-center text-[#005143]">
                Why Teams Choose Our Quality Management Module
                </h1>
            </div>
            <div className="max-w-7xl mx-auto px-2">
                <motion.div
                className="grid grid-cols-1 md:grid-cols-4 gap-2"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // Animate based on inView
                >
                {moduleData.map((item, index) => (
                    <motion.div
                    key={index}
                    variants={cardVariants}
                    className="p-10 border border-gray-200 rounded-lg bg-white shadow-sm mx-5"
                    >
                        <div className="flex flex-row items-start justify-between min-h-[80px] mb-1">
  <h3 className="text-xl font-semibold leading-tight pt-1">
    {item.title}
  </h3>

  <div className="flex-shrink-0 w-[60px] flex justify-end">
    <Image 
      src={item.src} 
      alt={item.title} 
      width={40} 
      height={40} 
      priority={index < 3} 
      className="object-contain"
    />
  </div>
</div>
                    
                    <p className="text-gray-600 mb-6">{item.desc}</p>
                    
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
    );
}

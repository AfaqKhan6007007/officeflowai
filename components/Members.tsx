"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function Members() {
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
        src: "/placeholder.png",    
        title: "Mydah Nasir",
        desc: "Founder & Product Director Software Engineer, NUST",
    },
    {
        src: "/placeholder.png",
        title: "Alina Nasir",
        desc: "Co-Founder & Development Lead Software Engineer, NUST",
    },
    {
        src: "/placeholder.png",
        title: "Muhammad Jawad Ali",
        desc: "CEO & Co-Founder Ex-MBA 15+ years experience",
    },
    {
        src: "/placeholder.png",
        title: "Faysal Ahsan",
        desc: "Co-Founder & Business Development Manager",
    },
];
    return (
        <section
      ref={ref} // Observe this section
      className="py-12"
      
    >
            <div className='relative flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-10 text-center'>
                <h1 className="text-2xl md:text-5xl font-bold text-center text-[#005143]">
                Team behind OfficeFlow AI
                </h1>
                <p className="text-center text-gray-700 max-w-6xl">
                 “OfficeFlow AI transformed how our team collaborates. Tasks that used to take hours are now completed seamlessly in minutes.”
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                className="grid grid-cols-1 md:grid-cols-4 gap-1"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // Animate based on inView
                >
                {moduleData.map((item, index) => (
                    <motion.div
                    key={index}
                    variants={cardVariants}
                    className="p-10 border border-gray-200 rounded-lg bg-emerald-50 shadow-sm mx-1 justify-center items-center"
                    >
                    <Image 
                        src={item.src} 
                        alt={item.title} 
                        width={320} 
                        height={300} 
                        priority={index < 3} 
                        className="mb-4" 
                    />
                    <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                    <p className="text-gray-600 mb-1 text-center">{item.desc}</p>
                    
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
    );
}

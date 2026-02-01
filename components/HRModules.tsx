"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HRModules() {
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
    { title: "Attendance & Leave Management", src: "/leave.png", desc: "Track employee work hours, check-ins, and late arrivals and leaves in real time." },
    { title: "Recruitment & Hiring", src: "/hiring.png", desc: "Manage the entire hiring process from job posting to onboarding."},
    { title: "Payroll", src: "/payroll.png", desc: "Automate salary calculations, deductions, and payslip generation without errors."},
    { title: "Employee Records", src: "/employee.png", desc: "Store and manage employee profiles, documents, and job details securely."},
    { title: "Performance Tracking", src: "/performance.png", desc: "Monitor goals, reviews, and performance insights to support growth." },
    { title: "Documents & Policies", src: "/document.png", desc: "Centralize HR documents and company policies for easy access and updates." },
  ];

  return (
    <section
      ref={ref} // Observe this section
      className="py-12 bg-white"
      style={{ backgroundImage: 'url("/background_modules.png")', backgroundSize: 'cover' }}
    >
      <div className='relative flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-10'>
          <h1 className="text-2xl md:text-5xl font-bold text-center text-[#005143]">
          Everything Your Office Needs, All in One Platform
          </h1>
          <p className="text-center text-gray-700 max-w-6xl">All core HR operations, managed from one place.
          </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Animate based on inView
        >
          {moduleData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm items-center justify-center"
            >
              <div className="flex justify-center mb-4">
                <Image 
                    src={item.src} 
                    alt={item.title} 
                    width={89} 
                    height={89} 
                    priority={index < 3} 
                />
                </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

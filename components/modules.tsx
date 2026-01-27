"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Modules() {
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
    { title: "HR Management", src: "/hr-bg.png", desc: "Automate onboarding...", features: ["Payroll", "Attendance", "Reviews"] },
    { title: "Finance & Accounting", src: "/finance-bg.png", desc: "AI-powered insights...", features: ["Expenses", "Reporting", "Budgeting"] },
    { title: "Procurement", src: "/procurement-bg.png", desc: "Streamline sourcing...", features: ["Purchase Orders", "Vendors", "Inventory"] },
    { title: "Sales & Marketing", src: "/sales-bg.png", desc: "Lead scoring...", features: ["Lead Management", "Campaigns", "Insights"] },
    { title: "Quality Management", src: "/quality-bg.png", desc: "Ensure excellence...", features: ["Defect Tracking", "Compliance", "Audits"] },
    { title: "Operations Management", src: "/operations-bg.png", desc: "Optimize workflows...", features: ["Resource Planning", "Automation", "KPIs"] },
  ];

  return (
    <section
      ref={ref} // Observe this section
      className="py-12 bg-white"
      style={{ backgroundImage: 'url("/background_modules.png")', backgroundSize: 'cover' }}
    >
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
              className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                width={369} 
                height={369} 
                priority={index < 3} 
                className="mb-4" 
              />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                {item.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <button className="w-full mt-6 bg-[#DAF6E6] py-4 rounded-lg font-bold">
                Explore Module
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProcurementModules() {
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
    { title: "Vendor Management", src: "/vendors.png", desc: "Register, onboard, and manage vendors in a centralized database with compliance checks, risk scoring, and performance insights." },
    { title: "Contract Management", src: "/contract.png", desc: "Create, review, approve, and renew contracts using templates, e-signatures, compliance monitoring, and AI-driven analytics."},
    { title: "Purchase Request Management", src: "/request.png", desc: "Capture and route all purchase requests through configurable approval workflows with role-based views and real-time notifications."},
    { title: "Purchase Order Management", src: "/order.png", desc: "Generate, approve, dispatch, and track purchase orders with change control, delivery monitoring, and invoice matching."},
  ];

  return (
    <section
      ref={ref} // Observe this section
      className="py-12"
      style={{ backgroundImage: 'url("/background_modules.png")', backgroundSize: 'cover' }}
    >
      <div className='relative flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-10'>
          <h1 className="text-2xl md:text-5xl font-bold text-center text-[#005143]">
          All-in-One Finance & Accounting Management
          </h1>
          <p className="text-center text-gray-700 max-w-6xl">Powerful features to simplify invoicing, automate accounting, and provide real-time financial insights.
          </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Animate based on inView
        >
          {moduleData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-3 border border-gray-200 rounded-lg bg-white shadow-sm items-center justify-center"
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

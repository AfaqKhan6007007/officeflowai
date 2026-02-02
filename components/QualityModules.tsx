"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function QualityModules() {
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
    { title: "Enterprise Risk & Incident Management", src: "/settings.png", desc: "Identify, track, and manage operational risks and incidents with AI-driven detection, prioritization, and mitigation workflows." },
    { title: "AI-Powered Risk Identification", src: "/cone.png", desc: "Continuously scan operations, supplier data, and compliance activities to proactively detect potential quality and compliance risks."},
    { title: "Dynamic Risk Register", src: "/risk.png", desc: "Automatically maintain a live risk register with severity, likelihood, and impact scoring updated in real time."},
    { title: "Predictive Risk Analytics", src: "/predict.png", desc: "Forecast emerging risks using machine learning and receive recommended preventive actions before issues escalate."},
    { title: "Automated Risk Mitigation & CAPAs", src: "/capa.png", desc: "Assign, track, and verify corrective and preventive actions with automated workflows linked directly to identified risks."},
     { title: "Real-Time Risk Dashboards", src: "/pc.png", desc: "Visualize enterprise-wide risk exposure with live dashboards for faster, data-driven decision-making."},

];

  return (
    <section
      ref={ref} // Observe this section
      className="py-12"
      style={{ backgroundImage: 'url("/background_modules.png")', backgroundSize: 'cover' }}
    >
      <div className='relative flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-10'>
          <h1 className="text-2xl md:text-5xl font-bold text-center text-[#005143]">
          Everything You Need to Ensure Quality & Compliance
          </h1>
          <p className="text-center text-gray-700 max-w-6xl">Proactively manage risks, supplier quality, and regulatory compliance with AI-driven insights and real-time workflows.
          </p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
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

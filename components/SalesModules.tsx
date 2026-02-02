"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SalesModules() {
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
    { title: "Lead & Contact Management", src: "/man.png", desc: "Capture, organize, and manage leads and contacts with full profiles, lifecycle stages, region tags, and complete interaction history." },
    { title: "Sales Funnel & Pipeline Tracking", src: "/funnel.png", desc: "Visualize your entire sales funnel with Kanban-style pipelines, automated lead scoring, aging alerts, and conversion tracking across teams and regions."},
    { title: "Communication Logging & Follow-Ups", src: "/communication.png", desc: "Record all calls, emails, meetings, and notes in a unified timeline with automated logging, follow-up scheduling, and smart reminders."},
    { title: "Employee Performance Monitoring", src: "/monitor.png", desc: "Track sales team productivity with dashboards showing lead handling, deal progress, follow-up completion,  and leaderboard rankings."},
    { title: "Reports & Analytics", src: "/pc.png", desc: "Access real-time dashboards, drill-down reports, scheduled exports, and performance insights across leads, sales activity, regions, and employees."},
     { title: "AI-Powered Automation", src: "/chip.png", desc: "Automatically fetch and enrich leads from marketing platforms, detect duplicates, assign quality scores, trigger smart alerts, and sync data in real time."},

];

  return (
    <section
      ref={ref} // Observe this section
      className="py-12"
      style={{ backgroundImage: 'url("/background_modules.png")', backgroundSize: 'cover' }}
    >
      <div className='relative flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-10'>
          <h1 className="text-2xl md:text-5xl font-bold text-center text-[#005143]">
          Everything You Need to Drive Growth
          </h1>
          <p className="text-center text-gray-700 max-w-6xl">From first contact to closed deals and ongoing engagement, manage the full sales and marketing lifecycle in one place.
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

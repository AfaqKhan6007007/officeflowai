"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OperationsImplement() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const moduleData = [
    { title: "Step 1: Integrate Systems & Upload Data", desc: "Connect ERP, HR, and asset systems; upload inventory and employee information." },
    { title: "Step 2: Define Workflows & Projects", desc: "Set project timelines, task assignments, and operational processes." },
    { title: "Step 3: Automate Monitoring & Alerts", desc: "Use AI and automated rules to track inventory, project budgets, asset status, and shift conflicts." },
    { title: "Step 4: Capture Activity & Feedback", desc: "Log project activity, asset usage, and training progress; collect post-training feedback automatically." },
    { title: "Step 5: Analyze & Optimize Operations", desc: "Generate dashboards, reports, and AI insights to improve resource allocation, training effectiveness, and operational efficiency." },
  ];

  return (
    <section ref={ref} className="py-12">
      <div className="flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-10 text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-[#005143]">Steps To Implement</h1>
        <p className="text-gray-700 max-w-6xl text-center">From Inventory to Workforce Scheduling</p>
      </div>

      <div className="max-w-7xl mx-auto px-2">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {moduleData.map((item, index) => {
            // Last row: center last two cards
            const isLastRow = index >= moduleData.length - 2;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`p-10 border border-gray-200 rounded-lg bg-[#FAFBEF] shadow-sm h-[250px]
                  ${isLastRow ? "md:col-span-1 md:justify-self-center" : ""}`}
              >
                <h3 className="text-xl font-semibold leading-tight pt-1 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

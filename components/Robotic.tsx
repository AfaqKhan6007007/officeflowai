"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const cards = [
  { title: "Smart Automation" },
  { title: "AI Insights" },
  { title: "Agent Orchestration" },
  { title: "Secure by Design" },
  { title: "Seamless Integrations" },
];
const cardOffsets = [180, 160, 8, -20, 140];

const moduleData = [
  { title: "Always On, Always Productive", src: "/clock.png", desc: "No delays. No office hours.", features: ["Your AI employee works 24/7, helping teams move faster and smarter"] },
  { title: "Deep Awareness", src: "/dna.png", desc: "The agent understands your", features: ["Finance Data", "Documents & Invoices", "Projects & Approvals","Analytics & reports"] },
  { title: "Role-aware & Secure", src: "/lock.png", desc: "The AI respects your role and access rights", features: ["Managers, finance teams, and employees each get controlled, secure interactions just like working with a real employee."] },
  { title: "Take real actions, not just chat", src: "/play.png", desc: "The AI doesn’t stop at suggestions. It can:", features: ["Add new records", "Edit existing data", "Delete or update entries","Trigger workflows & approvals"] },
  { title: "Smart Conversational Intelligence", src: "/chat.png", desc: "Ask anything in plain English (or Arabic).", features: ["Show last month’s petty cash", "Who approved this? or", "Audits"] },
  
];

export default function Robotic() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle modules automatically when section is in view
  useEffect(() => {
    if (!inView) return; // pause if not visible

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % moduleData.length);
    }, 4000); // change module every 4s

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative py-28"
      style={{ backgroundImage: 'url("/Robotic_hero.png")', backgroundSize: 'cover' }}
    >
      <div className="flex justify-end px-6 max-w-7xl mx-auto">

        {/* Robot Background */}
        <div className="absolute right-0 bottom-0 top-24 ml-auto">
          <Image src="/Robot_bg.svg" alt="AI Robot BG" width={720} height={720} priority />
        </div>

        {/* Robot */}
        <div className="absolute right-0 bottom-0 top-24 ml-auto">
          <Image src="/Robot.svg" alt="AI Robot" width={720} height={720} priority />
        </div>

        {/* Cards — in front of robot */}
        <div className="relative right-50 top-0 z-20 w-[360px] ml-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, x: cardOffsets[i] }}
              animate={inView ? { opacity: 1, y: 0, x: cardOffsets[i] } : { opacity: 0, y: 24, x: cardOffsets[i] }}
              transition={{
                duration: 0.5,
                delay: i * 0.35,
                ease: "easeOut",
              }}
              className="rounded-2xl bg-[#39E0A5] p-5 shadow-xl w-full mt-6"
            >
              <h3 className="font-semibold text-base text-center text-white">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>

        
        {/* Modules — one at a time in front of cards */}
        <div className="absolute left-120 transform -translate-x-1/2 top-40 z-30 w-[600px]">
        <AnimatePresence mode="wait">
            {inView && (
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="p-6 border border-gray-200 rounded-lg bg-[#DAF6E6] shadow-lg flex flex-col items-center"
                >
                {/* Centered Image */}
                <Image
                    src={moduleData[currentIndex].src}
                    alt={moduleData[currentIndex].title}
                    width={150}
                    height={150}
                    className="mb-4"
                />

                {/* Text container aligned left */}
                <div className="w-full max-w-[80%]">
                    <h3 className="text-xl font-semibold mb-2 text-left">
                    {moduleData[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-left">
                    {moduleData[currentIndex].desc}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600 text-left">
                    {moduleData[currentIndex].features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                    </ul>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

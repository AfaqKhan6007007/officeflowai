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
const cardOffsets = [10, -20, -200, -180, -100];

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
  const [isLg, setIsLg] = useState(false);
  useEffect(() => {
  // This only runs on the client
  const handleResize = () => setIsLg(window.innerWidth >= 1024);

  handleResize(); // set initially
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % moduleData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inView]);

  const nextModule = () => {
    setCurrentIndex(prev => (prev + 1) % moduleData.length);
  };

  return (
    <section
      ref={ref}
      className="relative py-16 lg:py-28"
      style={{ backgroundImage: 'url("/Robotic_hero.png")', backgroundSize: 'cover' }}
    >
      {/* Header */}
      <div className="relative flex flex-col gap-4 items-center justify-center z-30 px-4 text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          The Intelligent Assistant Behind Every Task
        </h1>
        <p className="text-white max-w-6xl">
          Automate workflows, track tasks, and connect your teams all from one smart AI.
        </p>
        <p className="text-white max-w-6xl">
          OfficeFlowAI’s Agentic AI chatbot acts like a dedicated employee inside your system. It understands your data, follows your workflows, and performs actions on your behalf from answering questions to adding, editing, and managing records all in real time, 24/7.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 max-w-7xl mx-auto relative">

        {/* Module */}
        <div className="relative z-30 w-full lg:w-[1300px] lg:h-[450px] h-[450px] mb-10 lg:left-55 lg:-translate-x-1/2 mt-30">
          <AnimatePresence mode="wait">
            {inView && (
              <motion.div
                key={currentIndex}
                onClick={nextModule}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="p-6 border-5 border-[#33b386] rounded-lg bg-[#DAF6E6] flex flex-col items-center shadow-[0_120px_120px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(55,194,145,0.65)] outline outline-2 outline-white"
              >
                <Image
                  src={moduleData[currentIndex].src}
                  alt={moduleData[currentIndex].title}
                  width={120}
                  height={120}
                  className="mb-4"
                />

                <div className="w-full max-w-full lg:max-w-[80%]">
                  <h3 className="text-lg lg:text-xl font-semibold mb-2 text-left">
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

        {/* Robot Background (hide on small screens) */}
        <div className="hidden lg:block absolute right-0 top-20">
          <Image src="/Robot_bg.svg" alt="AI Robot BG" width={720} height={720} priority />
        </div>

        {/* Robot (scaled on mobile) */}
        <div className="relative lg:left-90 mt-8 lg:mt-25">
          <Image
            src="/Robot.svg"
            alt="AI Robot"
            width={900}
            height={900}
            className="lg:w-[1820px]"
            priority
          />
        </div>

        {/* Cards */}
        <div className="relative z-20 w-full lg:w-[700px] mt-20 lg:mt-15 lg:right-30">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, x:isLg ? cardOffsets[i]:0 }}
              animate={inView ? { opacity: 1, y: 0, x:isLg ? cardOffsets[i]:0 } : { opacity: 0, y: 24, x: isLg ? cardOffsets[i]:0 }}
              transition={{ duration: 0.5, delay: i * 0.35, ease: "easeOut" }}
              className="mt-6 rounded-2xl bg-[#39E0A5] p-5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] border border-[#4cbc95] relative before:absolute
    before:inset-[1px]
    before:rounded-xl
    before:border
    before:border-[#39E0A5]
    before:content-['']
    before:pointer-events-none
    before:translate-x-3
    before:-translate-y-3"
            >
              <h3 className="font-semibold text-base text-center">{card.title}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

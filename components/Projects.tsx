"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  "/project1.png",
  "/project2.png",
  "/project3.png",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const cardVariants = {
  hidden: {
    x: 300,
    opacity: 0,
    scale: 0.95,
  },
  show: (i: number) => ({
    x: -i * 100,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const listItems = [
    {
      title: "Manual Workflows",
      description: "Streamline repetitive tasks and reduce administrative load.",
    },
    {
      title: "Disconnected Systems",
      description: "Connect departments for seamless collaboration.",
    },
    {
      title: "Time-Consuming Tasks",
      description: "Automate processes to save valuable time.",
    },
    {
      title: "Lack of Insights",
      description: "Access real-time data to make informed decisions.",
    },
  ];

  return (
    <div className="py-16 md:py-20 md:overflow-hidden">
      {/* Header */}
      <div className="relative flex flex-col gap-4 mb-10 items-start z-30 px-6 md:pl-32">
        <h1 className="text-2xl md:text-5xl font-bold text-left text-[#005143]">
          Why Choose Us
        </h1>
        <p className="text-left text-gray-700 max-w-2xl">
          OfficeFlowAI eliminates manual workflows, connects all departments, and
          provides real-time insights so your team can focus on what matters.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-end w-full">
        
        {/* List */}
        <div className="w-full md:w-1/2 px-6 md:pl-32">
          <ul className="space-y-10 md:space-y-12">
            {listItems.map((item, index) => (
              <li key={index} className="flex gap-4 items-start group">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-black shrink-0 group-hover:scale-125 transition-transform" />
                <div>
                  <h3 className="text-lg font-bold text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects stack */}
        <section
          ref={ref}
          className="
            relative
            flex-1
            h-[420px]
            sm:h-[520px]
            md:h-[600px]
            flex
            items-center
            justify-center
            md:justify-end
            scale-[0.7] 
            sm:scale-[1]
            ml-30
            mb-10
            md:overflow-visible
            mt-12
            md:mt-0
          "
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="
              relative
              w-full
              max-w-[360px]
              sm:max-w-[500px]
              md:max-w-[700px]
              h-full
              flex
              justify-center
              md:justify-end
            "
          >
            {projects.map((src, i) => (
              <motion.div
                key={src}
                custom={i}
                variants={cardVariants}
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  md:left-auto
                  md:translate-x-0
                  md:right-0
                "
                style={{ zIndex: i }}
              >
                <div className="relative w-[320px] h-[260px] sm:w-[420px] sm:h-[320px] md:w-[700px] md:h-[550px]">
                  <Image
                    src={src}
                    alt={`Project ${i + 1}`}
                    fill
                    className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}

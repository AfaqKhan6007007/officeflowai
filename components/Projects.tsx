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
    x: 300, // Start further off-screen to the right
    opacity: 0,
    scale: 0.95,
  },
  show: (i: number) => ({
    // Adjusted the offset so they stack neatly at the right edge
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
        description: "Streamline repetitive tasks and reduce administrative load."
    },
    {
        title: "Disconnected Systems",
        description: "Connect departments for seamless collaboration."
    },
    {
        title: "Time-Consuming Tasks",
        description: "Automate processes to save valuable time."
    },
    {
        title: "Lack of Insights",
        description: "Access real-time data to make informed decisions."
    }
    ];

  return (
    <div className="py-20 bg-white">
        <div className='relative flex flex-col gap-4 mb-10 items-left justify-left z-30 pl-20 md:pl-32'>
            <h1 className="text-2xl md:text-5xl font-bold text-left text-[#005143]">
              Why Choose Us
            </h1>
            <p className="text-left text-gray-700 max-w-2xl">
              OfficeFlowAI eliminates manual workflows, connects all departments, and provides real-time insights  so your team can focus on what matters.
            </p>
        </div>

        {/* Change: justify-end pulls the entire content to the right */}
        <div className="flex flex-col md:flex-row items-center justify-end w-full">
            
            <div className="w-full md:w-1/2 p-8 md:pl-32">
              <ul className="space-y-12">
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

            {/* Change: Removed h-screen to prevent unnecessary scrolling, 
                Added flex-1 and justify-end to push images to the edge */}
            <section
              ref={ref}
              className="relative flex-1 h-[600px] flex items-center justify-end overflow-visible"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                // Change: Removed fixed width, used relative positioning to keep it at the end
                className="relative w-full max-w-[700px] h-full flex justify-end"
              >
                {projects.map((src, i) => (
                  <motion.div
                    key={src}
                    custom={i}
                    variants={cardVariants}
                    className="absolute right-0" // Pin to the right
                    style={{ zIndex: i }}
                  >
                    <div className="relative w-[500px] h-[400px] md:w-[700px] md:h-[550px]">
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

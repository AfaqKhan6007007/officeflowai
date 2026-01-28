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
    x: 200,
    opacity: 0,
    scale: 0.95,
  },
  show: (i: number) => ({
    x: -i * 180,
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

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative w-[900px] h-[550px] ml-auto"
      >
        {projects.map((src, i) => (
          <motion.div
            key={src}
            custom={i}
            variants={cardVariants}
            className="absolute inset-0"
            style={{ zIndex: i}}
          >
            <Image
              src={src}
              alt={`Project ${i + 1}`}
              fill
              className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

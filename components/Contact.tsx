"use client";

import React from "react";
import { motion } from "framer-motion";

const headings = [
  "Unsplash",
  "Notion",
  "INTERCOM",
  "descript",
  "grammarly",
];

export default function Contact({ speed = 50 }) {
  return (
    <div className="overflow-hidden w-full bg-white py-4">
      <motion.div
        className="flex gap-60 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }} // move from right to left
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: speed, // seconds to cross screen
        }}
      >
        {headings.map((text, idx) => (
          <div
            key={idx}
            className="text-lg md:text-xl font-bold text-gray-800"
          >
            {text}
          </div>
        ))}

        {/* Duplicate for smooth looping */}
        {headings.map((text, idx) => (
          <div
            key={`dup-${idx}`}
            className="text-lg md:text-xl font-bold text-gray-800"
          >
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

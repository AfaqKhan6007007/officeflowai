"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Review = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    name: "Sarah Thompson",
    role: "Product Manager, BrightTech",
    text:
      "OfficeFlow AI transformed how our team collaborates. Tasks that used to take hours are now completed seamlessly in minutes.",
    avatar: "/avatar.png",
  },
  {
    name: "John Carter",
    role: "CTO, DevCore",
    text: "Our productivity doubled within weeks of using OfficeFlow AI.",
    avatar: "/avatar.png",
  },
  {
    name: "Emily Chen",
    role: "Founder, Startly",
    text: "Simple, powerful, and beautifully designed.",
    avatar: "/avatar.png",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  // auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prev = reviews[(index - 1 + reviews.length) % reviews.length];
  const current = reviews[index];
  const next = reviews[(index + 1) % reviews.length];

  return (
    <div className="relative flex justify-center items-center mt-0 h-[700px] w-full">
      {/* LEFT CARD */}
      <motion.div
        className="absolute"
        animate={{
          x: -180,
          scale: 0.9,
          rotate: -12,
          filter: "blur(6px) grayscale(60%)",
          opacity: 0.55,
        }}
        transition={{ duration: 0.5 }}
      >
        <Card {...prev} />
      </motion.div>

      {/* CENTER CARD */}
      <motion.div
        className="absolute z-10 cursor-pointer"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIndex((i) => (i + 1) % reviews.length)}
        animate={{
          x: 0,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
      >
        <Card {...current} />
      </motion.div>

      {/* RIGHT CARD */}
      <motion.div
        className="absolute"
        animate={{
          x: 180,
          scale: 0.9,
          rotate: 12,
          filter: "blur(6px) grayscale(60%)",
          opacity: 0.55,
        }}
        transition={{ duration: 0.5 }}
      >
        <Card {...next} />
      </motion.div>
    </div>
  );
}

function Card({ name, role, text, avatar }: Review) {
  return (
    <div className="relative p-6 border border-[#B4B4B4] rounded-lg bg-white shadow-lg flex flex-col items-center w-[320px]">
      {/* subtle gray overlay (helps background cards) */}
      <div className="absolute inset-0 rounded-lg bg-gray-200 opacity-10 pointer-events-none" />

      <div className="relative flex flex-col items-center">
        <Image
          src={avatar}
          alt={name}
          width={160}
          height={160}
          className="mx-auto mt-6 mb-6"
        />

        <h1 className="text-xl font-bold mt-4 text-center">{name}</h1>
        <p className="text-sm text-[#6B7280] text-center">{role}</p>

        <p className="mt-10 mb-8 text-center text-gray-600 text-sm leading-relaxed">
          “{text}”
        </p>
      </div>
    </div>
  );
}

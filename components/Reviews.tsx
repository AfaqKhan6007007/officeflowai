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

  // Auto rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setIndex((i) => (i + 1) % reviews.length);
  };

  const displayItems = [
    { item: reviews[(index - 1 + reviews.length) % reviews.length], position: "left" },
    { item: reviews[index], position: "center" },
    { item: reviews[(index + 1) % reviews.length], position: "right" },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-32 text-[#005143]">
        Trusted By Teams Worldwide
      </h1>
      <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto">
        Hear from Those Who’ve Tried OfficeFlow AI
      </p>

      <div className="relative flex justify-center items-center mt-0 h-[700px] w-full">
        {displayItems.map((slot) => (
          <motion.div
            key={slot.item.name} 
            layout
            initial={false}
            className="absolute rounded-xl"
            style={{ zIndex: slot.position === "center" ? 10 : 0 }}
            animate={{
              x: slot.position === "left" ? -250 : slot.position === "right" ? 250 : 0,
              scale: slot.position === "center" ? 1 : 0.85,
              rotate: slot.position === "left" ? -8 : slot.position === "right" ? 8 : 0,
              filter: slot.position === "center" ? "blur(0px)" : "blur(4px) grayscale(80%) brightness(0.95)",
              opacity: slot.position === "center" ? 1 : 0.55,
              boxShadow:
                slot.position === "center"
                  ? "0px 20px 40px rgba(0, 0, 0, 0.18)"
                  : "0px 16px 30px rgba(120, 120, 120, 0.35)",
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 22,
              opacity: { duration: 0.4 }
            }}
            onClick={() => slot.position === "center" && nextReview()} // CLICK HANDLER
          >
            <Card {...slot.item} isCenter={slot.position === "center"} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Card({ name, role, text, avatar, isCenter }: Review & { isCenter: boolean }) {
  return (
    <div
      className={`relative p-6 border ${isCenter ? 'border-[#B4B4B4]' : 'border-slate-200'} rounded-xl bg-white shadow-4xl flex flex-col items-center w-[320px] transition-colors duration-500 cursor-pointer`}
    >
      <Image
        src={avatar}
        alt={name}
        width={160}
        height={160}
        className="mx-auto mt-6 mb-6"
      />
      <h3 className="text-xl font-bold mt-4 text-center">{name}</h3>
      <p className="text-sm text-[#6B7280] text-center">{role}</p>
      <p className="mt-10 mb-8 text-center text-gray-600 text-sm leading-relaxed">
        “{text}”
      </p>
    </div>
  );
}

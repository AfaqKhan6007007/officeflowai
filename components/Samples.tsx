"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Samples() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false, // allows animation to replay
  });

  const [showOverlay, setShowOverlay] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    if (inView) {
      // Reset animation state
      setShowBackground(false);
      setShowOverlay(false);

      // Animate background from left
      const bgTimer = setTimeout(() => setShowBackground(true), 100);
      // Animate overlay after background
      const overlayTimer = setTimeout(() => setShowOverlay(true), 2100);

      return () => {
        clearTimeout(bgTimer);
        clearTimeout(overlayTimer);
      };
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative w-full h-screen mx-auto mt-10 mb-40">
      <div className='relative flex flex-col gap-4 mb-22 items-center justify-center z-30 mt-20'>
          <h1 className="text-2xl md:text-5xl font-bold text-center text-[#005143]">
          See OfficeFlow AI in Action
          </h1>
          <p className="text-center text-gray-700 max-w-6xl">
          Real screens from the OfficeFlow AI platform, designed to keep teams aligned and work flowing.
          </p>
      </div>
      {/* Background Image */}
      {showBackground && (
        <motion.div
          initial={{ x: -180,y:80, opacity: 0 }} // start from left
          animate={{ x: 0, y:80,opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/dashboard0.png"
            alt="Dashboard 1"
            fill
            className="object-contain object-center"
          />
        </motion.div>
      )}

      {/* Overlay Image */}
      {showOverlay && (
        <motion.div
          initial={{ x: -200,y:160, opacity: 0,}} // start from left
          animate={{ x: 0,y:160 ,opacity: 1,}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/dashboard3.png"
            alt="Dashboard 2"
            fill
            className="object-contain object-center"
          />
        </motion.div>
      )}
    </section>
  );
}

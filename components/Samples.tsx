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
      {/* Background Image */}
      {showBackground && (
        <motion.div
          initial={{ x: -200, opacity: 0 }} // start from left
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/dashboard1.png"
            alt="Dashboard 1"
            fill
            
          />
        </motion.div>
      )}

      {/* Overlay Image */}
      {showOverlay && (
        <motion.div
          initial={{ x: -200,y:170, opacity: 0, scale: 0.95 }} // start from left
          animate={{ x: 0,y:170 ,opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/dashboard2.png"
            alt="Dashboard 2"
            fill
            
          />
        </motion.div>
      )}
    </section>
  );
}

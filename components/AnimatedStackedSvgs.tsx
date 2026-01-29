"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AnimatedStackedSvgs() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    once: false, // 👈 IMPORTANT
  });

  const variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={ref} className="relative w-[520px] h-[620px]">
      {/* LEFT FLOATERS */}
        <FloatingSvg
        src="/Frame1.svg"
        size={64}
        className="top-[80px] left-[60px]"
        delay={0}
        />
        <FloatingSvg
        src="/Frame2.svg"
        size={64}
        className="top-[250px] left-[0px]"
        delay={1}
        />
        <FloatingSvg
        src="/Frame3.svg"
        size={64}
        className="bottom-[120px] left-[-90px]"
        delay={2}
        />

        {/* RIGHT FLOATERS */}
        <FloatingSvg
        src="/Frame4.svg"
        size={64}
        className="top-[240px] right-[-40px]"
        delay={0.5}
        />
        <FloatingSvg
        src="/Frame5.svg"
        size={64}
        className="bottom-[140px] right-[0px]"
        delay={1.5}
        />
      <motion.div
        custom={0}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute top-0 right-0 z-10"
      >
        <Image src="/talent.svg" alt="Talent" width={320} height={320} />
      </motion.div>

      <motion.div
        custom={1}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute top-[180px] right-[100px] z-20"
      >
        <Image src="/fin.svg" alt="Finance" width={320} height={320} />
      </motion.div>

      <motion.div
        custom={2}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute top-[360px] right-[200px] z-30"
      >
        <Image src="/ops.svg" alt="Operations" width={320} height={320} />
      </motion.div>

    </div>
  );
}

function FloatingSvg({
  src,
  size = 64,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -12, 0],
        x: [0, 6, 0],
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      <Image src={src} alt="" width={size} height={size} />
    </motion.div>
  );
}
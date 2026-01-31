"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AnimatedStackedSvgs() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    once: false,
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
    <div
      ref={ref}
      className="
        relative
        w-[320px] h-[420px]
        sm:w-[420px] sm:h-[520px]
        lg:w-[520px] lg:h-[620px]
        mx-auto
      "
    >
      {/* LEFT FLOATERS (hide on mobile) */}
      <FloatingSvg
        src="/Frame1.svg"
        size={56}
        className="hidden sm:block top-[60px] left-[40px]"
        delay={0}
      />
      <FloatingSvg
        src="/Frame2.svg"
        size={56}
        className="hidden sm:block top-[240px] left-[-10px]"
        delay={1}
      />
      <FloatingSvg
        src="/Frame3.svg"
        size={56}
        className="hidden lg:block bottom-[100px] left-[-80px]"
        delay={2}
      />

      {/* RIGHT FLOATERS */}
      <FloatingSvg
        src="/Frame4.svg"
        size={56}
        className="hidden sm:block top-[250px] right-[-30px]"
        delay={0.5}
      />
      <FloatingSvg
        src="/Frame5.svg"
        size={56}
        className="hidden lg:block bottom-[120px] right-[0px]"
        delay={1.5}
      />

      {/* STACKED CARDS */}
      <motion.div
        custom={0}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute top-0 right-0 z-10"
      >
        <Image
          src="/talent.svg"
          alt="Talent"
          width={320}
          height={320}
          className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto"
        />
      </motion.div>

      <motion.div
        custom={1}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute top-[120px] sm:top-[160px] right-[40px] sm:right-[80px] z-20"
      >
        <Image
          src="/fin.svg"
          alt="Finance"
          width={320}
          height={320}
          className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto"
        />
      </motion.div>

      <motion.div
        custom={2}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute top-[240px] sm:top-[320px] right-[80px] sm:right-[160px] z-30"
      >
        <Image
          src="/ops.svg"
          alt="Operations"
          width={320}
          height={320}
          className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto"
        />
      </motion.div>
    </div>
  );
}

function FloatingSvg({ src, size = 64, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
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

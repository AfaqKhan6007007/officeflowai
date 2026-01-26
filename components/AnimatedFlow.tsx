"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function MovingBase64SVG() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    let x = window.innerWidth * 0.2; // start slightly off-right
    const speed = 1; // px per frame

    const animate = () => {
      const rect = el.getBoundingClientRect();

      // when RIGHT edge reaches viewport right → reset
      if (rect.right <= window.innerWidth) {
        x = window.innerWidth * 0.2;
      } else {
        x -= speed;
      }

      el.style.transform = `translate(${x}px, -50%)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={imgRef}
        className="absolute top-1/2 will-change-transform"
        style={{ transform: "translate(0px, -50%)" }}
      >
        <Image
          src="/hero_section.png"
          alt="Flow background"
          width={2600}
          height={900}
          priority
          className="opacity-70"
        />
      </div>
    </div>
  );
}

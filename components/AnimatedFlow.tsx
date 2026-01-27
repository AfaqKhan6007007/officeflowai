"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function MovingBase64SVG() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    // Use a state-independent variable for current X position
    let x = 0;
    const speed = 1; // px per frame

    const animate = () => {
      // 1. Calculate the threshold: When the image has moved its full width
      // to the left, we reset it.
      const imageWidth = el.offsetWidth;
      
      // 2. Decrement position
      x -= speed;

      // 3. Reset logic: If X has moved left by the full width of the image
      // reset it to 0. This creates a seamless loop if the image is repeatable.
      if (Math.abs(x) >= imageWidth) {
        x = 0;
      }

      // 4. Apply transform using translate3d for GPU acceleration (smoother)
      el.style.transform = `translate3d(${x}px, -50%, 0)`;
      
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Container that holds two copies for a seamless loop */}
      <div ref={imgRef} className="flex absolute top-1/2 will-change-transform">
        <Image
          src="/hero_section.png"
          alt="Flow background"
          width={2600}
          height={900}
          priority
          className="opacity-70 max-w-none" // max-w-none prevents flex shrinking
        />
        {/* Second copy follows the first one immediately */}
        <Image
          src="/hero_section.png"
          alt="Flow background"
          width={2600}
          height={900}
          priority
          className="opacity-70 max-w-none"
        />
      </div>
    </div>
  );
}
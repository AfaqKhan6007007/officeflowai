"use client";

import { useState } from "react";
import Image from "next/image";

export default function Clarity() {
  const [active, setActive] = useState("Vendor Management");

  const buttons = [
    "Vendor Management",
    "Contract Management",
    "Purchase Requests",
    "Purchase Orders",
  ];

  const screens: Record<string, string> = {
    "Vendor Management": "/pro.png",
    "Contract Management": "/pro.png",
    "Purchase Requests": "/pro.png",
    "Purchase Orders": "/pro.png",
  };

  return (
    <section className="py-12">
      {/* Heading */}
      <div className="flex flex-col gap-4 items-center text-center mt-10">
        <h1 className="text-2xl md:text-5xl font-bold text-[#005143]">
          Manage Procurement with Clarity
        </h1>
        <p className="text-gray-700 max-w-6xl">
          Manage vendors, contracts, purchase requests, and orders in one connected workflow with full visibility and control.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-4 justify-center flex-wrap">
        {buttons.map((label) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`px-8 py-4 rounded-lg font-bold transition-all
                ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md"
                    : "border-2 border-gray-300 text-black hover:bg-emerald-50"
                }`}
            >
              {label}
            </button>
          );
        })}
      </div>

     <div className="mt-20 flex justify-center">
  <div className="relative w-full max-w-[580px] aspect-[16/10]">
    {/* Screen */}
    <div className="absolute top-[10%] left-[10%] w-[82%] h-[80%] overflow-hidden rounded-md">
      <Image
        key={active}
        src={screens[active]}
        alt={active}
        fill
        priority
        className="object-contain transition-opacity duration-300"
      />
    </div>

    {/* Laptop Frame */}
    <Image
      src="/laptop.png"
      alt="Laptop frame"
      fill
      className="object-contain"
    />
  </div>
</div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#F6FBF8]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/OfficeFlowAI-Logo.png"
            alt="OfficeFlowAI Logo"
            width={87}
            height={93}
            className="w-16 sm:w-[87px] h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 text-sm font-medium text-slate-700">
          {["Home", "About", "Products", "Pricing", "Testimonial", "Contact Us"].map(
            (item,idx) => (
              <Link
                key={item}
                href={idx!==1 ? idx===5 ?"/contact":"/":"/about"}
                className="hover:text-emerald-600 transition"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            style={{
              background:
                "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)",
            }}
            className="text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-emerald-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-lg border-t border-emerald-100">
          <nav className="flex flex-col gap-4 px-6 py-6 text-slate-700">
            {["Home", "About", "Products", "Pricing", "Testimonial", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  href="/"
                  onClick={() => setOpen(false)}
                  className="font-medium hover:text-emerald-600 transition"
                >
                  {item}
                </Link>
              )
            )}

            <button
              style={{
                background:
                  "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)",
              }}
              className="mt-4 text-white px-6 py-3 rounded-lg font-bold shadow-md"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

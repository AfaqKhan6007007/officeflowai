"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#F1FDF6] to-[#ECFDF5] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-[#00C99C] font-semibold mb-5">Contact Us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#004E40]">
            Let’s talk about your<br/> workflows
          </h1>
          <p className="mt-7 text-black max-w-2xl mx-auto">
            Have a question, need a demo, or want to see if this fits your team?<br/>
            We’re here to help.
          </p>
        </div>

        {/* CARD */}
        <div className="flex flex-col sm:flex-row justify-center">
            <div className="bg-white rounded-md shadow-xl border border-gray-300 w-[100%] sm:w-[65%] sm:mx-0 mx-auto flex">

                {/* LEFT — FORM */}
                <div className="w-full md:w-[100%] p-8 md:p-12">
                    <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Name" placeholder="Full Name" />
                        <Input label="Work Email" placeholder="sh1234@gmail.com" />
                        <Input label="Company" placeholder="Company Name" />
                        <Input label="Inquiry Type" placeholder="Procurement" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                        Message
                        </label>
                        <textarea
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
                        />
                    </div>

                    <button
                        style={{
                        background:
                            "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)",
                        }}
                        className="text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95 mr-auto ml-auto flex"
                    >
                        Send Message
                    </button>
                    </form>
                </div>
            </div>
            

            {/* RIGHT — INFO */}
          
            <div className="w-full md:w-[50%] p-8 md:p-12 flex flex-col">
                <div>
                    <p className="text-gray-700 mb-8">
                        We’re here to help you streamline your operations. Reach out and
                        we’ll get back to you shortly.
                    </p>

                    <div className="relative z-10 space-y-8 my-12">
                        <div className="flex items-center gap-6">
                            <img src="/phone-call.png" alt="Phone" className="w-6 h-6" />
                            <span className="text-md">+1012 3456 789</span>
                        </div>
                    <div className="flex items-center gap-6">
                        <img src="/sharp-email.png" alt="Email" className="w-6 h-6" />
                        <span className="text-md">demo@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <img src="/location-filled.png" alt="Location" className="w-6 h-6"/>
                        <span className="text-md">132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                    </div>
                </div>
            </div>
            
            {/* SOCIALS */}
            <div className="flex gap-7 mt-1">
              {["twitter", "instagram", "discord"].map((s) => (
                <motion.div
                  key={s}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <img src={`/${s}.png`} alt={s} className="w-7 h-7" />
                </motion.div>
              ))}
            </div>
            </div>
        </div>
    </div>
    </section>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
      />
    </div>
  );
}

function InfoRow({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const headings = [
  {img:"/sealand.png"},
  {img:"/bmi.png"},
  {img:"/smz.png"},
  {img:"/alrashed.png"}
];

export default function Contact({ speed = 10 }) {
  return (
    <div className="overflow-hidden w-full py-4 items-center justify-center">
        <div className="mx-auto flex flex-col w-full gap-10 bg-[#F1FDF6] pt-10 pb-10 items-center border-t-2 border-b-2 border-emerald-200">
            <h1 className="text-4xl font-bold text-center text-[#005143]">
              Boost Your Productivity in Minutes
            </h1>
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Join thousands of teams using OfficeFlow AI to simplify workflows and work smarter.
            </p>
            <div className="mt-10 flex gap-4">
                <button 
                    style={{ background: "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)" }} 
                    className="text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95"
                >
                    Start Free Trial
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 bg-[#EAF4F0] px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition">
                Watch Demo
                </button>
            </div>
        </div>
    <div className="overflow-hidden w-full"> {/* Container to hide the scroll */}
  <motion.div
    className="flex mt-10"
    initial={{ x: 0 }}
    animate={{ x: "-50%" }} // Move exactly half the width of the total content
    transition={{ 
      repeat: Infinity, 
      ease: "linear", 
      duration: 30, // Control speed here
      repeatType: "loop"
    }}
    style={{ width: "fit-content" }} // Ensures the div is as wide as all images combined
  >
    {/* Render the list twice for a seamless loop */}
    {[...headings, ...headings].map((heading, idx) => {
        const originalIdx = idx % headings.length;
        return(
            <Image 
        key={idx} 
        src={heading.img} 
        alt="logo" 
        width={400} 
        height={400} 
        style={{ 
          width: (originalIdx === 1 || originalIdx === 2) ? "100px" : "200px",
          height: "100px", 
          flexShrink: 0, 
          marginRight: "240px" 
        }} 
      />
        )
      
})}
  </motion.div>
</div>

      <section className="flex items-center justify-center min-h-screen bg-slate-50 p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border-1 border-gray-300">
        
        {/* LEFT SIDE: INFO PANEL */}
        <div className="relative w-full md:w-[40%] p-10 text-white flex flex-col justify-between overflow-hidden min-h-[500px]">
          {/* BACKGROUND IMAGE ASSET */}
          <div 
            className="absolute inset-0 z-0 bg-[#1a3a32]" 
            style={{ 
              backgroundImage: 'url("/contact_bg.svg")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
            <p className="text-emerald-100/80 font-light">Say something to start a live chat!</p>
          </div>

          <div className="relative z-10 space-y-8 my-12">
            <div className="flex items-center gap-6">
              <img src="/phone.png" alt="Phone" className="w-6 h-6" />
              <span className="text-lg">+1012 3456 789</span>
            </div>
            <div className="flex items-center gap-6">
              <img src="/email.png" alt="Email" className="w-6 h-6" />
              <span className="text-lg">demo@gmail.com</span>
            </div>
            <div className="flex items-center gap-6">
              <img src="/location.png" alt="Location" className="w-6 h-6" />
              <span className="text-lg">132 Dartmouth Street Boston, MA 02156</span>
            </div>
          </div>

          <div className="relative z-10 flex gap-4">
  {['twitter', 'instagram', 'discord'].map((social) => (
    <motion.a
      key={social}
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      className="w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer transition-colors"
    >
      <img 
        src={`/${social}.png`} 
        alt={social} 
        className="w-8 h-8 object-contain" // Removed 'invert' to keep original colors
      />
    </motion.a>
  ))}
</div>
          
          {/* DECORATIVE BACKGROUND CIRCLES (Optional if your image doesn't have them) */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl z-0" />
        </div>

        {/* RIGHT SIDE: FORM PANEL */}
        <form className="w-full md:w-[60%] p-10 md:p-14 space-y-10 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative border-b border-slate-300 pb-2 focus-within:border-black transition-colors">
              <label className="block text-xs font-semibold text-slate-500 mb-1">First Name</label>
              <input type="text" className="w-full outline-none text-slate-800 bg-transparent" placeholder="First Name" />
            </div>
            <div className="relative border-b border-slate-300 pb-2 focus-within:border-black transition-colors">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Last Name</label>
              <input type="text" className="w-full outline-none text-slate-800 bg-transparent" placeholder="Doe" />
            </div>
            <div className="relative border-b border-slate-300 pb-2 focus-within:border-black transition-colors">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Email</label>
              <input type="email" className="w-full outline-none text-slate-800 bg-transparent" placeholder="Email" />
            </div>
            <div className="relative border-b border-slate-300 pb-2 focus-within:border-black transition-colors">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Phone Number</label>
              <input type="text" className="w-full outline-none text-slate-800 bg-transparent" placeholder="+1 012 3456 789" />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-800">Select Subject?</p>
            <div className="flex flex-wrap gap-6">
              {['General Inquiry', 'Technical Support', 'Billing', 'Other'].map((subject, idx) => (
                <label key={subject} className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-emerald-500">
                    <input 
                      type="radio" 
                      name="subject" 
                      className="peer absolute opacity-0 w-full h-full cursor-pointer" 
                      defaultChecked={idx === 0} 
                    />
                    <div className="w-2 h-2 rounded-full bg-emerald-500 scale-0 peer-checked:scale-100 transition-transform" />
                  </div>
                  <span className="text-sm text-slate-600">{subject}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="relative border-b border-slate-300 pb-2 focus-within:border-black transition-colors">
            <label className="block text-xs font-semibold text-slate-500 mb-1">Message</label>
            <textarea 
              rows={1} 
              className="w-full outline-none text-slate-800 bg-transparent resize-none" 
              placeholder="Write your message.." 
            />
          </div>

          <div className="flex justify-end">
            <button 
  style={{ background: "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)" }} 
  className="text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95"
>
  Send Message
</button>
          </div>
        </form>

      </div>
    </section>
    </div>
  );
}

import Header from "@/components/header";
import Hero from "@/components/hero";
import Modules from "@/components/modules";
import Robotic from "@/components/Robotic";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
      
        {/* Header */}
        <Header />

        {/* Main Content */}
        <Hero />

        {/* Modules Section */}
        <Modules />

        {/* Robotic Section */}
        <Robotic />
    </div>
  );
}

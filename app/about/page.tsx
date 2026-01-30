import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import Journey from "@/components/Journey";
import Members from "@/components/Members";
import Mission from "@/components/Mission";
import Operations from "@/components/Operations";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <HeroSection />
      <Mission />
      <Cards />
      <Journey />
      <Members />
      <Operations />
      <Footer />
    </div>
  );
}
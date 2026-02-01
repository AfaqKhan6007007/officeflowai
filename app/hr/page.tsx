import Header from "@/components/header";
import Footer from "@/components/Footer";
import HeroHR from "@/components/HeroHR";
import Management from "@/components/Management";
import HRModules from "@/components/HRModules";
import Choice from "@/components/Choice";
import Implementation from "@/components/Implementation";

export default function HRModule () {
    return (
        <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
            
                {/* Header */}
                <Header />
                <HeroHR />
                <HRModules />
                <Implementation />
                <Choice />
                <Management />
                <Footer />
        </div>
    );
}
import Header from "@/components/header";
import Footer from "@/components/Footer";
import HeroHR from "@/components/HeroHR";

export default function HRModule () {
    return (
        <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
            
                {/* Header */}
                <Header />
                <HeroHR />
                <Footer />
        </div>
    );
}
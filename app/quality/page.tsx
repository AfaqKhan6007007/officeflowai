import Header from "@/components/header";
import Footer from "@/components/Footer";
import HeroQuality from "@/components/HeroQuality";
import QualityModules from "@/components/QualityModules";
import Risk from "@/components/Risk";
import QualityImplement from "@/components/QualityImplement";
import QualityChoice from "@/components/QualityChoice";
import QualityOps from "@/components/QualityOps";
import QualityAI from "@/components/QualityAI";




export default function QualityModule () {
    return (
        <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
            
                {/* Header */}
                <Header />
                <HeroQuality />
                <QualityModules />
                <Risk />
                <QualityAI />
                <QualityImplement />
                <QualityChoice />
                <QualityOps />
                <Footer />
        </div>
    );
}
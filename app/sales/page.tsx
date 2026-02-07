import Header from "@/components/header";
import Footer from "@/components/Footer";
import HeroSales from "@/components/HeroSales";
import SalesModules from "@/components/SalesModules";
import View from "@/components/View";
import SalesImplement from "@/components/SalesImplement";
import SalesChoice from "@/components/SalesChoice";
import SalesOps from "@/components/SalesOps";
import SalesAI from "@/components/SalesAI";




export default function SalesModule () {
    return (
        <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
            
                {/* Header */}
                <Header />
                <HeroSales />
                <SalesModules />
                <View />
                <SalesAI />
                <SalesImplement />
                <SalesChoice />
                <SalesOps />
                <Footer />
        </div>
    );
}
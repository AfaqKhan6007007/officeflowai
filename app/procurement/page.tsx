import Header from "@/components/header";
import Footer from "@/components/Footer";
import HeroProcurement from "@/components/HeroProcurement";
import ProcurementModules from "@/components/ProcurementModules";
import Clarity from "@/components/Clarity";
import ProcurementImplement from "@/components/ProcurementImplement";
import ProcurementChoice from "@/components/ProcurementChoice";
import ProcurementOps from "@/components/ProcurementOps";
import ProcurementAI from "@/components/ProcurementAI";



export default function ProcurementModule () {
    return (
        <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
            
                {/* Header */}
                <Header />
                <HeroProcurement />
                <ProcurementModules />
                <Clarity />
                <ProcurementAI />
                <ProcurementImplement />
                <ProcurementChoice />
                <ProcurementOps />
                <Footer />
        </div>
    );
}
import Header from "@/components/header";
import Footer from "@/components/Footer";
import HeroOperations from "@/components/HeroOperations";
import OperationsModules from "@/components/OperationsModules";
import Place from "@/components/Place";
import OperationsImplement from "@/components/OperationsImplement";
import OperationsChoice from "@/components/OperationsChoice";
import OperationsOps from "@/components/OperationsOps";





export default function OperationsModule () {
    return (
        <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
            
                {/* Header */}
                <Header />
                <HeroOperations />
                <OperationsModules />
                <Place />
                <OperationsImplement />
                <OperationsChoice />
                <OperationsOps />
                <Footer />
        </div>
    );
}
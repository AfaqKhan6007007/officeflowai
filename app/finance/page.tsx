import Header from "@/components/header";
import Footer from "@/components/Footer";
import HeroFinance from "@/components/HeroFinance";
import FinanceModules from "@/components/FinanceModules";
import Glance from "@/components/Glance";
import FinanceImplement from "@/components/FinanceImplement";
import FinanceChoice from "@/components/FinanceChoice";
import FinanceOps from "@/components/FinanceOps";
import FinanceAI from "@/components/FinanceAI";


export default function FinanceModule () {
    return (
        <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
            
                {/* Header */}
                <Header />
                <HeroFinance />
                <FinanceModules />
                <Glance />
                <FinanceAI />
                <FinanceImplement />
                <FinanceChoice />
                <FinanceOps />
                <Footer />
        </div>
    );
}
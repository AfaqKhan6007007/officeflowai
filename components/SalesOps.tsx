export default function SalesOps() {
    return (
        <div className="mx-auto flex flex-col w-full gap-10 bg-white pt-10 pb-10 items-center border-t-2 border-gray-300">
            <h1 className="text-4xl font-bold text-center text-[#005143]">
             Boost Sales & Close Deals Smarter
            </h1>
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Manage leads, track pipelines, and automate follow-ups all in one intelligent CRM platform.
            </p>
            <div className="mt-10 flex gap-4">
                <button 
                    style={{ background: "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)" }} 
                    className="text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95"
                >
                    Get Started with Sales & Marketing Module
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition">
                Watch Demo
                </button>
            </div>
        </div>
    );
}
import MovingBase64SVG from "./AnimatedFlow";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#f0f9f6] flex items-center overflow-hidden">
      <MovingBase64SVG />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">
            AI-Powered Business Operations Platform
          </span>
          <h1 className="text-6xl font-extrabold text-slate-900 mt-4 leading-tight">
            All your work.<br />
            <span className="text-emerald-500">One intelligent flow.</span>
          </h1>
          <p className="text-lg text-slate-600 mt-6 max-w-lg">
            OfficeFlow AI brings HR, Finance, and Operations together into one unified platform.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import AnimatedStackedSvgs from "./AnimatedStackedSvgs";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[90vh] sm:min-h-screen bg-[#f0f9f6] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url("/hero_sec.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'cover'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        
        {/* LEFT CONTENT */}
        <div className="relative max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
            AI-Powered Business Operations Platform
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 leading-tight relative inline-block">
            All your work.<br />
            <span className="text-emerald-500">One intelligent flow.</span>

            {/* Curved underline – hidden on small screens */}
            <svg
              className="hidden sm:block w-full h-16 lg:h-20 ml-[-120px]"
              viewBox="0 0 200 50"
              fill="none"
            >
              <path
                d="M 0 50 Q 150 0 380 80"
                stroke="#39E0A5"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-6 max-w-lg mx-auto lg:mx-0">
            OfficeFlow AI brings HR, Finance, and Operations together into one unified platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              style={{
                background:
                  "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)",
              }}
              className="text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95"
            >
              Start Free Trial
            </button>

            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT ANIMATED STACK */}
        <div className="flex justify-center relative mt-12 lg:mt-0 scale-90 sm:scale-100">
          <AnimatedStackedSvgs />
        </div>

      </div>
    </section>
  );
}

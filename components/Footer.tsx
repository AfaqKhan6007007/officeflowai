import Image from "next/image";

export default function Footer () {
  return (
    <footer className="w-full bg-[#F6FBF8] text-black py-6 flex flex-col items-center justify-center border-t-2 border-t-gray-300 px-4">
      
      {/* Top section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 mt-8 w-full max-w-7xl">

        {/* Logo + description */}
        <div className="flex flex-col items-center sm:items-start w-full lg:w-[400px] mb-10 lg:mb-0">
          <Image
            src="/OfficeFlowAI-Logo.png"
            alt="OfficeFlowAI Logo"
            width={120}
            height={113}
          />
          <p className="mt-2 text-gray-600 max-w-md text-sm">
            Unified platform for managing workforce, operations, and business processes intelligently.
          </p>

          <button 
            style={{ background: "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)" }} 
            className="text-white px-2 pr-2 pl-2 py-4 rounded-lg font-bold transition-all shadow-xl hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95 w-full sm:w-1/2 mt-10"
          >
            Request a Demo
          </button>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-20 w-full">
          {[1,2,3,4].map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h4 className="font-semibold">Product</h4>
              <p className="text-gray-600">Platform Overview</p>
              <p className="text-gray-600">AI Agents</p>
              <p className="text-gray-600">Integrations</p>
              <p className="text-gray-600">Security & Compliance</p>
              <p className="text-gray-600">Pricing</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="w-full border-t border-gray-300 my-4" />

      {/* Social */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <h4 className="font-semibold">Follow Us</h4>
        <div className="flex gap-0 mt-2">
          <Image src="/facebook.png" alt="Facebook" width={40} height={40} />
          <Image src="/dm.png" alt="Direct Message" width={40} height={40} />
          <Image src="/cat.png" alt="Catalog" width={40} height={40} />
          <Image src="/firebase.png" alt="Firebase" width={40} height={40} />
          <Image src="/insta.png" alt="Instagram" width={40} height={40} />
        </div>
      </div>

      <hr className="w-full border-t border-gray-300 my-4" />

      {/* Legal links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-5 text-center">
        <p className="text-gray-500">Privacy Policy</p>
        <p className="text-gray-500">Terms of Use</p>
        <p className="text-gray-500">Sales & Refunds</p>
        <p className="text-gray-500">Legal</p>
        <p className="text-gray-500">Site map</p>
      </div>  

      <p className="text-sm text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

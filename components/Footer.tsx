import Image from "next/image";

export default function Footer () {
  return (
    <footer className="w-full bg-[#F6FBF8] text-black py-6 flex flex-col items-center justify-center border-t-2 border-t-gray-300">
        <div className="flex items-center mb-8 mt-8">
            <div className="flex flex-col items-left w-[400px]">

                <Image
                        src="/OfficeFlowAI-Logo.png"
                        alt="OfficeFlowAI Logo"
                        width={120}
                        height={113}
                        />
                <p className="mt-2 text-gray-600">Unified platform for managing workforce, operations, and business processes intelligently.</p>
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition shadow-xl mt-9 w-1/2">
                    Request a Demo
                </button>
            </div>
            <div className="ml-20 flex flex-col gap-4">
                <h4 className="font-semibold">Product</h4>
                <p className="text-gray-600">Platform Overview</p>
                <p className="text-gray-600">AI Agents</p>
                <p className="text-gray-600">Integrations</p>
                <p className="text-gray-600">Security & Compliance</p>
                <p className="text-gray-600">Pricing</p>
            </div>
            <div className="ml-20 flex flex-col gap-4">
                <h4 className="font-semibold">Product</h4>
                <p className="text-gray-600">Platform Overview</p>
                <p className="text-gray-600">AI Agents</p>
                <p className="text-gray-600">Integrations</p>
                <p className="text-gray-600">Security & Compliance</p>
                <p className="text-gray-600">Pricing</p>
            </div>
            <div className="ml-20 flex flex-col gap-4">
                <h4 className="font-semibold">Product</h4>
                <p className="text-gray-600">Platform Overview</p>
                <p className="text-gray-600">AI Agents</p>
                <p className="text-gray-600">Integrations</p>
                <p className="text-gray-600">Security & Compliance</p>
                <p className="text-gray-600">Pricing</p>
            </div>
            <div className="ml-20 flex flex-col gap-4">
                <h4 className="font-semibold">Product</h4>
                <p className="text-gray-600">Platform Overview</p>
                <p className="text-gray-600">AI Agents</p>
                <p className="text-gray-600">Integrations</p>
                <p className="text-gray-600">Security & Compliance</p>
                <p className="text-gray-600">Pricing</p>
            </div>
        </div>
        <hr className="w-full border-t border-gray-300 my-4" />
        <div className="flex gap-4">
            <h4 className="font-semibold mt-4">Follow Us</h4>
            <div className="flex gap-1 mt-2">
                <Image src="/facebook.png" alt="Facebook" width={54} height={54} />
                <Image src="/dm.png" alt="Direct Message" width={54} height={54} />
                <Image src="/cat.png" alt="Catalog" width={54} height={54} />
                <Image src="/firebase.png" alt="Firebase" width={54} height={54} />
                <Image src="/insta.png" alt="Instagram" width={54} height={54} />
            </div>

        </div>
        <hr className="w-full border-t border-gray-300 my-4" />
      <div className="flex gap-6 mb-5">
        <p className="text-gray-500">Privacy Policy</p>
        <p className="text-gray-500">Terms of Service</p>
        <p className="text-gray-500">Sales & Refunds</p>
        <p className="text-gray-500">Legal</p>
        <p className="text-gray-500">Sidemap</p>
      </div>  
      <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
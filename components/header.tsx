import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-rgba(0, 153, 119, 0.05) max-h-max p-4" style={{backgroundColor:"rgba(0, 153, 119, 0.05)"}}>
      {/* Logo */}
      <div className="text-xl font-semibold ml-6">
        <Image
          src="/OfficeFlowAI-Logo.png"
          alt="OfficeFlowAI Logo"
          width={87}
          height={93}
        />
      </div>

      {/* Navigation */}
      <nav className="flex gap-10 text-sm">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </Link>
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          About
        </Link>
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Products
        </Link>
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Pricing
        </Link>
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Testimonial
        </Link>
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Contact Us
        </Link>
      </nav>

      {/* Get Started Button */}
      <div className="text-xl font-semibold">
        <button 
  style={{ background: "linear-gradient(359.02deg, #1F7A5A 32.42%, #39E0A5 131.86%)" }} 
  className="text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl hover:brightness-110 hover:shadow-emerald-500/50 active:scale-95"
>
  Get Started
</button>
      </div>
    </header>
  );
}

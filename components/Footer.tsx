import Image from "next/image";

export default function Footer () {
  return (
    <footer className="w-full bg-[#F6FBF8] text-black py-6 flex flex-col items-center justify-center">
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
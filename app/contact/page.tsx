
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/header";


export default function ContactPage() {
  return (
    <div className="min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}
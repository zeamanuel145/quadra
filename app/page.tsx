import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Skills } from "@/components/Skills";
import { Team } from "@/components/Team";
import { Work } from "@/components/Work";
import { Stats } from "@/components/Stats";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <Skills />
        <Team />
        <Work />
        <section className="bg-cocoa text-cream">
          <Stats />
          <Faq />
        </section>
      </main>
      <Footer />
    </>
  );
}

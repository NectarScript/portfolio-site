import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { Journey } from "@/components/ui/Journey";
import { Skills } from "@/components/ui/Skills";
import { Projects } from "@/components/ui/Projects";
import { Contact } from "@/components/ui/Contact";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900 text-white selection:bg-electric-blue/30 selection:text-electric-blue">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
}

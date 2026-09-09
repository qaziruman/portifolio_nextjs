import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 flex flex-col selection:bg-zinc-800 selection:text-white">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills & Technologies */}
        <Skills />

        {/* 4. What I Do / Services */}
        <Services />

        {/* 5. Work Experience */}
        <Experience />

        {/* 6. Featured Projects */}
        <Projects />

        {/* 7. Currently Learning / Roadmap */}
        <Learning />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

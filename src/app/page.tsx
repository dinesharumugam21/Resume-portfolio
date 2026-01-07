import Starfield from "@/components/canvas/Starfield";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <main className="relative z-10 w-full min-h-screen">
      <Starfield />
      <Hero />
      <div id="about" />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

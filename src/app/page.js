import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      <Navbar />
      <Hero />
      <Skills/>
      <Projects /> 
      <Contactme/>


      

    </main>
  );
}
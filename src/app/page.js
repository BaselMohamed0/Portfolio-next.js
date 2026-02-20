import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      <Navbar />
      <Hero />
      <Skills/>
      {/* Skills Section */}
      {/* <section id="skills" className="py-24 border-y border-zinc-900 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-8 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {["React", "Next.js", "JavaScript", "Tailwind", "Motion"].map((skill) => (
              <div key={skill} className="group cursor-default text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-zinc-800 group-hover:text-white transition-all duration-500 italic">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Projects /> 
      <Footer/>


      

    </main>
  );
}
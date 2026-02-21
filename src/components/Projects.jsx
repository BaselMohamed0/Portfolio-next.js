"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const projects = [
  { title: "Handmade Bags E-commerce", desc: "A full commercial site for handmade bags using React.js, Next.js, Tailwind.", 
    link: "http://rourboutique.com", Image: "/imgs/Rour.png" },
  { title: "Hangman Game", desc: "Simple Hangman game built with HTML, CSS, JS.", 
    link: "https://baselmohamed0.github.io/Hang-Man/",Image: "/imgs/Hangman.png" },
  { title: "Tic Tac Toe", desc: "Classic Tic Tac Toe game built with HTML, CSS, JS.", 
    link: "https://baselmohamed0.github.io/X.O/", Image: "/imgs/X,o.png" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 max-w-7xl mx-auto" >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl  mb-12 font-black tracking-tighter bg-linear-to-b
         from-white via-white to-zinc-700 bg-clip-text text-transparent">
          Projects</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.4 }}
            className="group"
          >
            <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden mb-6 border border-zinc-800 transition-colors group-hover:border-zinc-500">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity">
                <Link href={project.link} target="blank">
                <Image src={project.Image} alt="Pic" width={500} height={500}></Image>
                </Link>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-400 transition-colors">{project.title}</h3>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

  );
}
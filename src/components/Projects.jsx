"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "FaboraKits | E-Commerce Website for Wooden Model Kits",
    desc: "A feature-rich e-commerce platform built for faboraKits, a brand specializing in intricate 3D wooden puzzle kits—from cars and aircraft to ships and famous landmarks. Designed to showcase complex 300+ piece self-assembly kits with an intuitive shopping experience.",
    link: "https://faborakits.com/",
    Image: "/imgs/faborakits.png",
  },
  {
    title: "Contek | Mechanical Contracting Website",
    desc: "An extensive, multi-page corporate website developed with Next.js for a leading mechanical contracting firm. Spanning 8 comprehensive pages, it professionally showcases the company's full scope of mechanical services, including HVAC, fire fighting, plumbing, boilers, and electrical systems.",
    link: "https://contek.vercel.app/",
    Image: "/imgs/contek.png",
  },
  {
    title: "Makoalat Al-Sham | Restaurant Platform",
    desc: "A fully-fledged, dynamic culinary platform built with Next.js for a traditional Levantine restaurant. It features an interactive digital menu, a seamless shopping cart system, and an order management flow that instantly routes customer orders directly to WhatsApp.",
    link: "https://ma2kolatelsham.vercel.app/",
    Image: "/imgs/ma2kolat.png",
  },
  {
    title: "Digital Portfolio for Graphic Designer",
    desc: "A bespoke, high-performance portfolio developed with Next.js and Framer Motion, Grid System, Fluid Typography, Lightbox gallery, optimized SEO and integrated Google Analytics 4 specifically for a professional Graphic Designer. This project bridges the gap between static design and interactive digital experience.",
    link: "https://reem-awwad.vercel.app/",
    Image: "/imgs/reem2.png",
  },
  {
    title: "MoneyLens | Real-time Smart Finance Manager Description",
    desc: "A full-stack financial dashboard focused on speed and security. Empowering users to track daily transactions and visualize financial health through a seamless, responsive interface.",
    link: "https://www.moneylensapp.com/",
    Image: "/imgs/moneylens.png",
  },
  {
    title: "Galerie D'Engy | Fine Art Commercial Hub",
    desc: "A commercial art gallery and booking site. It provides an intuitive interface for clients to register and commission.",
    link: "https://galerie-d-engy.vercel.app/",
    Image: "/imgs/Galerie.png",
  },
  {
    title: "rour | Handmade Pearl Bags E-Commerce Website",
    desc: "A stylish, fully responsive e-commerce platform built for rour, an exclusive brand specializing in handcrafted pearl bags. Features an elegant product showcase with high-resolution image galleries, interactive order customization, category filtering, and a seamless checkout experience.",
    link: "http://rourboutique.com",
    Image: "/imgs/Rour.png",
  },
  {
    title: "Interactive Flying Bird | JavaScript Animation",
    desc: "An interactive, pure JavaScript animation featuring a bird flying across the screen. Built with vanilla JS, it uses dynamic physics and event handling to alter the flight path to random target points on mouse click, with hover-to-pause and resume mechanics.",
    link: "https://flying-bird-coral.vercel.app/",
    Image: "/imgs/flying-bird.png",
  },
  {
    title: "Classic Hangman Word Game | Web App",
    desc: "An engaging, responsive Hangman word-guessing game developed using pure HTML, CSS, and Vanilla JavaScript. Features dynamic word generation across multiple categories, an interactive virtual keyboard, visual gallows progression using SVG/CSS animations, and win/loss state handling.",
    link: "https://baselmohamed0.github.io/Hang-Man/",
    Image: "/imgs/Hangman.png",
  },
  {
    title: "Classic Tic-Tac-Toe Game | Web App",
    desc: "A responsive, interactive classic Tic-Tac-Toe game crafted with pure HTML, CSS, and JavaScript. Features smooth gameplay mechanics, win/draw detection algorithms, real-time score tracking, and a dynamic board reset functionality.",
    link: "https://baselmohamed0.github.io/X.O/",
    Image: "/imgs/X,o.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl  mb-12 font-black tracking-tighter bg-linear-to-b
         from-white via-white to-zinc-700 bg-clip-text text-transparent"
        >
          Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden mb-6 border border-zinc-800 transition-colors group-hover:border-zinc-500">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity">
                <Link href={project.link} target="blank">
                  <Image
                    src={project.Image}
                    alt="Pic"
                    width={500}
                    height={500}
                  ></Image>
                </Link>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">
              {project.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

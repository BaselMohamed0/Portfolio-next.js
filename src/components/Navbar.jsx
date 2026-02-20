"use client";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div>
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      viewport={{once: false}}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 w-[90%] md:w-fit block"
    >
      <ul className="flex items-center justify-center gap-6 md:gap-8 px-8 py-3
       bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-xs md:text-sm font-medium text-zinc-400
             hover:text-white transition-all uppercase tracking-widest">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
    </div>
  );
}
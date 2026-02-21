"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "GitHub",
  "SOLID",
  "OOP",
  "Responsive Design",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto py-24 px-6 text-center"
    >
      <h2 className="text-3xl md:text-5xl mb-12 font-black tracking-tighter bg-linear-to-b
         from-white via-white to-zinc-700 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -6 }}
            className="p-2 md:p-4  text-md md:text-xl rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 
            font-bold hover:border-white hover:text-white transition duration-300 "
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
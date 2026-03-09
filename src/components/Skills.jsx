"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {name:"HTML", img:"/imgs/html.png"},
  {name:"CSS", img:"/imgs/css.png"},
  {name:"JavaScript", img:"/imgs/js.png"},
  {name:"React", img:"/imgs/react.webp"},
  {name:"Next.js", img:"/imgs/next.png"},
  {name:"Tailwind", img:"/imgs/tailwind.webp"},
  {name:"TypeScript", img:"/imgs/ts.webp"},
  {name:"GitHub", img:"/imgs/git.png"},
  {name:"SOLID Principles", img:"/imgs/sp1.png"},
  {name:"OOP", img:"/imgs/oop 1.png"},
  {name:"Responsive Design", img:"/imgs/rd.webp"},
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto md:py-24 px-8 text-center"
    >
      <h2 className="text-3xl md:text-5xl mb-12 font-black tracking-tighter bg-linear-to-b
         from-white via-white to-zinc-700 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="p-2 md:p-4  text-sm md:text-xl rounded-xl bg-zinc-800 border
           border-zinc-700 text-zinc-400 font-bold  hover:border-white hover:text-white 
           transition duration-300 flex items-center ">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -6 }}
            className="   text-zinc-400 font-bold flex flex-row gap-3 items-center "
          >
            <Image src={skill.img} alt="Pic" width={60} height={40} ></Image>
            
            {skill.name}
          </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
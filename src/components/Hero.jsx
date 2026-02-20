"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="home" className=" gap-50 h-screen flex flex-row items-center justify-center
     text-center px-4">
      
      <div className="flex flex-col">
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount:0.3}}
        className=" mb-6 px-4 py-1 border border-zinc-700 rounded-full text-[10px] uppercase tracking-[0.2em] text-zinc-500"
      >
        Based in Egypt • Open for Projects
      </motion.div> */}

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount:0.3}}
        className="text-6xl md:text-5xl font-black tracking-tighter bg-linear-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent"
      >
        Hi I’m Basel Mohamed <br />FRONTEND ENGINEER  
      </motion.h1>


      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount:0.3}}
        className="mt-8 text-zinc-500 max-w-xl text-lg font-light leading-relaxed"
        >
        Front-End Engineer focused on building clean, responsive, and user-friendly interfaces. 
        I enjoy turning ideas and designs into smooth, high-quality user experiences and 
        continuously improving my front-end development skills.
      </motion.p>
      </div>

      <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: false, amount:0.3}}
      >
      <Image src="/imgs/Baselmohamed.png" className=" rounded-2xl flex" alt="Pic" 
      width={400} height={400}></Image>
      </motion.p>

    </div>
  );
}
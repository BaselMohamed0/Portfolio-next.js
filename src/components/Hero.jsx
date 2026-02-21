"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center
      text-center md:text-left  gap-10 md:gap-30 pt-20"
    >
      
      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent"
        >
          Hi I’m Basel Mohamed <br />
          FRONTEND ENGINEER  
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed"
        >
          Front-End Engineer focused on building clean, responsive, and user-friendly interfaces. 
          I enjoy turning ideas and designs into smooth, high-quality user experiences and 
          continuously improving my front-end development skills.
        </motion.p>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center"
      >
        <Image
          src="/imgs/Baselmohamed.png"
          alt="Pic"
          width={400}
          height={400}
          className="rounded-2xl w-56 sm:w-72 md:w-80 lg:w-96 h-auto"
        />
      </motion.div>

    </div>
  );
}
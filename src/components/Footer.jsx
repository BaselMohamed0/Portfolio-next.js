"use client";
import Animation from "@/utils/Animation";
import {  BsLinkedin, BsTelephone, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";


export default function Footer() {
  return (
    <>
    <Animation/>
    
    <div
      id="contact"
      className="pt-16 pb-16 text-center border-zinc-800"
      data-aos="zoom-in"  data-aos-duration="900" 
      >
{/* -----------------Label------------ */}
      <p className="text-zinc-500 mb-4 uppercase tracking-[0.3em] text-sm font-medium">
        Get in touch</p>
      <h2 className="text-3xl md:text-5xl mb-12 font-black tracking-tighter bg-linear-to-b
         from-white via-white to-zinc-700 bg-clip-text text-transparent">Contact Me</h2>

{/* ------------Icons------------- */}
      <div className="flex justify-center pl-15 md:pl-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">            
          
          <a href="mailto:baselmohamed0@outlook.com" target="_blank" rel="noopener noreferrer " 
          className=" flex  gap-3 group "> 
          <div  className="flex justify-center opacity-35 text-4xl h-15
            p-3 text-center rounded-xl bg-zinc-500 text-zinc-800  group-hover:text-white
            group-hover:border-white"  ><MdEmail/>
          </div>
          <p className="text-zinc-500 mb-4 text-left "> 
            Email: <br />baselmohamed0@outlook.com 
          </p>
          </a>
        
          <a href="tel:+201000678080" target="_blank" rel="noopener noreferrer " 
          className=" flex  gap-3 group"> 
          <div  className="flex justify-center opacity-35 text-4xl h-15
          p-3 text-center rounded-xl bg-zinc-500 text-zinc-800 group-hover:text-white
          group-hover:border-white"  ><BsTelephone/></div>
          
          <p className="text-zinc-500 mb-4 text-left "> 
            Phone:  <br />+201000678080</p>
          </a>

          <a href="https://www.linkedin.com/in/basel-mohamed-807095384/" target="_blank" rel="noopener noreferrer " 
          className=" flex  gap-3 group"> 
          <div  className="flex justify-center opacity-35 text-4xl h-15
          p-3 text-center rounded-xl bg-zinc-500 text-zinc-800 group-hover:text-white
          group-hover:border-white"  ><BsLinkedin/></div>
          
          <p className="text-zinc-500 mb-4 text-left "> 
            LinkedIn:   <br />View Profile</p>
          </a>

          <a href="https://github.com/BaselMohamed0" target="_blank" rel="noopener noreferrer " 
          className=" flex  gap-3 group"> 
          <div  className="flex justify-center opacity-35 text-4xl h-15
          p-3 text-center rounded-xl bg-zinc-500 text-zinc-800 group-hover:text-white
          group-hover:border-white"  ><BsGithub /></div>
          
          <p className="text-zinc-500 mb-4 text-left "> 
            GitHub:   <br />View Repos</p>
          </a>

          <a href="/imgs/Basel Mohamed.pdf" target="_blank" rel="noopener noreferrer " 
          className=" flex  gap-3 group  "> 
          <div  className="flex justify-center opacity-35 text-4xl h-15
          p-3 text-center rounded-xl bg-zinc-500 text-zinc-800 group-hover:text-white
          group-hover:border-white"  ><TbFileCv /></div>
          
          <p className="text-zinc-500 mb-4 text-left "> 
            C.V:    <br />View C.V</p>
          </a>
            
        </div>
      </div>

{/* ------------Form-------------- */}
  <div className="flex justify-center items-center mt-16 px-4"
      data-aos="zoom-in"  data-aos-duration="900" data-aos-delay="300"
    >
      <form className="w-full md:w-1/2 max-w-2xl space-y-6"
        onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.target);
        window.open(
        `https://wa.me/201000678080?text=${encodeURIComponent(
        `Name: ${d.get("name")}
        Email: ${d.get("email")}
        Message: ${d.get("message")}`
          )}`,"_blank" );
        }}
      >
          <input type="text" placeholder="Enter your name" name="name"
            className="w-full p-3 rounded-xl bg-zinc-500/20 text-white border border-zinc-700 
            focus:outline-none focus:border-white transition duration-300"
          />
      
          <input type="email" placeholder="Enter your email" name="email" className="w-full p-3 rounded-xl 
           bg-zinc-500/20 text-white border border-zinc-700 focus:outline-none focus:border-white 
           transition duration-300"
          />
    
          <textarea rows="5" placeholder="Write your message..." name="message"
            className="w-full p-3 rounded-xl bg-zinc-500/20  text-white border border-zinc-700 
            focus:outline-none focus:border-white transition duration-300 resize-none"
          />
        <button type="submit" className="w-full py-3 rounded-xl bg-zinc-700 text-zinc-900 font-semibold 
          hover:bg-zinc-500 hover:text-black transition duration-300"
        >
          Send Message
        </button>
        </form>
      </div>
    </div>

    <div className="pt-5 border-t border-zinc-900 text-center">

      <p className="text-zinc-600 text-[10px] tracking-[0.5em] uppercase pb-5">
      © Basel Mohamed. All rights reserved - 2026.
      </p>
      
    </div>
      </>
  );
}

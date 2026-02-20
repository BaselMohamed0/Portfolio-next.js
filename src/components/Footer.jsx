import Animation from "@/utils/Animation";

export default function Footer() {
  return (
    <>
    <Animation/>
    <div
      id="contact"
      className="pt-16 pb-16 text-center border-zinc-800"
      data-aos="zoom-in"  data-aos-duration="900" 
      >

      <p className="text-zinc-500 mb-4 uppercase tracking-[0.3em] text-sm font-medium">
        Get in touch</p>
      <h2 className="text-5xl md:text-7xl mb-12 font-black tracking-tighter bg-linear-to-b
         from-white via-white to-zinc-700 bg-clip-text text-transparent">LET’S CREATE.</h2>

      <div className="grid grid-row-5 mt-4 text-zinc-400">
       
        <a href="mailto:baselmohamed0@outlook.com"  >Email:  
          <span className="text-gray-600">baselmohamed0@outlook.com</span></a>

        <a href="tel:+201000678080"  >Phone: 
          <span className="text-gray-600">+201000678080</span> </a>
        <a href="https://www.linkedin.com/in/basel-mohamed-807095384/">LinkedIn: 
          <span className="text-gray-600">View Profile</span> </a>

        <a href="https://github.com/BaselMohamed0">GitHub: 
          <span className="text-gray-600">View Repos</span></a>
          
        <a href="/public/imgs/Basel Mohamed.pdf" target="_blank">C.V: 
          <span className="text-gray-600">View C.V</span>  </a>
      </div>
    </div>

    <div className="pt-5 border-t border-zinc-900 text-center">

      <p className="text-zinc-600 text-[10px] tracking-[0.5em] uppercase">
      © Basel Mohamed. All rights reserved - 2026.
      </p>
    </div>
      </>
  );
}

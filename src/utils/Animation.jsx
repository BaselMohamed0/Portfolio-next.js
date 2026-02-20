"use client"
import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Animation() {

     useEffect(() => {
    AOS.init({ duration: 1000, once:false, mirror: true, easing: "ease-out" });
  }, []);
  
  return (
    <div>

    </div>
  )
}

export default Animation
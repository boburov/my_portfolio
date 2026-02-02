"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Download, Github, Verified } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6" data-aos="fade-right">
          <div className="flex items-center gap-3">
             <div className="px-4 py-1.5 rounded-full glass-panel border-purple-500/30 flex items-center gap-2 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-purple-200">Available for Work</span>
             </div>
             <div className="px-4 py-1.5 rounded-full glass-panel border-white/10 flex items-center gap-1 w-fit">
                <Verified className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">Verified</span>
             </div>
          </div>

          <h1 className="text-maximal leading-[0.85]">
            <span className="block text-white">BOBUROV</span>
            <span className="block text-gradient">SHUKURULLO</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed font-light">
            Fullstack Developer building <span className="text-white font-semibold">robust</span> web applications with{" "}
            <span className="text-purple-400">Next.js</span> & <span className="text-indigo-400">NestJS</span>.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="./Boburov_Shukurullo_CV.pdf"
              download
              className="group relative px-8 py-4 bg-purple-600 text-white font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                <Download size={20} /> Download CV
              </span>
            </a>

            <a
              href="/contact"
              className="group px-8 py-4 glass-button rounded-full text-white font-bold hover:bg-white/10 flex items-center gap-2"
            >
              Talk with Me
            </a>
            
            <a
              href="https://github.com/boburov"
              className="p-4 glass-button rounded-full text-white hover:text-purple-400 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Visual / Image */}
        <div className="relative" data-aos="fade-left">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-[2rem] rotate-6 opacity-20 blur-xl animate-float" />
                <div className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-sm rounded-[2rem] -rotate-3 transition-transform hover:rotate-0 duration-500 overflow-hidden">
                     <Image 
                        src="https://avatars.githubusercontent.com/u/137058543?v=4"
                        alt="Boburov Shukurullo"
                        fill
                        className="object-cover opacity-90 transition-opacity hover:opacity-100"
                        priority
                     />
                </div>
                
                {/* Decoration Badges */}
                <div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-2xl animate-float" style={{ animationDelay: "1s" }}>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Experience</div>
                    <div className="text-3xl font-black text-white">3+ <span className="text-purple-400">Years</span></div>
                </div>

                <div className="absolute -top-6 -left-6 glass-panel p-4 rounded-2xl animate-float" style={{ animationDelay: "2s" }}>
                     <div className="flex items-center gap-3">
                         <div className="bg-green-500/20 p-2 rounded-lg">
                             <Verified className="w-6 h-6 text-green-400" />
                         </div>
                         <div>
                             <div className="text-xs text-gray-400 uppercase tracking-wider">Quality</div>
                             <div className="text-lg font-bold text-white">Top Tier</div>
                         </div>
                     </div>
                </div>
            </div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

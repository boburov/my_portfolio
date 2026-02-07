"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import { Download, Github, Linkedin, Mail, Plus, Rocket, VerifiedIcon } from "lucide-react";

import Projects from "./components/Projects";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "TypeScript", icon: "ts" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Vite", icon: "vite" },
    { name: "TailwindCSS", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "MUI", icon: "materialui" },

    // Backend
    { name: "Node.js", icon: "nodejs" },
    { name: "NestJS", icon: "nestjs" },
    { name: "Prisma", icon: "prisma" },

    // Databases
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgres" },

    // DevOps / Tools
    { name: "Git", icon: "git" },
    // { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    // { name: "Netlify", icon: "netlify" },
    { name: "AWS S3", icon: "aws" },

    { name: "Figma", icon: "figma" },

    // Languages you included
    { name: "Python", icon: "python" },
    // { name: "Ruby", icon: "ruby" },
    // { name: "Ruby on Rails", icon: "rails" },
    { name: "Dart", icon: "dart" },
    { name: "Flutter", icon: "flutter" },
  ];


  const myTeam = [
    {
      img: "https://avatars.githubusercontent.com/u/166621808?v=4",
      name: "Mardonbek Khamidov",
      description:
        "Ruby on Rails",
      projects: 1,
    },
    {
      img: "https://avatars.githubusercontent.com/u/192407019?v=4",
      name: "Muhammadali Jamolov",
      description: "Master of NextJs",
      projects: 1,
    },
    {
      img: `https://avatars.githubusercontent.com/u/137058543?v=4`,
      name: "Boburov Shukurullo",
      description:
        "Flutter dev",
      projects: 3,
    },
  ];

  return (
    <>
      <section className="container mt-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* HERO CARD */}
          <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                {/* Avatar */}
                <div className="relative shrink-0">
                  {/* glow */}
                  <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-cyan-500/20 blur-2xl" />
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-[2rem] overflow-hidden ring-2 ring-white/10 bg-gradient-to-br from-white/10 to-white/5">
                    <Image
                      src="https://avatars.githubusercontent.com/u/137058543?v=4"
                      alt="Boburov Shukurullo"
                      fill
                      sizes="(max-width: 768px) 160px, 180px"
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                  {/* online dot */}
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 ring-4 ring-neutral-900" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-2xl sm:text-3xl font-bold montbold tracking-tight">
                      Boburov Shukurullo
                    </h1>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                      <VerifiedIcon className="w-4 h-4 fill-white stroke-black" strokeWidth={1} />
                      Verified
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-white/60">@boburov</p>

                  <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                    I build clean & functional web apps using <span className="text-white">NestJS</span>,{" "}
                    <span className="text-white">Next.js</span> and{" "}
                    <span className="text-white">TailwindCSS</span>.
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="./Boburov_Shukurullo_CV.pdf"
                      download
                      className="btn-primary"
                    >
                      <Download size={16} />
                      Download CV
                    </a>

                    <a
                      href="/contact"
                      className="btn-secondary"
                    >
                      Talk with Me
                    </a>

                    <a
                      href="https://github.com/boburov"
                      className="btn-secondary"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/60">Experience</p>
                  <p className="mt-1 text-xl font-bold text-indigo-400 montbold">3+ yrs</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/60">Projects</p>
                  <p className="mt-1 text-xl font-bold text-indigo-400 montbold">3+</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-2">
                  <div>
                    <p className="text-xs text-white/60 flex items-center gap-2">
                      Delivery
                    </p>
                    <p className="text-sm font-semibold text-white/80">Fast</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-2">
                  <div>
                    <p className="text-xs text-white/60 flex items-center gap-2">
                      Code
                    </p>
                    <p className="text-sm font-semibold text-white/80">Clean</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-white/60 mb-3">
                  Stack
                </p>
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-13 gap-2">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                      title={skill.name}
                    >
                      <Image
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="h-7 w-7 mx-auto"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIDE CARD */}
          <div className="lg:col-span-4 space-y-4">
            {/* Work with me */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">
              <p className="uppercase text-white/60 text-xs tracking-widest mb-3">
                Keling birga ishlaylik
              </p>
              <h2 className="text-2xl font-extrabold montbold">Work with Me</h2>
              <p className="mt-3 text-sm text-white/70">
                We bring your ideas to life with powerful technology.
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Telegram</p>
                <p className="mt-1 font-semibold text-white">@boburov_sh</p>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@boburov.uz&su=Work%20Inquiry&body=Hello%20Boburov,%0A%0AI%20would%20like%20to%20work%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  <Mail size={16} />
                  Gmail
                </a>


                <a
                  href="https://github.com/boburov"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Contact mini */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-center justify-between">
                  <span className="text-white/60">Email</span>
                  <span className="font-medium">info@boburov.uz</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-white/60">Telegram</span>
                  <span className="font-medium">@boburov_sh</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-white/60">Phone</span>
                  <span className="font-medium">+998 20 002-04-46</span>
                </li>
              </ul><button
                className="w-full mt-6 btn-primary justify-center"
              >
                Connect
              </button>

            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto py-5">
        <div className="flex gap-8 items-start">
          <div className="w-[90%] grid grid-cols-1 md:grid-cols-3 gap-6">
            {myTeam.map((guy, index) => (
              <div
                key={index}
                className="relative h-[400px] rounded-2xl overflow-hidden group shadow-xl border border-neutral-800 bg-neutral-900"
              >
                <Image
                  src={guy.img}
                  alt={guy.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />


                <div className="absolute bottom-2 left-0 right-0 h-32 z-10 pointer-events-none">
                  <div className="w-[94%] mx-auto h-full rounded-xl bg-gradient-to-t from-[#5014c81a] to-[#7832ff26] backdrop-blur-3xl border-b-2 border-x-2 border-white/10" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-20 text-white space-y-2">
                  <h2 className="text-sm font-semibold flex items-center gap-2">
                    <span className="w-40 truncate">{guy.name}</span>
                    <VerifiedIcon
                      className="w-5 h-5 fill-white stroke-black"
                      strokeWidth={1}
                    />
                  </h2>

                  <p className="text-xs text-white/80 leading-normal line-clamp-3">
                    {guy.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white/60">
                      <Rocket className="inline mr-1 text-indigo-400 w-4 h-4" />
                      {guy.projects}+ loyiha
                    </p>

                    <button className="flex items-center gap-1 px-4 py-1.5 text-sm font-semibold rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-white/20 transition">
                      Follow <Plus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[30%] hidden md:flex flex-col gap-4">
            <div className="w-full bg-gradient-to-b from-[#7832ff26] to-[#5014c81a] rounded-2xl p-5 shadow-xl border border-[#7832ff26] flex items-center gap-4">
              Languages |
              <Image
                src="https://flagcdn.com/w40/uz.png"
                alt="Oʻzbekcha"
                width={24}
                height={16}
                className="w-6 h-4 rounded-sm shadow-sm"
                unoptimized
              />
              <Image
                src="https://flagcdn.com/w40/gb.png"
                alt="English"
                width={24}
                height={16}
                className="w-6 h-4 rounded-sm shadow-sm"
                unoptimized
              />
            </div>

            <div className="w-full bg-gradient-to-b from-[#7832ff26] to-[#5014c81a] rounded-2xl p-5 shadow-xl border border-[#7832ff26] text-white">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <ul className="space-y-1 text-sm text-white/80">
                <li>Frontend Mastery – WebKing</li>
                <li>Backend (NestJS, PostgreSQL)</li>
                <li>Design & UX – Youtube</li>
              </ul>
            </div>

            <div className="w-full bg-gradient-to-b from-[#7832ff26] to-[#5014c81a] rounded-2xl p-5 shadow-xl border border-[#7832ff26] text-white">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <ul className="space-y-1 text-sm text-white/80">
                <li>Email: boburovdev@gmail.com</li>
                <li>Telegram: @boburovdev</li>
                <li>Phone: +998 20 002-04-46</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <footer className="mt-20 py-6 text-center text-sm text-gray-500 border-t border-[#2f2f33]">
        <p>
          © {new Date().getFullYear()} Boburov Shukurullo. Built with ❤️ using
          Next.js & TailwindCSS.
        </p>
        <div className="flex justify-center gap-3 mt-3">
          <a
            href="https://github.com/boburov"
            className="hover:text-indigo-400 transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/boburovdev"
            className="hover:text-indigo-400 transition"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;

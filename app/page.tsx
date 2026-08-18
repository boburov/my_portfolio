import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Expertise } from "./components/sections/Expertise";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Stats } from "./components/sections/Stats";
import { TechStack } from "./components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Expertise />
      <TechStack />
      <Services />
      <Contact />
    </>
  );
}

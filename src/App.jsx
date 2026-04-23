import React from "react";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Process } from "./components/sections/Process";
import { Personas } from "./components/sections/Personas";
import { Testimonials } from "./components/sections/Testimonials";
import { Education } from "./components/sections/Education";
import { CTA } from "./components/sections/CTA";
import { CSS } from "./design-system";

export default function App() {
  return (
    <div style={{ fontFamily: "'Satoshi',Arial,sans-serif", overflowX: "hidden", background: "#fff" }}>
      <style>{CSS}</style>
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <Experience />
      <Skills />
      <Process />
      <Personas />
      <Testimonials />
      <Education />
      <CTA />
      <Footer />
    </div>
  );
}


import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <Navbar />
      <ThemeToggle />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="interests">
        <Interests />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;

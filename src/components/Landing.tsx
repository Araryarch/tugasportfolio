import { useRef } from "react";
import About from "./ui/About";
import Hero from "./ui/Hero";
import { useScroll } from "framer-motion";
import Projects from "./ui/Projects";
import ProjectList from "./ui/ProjectList";
import Contact from "./ui/Contact";

const Landing = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={container} className="relative h-[200vh] bg-secondary/30">
      <Hero scrollYProgress={scrollYProgress} />
      <About scrollYProgress={scrollYProgress} />
      <div className="relative h-[200vh] bg-secondary/30">
        <Projects />
        <ProjectList />
        <Contact />
      </div>
    </div>
  );
};

export default Landing;

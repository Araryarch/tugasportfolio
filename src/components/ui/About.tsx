import { MotionValue, useTransform, motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

interface AboutProps {
  scrollYProgress: MotionValue<number>;
}

const About = ({ scrollYProgress }: AboutProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.55, 1], [0, -5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [0.05, 0.2, 1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.55, 1], [0.05, 0.5, 1]);

  return (
    <motion.div
      id="about"
      style={{ scale, rotate }}
      className="min-h-screen w-full bg-background z-10 relative flex items-start pt-44 justify-between px-5 gap-2 text-primary-foreground rounded"
    >
      <motion.h1
        style={{ opacity: opacity2 }}
        className="text-xl flex gap-2 items-center cursor-default font-medium"
      >
        ABOUT
      </motion.h1>
      <div>
        <motion.p style={{ opacity }} className="max-w-3xl text-xl">
          Hello, I’m Ararya Arka Anugraha, a passionate Full Stack Web Developer
          and UI/UX Designer with a deep commitment to crafting exceptional
          digital experiences. With expertise in Next.js, React.js, and Framer
          Motion, I specialize in building scalable and user-centric web
          applications. Currently, I’m contributing my skills as a Frontend Web
          Developer for the Petrolida ITS 2025 event. I am eager to connect,
          collaborate, and make a lasting impact in the world of web
          development.
        </motion.p>
        <motion.a
          style={{ opacity }}
          href="https://www.linkedin.com/in/ararya-arka-anugraha-profile/"
          target="_blank"
          className="flex cursor-pointer gap-2 py-5 uppercase group"
        >
          <ArrowDownRight className="group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
          Connect Now
        </motion.a>
      </div>
      <div className="absolute bottom-0 right-10">
        <h1></h1>
      </div>
    </motion.div>
  );
};

export default About;

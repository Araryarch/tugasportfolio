import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed z-50 backdrop-blur-md w-full flex items-center justify-between text-primary-foreground py-4 px-5">
      <motion.div
        className="font-medium text-sm uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Surabaya, Indonesia <br /> — {currentTime}
      </motion.div>
      <div className="flex items-start flex-col">
        <motion.div
          className="flex items-center gap-1 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ArrowDownRight className="group-hover:-rotate-45 transition-all ease-in-out duration-300" />
          <a href="#about">ABOUT</a>
        </motion.div>
        <motion.div
          className="flex items-center gap-1 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ArrowDownRight className="group-hover:-rotate-45 transition-all ease-in-out duration-300" />
          <a href="#projects">PROJECTS</a>
        </motion.div>
        <motion.div
          className="flex items-center gap-1 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <ArrowDownRight className="group-hover:-rotate-45 transition-all ease-in-out duration-300" />
          <a href="#contact">CONTACT</a>
        </motion.div>
      </div>
      <motion.h1
        className="uppercase text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Students of <br /> Institut Teknologi Sepuluh Nopember
      </motion.h1>
    </nav>
  );
};

export default Navbar;

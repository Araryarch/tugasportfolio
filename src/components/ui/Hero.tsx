import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroProps {
  scrollYProgress: MotionValue<number>;
}

const Hero = ({ scrollYProgress }: HeroProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="min-h-screen w-full sticky top-0 flex justify-center items-center text-primary-foreground bg-background rounded"
    >
      <motion.h1
        className="text-[11rem] font-semibold cursor-default"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {["A", "R", "A", "R", "Y", "A", " ", "—", " ", "A", "R", "K", "A"].map(
          (letter, index) => (
            <motion.span
              key={index}
              className="hover:text-accent transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
            >
              {letter}
            </motion.span>
          )
        )}
      </motion.h1>
      <div className="absolute bottom-0 w-full p-2 flex justify-around items-center gap-2">
        <motion.h1
          className="text-xs uppercase font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Full Stack Web Developer
        </motion.h1>
        <motion.h1
          className="text-base uppercase animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          [ SCROLL ]
        </motion.h1>
        <motion.h1
          className="text-xs font-medium uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          UI/UX Designer
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Hero;

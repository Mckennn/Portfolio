import { motion } from "framer-motion";

const textAnimation = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * (Math.random() * 0.2 + 0.05),
    },
  }),
};

const AnimatedTitle = ({ title, className }) => {
  return (
    <motion.div className={`h1 flex justify-center lg:block ${className}`}>
      {title.map((word, index) => (
        <span key={index} className="block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              custom={charIndex}
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              className="inline-block transition-transform duration-100 ease-in-out hover:italic hover:skew-x-6 hover:text-[#FF8811]"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default AnimatedTitle;

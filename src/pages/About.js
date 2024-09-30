import React, { useEffect, useRef, useState } from "react";
import LucasImg from "../img/about/Lucas Jules I Photo et fond 01 B.jpg";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { transition1 } from "../transitions";
import {
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaPhp,
  FaReact,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import resume from "../img/cv/LUCAS-JULES.pdf";
import AnimatedTitle from "../components/AnimatedTitle";

const techs = [
  {
    icon: <FaReact className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <RiNextjsFill className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <RiTailwindCssFill className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <FaNode className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <SiJavascript className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <BiLogoTypescript className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <FaHtml5 className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <FaCss3Alt className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <FaWordpress className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <FaSass className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <DiMysql className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
  {
    icon: <FaPhp className="h-[32px] w-[32px] mb-2" />,
    name: "React",
  },
];

const About = () => {
  const controls = useAnimation();
  const techRef = useRef(null);
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Vérifie si l'élément est visible
        if (entries[0].isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          // Réinitialise éventuellement l'animation si tu veux que l'effet se répète
          controls.start({ opacity: 0, y: "20%" });
        }
      },
      {
        root: null, // Par défaut, c'est la fenêtre
        threshold: 0.3, // Quand 30% de la section est visible
      }
    );

    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => {
      if (techRef.current) {
        observer.unobserve(techRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    const handleResize = () => {
      setShowScrollArrow(window.innerHeight >= 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#e1e1e1] relative flex flex-col min-h-screen items-center justify-center"
    >
      <section className="lg:min-h-screen container mx-auto lg:flex lg:flex-col lg:items-center lg:justify-center pt-[100px] lg:pt-[140px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left lg:w-full">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="flex lg:flex-1 justify-center lg:justify-end max-h-[576px] lg:max-h-max order-2 lg:order-none"
          >
            <img
              src={LucasImg}
              alt="Profil picture"
              className="w-full max-w-[580px] object-cover border-2 border-black hover:scale-110 duration-500 ease-in-out"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 lg:pt-0 pb-8 lg:pb-14 z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <div className="flex lg:block">
              <AnimatedTitle
                title={["ABOUT "]}
                className="lg:tracking-wide lg:text-left lg:text-[6.5vw] "
              />
              <AnimatedTitle
                title={["ME."]}
                className="lg:tracking-wide lg:text-left lg:text-[6.5vw] text-[#FF8811]"
              />
            </div>

            <p className="text-[1rem] px-[20px] lg:px-0 lg:text-[1.2rem] mb-12 max-w-sm xxl:max-w-xl">
              Dans mon parcours professionnel, je m'épanouis en tant que
              développeur web et la création de sites web. Mon expertise dans le
              design responsive, les systèmes de gestion de contenu et
              l'optimisation des performances font de moi un atout précieux pour
              tout projet numérique.
              <br />
              <br />
              Au-delà du code, je suis tout aussi passionné par le dessin et la
              musculation. Le rythme tranquille du dessin et l'effort physique
              de la musculation équilibrent ma vie numérique, me fournissant des
              perspectives uniques qui enrichissent mon travail et mon âme. Ces
              deux activités me permettent de me ressourcer et de me recentrer
              sur l'essentiel, ce qui se reflète dans la qualité de mon travail
              et dans mon approche globale de la vie.
            </p>
            <div className="flex gap-1 mx-1 lg:mx-0">
              <a href={resume} download="CV-LucasJules" className="btn">
                <span>download C.V</span>
              </a>
              <Link to={"/portfolio"} className="btn">
                <span>View my work</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {showScrollArrow && (
          <div className="hidden lg:flex justify-center ">
            <a href="#tech" className="pt-[60px]">
              <span id="scrollDownArrow"></span>
            </a>
          </div>
        )}
      </section>

      <section
        id="tech"
        ref={techRef}
        className="lg:h-screen container mx-auto lg:flex lg:flex-col lg:items-center lg:justify-center"
      >
        <div className="flex flex-col justify-center items-center pt-16 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            animate={controls}
            transition={transition1}
            className="pb-14 lg:pt-0 lg:w-[90%] z-10 flex flex-col items-center lg:items-start"
          >
            <div className="flex">
              <AnimatedTitle
                title={["MY "]}
                className="lg:tracking-wide lg:text-left lg:text-[8vw]"
              />
              <AnimatedTitle
                title={["TECH."]}
                className="lg:tracking-wide lg:text-left lg:text-[8vw] text-[#FF8811]"
              />
            </div>
            <p className="text-[16px] lg:text-[20px] text-center lg:text-start max-w-sm lg:max-w-max xxl:text-xl">
              Aimant créer des choses soit avec un crayon, soit avec un clavier,
              j'adore voir mon imagination s'animer sous les clics, autant que
              résoudre des casses-têtes exigeants. Voici les technologies avec
              lesquelles j'aime particulièrement travailler en ce moment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "60%" }}
            animate={controls}
            transition={transition1}
            className="grid grid-cols-3 gap-0.5 w-[90%] justify-center items-center text-white pb-[20px]"
          >
            {techs.map((tech, index) => {
              return (
                <div
                  key={index}
                  className="bg-primary rounded-lg p-6 shadow-lg flex flex-col justify-center items-center gap-1.5 cursor-pointer border border-transparent hover:border-white hover:bg-[#FF8811] hover:scale-110 transition-all duration-300 box-border"
                >
                  <div className="transition-transform duration-300 hover:scale-110">
                    {tech.icon}
                  </div>
                  <p className="text-xs">{tech.name}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </motion.section>
  );
};

export default About;

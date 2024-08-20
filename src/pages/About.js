import React from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="lg:sections"
    >
      <div className="container mx-auto lg:min-h-[50%] lg:flex lg:flex-col lg:items-center lg:justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left lg:pt-[140px] lg:px-[50px]">
          <div className="flex lg:flex-1 justify-center xxl:flex xxl:justify-center max-h-[576px] lg:max-h-max order-2 lg:order-none">
            <img
              src={WomanImg}
              alt=""
              className="max-h-[450px] md:max-h-[576px] lg:max-h-max"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-[100px] lg:pt-0 pb-8 lg:pb-14 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              About <span className="text-[#339989]">me</span>
            </h1>

            <p className="text-[16px] lg:text-[16px] mb-12 max-w-sm xxl:text-xl xxl:max-w-xl">
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
            <div className="flex gap-1 mx-1">
              <a href={resume} download="CV-LucasJules" className="btn">
                <span>download C.V</span>
              </a>
              <Link to={"/portfolio"} className="btn">
                <span>View my work</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex justify-center ">
          <a href="#tech" className="pt-[60px]">
            <span id="scrollDownArrow"></span>
            {/* <p id="scrollText" className="">
              Scroll
            </p> */}
          </a>
        </div>
      </div>

      <div
        id="tech"
        className="container mx-auto lg:min-h-[50%] lg:flex lg:flex-col lg:items-center lg:justify-center"
      >
        <div className="flex flex-col justify-center items-center pt-16 lg:pt-[140px]">
          <div className="pb-14 lg:pt-0 lg:w-[90%] z-10 flex flex-col items-center lg:items-start">
            <h1 className="h1 lg:pb-10">
              <span className="text-[#339989]">My</span> Tech
            </h1>
            <p className="text-[16px] lg:text-[20px] text-center lg:text-start max-w-sm lg:max-w-max xxl:text-xl">
              Aimant créer des choses soit avec un crayon, soit avec un clavier,
              j'adore voir mon imagination s'animer sous les clics, autant que
              résoudre des casses-têtes exigeants. Voici les technologies avec
              lesquelles j'aime particulièrement travailler en ce moment.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="grid grid-cols-3 gap-0.5 w-[90%] justify-center items-center text-white pb-[20px]"
          >
            {techs.map((tech, index) => {
              return (
                <div className="bg-primary rounded-lg p-6 shadow-lg flex flex-col justify-center items-center gap-1.5 cursor-pointer">
                  {tech.icon}
                  <p className="text-xs">{tech.name}</p>
                </div>
              );
            })}
            ;
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

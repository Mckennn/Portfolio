// import { motion } from "framer-motion";
// import React, { useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Link } from "react-router-dom";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@radix-ui/react-tooltip";
// import Image1 from "../img/portfolio/arkam-img.png";
// import Image2 from "../img/portfolio/flight.png";
// import Image3 from "../img/portfolio/Vignette web I Hoobank.jpg";
// import { transition1 } from "transitions";
// import WorkSliderBtns from "components/WorkSliderBtns";

// const projects = [
//   {
//     num: "01",
//     category: "frontend",
//     title: "project 1",
//     description:
//       "Arkam est une association musicale qui organise des évènements sur la métropole Lilloise.",
//     stack: [
//       { name: "Html 5" },
//       { name: "Css 3" },
//       { name: "Javascript" },
//       { name: "React.JS" },
//     ],
//     image: Image1,
//     live: "https://arkam-experience.fr/",
//     github: "",
//   },
//   {
//     num: "02",
//     category: "frontend",
//     title: "project 2",
//     description:
//       "Flight propose la partie vitrine d'un site de réservation de vol.",
//     stack: [
//       { name: "Html 5" },
//       { name: "Css 3" },
//       { name: "Javascript" },
//       { name: "React.JS" },
//     ],
//     image: Image2,
//     live: "https://flight-lucasjules.fr/",
//     github: "",
//   },
//   {
//     num: "03",
//     category: "frontend",
//     title: "project 3",
//     description:
//       "Voici la partie vitrine d'un site de banque nouvelle génération.",
//     stack: [
//       { name: "Html 5" },
//       { name: "Css 3" },
//       { name: "Javascript" },
//       { name: "React.JS" },
//       { name: "Tailwind" },
//     ],
//     image: Image3,
//     live: "https://hoobank-lucasjules.fr/",
//     github: "",
//   },
// ];

// const Portfolio = () => {
//   const [project, setProject] = useState(projects[0]);
//   // bg-[#E8F1F6]
//   const handleSlideChange = (swiper) => {
//     const currentIndex = swiper.activeIndex;
//     setProject(projects[currentIndex]);
//   };
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: "100%" }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: "100%" }}
//       transition={transition1}
//       className="min-h-[80vh] flex flex-col justify-center pt-[100px] lg:pt-[140px] xl:px-0 items-center lg:items-start"
//     >
//       {/* <h1 className="container h1 w-full mx-auto xl:py-[50px]">Portfolio</h1> */}
//       <div className="bg-[#E8F1F6] w-full">
//         <div className="container mx-auto font-secondary xl:p-[50px]">
//           <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//             <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
//               <div className="flex flex-col gap-[30px]">
//                 <div className="h1 font-primary text-8xl leading-none font-extrabold text-outline">
//                   {/* {project.num} */}<span className="text-[#339989]">My</span> Project :
//                 </div>
//                 <h2 className="text-[60px] font-bold leading-none font-primary text-primary group-hover:text-accent transition-all duration-500 capitalize">
//                   {project.category}
//                 </h2>
//                 <p className="text-black/60">{project.description}</p>
//                 <ul className="flex gap-4">
//                   {project.stack.map((item, index) => {
//                     return (
//                       <li key={index} className="text-xl">
//                         {item.name}
//                         {index !== project.stack.length - 1 && ","}
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 <div className="border border-black/20"></div>
//                 <div className="flex items-center gap-4 pb-[20px] pl-[10px] lg:">
//                   <Link to={project.live} target="_blank">
//                     <TooltipProvider delayDuration={100}>
//                       <Tooltip>
//                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 flex justify-center items-center hover:bg-black group transition duration-300">
//                           <BsArrowUpRight className=" text-black text-3xl group-hover:text-white" />
//                         </TooltipTrigger>
//                         <TooltipContent className="">
//                           <p className="bg-[#E8F1F6]">Live project</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </Link>
//                   <Link to={project.github} target="_blank">
//                     <TooltipProvider delayDuration={100}>
//                       <Tooltip>
//                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 flex justify-center items-center hover:bg-black group transition duration-300">
//                           <BsGithub className=" text-black text-3xl group-hover:text-white" />
//                         </TooltipTrigger>
//                         <TooltipContent className="">
//                           <p className="bg-[#E8F1F6]">Github repository</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <motion.div
//               initial={{ opacity: 0, y: "-80%" }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: "-80%" }}
//               transition={transition1}
//               className="w-full xl:w-[50%]"
//             >
//               <Swiper
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 className="xl:h-[520px] mb-12 xl:mb-0"
//                 onSlideChange={handleSlideChange}
//               >
//                 {projects.map((project, index) => {
//                   return (
//                     <SwiperSlide key={index} className="w-full">
//                       <div className="h-[460px] relative group flex justify-center items-center bg-black">
//                         <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
//                         <div className="relative w-full h-full overflow-hidden">
//                           <img
//                             src={project.image}
//                             className="object-cover w-full h-full"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   );
//                 })}
//                 <WorkSliderBtns
//                   containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
//                   btnStyles="bg-black/80 hover:bg-black text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all text-white"
//                 />
//               </Swiper>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Portfolio;

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Image1 from "../img/portfolio/arkam-img.png";
import Image2 from "../img/portfolio/flight.png";
import Image3 from "../img/portfolio/Vignette web I Hoobank.jpg";
import { transition1 } from "transitions";
import WorkSliderBtns from "components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Arkam est une association musicale qui organise des évènements sur la métropole Lilloise.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React.JS" },
    ],
    image: Image1,
    live: "https://arkam-experience.fr/",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "Flight propose la partie vitrine d'un site de réservation de vol.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React.JS" },
    ],
    image: Image2,
    live: "https://flight-lucasjules.fr/",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Voici la partie vitrine d'un site de banque nouvelle génération.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React.JS" },
      { name: "Tailwind" },
    ],
    image: Image3,
    live: "https://hoobank-lucasjules.fr/",
    github: "",
  },
];

const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);
  // bg-[#E8F1F6]
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="min-h-[80vh] flex flex-col justify-center pt-[100px] lg:pt-[140px]  items-center lg:items-start"
    >
      {/* <h1 className="container h1 w-full mx-auto xl:py-[50px]">Portfolio</h1> */}
      <div className="w-full">
        <div className="container mx-auto font-secondary bg-[#E8F1F6] xl:p-[50px] xl:shadow-lg">
          <div className="flex flex-col ">
            <div className="w-[full] flex flex-col order-2">
              <div className="flex flex-col gap-[30px]">
                <div className="h1 font-primary text-8xl leading-none font-extrabold text-outline">
                  {/* {project.num} */}
                  <span className="text-[#339989]">My</span> Project :
                </div>
                <h2 className="text-[60px] font-bold leading-none font-primary text-primary group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category}
                </h2>
                <p className="text-black/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-black/20"></div>
                <div className="flex items-center gap-4 pb-[20px] pl-[10px] lg:">
                  <Link to={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 flex justify-center items-center hover:bg-black group transition duration-300">
                          <BsArrowUpRight className=" text-black text-3xl group-hover:text-white" />
                        </TooltipTrigger>
                        <TooltipContent className="">
                          <p className="bg-[#E8F1F6]">Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link to={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 flex justify-center items-center hover:bg-black group transition duration-300">
                          <BsGithub className=" text-black text-3xl group-hover:text-white" />
                        </TooltipTrigger>
                        <TooltipContent className="">
                          <p className="bg-[#E8F1F6]">Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transition1}
              className="w-full xl:pt-[75px]"
            >
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[700px] mb-12 xl:mb-0"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-black xl:min-h-[650px] xl:shadow-lg">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full overflow-hidden">
                          <img
                            src={project.image}
                            className="object-cover w-full h-full"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-black/80 hover:bg-black text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all text-white"
                />
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

import { motion } from "framer-motion";
import BgImg from "../img/home/grille-b.jpg";
import Image1 from "../img/portfolio/arkam-img.png";
import Image2 from "../img/portfolio/flight.png";
import Image3 from "../img/portfolio/Insta-clone.png";
// import Image4 from "../img/portfolio/Vignette web I Hoobank.jpg";
import { transition1 } from "transitions";
import { Link } from "react-router-dom";
import AnimatedTitle from "components/AnimatedTitle";

const projects = [
  {
    id: 1,
    title: "Arkam",
    img: Image1,
    description:
      "Arkam est une association musicale qui organise des évènements sur la métropole Lilloise.",
    url: "https://arkam-experience.fr/",
  },
  {
    id: 2,
    title: "Flight",
    img: Image2,
    description:
      "Flight propose la partie vitrine d'un site de réservation de vol.",
    url: "https://flight-lucasjules.fr/",
  },
  {
    id: 3,
    title: "Instagram Clone",
    img: Image3,
    description:
      "Ceci un clone du reseau social Instagram, j'ai essayé d'être le plus fidèle possible à ce dernier.",
    url: "https://instagram-clone-black-mu.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Hoobank",
  //   img: Image4,
  //   description:
  //     "Voici la partie vitrine d'un site de banque nouvelle génération.",
  // },
];

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-[#e1e1e1] flex min-h-screen items-center justify-center pt-[100px] lg:pt-[140px]"
      id="work"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:gap-x-10">
          <motion.div
            initial={{ opacity: 0, y: "-200%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-200%" }}
            transition={transition1}
            className="flex-1 flex flex-col gap-y-6 lg:gap-y-12 mb-[24px] lg:mb-0"
          >
            <div className="pl-[10px] min-h-[300px] lg:h-[450px] flex flex-col justify-between">
              {/* <h1 className="h1 leading-tight text-primary">
                My Latest <br />
                <span className="text-[#339989]">Work.</span>
              </h1> */}

              <div className="flex justify-center lg:block">
                <AnimatedTitle
                  title={["MY LATEST "]}
                  className="lg:tracking-wide lg:text-left text-[2rem] lg:text-[3vw]"
                />

                <AnimatedTitle
                  title={["WORK."]}
                  className="lg:tracking-wide lg:text-left text-[2rem] lg:text-[3vw] text-[#FF8811]"
                />
              </div>

              <p className="max-w-xs sm:max-w-max mb-8 ">
                <span className="font-bold">
                  Bienvenue dans mon univers créatif !
                </span>
                <br />
                Chaque projet ici reflète ma passion pour le design et
                l'innovation. Découvrez des interfaces intuitives, des designs
                modernes, et des solutions créatives, conçus sur mesure pour
                répondre aux besoins variés de mes clients. Explorez mon travail
                et laissez-vous inspirer !
              </p>

              <Link
                to={"https://github.com/Mckennn"}
                target="_blank"
                className="btn w-[180px] lg:w-[262px]"
              >
                <span>View all projects</span>
              </Link>
            </div>

            <a href={projects[0].url} target="_blank">
              <div
                key={projects[0].id}
                className="group relative overflow-hidden border-2 border-black/20 rounded-xl"
              >
                <div className="group-hover:bg-[black]/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                <img
                  src={projects[0].img}
                  alt={projects[0].title}
                  className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover group-hover:scale-125 transition-all duration-500"
                />

                <div className="absolute -bottom-full left-8 sm:left-12 group-hover:bottom-20 sm:group-hover:bottom-24 transition-all duration-500 z-50 text-white">
                  <span className="text-gradient">
                    {projects[0].description}
                  </span>
                </div>

                <div className="absolute -bottom-full left-8 sm:left-12 group-hover:bottom-12 sm:group-hover:bottom-14 transition-all duration-700 z-50 text-white">
                  <span className="text-2xl sm:text-3xl text-white">
                    {projects[0].title}
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Deuxième colonne - Les trois autres projets */}

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="flex-1 flex flex-col gap-y-6 mb-[24px] lg:mb-0 lg:gap-y-10"
          >
            {projects.slice(1).map((project) => (
              <a href={project.url} target="_blank">
                <div
                  key={project.id}
                  className="group relative overflow-hidden border-2 border-black/20 rounded-xl"
                >
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover group-hover:scale-125 transition-all duration-500"
                  />

                  <div className="absolute -bottom-full left-8 sm:left-12 group-hover:bottom-20 sm:group-hover:bottom-24 transition-all duration-500 z-50 text-white">
                    <span className="text-gradient">{project.description}</span>
                  </div>

                  <div className="absolute -bottom-full left-8 sm:left-12 group-hover:bottom-12 sm:group-hover:bottom-14 transition-all duration-700 z-50 text-white">
                    <span className="text-2xl sm:text-3xl text-white">
                      {project.title}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

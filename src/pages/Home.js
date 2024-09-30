// import React from "react";
// import WomanImg from "../img/home/bird-feather-keyboard-mouse-earphones.jpg";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { transition1 } from "../transitions";

// const Home = () => {
//   return (
//     <div className="lg:overflow-hidden">
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={transition1}
//         className="lg:h-screen"
//       >
//         <div className="relative">
//           <div className="flex flex-col justify-center w-full lg:h-screen">
//             <motion.div
//               initial={{ opacity: 0, y: "-50%" }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: "-50%" }}
//               transition={transition1}
//               className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center text-center lg:items-start lg:ml-[15%]"
//             >
//               <motion.h1
//                 initial={{ x: "-100vw" }}
//                 animate={{ x: 0 }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//                 className="h1 lg:text-[5vw]"
//               >
//                 Design. Build. <span className="text-[#339989]">Improve.</span>
//               </motion.h1>

//               <motion.h2
//                 initial={{ x: "100vw" }}
//                 animate={{ x: 0 }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//                 className="h2 lg:text-[4vw]"
//               >
//                 I build things for the web.
//               </motion.h2>

//               <p className="text-[1.625rem] lg:text-[2.25rem] font-primary mb-4 lg:mb-12">
//                 Lille, France
//               </p>

//               <div className="flex mx-[5%] lg:mx-0">
//                 <Link
//                   to={"/contact"}
//                   className="btn mb-[30px] w-[50%] px-[20px] lg:px-[50px] lg:w-full"
//                 >
//                   <span>hire me</span>{" "}
//                 </Link>
//                 <Link
//                   to={"/portfolio"}
//                   className="btn2 mb-[30px] ml-[20px] w-[50%] px-[20px] lg:px-[50px] lg:w-full"
//                 >
//                   <span>See my work</span>
//                 </Link>
//               </div>
//             </motion.div>

//             <div className="flex justify-center lg:max-h-max lg:pr-[10%]">
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0 }}
//                 transition={transition1}
//                 className="overflow-hidden lg:w-[100%] flex justify-end"
//               >
//                 <motion.img
//                   whileHover={{ scale: 1.1 }}
//                   transition={transition1}
//                   src={WomanImg}
//                   alt="picture"
//                   className="lg:h-screen max-w-[100%] object-cover w-[50%]"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import BgImg from "../img/home/grille-b.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedTitle from "../components/AnimatedTitle";
import ReactCurvedText from "react-curved-text";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
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
      className="bg-[#e1e1e1] min-h-screen h-auto"
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col justify-between lg:mx-[3%] h-auto"
      >
        <div className="pt-[140px] min-h-[60vh] lg:min-h-[80vh] flex">
          <div className="flex flex-col justify-center w-full">
            <AnimatedTitle
              title={["CREATIVE"]}
              className="lg:tracking-wide lg:text-left lg:text-[8vw]"
            />
            <AnimatedTitle
              title={["DESIGNER."]}
              className="lg:tracking-wide lg:pl-[30%] lg:text-left lg:text-[8vw]"
            />
            <AnimatedTitle
              title={["WEBFLOW"]}
              className="lg:tracking-wide lg:pl-[20%] lg:text-left lg:text-[8vw]"
            />
            <AnimatedTitle
              title={["DEVELOPER."]}
              className="lg:tracking-wide lg:pl-0 lg:text-right lg:text-[8vw] text-[#FF8811]"
            />
          </div>
        </div>

        <div className="hidden lg:flex absolute left-[30%] bottom-[25%] justify-center items-center mt-8">
          <div className="w-[1.5vw] h-[1.5vw] bg-[#FF8811] rounded-full"></div>
          <div className="absolute rotating-text">
            <ReactCurvedText
              width={(10 * screenWidth) / 100}
              height={(10 * screenWidth) / 100}
              cx={(5 * screenWidth) / 100}
              cy={(5 * screenWidth) / 100}
              rx={(3 * screenWidth) / 100}
              ry={(3 * screenWidth) / 100}
              startOffset={50}
              reversed={false}
              text="Hover over the letter -"
              textProps={{
                style: {
                  fontSize: `0.8vw`,
                  letterSpacing: `0.3vw`,
                  fontWeight: "bold",
                },
              }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: "80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "80%" }}
          transition={{ duration: 0.8 }}
          className="lg:flex lg:w-full lg:justify-between lg:items-end mt-auto"
        >
          <div className="text-center lg:text-start mb-4 lg:mb-0">
            <h2 className="h2 lg:pt-0 tracking-wide">
              I build things for the web.
            </h2>
            <p className="text-[1.625rem] lg:text-[2.25rem] font-primary">
              Lille, France
            </p>
          </div>

          <div className="flex mx-[5%] mb-[30px] lg:mx-0 lg:items-end">
            <Link
              to={"/contact"}
              className="btn w-[50%] px-[20px] lg:px-[50px] lg:w-full"
            >
              <span>hire me</span>
            </Link>
            <Link
              to={"/portfolio"}
              className="btn2 ml-[20px] w-[50%] px-[20px] lg:px-[50px] lg:w-full"
            >
              <span>See my work</span>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Home;

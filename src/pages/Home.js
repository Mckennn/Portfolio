import React from "react";
import WomanImg from "../img/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Home = () => {
  return (
    <div className="lg:overflow-hidden">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="section"
      >
        <div className="lg:container h-full relative lg:ml-[15%]">
          <div className="flex flex-col justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
              className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center text-center lg:items-start"
            >
              <h1 className="h1">
                Design. Build. <span className="text-[#339989]">Improve.</span>
                {/* <br />I build things for the web. */}
              </h1>
              <h2 className="h2">I build things for the web.</h2>
              <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
                Lille, France
              </p>
              <Link to={"/contact"} className="btn mb-[30px]">
                <span>hire me</span>
              </Link>
            </motion.div>
            
            <div className="flex justify-center max-h-96 lg:max-h-max w-[100%] lg:ml-[20%] xl:ml-[25%] xxl:ml-[30%]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                className="overflow-hidden lg:h-screen"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={transition1}
                  src={WomanImg}
                  alt="me"
                  className="lg:h-screen max-w-[100%]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;

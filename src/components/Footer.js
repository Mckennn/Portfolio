import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "transitions";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="w-full h-auto px-4 bg-[#e1e1e1] flex flex-col justify-center font-primary"
    >
      <div className="flex justify-between text-[3vw]">
        <NavLink to={"/"} className={"hover:text-[#FF8811]"}>01 Back to Home</NavLink>
        <NavLink to={"/about"} className={"hidden lg:block hover:text-[#FF8811]"}>
          02 About
        </NavLink>
        <NavLink to={"/portfolio"} className={"hidden lg:block hover:text-[#FF8811]"}>
          03 Portfolio
        </NavLink>
        <p>©2024</p>
      </div>
    </motion.footer>
  );
};

export default Footer;

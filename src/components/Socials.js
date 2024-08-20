import React from "react";
import { FaLinkedin, FaGithub  } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.linkedin.com/in/lucas-jules-5873a5177/" target="_blank" className="">
          <FaLinkedin className="w-[30px] h-[30px] transform hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Mckennn" target="_blank">
          <FaGithub className="w-[30px] h-[30px] transform hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

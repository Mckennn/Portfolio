import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = ({ isMobile }) => {
  return (
    <div className={`${isMobile ? "flex justify-center mt-8" : "hidden xl:flex ml-24"}`}>
      <ul className="flex gap-x-4">
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-jules-5873a5177/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-[30px] h-[30px] transform hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Mckennn" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-[30px] h-[30px] transform hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import Logo from "../img/header/lucasJules-Logo2.png";
import MobileNav from "./MobileNav";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center transition-colors transition-shadow duration-300 ${isScrolled ? 'bg-[#e1e1e1] shadow-2xl' : 'bg-transparent'} ${isLoaded ? 'header-slide' : ''}`}>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="max-w-[200px]">
          <img src={Logo} alt="" className="w-[450px]" />
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-[#6d6969] hover:text-primary link-underline active"
                : "text-[#6d6969] hover:text-primary link-underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "text-[#6d6969] hover:text-primary link-underline active"
                : "text-[#6d6969] hover:text-primary link-underline"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) =>
              isActive
                ? "text-[#6d6969] hover:text-primary link-underline active"
                : "text-[#6d6969] hover:text-primary link-underline"
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "text-[#6d6969] hover:text-primary link-underline active"
                : "text-[#6d6969] hover:text-primary link-underline"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <Socials isMobile={false} />
      <MobileNav />
    </header>
  );
};

export default Header;

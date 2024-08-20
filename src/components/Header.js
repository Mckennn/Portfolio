import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import Logo2 from "../img/header/logo-portfolio.png";
import MobileNav from "./MobileNav";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY);  // Ajouté pour débogage
      if (window.scrollY > 0) {
        setIsScrolled(true);
        console.log("Scrolled: true");  // Ajouté pour débogage
      } else {
        setIsScrolled(false);
        console.log("Scrolled: false");  // Ajouté pour débogage
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Forcer une vérification initiale
    handleScroll();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center transition-colors transition-shadow duration-300 ${isScrolled ? 'bg-white shadow-2xl' : 'bg-transparent'}`}>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="max-w-[200px]">
          <img src={Logo} alt="" />
          {/* <img src={Logo2} alt="" className="w-[300px]" /> */}
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
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;

import React from "react";
import "./nav.css";
import { GiHumanTarget } from "react-icons/gi";
import { BiHomeAlt } from "react-icons/bi";
import { RiContactsBookLine } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { VscVmRunning } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <nav>
        <a href="#" className={activeNav === "#" ? "active" : ""}>
          <BiHomeAlt />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <GiHumanTarget />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <VscVmRunning />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <MdMiscellaneousServices />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <RiContactsBookLine />
        </a>
        </nav>
    </IconContext.Provider>
  );
}

export default Nav;

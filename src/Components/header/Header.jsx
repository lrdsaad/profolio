import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Headersocials from "./Headersocials";

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Badr Saad</h1>
        <h5 className="text-light">Fullstack Dev</h5>
        <CTA />   
        <Headersocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="%contact" className="scroll__down"> Scroll down
        </a>
      </div>
    </header>
  );
}

export default header;

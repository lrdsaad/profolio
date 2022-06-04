import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaRunning } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function About() {
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
        <div className="about__cards">
        <article className="about__card">
          <FaRunning className="about__icon" />
          <h5>Experience</h5>
          <small>3+ Years Working</small>
        </article>
        
        <article className="about__card">
          <BsPeopleFill className="about__icon" />
          <h5>Clients</h5>
          <small>300+ World wide clients</small>
        </article>

        <article className="about__card">
          <AiOutlineFundProjectionScreen className="about__icon" />
          <h5>Projects</h5>
          <small>3+ Completed</small>
        </article>

        </div>
        
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          officia vel libero minus, itaque culpa? Rerum, iste. Numquam facilis
          sed deserunt adipisci, voluptatem enim pariatur dolore reiciendis
          commodi nihil sunt!
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import "./experience.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have </h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <h4>Html</h4>
              <small className="text-light">intermidiate</small>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <h4>css</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <h4>javaScript</h4>
              <small className="text-light">intermidiate</small>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <h4>React</h4>
              <small className="text-light">experienced</small>
            </article>
          </div>
        {/* End of Frontend */}
        </div>
        <div className="experince__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <h4>Node</h4>
              <small className="text-light">experiences</small>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <h4>postman</h4>
              <small className="text-light">beginner</small>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <h4>MongoDB</h4>
              <small className="text-light">beginner</small>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <h4>PHP</h4>
              <small className="text-light">beginner</small>
            </article>
        </div>
        {/* End of Backend */}

      </div>
      </div>

    </section>
  );
}

export default experience;

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
             <div> <h4>Html</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>Css</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
            <div>  <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        {/* End of Frontend */}
        </div>
        <div className="experince__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>Node</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>postman</h4>
              <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>PHP</h4>
              <small className="text-light">Basics</small>
              </div>
            </article>
        </div>
        {/* End of Backend */}

      </div>
      <div className="experience__mobile">
          <h3>Mobile Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
             <div>
                <h4>Flutter</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>Css</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
            <div> 
               <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        {/* End of Mobile developement */}
        </div>
        <div className="experience__AI">
          <h3>Artificial Inteligence</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
             <div>
                <h4>JavaScript</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>Julia</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
              <div>
              <h4>Lisp</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdCheckmarkCircleOutline />
            <div> 
               <h4>Python</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        {/* End of automating systems and scraping */}
        </div>
      </div>

    </section>
  );
}

export default experience;

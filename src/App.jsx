import React from "react";
import Header from "./Components/header/Header.jsx"
import Nav from "./Components/navbar/Nav.jsx"
import About from "./Components/about/About.jsx"
import Experience from "./Components/experience/Experience.jsx"
import Testimonials from "./Components/test/Testimonials.jsx"
import Contact from "./Components/contact/Contact.jsx"
import Services from "./Components/services/Services.jsx"
import Footer from "./Components/footer/Footer.jsx"

const app=()=> {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  );
};

export default app;

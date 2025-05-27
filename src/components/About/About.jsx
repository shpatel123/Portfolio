import React, { useEffect, useRef } from "react";
import aboutCSS from "./About.module.css";
import aimg from "./../../assets/img.png";
import { animateAbout } from "./../../animations";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    animateAbout(aboutRef);
  }, []);

  return (
    <div className={`${aboutCSS.about_wrapper} section`} id="about" ref={aboutRef}>
      <div className={aboutCSS.main}>
        <div className={aboutCSS.aboutImg}>
          <div className={aboutCSS.aboutItem}>
            <img src={aimg} alt="about image" />
          </div>
        </div>
        <div className={aboutCSS.aboutText}>
          <h2>
            About <span>Me</span>
          </h2>
          <h5>Web Developer</h5>
          <p>
            Hello! I am a passionate and dedicated Full Stack Web Developer
            currently in my 3rd year of pursuing a B.Tech in Information
            Technology Engineering at Marwadi University. With a strong
            foundation in Programming and Object-Oriented Programming, I bring a
            problem-solving mindset to every project I work on. <br />I have
            hands-on experience building dynamic and user-friendly web
            applications using technologies like HTML, CSS, JavaScript, React.Js and
            backend frameworks. My academic and internship experiences have
            equipped me with the skills to design, develop, and deploy
            functional websites and systems, including: A portfolio website,
            Weather App, E-commerce Website.
          </p>
          <button type="button">Let's Talk</button>
        </div>
      </div>
    </div>
  );
}

export default About;
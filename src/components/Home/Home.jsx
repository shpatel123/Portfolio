import React, { useEffect, useRef } from "react";
import homeCSS from "./Home.module.css";
import himg from "./../../assets/img.png";
import { animateHome } from "./../../animations"; // Adjust path as needed
import resume from "./../../assets/Resume.pdf"; 

function Home() {
  const homeRef = useRef(null);
  const homeImageRef = useRef(null); // Ref for the image

  useEffect(() => {
    animateHome(homeRef, homeImageRef); // Pass both refs
  }, []);

  return (
    <div className={`${homeCSS.home_wrapper} section`} id="home" ref={homeRef}>
      <div className={homeCSS.content}>
        <h4>Hello, My Name is</h4>
        <h1>
          Shubham <span>Bhalala</span>
        </h1>
        <h3>I'am a web Developer.</h3>
        <div className={homeCSS.social}>
          <a href="https://www.linkedin.com/in/shubham-bhalala-b74994269/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className={homeCSS.newslatter}>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            See Resume
          </a>
        </div>
      </div>
      <div className={homeCSS.homeimage} ref={homeImageRef}>
        <img src={himg} alt="" />
      </div>
    </div>
  );
}

export default Home;
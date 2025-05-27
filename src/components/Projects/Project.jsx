import React, { useEffect, useRef } from "react";
import projectCSS from "./Project.module.css";
import pro1 from "./../../assets/pro1.jpg";
import pro2 from "./../../assets/pro2.avif";
import pro3 from "./../../assets/pro3.jpg";
import travel from "./../../assets/travel.jpg";
import news from "./../../assets/news.png";
import disease from "./../../assets/disease.jpg";
import { animateProjects } from "./../../animations"; // Adjust path as needed

function Project() {
  const projectRef = useRef(null);

  useEffect(() => {
    animateProjects(projectRef);
  }, []);

  return (
    <div className={`${projectCSS.project_wrapper} section`} id="projects" ref={projectRef}>
      <h2>Latest <span>Project</span></h2>

      <div className={projectCSS.projectContainer}>
        <div className={projectCSS.projectBox}>
          <img src={pro1} alt="weather app" />
          <div className={projectCSS.projectLayer}>
            <h4>Weather App</h4>
            <p>I built a weather app using web technologies.</p>
            <a href="https://github.com/shpatel123/Weather-App" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>

        <div className={projectCSS.projectBox}>
          <img src={pro2} alt="employee dashboard" />
          <div className={projectCSS.projectLayer}>
            <h4>Employee Management System</h4>
            <p>I built an employee system using Java Swing.</p>
            <a href="https://github.com/shpatel123/Employee-Mnagement-System" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>

        <div className={projectCSS.projectBox}>
          <img src={pro3} alt="spotify clone" />
          <div className={projectCSS.projectLayer}>
            <h4>Spotify Clone</h4>
            <p>I built a Spotify clone using web technologies.</p>
            <a href="https://github.com/shpatel123/Spotify-clone" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>

        <div className={projectCSS.projectBox}>
          <img src={travel} alt="travel website" />
          <div className={projectCSS.projectLayer}>
            <h4>Wanderlust Travel Website</h4>
            <p>Developed a full-stack travel website.</p>
            <a href="https://github.com/shpatel123/Wanderlust-Website" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>

        <div className={projectCSS.projectBox}>
          <img src={news} alt="news app" />
          <div className={projectCSS.projectLayer}>
            <h4>News App</h4>
            <p>I created a news app using React.</p>
            <a href="https://github.com/shpatel123/newsapp" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>

        <div className={projectCSS.projectBox}>
          <img src={disease} alt="disease prediction" />
          <div className={projectCSS.projectLayer}>
            <h4>Disease Prediction</h4>
            <p>Built using machine learning and a Flask application.</p>
            <a href="https://github.com/shpatel123/newsapp" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
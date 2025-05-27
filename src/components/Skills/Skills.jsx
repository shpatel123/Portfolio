import React, { useEffect, useRef } from "react";
import skillsCSS from "./Skills.module.css";
import { animateSkills } from "./../../animations"; // Adjust path as needed

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    animateSkills(skillsRef);
  }, []);

  return (
    <div className={`${skillsCSS.skills_wrapper} section`} id="skills" ref={skillsRef}>
      <div className={skillsCSS.skillContainer}>
        <h2 className={skillsCSS.subTitle}>My <span>Skills</span></h2>
        <div className={skillsCSS.sk}>
          <div className={skillsCSS.skil}>
            <div className={skillsCSS.skillName}>
              <span>HTML</span><span className={skillsCSS.percen}>95%</span>
            </div>
            <div className={skillsCSS.progressBar}>
              <div className={skillsCSS.progress} style={{ "--width": "95%" }}></div>
            </div>
          </div>
          <div className={skillsCSS.skil}>
            <div className={skillsCSS.skillName}>
              <span>CSS</span><span className={skillsCSS.percen}>90%</span>
            </div>
            <div className={skillsCSS.progressBar}>
              <div className={skillsCSS.progress} style={{ "--width": "90%" }}></div>
            </div>
          </div>
          <div className={skillsCSS.skil}>
            <div className={skillsCSS.skillName}>
              <span>JavaScript</span><span className={skillsCSS.percen}>90%</span>
            </div>
            <div className={skillsCSS.progressBar}>
              <div className={skillsCSS.progress} style={{ "--width": "90%" }}></div>
            </div>
          </div>
          <div className={skillsCSS.skil}>
            <div className={skillsCSS.skillName}>
              <span>React.Js</span><span className={skillsCSS.percen}>70%</span>
            </div>
            <div className={skillsCSS.progressBar}>
              <div className={skillsCSS.progress} style={{ "--width": "70%" }}></div>
            </div>
          </div>
          <div className={skillsCSS.skil}>
            <div className={skillsCSS.skillName}>
              <span>Node js</span><span className={skillsCSS.percen}>80%</span>
            </div>
            <div className={skillsCSS.progressBar}>
              <div className={skillsCSS.progress} style={{ "--width": "80%" }}></div>
            </div>
          </div>
          <div className={skillsCSS.skil}>
            <div className={skillsCSS.skillName}>
              <span>MySQl</span><span className={skillsCSS.percen}>85%</span>
            </div>
            <div className={skillsCSS.progressBar}>
              <div className={skillsCSS.progress} style={{ "--width": "85%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
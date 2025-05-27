import React, { useEffect, useRef } from "react";
import eduCSS from "./Education.module.css";
import edu from "./../../assets/Education.png";
import exp from "./../../assets/exp.png";
import { animateEducation } from "./../../animations"; // Adjust path as needed

function Education() {
  const educationRef = useRef(null);

  useEffect(() => {
    animateEducation(educationRef);
  }, []);

  return (
    <div className={`${eduCSS.education_wrapper} section`} id="internship" ref={educationRef}>
      <h2>
        Education & <span>Experience</span>
      </h2>

      <div className={eduCSS.container}>
        <div className={eduCSS.experience}>
          <h3>Experience</h3>
          <div className={eduCSS.timeline}>
            <div className={eduCSS.timelineItem}>
              <div className={eduCSS.icon}>
                <img src={exp} alt="icon" />
              </div>
              <div className={eduCSS.details}>
                <h3>
                  Python Development Intern Intern <span>(Jan 25 - May 25 )</span>
                </h3>
                <h4>TSS Consultancy Pvt Ltd </h4>
                <p>
                  Developed Python-based solutions as part of a fintech project.
                </p>
              </div>
            </div>
            <div className={eduCSS.timelineItem}>
              <div className={eduCSS.icon}>
                <img src={exp} alt="icon" />
              </div>
              <div className={eduCSS.details}>
                <h3>
                  Data Analyst Intern <span>(June - 2024)</span>
                </h3>
                <h4>EdultyIndia</h4>
                <p>
                  Solved a data analysis task in Excel by answering given
                  questions.
                </p>
              </div>
            </div>
            <div className={eduCSS.timelineItem}>
              <div className={eduCSS.icon}>
                <img src={exp} alt="icon" />
              </div>
              <div className={eduCSS.details}>
                <h3>
                  Full Stack Development <span>(Sep 23 – Oct-23)</span>
                </h3>
                <h4>OpenWeaver</h4>
                <p>
                  This was my first internship, where I gained hands-on
                  development experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* education */}
        <div className={eduCSS.education}>
          <h3>Education</h3>
          <div className={eduCSS.timeline}>
            <div className={eduCSS.timelineItem}>
              <div className={eduCSS.icon}>
                <img src={edu} alt="icon" />
              </div>
              <div className={eduCSS.details}>
                <h3>
                  Secondary School - <span>2010</span>
                </h3>
                <h4>Kailash School</h4>
                <p>I have complated my 10th in Kailash School.</p>
              </div>
            </div>
            <div className={eduCSS.timelineItem}>
              <div className={eduCSS.icon}>
                <img src={edu} alt="icon" />
              </div>
              <div className={eduCSS.details}>
                <h3>
                  High School - <span>2019</span>
                </h3>
                <h4>Sarvoday School</h4>
                <p>I have complated my 11 and 12th in Sarvoday School.</p>
              </div>
            </div>
            <div className={eduCSS.timelineItem}>
              <div className={eduCSS.icon}>
                <img src={edu} alt="icon" />
              </div>
              <div className={eduCSS.details}>
                <h3>
                  Bachelor of Technology-IT <span>(2024 - Present)</span>
                </h3>
                <h4>Marwadi University</h4>
                <p>
                  I'm Shubham Bhalala, a dedicated B.Tech Information and
                  Technology Engineering student at Marwadi University,
                  currently in my third year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
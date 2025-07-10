import React, { useEffect, useRef, useState } from "react";
import projectCSS from "./Project.module.css";
import projectData from "./../Projects/Data"; // central data
import { animateProjects } from "./../../animations";

function Project() {
  const projectRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    animateProjects(projectRef);
  }, []);

  return (
    <div
      className={`${projectCSS.project_wrapper} section`}
      id="projects"
      ref={projectRef}
    >
      <h2>
        Latest <span>Project</span>
      </h2>

      <div className={projectCSS.projectContainer}>
        {projectData.map((proj) => (
          <div className={projectCSS.projectBox} key={proj.id}>
            <img src={proj.image} alt={proj.title} />
            <div className={projectCSS.projectLayer}>
              <h4>{proj.title}</h4>
              <button
                onClick={() => setSelectedProject(proj)}
                className={projectCSS.detailsBtn}
              >
                <i className="bx bx-link-external"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className={projectCSS.modalOverlay}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={projectCSS.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.modalImage || selectedProject.image} alt={selectedProject.title} />
            <div className={projectCSS.descriptionWrapper}>
              <strong>Description:</strong>
              <ul className={projectCSS.descriptionList}>
                {selectedProject.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className={projectCSS.techWrapper}>
              <strong>Technologies:</strong>
              <ul className={projectCSS.techList}>
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Repo
            </a>
            <button
              onClick={() => setSelectedProject(null)}
              className={projectCSS.closeBtn}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;

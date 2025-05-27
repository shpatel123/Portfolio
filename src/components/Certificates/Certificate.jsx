import React, { useState, useRef, useEffect } from "react";
import certificateCSS from "./Certificate.module.css";
import openweaver from "./../../assets/openweaver.png";
import aws from "./../../assets/aws.png";
import dbms from "./../../assets/Dbms.png";
import frontend from "./../../assets/front end.png";
import j2ee from "./../../assets/j2ee.png";
import ndg from "./../../assets/NDG.png";
import network from "./../../assets/network.png";
import tss from "./../../assets/TSS certificate.jpg";
import { animateCertificates } from "./../../animations"; // Adjust path as needed

function Certificate() {
  const certificateRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    animateCertificates(certificateRef);
  }, []);

  const handleViewCertificate = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div
      className={`${certificateCSS.certificate_wrapper} section`}
      id="certification"
      ref={certificateRef}
    >
      <h2>
        Certifica<span>tion</span>
      </h2>
      <div className={certificateCSS.certificationContainer}>
        <div className={certificateCSS.certificationCard}>
          <h3>Web Development Intern</h3>
          <p>
            <strong>Institute:</strong> Openweaver
          </p>
          <p>
            <strong>Completion:</strong> 12 Oct 2023
          </p>
          <button
            className={certificateCSS.viewCertificate}
            onClick={() => handleViewCertificate(openweaver)}
          >
            View Certificate
          </button>
        </div>

        <div className={certificateCSS.certificationCard}>
          <h3>J2EE Comprehensive Training</h3>
          <p>
            <strong>Institute:</strong> Infosys
          </p>
          <p>
            <strong>Completion:</strong> 20 July 2024
          </p>
          <button
            className={certificateCSS.viewCertificate}
            onClick={() => handleViewCertificate(j2ee)}
          >
            View Certificate
          </button>
        </div>

        <div className={certificateCSS.certificationCard}>
          <h3>Database with SQL</h3>
          <p>
            <strong>Institute:</strong> Oracle Academy
          </p>
          <p>
            <strong>Completion:</strong> 23 Sep 2023
          </p>
          <button
            className={certificateCSS.viewCertificate}
            onClick={() => handleViewCertificate(dbms)}
          >
            View Certificate
          </button>
        </div>

        <div className={certificateCSS.certificationCard}>
          <h3>Networking Essentials</h3>
          <p>
            <strong>Institute:</strong> Cisco
          </p>
          <p>
            <strong>Completion:</strong> 18 Feb 2024
          </p>
          <button
            className={certificateCSS.viewCertificate}
            onClick={() => handleViewCertificate(network)}
          >
            View Certificate
          </button>
        </div>

        <div className={certificateCSS.certificationCard}>
          <h3>NDG Linux Essentials</h3>
          <p>
            <strong>Institute:</strong> Cisco
          </p>
          <p>
            <strong>Completion:</strong> 13 Jan 2023
          </p>
          <button
            className={certificateCSS.viewCertificate}
            onClick={() => handleViewCertificate(ndg)}
          >
            View Certificate
          </button>
        </div>

        <div className={certificateCSS.certificationCard}>
          <h3>Front End Development</h3>
          <p>
            <strong>Institute:</strong> Infosys
          </p>
          <p>
            <strong>Completion:</strong> 30 March 2024
          </p>
          <button
            className={certificateCSS.viewCertificate}
            onClick={() => handleViewCertificate(frontend)}
          >
            View Certificate
          </button>
        </div>

        <div className={certificateCSS.certificationCard}>
          <h3>Python Development Intern</h3>
          <p>
            <strong>Institute:</strong> TSS
          </p>
          <p>
            <strong>Completion:</strong> April 2025
          </p>
          <button
            className={certificateCSS.viewCertificate}
            onClick={() => handleViewCertificate(tss)}
          >
            View Certificate
          </button>
        </div>

        <div className={certificateCSS.certificationCard}>
          <h3>AWS Academy Machine Learning</h3>
          <p>
            <strong>Institute:</strong> AWS
          </p>
          <p>
            <strong>Completion:</strong> 22 Feb 2025
          </p>
          <button
            className={certificateCSS.viewCertificate}
            onClick={() => handleViewCertificate(aws)}
          >
            View Certificate
          </button>
        </div>
      </div>

      {/* Certificate Modal */}
      {modalOpen && (
        <div className={certificateCSS.modal}>
          <div className={certificateCSS.modalContent}>
            <span className={certificateCSS.close} onClick={closeModal}>
              &times;
            </span>
            <img
              className={certificateCSS.certificateImg}
              src={selectedImage}
              alt="Certificate"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;

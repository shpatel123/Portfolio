// src/utils/animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Home Page Animations ---
export const animateHome = (homeRef, imgRef) => {
  if (homeRef.current) {
    gsap.fromTo(
      homeRef.current.querySelector("h4"),
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      homeRef.current.querySelector("h1"),
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );
    gsap.fromTo(
      homeRef.current.querySelector("h3"),
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
    );
    gsap.fromTo(
      homeRef.current.querySelector("." + homeCSS.social), // Use direct class name here
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      homeRef.current.querySelector("." + homeCSS.newslatter), // Use direct class name here
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1, ease: "back.out(1.7)" }
    );
  }
};

// --- About Page Animations ---
export const animateAbout = (aboutRef) => {
  if (aboutRef.current) {
    gsap.fromTo(
      aboutRef.current.querySelector("." + aboutCSS.aboutImg), // Use direct class name here
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      aboutRef.current.querySelector("." + aboutCSS.aboutText), // Use direct class name here
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }
};

// --- Skills Page Animations ---
export const animateSkills = (skillsRef) => {
  if (skillsRef.current) {
    gsap.fromTo(
      skillsRef.current.querySelector("." + skillsCSS.subTitle), // Use direct class name here
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.utils.toArray("." + skillsCSS.skil).forEach((skill, i) => {
      gsap.fromTo(
        skill,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skill,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }
};

// --- Project Page Animations ---
export const animateProjects = (projectRef) => {
  if (projectRef.current) {
    gsap.fromTo(
      projectRef.current.querySelector("h2"),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.utils.toArray("." + projectCSS.projectBox).forEach((box, i) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }
};

// --- Certificate Page Animations ---
export const animateCertificates = (certificateRef) => {
  if (certificateRef.current) {
    gsap.fromTo(
      certificateRef.current.querySelector("h2"),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: certificateRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.utils.toArray("." + certificateCSS.certificationCard).forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }
};

// --- Education Page Animations ---
export const animateEducation = (educationRef) => {
  if (educationRef.current) {
    gsap.fromTo(
      educationRef.current.querySelector("h2"),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.utils.toArray("." + eduCSS.experience + " ." + eduCSS.timelineItem).forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    gsap.utils.toArray("." + eduCSS.education + " ." + eduCSS.timelineItem).forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }
};

// --- Contact Page Animations ---
export const animateContact = (contactRef) => {
  if (contactRef.current) {
    gsap.fromTo(
      contactRef.current.querySelector("h2"),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      contactRef.current.querySelector("." + conCSS.left),
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      contactRef.current.querySelector("." + conCSS.right),
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }
};



// You'll need to import the CSS modules here to properly reference their class names
import homeCSS from "./components/Home/Home.module.css";
import aboutCSS from "./components/About/About.module.css";
import skillsCSS from "./components/Skills/Skills.module.css";
import projectCSS from "./components/Projects/Project.module.css";
import certificateCSS from "./components/Certificates/Certificate.module.css";
import eduCSS from "./components/Education/Education.module.css";
import conCSS from "./components/Contact/Contact.module.css";
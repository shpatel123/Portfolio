const header = document.querySelector("nav");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  " .content, .main h2, .sub-title, .title h2, .title, .edu h2, .project h2",
  { origin: "top" }
);
ScrollReveal().reveal(
  " .about-text, .box, .timeline, .timeline-item, .details, .project-box, .certification-card",
  { origin: "bottom" }
);
ScrollReveal().reveal(".content h1, .about-img, .icon1, .skil", {
  origin: "left",
});
ScrollReveal().reveal(".fields, .field textarea, .button", { origin: "right" });

gsap.from(".homeimage", {
  opacity: 0,
  scale: 0.8,
  duration: 5,
  delay: 0.5,
  ease: "elastic.out(1, 0.5)",
});

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
});

close.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// JavaScript for Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("certificate-modal");
  const modalImg = document.getElementById("certificate-img");
  const closeBtn = document.querySelector(".modal .close");

  // Add event listener to all buttons
  document.querySelectorAll(".view-certificate").forEach((button) => {
    button.addEventListener("click", () => {
      const certificateSrc = button.getAttribute("data-certificate");
      modalImg.src = certificateSrc;
      modal.style.display = "flex";
    });
  });

  // Close modal on close button click
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
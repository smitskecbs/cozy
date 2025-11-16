// =====================
// Smooth Scroll for Navbar Links
// =====================
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// =====================
// Active Menu Highlight on Scroll
// =====================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 150;

  sections.forEach(sec => {
    if (
      scrollPos >= sec.offsetTop &&
      scrollPos < sec.offsetTop + sec.offsetHeight
    ) {
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `nav ul li a[href="#${sec.id}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});

// =====================
// Fade-in Animation for Sections
// =====================
const revealElements = document.querySelectorAll(".section");

function revealOnScroll() {
  revealElements.forEach(elem => {
    const elemTop = elem.getBoundingClientRect().top;
    if (elemTop < window.innerHeight - 100) {
      elem.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();
});

window.addEventListener("scroll", revealOnScroll);

// =====================
// Scroll to Top Button
// =====================
const topBtn = document.createElement("button");
topBtn.innerText = "▲";
topBtn.id = "scrollTopBtn";
document.body.appendChild(topBtn);

Object.assign(topBtn.style, {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  padding: "10px 14px",
  fontSize: "18px",
  background: "#00f0ff",
  color: "#000",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  display: "none",
  zIndex: "999",
  transition: "0.3s"
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =====================
// Crypto icon hover effect
// =====================
document.querySelectorAll(".crypto-icons img").forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.25)";
    icon.style.transition = "0.25s";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
  });
});

// =====================
// Mobile menu toggle
// =====================
const menuIcon = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuIcon && navMenu) {
  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

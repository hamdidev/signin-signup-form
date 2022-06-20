const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(`.heading`, {
  interval: 200,
});

sr.reveal(`form`, {
  delay: 600,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.content`, {
  delay: 1000,
  origin: "bottom",
});
sr.reveal(`.left`, {
  delay: 800,
  origin: "left",
});

sr.reveal(`.right`, {
  delay: 1000,
  origin: "right",
});
// Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Show Password
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.classList.toggle("bi-eye");
});

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#password2");

togglePassword2.addEventListener("click", function (e) {
  const type =
    password2.getAttribute("type") === "password" ? "text" : "password";
  password2.setAttribute("type", type);

  this.classList.toggle("bi-eye");
});

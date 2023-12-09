// ======================================================= SCROLL HEADER ======================================================= //

const header = document.getElementById("header");
function scrollHeader() {
  if (this.scrollY >= 30) {
    header.classList.add("show-header");
  } else {
    header.classList.remove("show-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// ======================================================= SCROLL UP ======================================================= //

const scrollBtn = document.querySelector(".scroll-up")

function scrollUp(){
  if(this.scrollY >= 300){
    scrollBtn.classList.add("show-scroll");
  } else{
    scrollBtn.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// ====================================================== SEARCH TOGGLE ====================================================== //

const searchToggle = document.getElementById("search-toggle");
const searchPage = document.getElementById("search-page");
const searchClose = document.getElementById("search-close");

if (searchToggle) {
  searchToggle.addEventListener("click", () => {
    searchPage.classList.add("show-search");
  });
}
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchPage.classList.remove("show-search");
  });
}
function hideSearch() {
  searchPage.classList.remove("show-search");
}
window.addEventListener("scroll", hideSearch);

// ====================================================== LOGIN TOGGLE ====================================================== //

const loginToggle = document.getElementById("login-toggle");
const loginPage = document.getElementById("login-page");
const loginClose = document.getElementById("login-close");

if (loginToggle) {
  loginToggle.addEventListener("click", () => {
    loginPage.classList.add("show-login");
  });
}
if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginPage.classList.remove("show-login");
  });
}
const registerToggle = document.getElementById("register-toggle");
const registerPage = document.getElementById("register-page");
const registerClose = document.getElementById("register-close");

if (registerToggle) {
  registerToggle.addEventListener("click", () => {
    registerPage.classList.add("show-register");
    loginPage.classList.remove("show-login");
  });
}
if (registerClose) {
  registerClose.addEventListener("click", () => {
    registerPage.classList.remove("show-register");
  });
}

// ====================================================== NAV TOGGLE ====================================================== //
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-nav");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-nav");
  });
}
function hideNavmenu() {
  navMenu.classList.remove("show-nav");
}
window.addEventListener("scroll", hideNavmenu);

// ======================================================== MEMBER SWIPER ======================================================== //

var swiper = new Swiper(".member-swiper", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    968: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ======================================================== TESTIMONIAL SWIPER ======================================================== //

var swiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ======================================================== ACCORDION ======================================================== //
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const icon = accordion.querySelector(".faq-icon");
  const answer = accordion.querySelector(".answer");

  accordion.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
      answer.style.marginTop = "0";
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.marginTop = "2rem";
    }
  });
});

// ======================================================== GSAP ANIMATIONS ======================================================== //

let tl1 = gsap.timeline();
tl1.from(
  ".home-title",
  {
    y: -80,
    duration: 0.7,
    opacity: 0,
    delay: 0.1,
  },
  "a"
);
tl1.from(
  ".home-img",
  {
    x: -100,
    duration: 0.7,
    opacity: 0,
    delay: 0.1,
  },
  "a"
);
tl1.from(
  ".home-description",
  {
    y: 60,
    duration: 0.5,
    opacity: 0,
    delay: 0.2,
  },
  "a"
);
tl1.from(
  ".home-action, .home-details",
  {
    y: 100,
    duration: 0.5,
    opacity: 0,
  },
  "a"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".brand",
    scroll: "body",
    start: "top 60%",
    end: "bottom 10%",
  },
});
tl2.from(".brand-logo", {
  x: 150,
  duration: 0.8,
  opacity: 0,
  stagger: 0.05,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".popular",
    scroll: "body",
    start: "top 65%",
    end: "bottom 10%",
  },
});
tl3.from(".popular-container>.section-title, .popular-description", {
  y: -100,
  opacity: 0,
  duration: 0.7,
});
tl3.from(".popular-box", {
  x: -100,
  opacity: 0,
  duration: 0.7,
  stagger: 0.1,
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".learn",
    scroll: "body",
    start: "top 50%",
    end: "bottom 10%",
  },
});
tl4.from(
  ".learning-content",
  {
    x: 150,
    opacity: 0,
    duration: 0.9,
  },
  "b"
);
tl4.from(
  ".learning-img",
  {
    x: -150,
    opacity: 0,
    duration: 0.9,
  },
  "b"
);

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".members",
    scroll: "body",
    start: "top 65%",
    end: "bottom 10%",
  },
});
tl5.from(".members-container>.section-title", {
  y: -100,
  opacity: 0,
  duration: 0.7,
});

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials",
    scroll: "body",
    start: "top 65%",
    end: "bottom 10%",
  },
});
tl6.from(".testimonial-container>.section-title", {
  y: -100,
  opacity: 0,
  duration: 0.7,
});

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".faq",
    scroll: "body",
    start: "top 65%",
    end: "bottom 10%",
  },
});
tl7.from(".faq-container>.section-title", {
  y: -100,
  opacity: 0,
  duration: 0.7,
});
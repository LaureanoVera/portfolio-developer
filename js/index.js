// ===== show menu =====
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      nav.classList.toggle("animate__bounceInRight");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// ===== remove menu mobile =====
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Home
ScrollReveal().reveal(".home__title", {});
ScrollReveal().reveal(".home__scroll", { delay: 200 });
ScrollReveal().reveal(".home__img", { origin: "right", delay: 400 });

ScrollReveal().reveal(".about__img", { origin: "left", delay: 400 });

// Form
const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Thank you for contacting me, I will write to you soon");
  }
}

// ===== progress bar =====
window.addEventListener("scroll", () => {
  const top = document.documentElement.scrollTop;

  const scroll = document.documentElement.scrollHeight;
  const client = document.documentElement.clientHeight;

  const height = scroll - client;
  const scrolled = (top / height) * 100;

  const scrollBar = document.querySelector(".scroll-bar");
  scrollBar.style.width = `${scrolled}%`;
});

// ===== animation =====
let windowSize = window.innerHeight ;

const heroAnimation = () => {
  let heroImage = document.getElementById('hero_image');
  // heroImage.classList.add('animate__rubberBand')
  heroImage.classList.add('animate__zoomInRight')
  // 
}

const textAnimation = () => {
  let heroText = document.getElementById('hero_text')
  heroText.classList.add('animate__flipInX')
}

const leftAnimation = () => {
  let left = document.getElementById("left_animate");
  let positionLeft = left.getBoundingClientRect().top;

  if(positionLeft < windowSize) {
    left.classList.add('animate__bounceInLeft')
  }
  if (positionLeft > windowSize || positionLeft < !windowSize) {
    left.classList.remove('animate__bounceInLeft')
  }
}

const rightAnimation = () => {
  let right = document.getElementById("right_animate");
  let positionRight = right.getBoundingClientRect().top;

  if(positionRight < windowSize) {
    right.classList.add('animate__bounceInRight')
  }
  if (positionRight > windowSize || positionRight < !windowSize) {
    right.classList.remove('animate__bounceInRight')
  }
}

const formAnimation = () => {
  let form = document.getElementById("form");
  let positionForm = form.getBoundingClientRect().top;

  if(positionForm < windowSize) {
    form.classList.add('animate__fadeInRight')
  }
  if (positionForm > windowSize || positionForm < !windowSize) {
    form.classList.remove('animate__fadeInRight')
  }
}

const contactAnimation = () => {
  let contact = document.getElementById("contact_info");
  let positionContact = contact.getBoundingClientRect().top;

  if(positionContact < windowSize) {
    contact.classList.add('animate__bounceInLeft')
  }
  if (positionContact > windowSize || positionContact < !windowSize) {
    contact.classList.remove('animate__bounceInLeft')
  }
}

document.addEventListener("DOMContentLoaded", heroAnimation);
document.addEventListener("DOMContentLoaded", textAnimation);
window.addEventListener("scroll", leftAnimation);
window.addEventListener("scroll", rightAnimation);
window.addEventListener("scroll", formAnimation);
window.addEventListener("scroll", contactAnimation);

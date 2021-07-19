// ===== show menu =====
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
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

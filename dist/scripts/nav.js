// Varaibles
const hamburger = document.querySelector(".header__hamburger-container");
const nav = document.querySelector("nav");
const cover = document.querySelector(".cover-body");
const closeNavButton = document.querySelector(".nav__close-container");

const escKeyCode = 27;

// Show nav when hamburger is clicked
hamburger.addEventListener("click", showNav);
// Hide Nav when X button or background is clicked
closeNavButton.addEventListener("click", hideNav);
cover.addEventListener("click", hideNav);

// If esc key is pressed, hide nav
document.addEventListener("keyup", e => {
  if (e.keyCode === escKeyCode) {
    hideNav(e);
  }
});

// Shows Nav and background cover
function showNav(e) {
  e.preventDefault();
  nav.classList.add("show-nav");
  cover.classList.add("show-cover");
}

// Hides Nav and background cover
function hideNav(e) {
  e.preventDefault();
  nav.classList.remove("show-nav");
  cover.classList.remove("show-cover");
}

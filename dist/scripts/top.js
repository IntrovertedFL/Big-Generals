const topButton = document.querySelector(".top");
// Sets Window Postion To show button
const positionToShow = 450;

window.addEventListener("scroll", windowScroll);

function windowScroll(e) {
  // Gets current window position
  const currentPosition = window.pageYOffset;

  // if current position is below set position, show button.
  // other wise, hide button
  if (currentPosition >= positionToShow) {
    topButton.classList.remove("top__hidden");
  } else {
    topButton.classList.add("top__hidden");
  }
}

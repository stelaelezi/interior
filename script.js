document.querySelector(".book").addEventListener("click", () => {
  alert("You booked!");
});
function checkWindowWidth() {
  const arrow = document.querySelector(".arrow");
  if (window.innerWidth <= 600) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "inline";
  }
}

checkWindowWidth();

window.addEventListener("resize", checkWindowWidth);

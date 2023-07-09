let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let navOverlay = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {
  navOverlay.classList.add("active");
});

close.addEventListener("click", () => {
  navOverlay.classList.remove("active");
});

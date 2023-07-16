let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let navOverlay = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {
  navOverlay.classList.add("active");
});

close.addEventListener("click", () => {
  navOverlay.classList.remove("active");
});

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

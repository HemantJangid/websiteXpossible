let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let navOverlay = document.querySelector(".nav-overlay");
let links = document.querySelector(".links");
let navMobile = document.querySelector(".navigation-mobile");

hamburger.addEventListener("click", () => {
  // navOverlay.classList.add("active");
  if (links.classList.contains("active")) {
    navMobile.classList.remove("active");
    links.classList.remove("active");
  } else {
    navMobile.classList.add("active");
    links.classList.add("active");
  }
});

close.addEventListener("click", () => {
  // navOverlay.classList.remove("active");
  navMobile.style.height = "90px";
  links.style.display = "none";
});

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  }
}

let contactForm = document.getElementById("contact-form");
function sendEmail(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let loadingElement = createElementFromHTML(`
    <div class="jumping-dots-loader"> <span></span> <span></span> <span></span> </div>
    <div class="moving-gradient"></div>
  `);

  Email.send({
    SecureToken: "f2231ca1-e017-4d8a-86d0-803d0a78e3f1",
    To: "hemantjangid.gyrix@gmail.com",
    From: "hemantjangid.gyrix@gmail.com",
    Subject: `Contact form submission`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Phone: ${phone} <br/> Message: ${message}`,
  }).then((message) => {
    alert(message);
    contactForm.reset();
  });
}

if (contactForm) contactForm.addEventListener("submit", sendEmail);

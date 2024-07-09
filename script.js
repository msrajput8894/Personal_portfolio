// Add an event listener to all links/buttons that should trigger smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior (e.g., jumping to the anchor)
      const target = link.getAttribute("href");
      smoothScroll(target, 100); // Specify the desired margin (e.g., 20 pixels)
    });
  });
});

// Smooth scrolling function with a margin parameter
function smoothScroll(target, margin) {
  const element = document.querySelector(target);
  const offsetTop =
    element.getBoundingClientRect().top + window.pageYOffset - margin; // Subtract the margin
  window.scroll({
    behavior: "smooth",
    top: offsetTop,
  });
}

// script for contact form to submit the data to google sheet.
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwxfcFIHMWwrfErQ6JBUUUqg4cIJnnqj43B7gPzQSoGVnGwWPBo-tIANDnYNE1HNrc0CQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

//---------------------------------------------------------------------

//script for the about me section to navigate to different tabs

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// script for side menu

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-20rem";
}

// Add an event listener to all links/buttons that should trigger smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior (e.g., jumping to the anchor)
      const target = link.getAttribute("href");
      smoothScroll(target, 100); // Specify the desired margin (e.g., 20 pixels)
      hamMenuIcon.style.display = "block";
    });
  });
});

// Smooth scrolling function with a margin parameter
const smoothScroll = (target, margin) => {
  const element = document.querySelector(target);
  const offsetTop =
    element.getBoundingClientRect().top + window.pageYOffset - margin; // Subtract the margin
  window.scrollTo({
    behavior: "smooth",
    top: offsetTop,
  });
};

// Script for contact form to submit the data to Google Sheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwxfcFIHMWwrfErQ6JBUUUqg4cIJnnqj43B7gPzQSoGVnGwWPBo-tIANDnYNE1HNrc0CQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Script for the "About Me" section to navigate to different tabs
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

const opentab = (tabname) => {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};

// Script for the side menu
const sidemenu = document.getElementById("sidemenu");

const openmenu = () => {
  sidemenu.style.right = "0";
};

const closemenu = () => {
  sidemenu.style.right = "-20rem";
};

const hamMenuIcon = document.querySelector(".fa-bars");
const closeMenuIcon = document.querySelector(".fa-xmark");
hamMenuIcon.addEventListener("click", () => {
  hamMenuIcon.style.display = "none";
});

closeMenuIcon.addEventListener("click", () => {
  hamMenuIcon.style.display = "block";
});

const workList = document.querySelector(".work-list");
const workBtn = document.querySelector(".work-btn");
const workAll = document.querySelectorAll(".work-hidden");
console.log(workAll);

workBtn.addEventListener("click", (e) => {
  e.preventDefault();
  workAll.forEach((work) => {
    work.classList.toggle("work-hidden");

    if (work.classList.contains("work-hidden")) {
      workBtn.textContent = "See More";
    } else {
      workBtn.textContent = "See Less";
    }
  });
});

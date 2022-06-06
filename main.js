// Start Header
let menuBar = document.querySelector(".mega-menu");
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.addEventListener("click", function (evt) {
      var flyoutElement = document.querySelector(".main-nav > li:last-child"),
        targetElement = evt.target; // clicked element
      do {
        if (targetElement == flyoutElement) {
          // This is a click inside. Do nothing, just return.
          menuBar.className = "mega-menu showed";
          return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);
      // This is a click outside.
      menuBar.className = "mega-menu";
    });
  } else {
    menuBar.className = "mega-menu";
  }
}

var x = window.matchMedia("(min-width: 1200px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
// End Header

document.getElementById("subscribe").onsubmit = function (e) {
  e.preventDefault();
};

// The End Of The Year Date To Countdown To
//-1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDeff = countDownDate - dateNow;

  // get time units
  let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
  document.querySelector(
    ".events .container .info .time .unit:first-child span:first-of-type"
  ).innerHTML = days < 10 ? `00${days}` : days < 100 ? `0${days}` : days;

  let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(
    ".events .container .info .time .unit:nth-child(2) span:first-of-type"
  ).innerHTML = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(
    ".events .container .info .time .unit:nth-child(3) span:first-of-type"
  ).innerHTML = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((dateDeff % (1000 * 60)) / 1000);
  document.querySelector(
    ".events .container .info .time .unit:nth-child(4) span:first-of-type"
  ).innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDeff <= 0) {
    clearInterval(counter);
  }
}, 1000);

let ourSkills = document.querySelector(".our-skills");
let progress = document.querySelectorAll(
  ".our-skills .container .skills .skill .the-progress span"
);
let stats = document.querySelector(".stats");
let numberSpans = document.querySelectorAll(".stats .container .box .number");
let started = false; // Funcion Started? No

let float = document.querySelector("body > .float");

window.onload = function () {
  if (window.scrollY == 0) {
    float.style.cssText = "transform: scale(0);";
  }
};

window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop - 350) {
    progress.forEach((spans) => {
      spans.style.width = spans.dataset.width;
    });
  }

  if (window.scrollY >= stats.offsetTop - 500) {
    if (!started) {
      numberSpans.forEach((span) => startCount(span));
    }
    started = true;
  }

  if (window.scrollY >= 500) {
    float.style.cssText = "transform: scale(1);";
  } else {
    float.style.cssText = "transform: scale(0);";
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

// Start Scroll To Top

float.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// End Scroll To Top

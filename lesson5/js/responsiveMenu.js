const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

function toggleWeeklyEvent() {
  document.querySelector(".weeklyEvent").classList.toggle("display");
}

function toggleFiveDForecast() {
  document.querySelector(".fiveDayForecast").classList.toggle("display");
}

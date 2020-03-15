const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector("#navigation").classList.toggle("responsive");
}

function toggleWeeklyEvent() {
  document.querySelector("#weeklyEvents").classList.toggle("display");
}

//Determine to show weekly event on top of page or not.
const todaysDate = new Date();
    const numDay = todaysDate.getDay();
    const element = document.getElementById("weeklyEvents");
    if (numDay == 6){
        element.classList.add("weeklyEventsShow");
        console.log("show");
    }
    else{
     element.classList.add("weeklyEventsHide");
     console.log("hide");
    }


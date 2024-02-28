import {
  changeBoxContent,
  currentForecast,
  formatDate,
  getWeekDays,
  hourlyFrocest,
  openLocations,
  sevenDayForecast,
} from "./functions.js";

function changeGetCity(city) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=196cbe371f1c40f9ba3113741241402&q=${city}&days=7&aqi=yes&alerts=no`
  )
    .then((respons) => respons.json())
    .then((data) => {
      changeBoxContent();
      getWeekDays();
      currentForecast(data);
      sevenDayForecast(data);
      hourlyFrocest(data);
      openLocations();
      formatDate();
    });
}

changeGetCity("tbilisi");


let subbuticon = document.querySelectorAll("#subbuticon");
let searchInput = document.querySelectorAll("input");
for (let p = 0; p < searchInput.length; p++) {
  subbuticon[p].addEventListener("click", () => {
    if (1 === 1) {
      let currentCity = document.getElementById("currentCity");
      currentCity.textContent =
        searchInput[p].value.charAt(0).toUpperCase() +
        searchInput[p].value.slice(1);
      changeGetCity(searchInput[p].value);
    }
  });
  searchInput[p].addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      let currentCity = document.getElementById("currentCity");
      currentCity.textContent =
        searchInput[p].value.charAt(0).toUpperCase() +
        searchInput[p].value.slice(1);
      changeGetCity(searchInput[p].value);
    }
  });
}

let selectloc = document.getElementById("selectloc");

function myFunction(x) {
  if (x.matches) { 
    selectloc.style.display  = "none";
  } 
}

var x = window.matchMedia("(max-width: 1000px)")

myFunction(x);
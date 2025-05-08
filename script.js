function weatherIcon(response) {
  let iconUrl = response.data.condition.icon_url;
  let emojiSpans = document.querySelectorAll(".emoji");

  emojiSpans.forEach(function (span) {
    span.innerHTML = `<img src="${iconUrl}" alt="Weather icon" width="40" />`;
  });
}
function getWeather(response) {
    let currentTemp = response.data.temperature.current;
    let temp = document.querySelector("#temp");
    temp.innerHTML = `${Math.round(currentTemp)}°F`;
  }
function getHumidity(response) {
    let currentHumidity = response.data.temperature.humidity;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${currentHumidity}%`
}
function getWind(response){
    let currentWind = response.data.wind.speed
    let wind = document.querySelector("#wind");
    wind.innerHTML =`${currentWind}mph`
}
function updateWeather (event){
    event.preventDefault();
    let key ="tao66538c54c0667097f7523bafb4684"
    let searchInput = document.querySelector("#search-input")
    let city = searchInput.value
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=imperial`
    axios.get(apiURL).then(getWeather)
    axios.get(apiURL).then(weatherIcon)
    axios.get(apiURL).then(getHumidity);
    axios.get(apiURL).then(getWind);
}
function replaceParis (event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let paris = document.querySelector("#paris");
    paris.innerHTML = searchInput.value
}
let searchInput = document.querySelector("#search-input");
searchInput.addEventListener("focus", function () {
  if (searchInput.value === "Type a city...") {
    searchInput.value = "";
  }
});
function currentTime() {
  let now = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let time = document.querySelector("#time");
  time.innerHTML = `${day} ${hour}:${minute}`;
}
currentTime();
setInterval(currentTime, 60000);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",replaceParis);
searchForm.addEventListener("submit",updateWeather);

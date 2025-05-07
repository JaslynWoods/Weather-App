function getWeather(response) {
    let currentTemp = response.data.temperature.current;
    let temp = document.querySelector("#temp");
    temp.innerHTML = `${Math.round(currentTemp)}°F`;
  }
function updateWeather (event){
    event.preventDefault();
    let key ="tao66538c54c0667097f7523bafb4684"
    let searchInput = document.querySelector("#search-input")
    let city = searchInput.value
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=imperial`
    axios.get(apiURL).then(getWeather)
}
function replaceParis (event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let paris = document.querySelector("#paris");
    paris.innerHTML = searchInput.value
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",replaceParis);
searchForm.addEventListener("submit",updateWeather);

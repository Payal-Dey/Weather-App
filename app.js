const apikey = "YOUR-API-KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const city = document.querySelector("#input_city");
const btn = document.querySelector(".search");
const locatn = document.querySelector("#location");
const temp = document.querySelector("#temp");
const description = document.querySelector("#description");

btn.addEventListener("click", () => {
  let loc = city.value;
  if (loc) {
    getWeather(loc);
  }
});

const getWeather = async (loc) => {
  const url = `${BASE_URL}?q=${loc}&appid=${apikey}&units=metric`;

  let response = await fetch(url);
  let data = await response.json();
  locatn.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].main;
};
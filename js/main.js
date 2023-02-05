let temp1, description1, feelTemp1, speedWind1, airHumidity1;
const timeUpdateContant = document.querySelector(".time-updated-content")
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const feelTemp = document.querySelector(".feelsTemp");
const speedWind = document.querySelector(".speed-wind");
const airHumidity = document.querySelector(".air-humidity");
const infoBtn = document.querySelector(".info-btn");
async function getData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=54.73&lon=55.94&appid=421d91c7c0634c31de660810cc0daf10&lang=ru&units=metric');
    const data = await response.json();
    temp1 = data.main.temp;
    feelTemp1 = data.main.feels_like;
    speedWind1 = data.wind.speed;
    airHumidity1 = data.main.humidity;
    timeUpdated = data.fact;
    return temp1, feelTemp1, speedWind1, airHumidity1;
}
infoBtn.addEventListener("click", () => {
    getData();
    temp.innerHTML = temp1;
    feelTemp.innerHTML = feelTemp1;
    speedWind.innerHTML = speedWind1 + " м/с.";
    airHumidity.innerHTML = airHumidity1 + "%";
})


const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const feelTemp = document.querySelector(".feelsTemp");
const speedWind = document.querySelector(".speed-wind");
const airHumidity = document.querySelector(".air-humidity");
const infoBtn = document.querySelector(".info-btn");
async function getData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=54.73&lon=55.94&appid=421d91c7c0634c31de660810cc0daf10&lang=ru&units=metric');
    const data = await response.json();
    temp.innerHTML = data.main.temp.toFixed();
    feelTemp.innerHTML = Math.ceil(data.main.feels_like);
    speedWind.innerHTML = data.wind.speed + " м/с.";
    airHumidity.innerHTML = data.main.humidity + "%";
}
window.addEventListener("load", ()=> {
    getData();
});
infoBtn.addEventListener("click", () => {
    getData();
})



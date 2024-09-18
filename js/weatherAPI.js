const API_KEY = "b137df75e7b92a2906b5c653a51179fd";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


async function getWeatherData(city) {
    const response = await fetch(API_URL + city +`&appid=${API_KEY}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    return await response.json();
    }


    export {getWeatherData}
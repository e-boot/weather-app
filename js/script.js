import {getWeatherData} from "./weatherAPI.js";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
        

        /**
         * Main function to check weather from API data and update the view
         * @param city weather data
         */
        async function checkWeather(city) {
            const data = await getWeatherData(city);
           updateFields(data) ;
        }


        /**
         * Updates fields such as name, temperature, humidity, wind speed and image
         * @param data of city weather
         */
        function updateFields(data) {
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
            
            if(data.weather[0].main ==  "Clouds") {
                weatherIcon.src = "../assets/images/clouds.png";
            }
            if(data.weather[0].main ==  "Clear") {
                weatherIcon.src = "../assets/images/clear.png";
            }
            if(data.weather[0].main ==  "Rain") {
                weatherIcon.src = "../assets/images/rain.png";
            }
            if(data.weather[0].main ==  "Drizzle") {
                weatherIcon.src = "../assets/images/drizzle.png";
            }
            if(data.weather[0].main ==  "Mist") {
                weatherIcon.src = "../assets/images/mist.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }

        // listens to button search click
        searchBtn.addEventListener("click", () =>{
            checkWeather(searchBox.value);
        })

        // listens for Enter key press
    searchBox.addEventListener("keypress", (e)=>{
            if(e.key ==="Enter") {
                checkWeather(searchBox.value);
            }
        });



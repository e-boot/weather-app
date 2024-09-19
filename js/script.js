import {getWeatherData} from "./weatherAPI.js";
import { showLoader, hideLoader } from "./loader.js";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

        /**
         * Main function to check weather from API data and update the view
         * @param city weather data
         */
        async function checkWeather(city) {
           showLoader();
           try{
            const data = await getWeatherData(city);
            updateFields(data) ;
           }finally{
            hideLoader();
           }
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

            switch(data.weather[0].main){
                case "Clouds":
                    weatherIcon.src = "https://e-boot.github.io/weather-app/assets/clouds.png";
                case "Clear":
                    weatherIcon.src = "https://e-boot.github.io/weather-app/assets/clear.png";
                case "Rain":
                    weatherIcon.src = "https://e-boot.github.io/weather-app/assets/rain.png";
                case "Drizzle":
                    weatherIcon.src = "https://e-boot.github.io/weather-app/assets/drizzle.png";
                case  "Mist":
                    weatherIcon.src = "https://e-boot.github.io/weather-app/assets/mist.png";
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



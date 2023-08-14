

  <script>

            const apikey = "8e1b83f3ba83a73a22e63cca709f154e";
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

            const searchBox = document.querySelector(".search input");
            const searchBtn = document.querySelector(".search button");
            const weatherIcon = document.querySelector(".weather-icon");
            const backvideo = document.querySelector(".back-video");

            async function checkWeather(city){
                const response = await fetch(apiUrl + city + `&appid=${apikey}`);
                
                    var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
                
                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "icons/sunny.png";
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "icons/sun.png";
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "icons/rain.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "icons/strom.png";
               }
               else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "icons/clouds.png";
               }

               document.querySelector(".weather").style.display = "block";
               document.querySelector('video').playbackRate = 0.25;

                }


            searchBtn.addEventListener("click", ()=>{
                checkWeather(searchBox.value);
            })
        
        
        </script>

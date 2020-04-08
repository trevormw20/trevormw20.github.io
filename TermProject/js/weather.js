cityURL = "//api.openweathermap.org/data/2.5/weather?lat=34.0507&lon=-88.2528&appid=eb0f0966f8ca6774077376063c359fb3&units=imperial";

  const apiURL = cityURL;
  fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    let weatherBox = document.createElement('section');
    let condition = document.createElement('h3');
    let temp = document.createElement('h3');
    let windChill = document.createElement('h3');
    let windSpeed = document.createElement('h3');
    let humidity = document.createElement('h3');
    let icon = document.createElement("img");

    condition.textContent = "Weather Condition: " + weatherInfo.weather[0].description;
    temp.textContent = "High Temp: " + weatherInfo.main.temp;
    windChill.textContent = "Wind Chill: " + Math.round(35.74 + (0.6215 * weatherInfo.main.temp) - (35.75 * Math.pow(weatherInfo.wind.speed, 0.16)) + (0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16)))
    windSpeed.textContent = "Wind Speed: " + weatherInfo.wind.speed;
    humidity.textContent = "Humidity: " + weatherInfo.main.humidity;
    let iconcode = weatherInfo.weather[0].icon;
    let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
    icon.src=iconPath;
    icon.setAttribute('alt', "Weahter Condition Icon");

    weatherBox.appendChild(icon);
    weatherBox.appendChild(condition);
    weatherBox.appendChild(temp);
    weatherBox.appendChild(windSpeed);
    weatherBox.appendChild(windChill);
    weatherBox.appendChild(humidity);

    document.getElementById('weather').appendChild(weatherBox);
  }  
);
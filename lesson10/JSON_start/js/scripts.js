const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&APPID=eb0f0966f8ca6774077376063c359fb3&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('place').textContent = jsObject.name;
    //document.getElementById('condition').textContent = jsObject.weather.description;
    document.getElementById('currentTemp').textContent = jsObject.main.temp;
    //document.getElementById('highTemp').textContent = jsObject.main.temp_max;
    //document.getElementById('windChill').textContent = jsObject.main.temp - jsObject.wind.speed;
    //document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;

   

    const iconcode = weatherInfo.weather[0].icon;

    const icon_path="//openweathermap.org/img/w/04n"+iconcode+".png";

    document.getElementById('weather_icon').src = icon_path;
  });
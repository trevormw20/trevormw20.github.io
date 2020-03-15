/*const apiURL1 = "//api.openweathermap.org/data/2.5/weather?id=5604473&APPID=eb0f0966f8ca6774077376063c359fb3&units=imperial";
fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('townName').innerText = jsObject.name;
    document.getElementById('condition').innerText = jsObject.weather.description;
    document.getElementById('temp').innerText = jsObject.main.temp;
    //document.getElementById('highTemp').innerText = jsObject.main.temp_max;
    document.getElementById('windChill').innerText = (jsObject.main.temp - jsObject.wind.speed);
    document.getElementById('humidity').innerText = jsObject.main.humidity;
    document.getElementById('windSpeed').innerText = jsObject.wind.speed;

   

    //const iconcode = weatherInfo.weather[0].icon;

    //const icon_path="//openweathermap.org/img/w/04n"+iconcode+".png";

    //document.getElementById('weather_icon').src = icon_path;
  });
*/
  const d = new Date();
  
  const todayDayNumber =d.getDay();

  const weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";

  const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=eb0f0966f8ca6774077376063c359fb3&units=imperial";


  fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    document.getElementById("townName").textContent = weatherInfo.city.name;

    let mylist = weatherInfo.list;

    let forecastDayNumber = todayDayNumber;

    document.getElementById('condition').innerText = weatherInfo.list[todayDayNumber].weather[0].description;
    document.getElementById('highTemp').innerText = weatherInfo.list[todayDayNumber].main.temp;
    document.getElementById('windChill').innerText = weatherInfo.list[todayDayNumber].main.feels_like;
    document.getElementById('humidity').innerText = weatherInfo.list[todayDayNumber].main.humidity;
    document.getElementById('windSpeed').innerText = weatherInfo.list[todayDayNumber].wind.speed;

    for (i=0; i<mylist.length; i++) {
      let time = mylist[i].dt_txt;

      if (time.includes('21:00:00')) {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7){forecastDayNumber = 0};
        let theDayName = document.createElement("p");
        theDayName.textContent = weekDay[forecastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src=iconPath;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        document.getElementById('weatherForecast').appendChild(theDay);
      }
    }
  }  
);
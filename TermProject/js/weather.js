  const d = new Date();
  const todayDayNumber = d.getDay();

  const weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";

  cityURL = "//api.openweathermap.org/data/2.5/weather?lat=34.0507&lon=-88.2528&appid=eb0f0966f8ca6774077376063c359fb3&units=imperial";

  const apiURL = cityURL;
  fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    document.getElementById("townName").textContent = weatherInfo.city.name;

    let mylist = weatherInfo.list;

    let forecastDayNumber = todayDayNumber;

    document.getElementById('condition').innerText = weatherInfo.list[todayDayNumber].weather[0].description;
    document.getElementById('highTemp').innerText = weatherInfo.list[todayDayNumber].main.temp;
    document.getElementById('windChill').innerText = Math.round(35.74 + (0.6215 * weatherInfo.list[todayDayNumber].main.temp) - (35.75 * Math.pow(weatherInfo.list[todayDayNumber].wind.speed, 0.16)) + (0.4275 * weatherInfo.list[todayDayNumber].main.temp * Math.pow(weatherInfo.list[todayDayNumber].wind.speed, 0.16)))
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

        document.getElementById('weather').appendChild(theDay);
      }
    }
  }  
);
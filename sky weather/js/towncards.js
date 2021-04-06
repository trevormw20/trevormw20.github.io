const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const onlyShow = jsonObject['towns'];
    console.table(jsonObject);

    let towns = [onlyShow[0], onlyShow[5], onlyShow[2]];

    towns.forEach(town => {
        let townHolder = document.createElement('section');
        let townName = document.createElement('h1');
        let motto = document.createElement('h4');
        let founded = document.createElement('pre');
        let population = document.createElement('pre');
        let rainFall = document.createElement('pre');
        let townImage = document.createElement('img');
        let events = document.createElement('h3');   
        let div = document.createElement('div');
        events.setAttribute('style', 'white-space: pre;');
        
        townName.textContent = town.name;
        motto.textContent = town.motto;
        founded.textContent = 'Year Founded: ' + town.yearFounded;
        population.textContent = 'Population: ' + town.currentPopulation;
        rainFall.textContent = 'Annual Rainfall: ' + town.averageRainfall;
        townImage.setAttribute('src', 'images/' + town.photo);
        townImage.setAttribute('alt', townName);
        events.setAttribute('id', 'events');
        if (town.events[0] != null){
          events.textContent = "Upcoming Events" + '\r\n' + '&nbsp';
          events.textContent += town.events[0];
        }
        if (town.events[1] != null)
            events.textContent += '\r\n' + town.events[1];
        if (town.events[2] != null)
            events.textContent += '\r\n' + town.events[2];
        if (town.events[3] != null)
            events.textContent += '\r\n' + town.events[3];

        div.appendChild(townName);
        div.appendChild(motto);
        div.appendChild(founded);
        div.appendChild(population);
        div.appendChild(rainFall);
        
        townHolder.appendChild(div);
        townHolder.appendChild(townImage);
        townHolder.appendChild(events);

        document.querySelector('div#towns').appendChild(townHolder);
    });
  });
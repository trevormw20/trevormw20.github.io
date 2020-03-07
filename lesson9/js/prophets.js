const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject);
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let date = document.createElement('pre');
        let place = document.createElement('pre');
        
        
        h2.textContent = prophet.name + ' ' + prophet.lastname;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', h2);
        date.textContent = 'Date of Birth: ' + prophet.birthdate;
        place.textContent = 'Place of Birth: ' + prophet.birthplace;

        card.appendChild(h2);
        card.appendChild(date);
        card.appendChild(place);
        card.appendChild(image);


        document.querySelector('div.cards').appendChild(card);
    });
  });

 
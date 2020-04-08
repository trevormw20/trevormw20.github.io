const requestURL = 'https://trevormw20.github.io/TermProject/json/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['guides'];
    console.table(jsonObject);
    guides.forEach(guides => {
        let guideBox = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let experience = document.createElement('pre');
        let email = document.createElement('pre');
        let certificate = document.createElement('img');
        let bio = document.createElement('pre');
        
        
        h2.textContent = guides.name + ' ' + guides.lastname;
        image.setAttribute('src', guides.imageurl);
        image.setAttribute('alt', name);
        certificate.setAttribute('src', guides.certificate);
        certificate.setAttribute('alt', name);
        experience.textContent = 'Years of Experience: ' + guides.experience;
        email.textContent = 'Email Address: ' + guides.email;
        bio.textContent = 'Biography: ' + guides.bio;

        guideBox.appendChild(name);
        guideBox.appendChild(image);
        guideBox.appendChild(certificate);
        guideBox.appendChild(experience);
        guideBox.appendChild(email);
        guideBox.appendChild(bio);

        document.querySelector('div.guides').appendChild(guideBox);
    });
  });
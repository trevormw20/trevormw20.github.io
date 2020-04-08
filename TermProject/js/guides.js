const requestURL = 'json/guidesInfo.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['guides'];
    console.table(jsonObject);
    guides.forEach(guide => {
        let guideBox = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let experience = document.createElement('pre');
        let email = document.createElement('pre');
        let certificate = document.createElement('img');
        let bio = document.createElement('pre');
        
        
        name.textContent = guide.name + ' ' + guide.lastname;
        image.setAttribute('src', guide.imageurl);
        image.setAttribute('alt', name);
        certificate.setAttribute('src', guide.certificate);
        certificate.setAttribute('alt', name);
        experience.textContent = 'Years of Experience: ' + guide.experience;
        email.textContent = 'Email Address: ' + guide.email;
        bio.textContent = 'Biography: ' + guide.bio;

        guideBox.appendChild(name);
        guideBox.appendChild(image);
        guideBox.appendChild(certificate);
        guideBox.appendChild(experience);
        guideBox.appendChild(email);
        guideBox.appendChild(bio);

        document.querySelector('div.guides').appendChild(guideBox);
    });
  });
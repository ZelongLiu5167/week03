window.addEventListener('load', function () {
  let zodiacData;
  let input = document.getElementById('year-input');
  let button = document.getElementById('zodiac-button');
  let zodiacResult = document.getElementById('animal');

  button.addEventListener('click', function() {
      let birthyear = input.value;

      fetch('./zodiac.json')
          .then(response => response.json())
          .then(data => {
              zodiacData = data;

              let foundZodiac = zodiacData.zodiac.find(entry => entry.year === parseInt(birthyear));

              if (foundZodiac) {
                  zodiacResult.innerHTML = foundZodiac.animal; 
              }
          });
  });
});

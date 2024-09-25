window.addEventListener('load', function () {
    let zodiacData;
    let input = document.getElementById('year-input');
    let button = document.getElementById('zodiac-button');
    let zodiacResult = document.getElementById('animal');



    button.addEventListener('click', function() {
        fetch('zodiac.json')
        .then(response => response.json())
        .then(data => {
            zodiacData = data; 
            zodiacResult.innerHTML = data.animal;
        });
        let birthyear = input.value；

    });
});
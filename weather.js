const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const card = document.querySelector('.card');
const apiKey = '186bd92314835c94758c15e93bbe4c95'; 


weatherForm.addEventListener('submit',  async e => {
    e.preventDefault();
     const city = cityInput.value;
     if(city){

        try{
            const weatherdata = await getWeatherData(city);
            displayWeatherInfo(weatherdata)

        }
        catch(error){
         console.error(error)
         displayError(error)
        }
     }else
     {
        displayError("Please enter a city");
     }

});
async function getWeatherData(city) {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(api_url);
    if(!response.ok){
        throw new Error('City not found');
    }
    const data = await response.json();
    return data;
}

function displayWeatherInfo(data){
    console.log(data);
    const {name:city,
        main:{temp,humidity}
        ,weather:[{description, id}]} = data;
    card.textContent = '';
    card.style.display = 'flex';
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');

    cityDisplay.textContent = `Weather in ${city}`;
    tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(2)} °C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = `Description: ${description}`;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descriptionDisplay.classList.add('descDisplay');
    weatherEmoji.classList.add('weatherEmoji');

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(weatherEmoji);    
    

}
function getWeatherEmoji(weatherId){
    switch(true){
        case weatherId >= 200 && weatherId < 300:
            return '⛈️'; 
        case weatherId >= 300 && weatherId < 500:
            return '🌦️';
        case weatherId >= 500 && weatherId < 600:
            return '🌧️';   
        case weatherId >= 600 && weatherId < 700:
            return '❄️';  
        case weatherId >= 700 && weatherId < 800:
            return '🌫️';
        case weatherId === 800:
            return '☀️';
        case weatherId > 800 && weatherId < 900:
            return '☁️';
        default:
            return '🌈';       

}
};

function displayError(message){
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');
    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay);

}
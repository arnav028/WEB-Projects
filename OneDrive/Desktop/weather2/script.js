const inputBox = document.querySelector('.input-box');
const maginifier = document.querySelector('.maginifier-glass');
const weatherimage = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.wind-speed');

async function checkweather(city) {
    const api_key = "1b1e3a45e8c35021f3f8177ce2d0a0a2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(url).then(response => response.json());

    
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML =`${weather_data.main.humidity}%`;
    windspeed.innerHTML =  `${weather_data.wind.speed}km/h`;

    switch(weather_data.weather[0].main){
        case `cloud`:
        weatherimage.src="/cloud.png"
        break;

        case `Rain`:
            weatherimage.src="/rain.png"
            break;
            
            case `Mist`:
                weatherimage.src="/mist.png"
                break;

                case `Snow`:
                    weatherimage.src="/snow.png"
                    break;

                    case `Clear`:
                        weatherimage.src="/clear.png"
                        break;

    }
    console.log(weather_data);

/*     temperature.innerHTML = `${weather_data.main.temp}`;
*/
}

maginifier.addEventListener('click', () => {
    checkweather(inputBox.value);
});

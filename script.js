document.getElementById('fetchWeatherBtn').addEventListener('click', fetchWeather);
function fetchWeather() {
    fetch('https://wttr.in/?format=j1')
        .then(response => response.json())
        .then(data => {
            const location = data.nearest_area[0].areaName[0].value;
            const temperature = data.current_condition[0].temp_F;
            const feelsLike = data.current_condition[0].FeelsLikeF;
            const description = data.current_condition[0].weatherDesc[0].value;
            displayWeather(location, temperature, feelsLike, description);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(location, temperature, feelsLike, description) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = <><p>${location}</p><p>${temperature}°F</p><p>Feels Like: ${feelsLike}</p><p> ${description}</p></>}
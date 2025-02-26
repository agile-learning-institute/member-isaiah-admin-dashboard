import {iconsData} from './nav_elements.js';
import {textData} from './projects.js';
import {announcementsData} from './announcements.js';
import {trendingData} from 'trending.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('The page has loaded!');

    const sidebarContainer = document.getElementById("sidebar");
    iconsData.forEach(item => {
        let html = document.createElement("div");
        html.className = item.icon;
        html.innerText = item.label;
        sidebarContainer.appendChild(html);
    });
});
console.log("The sidebar has been loaded");

    const projectContainer = document.getElementById(".projects");
        textData.forEach(item => {
            let html = document.createElement("div");
            html.className = "card";
            html.innerText = item.heading4;
            html.innerText = item.sentence;
            html.innerHTML = item.threeImages;
            projectContainer.appendChild(html);
            });

   const anncouncementContainer = document.getElementById(".announcements");
   announcementsData.forEach(item => {
         let html = document.createElement("div");
         html.className = "card";
         html.innerText = item.heading;
         html.innerText = item.content;
         anncouncementContainer.appendChild(html);
    });
    const trendingContainer = document.getElementById(".trending");
    trendingData.forEach(item => {
          let html = document.createElement("div");
          html.className = "card";
          html.innerText = item.imageBox;
          html.innerText = item.textBox;
          trendingContainer.appendChild(html);
     });

     document.getElementById('fetchWeatherBtn').addEventListener('onClick', fetchWeather);
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
         const weatherInfoDiv = document.getElementById('temperatureDisplay');
         weatherInfoDiv.innerHTML = <><p>${location}</p><p>${temperature}°F</p><p>Feels Like: ${feelsLike}</p><p> ${description}</p></>}
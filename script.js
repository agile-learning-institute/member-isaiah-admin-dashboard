document.addEventListener('DOMContentLoaded', function () {
    console.log('The page has loaded!');

    iconsData.forEach(item => {
    const sidebarContainer = document.getElementById("sidebar");
        let html = document.createElement("div");
        html.className = item.icon;
        html.innerText = item.label;
        sidebarContainer.appendChild(html);
    });
    console.log("The sidebar has been loaded");

    const projectContainer = document.getElementById("projectCards");
    textData.forEach(item => {
        let html = document.createElement("div");
        html.className = "card";
        html.innerText = item.heading4;
        html.innerText = item.sentence;
        html.innerHTML = item.threeImages;
        projectContainer.appendChild(html);
    });
    console.log("The projectContainer has been loaded");

    const announcementContainer = document.getElementById("announcementCards");
    announcementsData.forEach(item => {
            let html = document.createElement("div");
            html.className = "card";
            html.innerText = item.heading;
            html.innerText = item.content;
            announcementContainer.appendChild(html);
    });
    console.log("The announcementContainer has been loaded");

    const trendingContainer = document.getElementById("trendingCards");
    trendingData.forEach(item => {
        let html = document.createElement("div");
        html.className = "card";
        html.innerText = item.imageBox;
        html.innerText = item.textBox;
        trendingContainer.appendChild(html);
    });
    console.log("The trendingContainer has been loaded");    
});

    // document.getElementById('fetchWeatherBtn').addEventListener('onClick', fetchWeather);
    // function fetchWeather() {
    //     fetch('https://wttr.in/?format=j1')
    //         .then(response => response.json())
    //         .then(data => {
    //             const location = data.nearest_area[0].areaName[0].value;
    //             const temperature = data.current_condition[0].temp_F;
    //             const feelsLike = data.current_condition[0].FeelsLikeF;
    //             const description = data.current_condition[0].weatherDesc[0].value;
    //             displayWeather(location, temperature, feelsLike, description);
    //         })
    //         .catch(error => console.error('Error fetching weather data:', error));
    // }

    // function displayWeather(location, temperature, feelsLike, description) {
    //     const weatherInfoDiv = document.getElementById('temperatureDisplay');
    //     weatherInfoDiv.innerHTML = <><p>${location}</p><p>${temperature}°F</p><p>Feels Like: ${feelsLike}</p><p> ${description}</p></>}
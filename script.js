document.addEventListener('DOMContentLoaded', function () {
    console.log('The page has loaded!');

    iconsData.forEach(item => {
    const sidebarContainer = document.getElementById("sidebar");
        let html = document.createElement("div");
        let svg = document.createElement("svg");
        svg = item.path;
        html.innerText = item.label;
        sidebarContainer.appendChild(html);
    });
    console.log("The sidebar has been loaded");

    const projectContainer = document.getElementById("projectCards");
    textData.forEach(item => {
        const card = document.createElement("div");
        card.className = 'card';

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = item.heading4;

        const cardText = document.createElement("p");
        cardText.textContent = item.sentence;

        const cardIcons = document.createElement("svg");
        cardIcons.svg = item.threeImages;

        card.appendChild(cardTitle);
        card.appendChild(cardText); 
        card.appendChild(cardIcons);
        projectContainer.appendChild(card);
    });
    console.log("The projectContainer has been loaded");

    const announcementContainer = document.getElementById("announcementCards");
    announcementsData.forEach(item => {
            const announcementCard = document.createElement("div");
            announcementCard.className = "card";

            const announcementTitle = document.createElement("h2");
            announcementTitle.textContent = item.heading;

            const announcementText = document.createElement("p");
            announcementText.textContent = item.content;

            announcementCard.appendChild(announcementTitle);
            announcementCard.appendChild(announcementText);
            announcementContainer.appendChild(announcementCard);
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
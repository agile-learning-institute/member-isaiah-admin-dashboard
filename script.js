console.log("Script is running...");
document.addEventListener('DOMContentLoaded', function () {
    console.log('The page has loaded!');

    const projectContainer = document.getElementById("proj");
    console.log("Project container found:", projectContainer);

    textData.forEach((item, index) => {
        console.log("Creating card for:", item);

        const card = document.createElement("div");
        card.className = 'card';

        const cardTitle = document.createElement("div");
        cardTitle.className = "proj-name";
        cardTitle.textContent = item.heading4;

        const cardText = document.createElement("p");
        cardText.className = "proj-details";
        cardText.textContent = item.sentence;

        const cardIcons = document.createElement("div");
        cardIcons.innerHTML = item.threeImages;

        card.appendChild(cardTitle);
        card.appendChild(cardText);
        card.appendChild(cardIcons);
        projectContainer.appendChild(card);

        console.log(`Card ${index + 1} added to container.`);
    });

    console.log("All cards should be added.");
    console.log("The projectContainer has been loaded");

    const announcementContainer = document.getElementById("cont-box");
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

    const trendingContainer = document.getElementById("trending");
    trendingContainer.innerHTML = '';
    trendingData.forEach(item => {
        let html = document.createElement("div");
        html.className = "card";
        html.innerText = item.imageBox;
        html.innerText = item.textBox;
        trendingContainer.appendChild(html);
    });
    console.log("The trendingContainer has been loaded");    
});
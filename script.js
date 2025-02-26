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
            projectContainerContainer.appendChild(html);
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
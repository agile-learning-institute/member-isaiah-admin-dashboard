function createAndAppendElement(tag, parent, classNames = [], innerHTML = "") {
    const element = document.createElement(tag);
    classNames.forEach((className) => element.classList.add(className));
    if (innerHTML) element.innerHTML = innerHTML;
    parent.appendChild(element);
    return element;
}

const selectors = [
    "#container",
    ".sidebar-container",
    ".mainbar-container",
    ".header-container",
    ".body-container",
    ".top-container",
    ".bottom-container",
    ".left-container",
    ".right-container",
    ".first-con",
    ".second-con",
    ".left-body-con",
    ".right-body-con",
];

const elements = {};
selectors.forEach(selector => {
    elements[selector] = document.querySelector(selector);
});

const elementsToCreate = [
    { parent: elements[".left-container"], classes: ["search-icon", "search"], content: `<span class="mdi mdi-magnify"></span>` },
    { parent: elements[".left-container"], classes: ["search-bar", "search"], content: `<input type="text" id="search_bar" name="search_bar">` },
    { parent: elements[".right-container"], classes: ["notification-icon", "right-div"], content: `<span class="mdi mdi-bell-badge-outline"></span>` },
    { parent: elements[".right-container"], classes: ["cat-head-image", "right-div"], content: `<img src="./images/catmww.png" alt="cat head image">` },
    { parent: elements[".right-container"], classes: ["name-text", "right-div"], content: `<span class="name-user">MorganOakley</span>` },
    { parent: elements[".first-con"], classes: ["image-large"], content: `<img src="./images/catmww.png" alt="cat head image">` },
    { parent: elements[".first-con"], classes: ["text-large"], content: `<span class="greet-user">Hi there,</span><p class="name-morgan">Morgan Oakley (@morgan)</p>` },
];

elementsToCreate.forEach(({ parent, classes, content }) =>
    createAndAppendElement("div", parent, classes, content)
);

// Buttons with text to create inside .second-con
const buttonTexts = ["New", "Upload", "Share"];
buttonTexts.forEach(text => {
    createAndAppendElement("button", elements[".second-con"], ["btn"], text);
});
const iconsData = [
    {
        "label": "Dashboard",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Z\"/></svg>"
    },
    {
        "label": "Home",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z\"/></svg>"
    },
    {
        "label": "Profile",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z\"/></svg>"
    },
    {
        "label": "Message",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z\"/></svg>"
    },
    {
        "label": "History",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z\"/></svg>"
    },
    {
        "label": "Task",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200Z\"/></svg>"
    },
    {
        "label": "Community",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z\"/></svg>"
    },
    {
        "label": "Setting",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z\"/></svg>"
    },
    {
        "label": "Support",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"M480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm-36-154h74q0-36 8-53t34-43q35-35 49.5-58.5T624-602q0-53-36-85.5T491-720q-55 0-93.5 27T344-618l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-33 29-45.5 55.5T444-394ZM200-120q-33 0-56.5-23.5T120-200v-480q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v480q0 33-23.5 56.5T760-120H200Z\"/></svg>"
    },
    {
        "label": "Privacy",
        "icon": "<svg class=\"list-items-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Z\"/></svg>"
    }
];
const textData = [
    {
        "heading4": "Super Cool Project",
        "sentence": "<p>Por outro lado, governos têm papel crucial na promoção de políticas públicas que incentivem ações sustentáveis.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Less Cool Project",
        "sentence": "<p>Públicas que incentivem ações sustentáveis. Investimentos em transporte público, reflorestamento e educação ambiental são.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Impossible App",
        "sentence": "<p>Promover a sustentabilidade não é apenas uma necessidade, mas uma responsabilidade coletiva. Ao agir hoje, asseguramos um planeta habitável para as próximas gerações</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Easy Peasy App",
        "sentence": "<p>A mudança, no entanto, começa com pequenas ações individuais. Cada pessoa pode contribuir, seja economizando água, reduzindo.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Ad Blocker",
        "sentence": "<p>Investir em educação é investir no futuro. Um país com uma população educada é um país mais desenvolvido e próspero. A educação nos permite.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Money Maker",
        "sentence": "<p>A educação é a chave para um futuro melhor. Ela nos capacita a pensar criticamente, a resolver problemas e a tomar decisões informadas.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    }
];
 const announcementsData = [
    {
        "heading": "<span>Site Maintenance</span>",
        "content": "<p>Por outro lado, governos têm papel crucial na promoção de políticas públicas que incentivem ações sustentáveis.</p>"
    },
    {
        "heading": "<span>Community Share Day</span>",
        "content": "<p>Públicas que incentivem ações sustentáveis. Investimentos em transporte público, reflorestamento e educação.</p>"
    },
    {
        "heading": "<span>Updated Privacy Policy</span>",
        "content": "<p>Promover a sustentabilidade não é apenas uma necessidade, mas uma responsabilidade coletiva. Ao agir hoje, asseguramos.</p>"
    }
];
const trendingData = [
    {
        "imageBox": "<div class='image-box tegan'><img src='./images/dog.png' alt='A Dog' style='width: 23px; height: 23px;'></div>",
        "textBox": "<div class='text-box'><p>@tegan</p><p>World Peace Builder</p></div>"
    },
    {
        "imageBox": "<div class='image-box morgan'><img src='./images/catmww.png' alt='Cat head' style='width: 23px; height: 23px;'></div>",
        "textBox": "<div class='text-box'><p>@morgan</p><p>Super Cool Project</p></div>"
    },
    {
        "imageBox": "<div class='image-box kendall'><img src='./images/superhero.png' alt='Superhero picture' style='width: 23px; height: 23px;'></div>",
        "textBox": "<div class='text-box'><p>@kendall</p><p>Life Changing App</p></div>"
    },
    {
        "imageBox": "<div class='image-box alex'><img src='./images/penguin.png' alt='Picture of a penguin' style='width: 23px; height: 23px;'></div>",
        "textBox": "<div class='text-box'><p>@alex</p><p>No Traffic Maker</p></div>"
    }
];
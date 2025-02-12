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
    { parent: elements[".left-container"], classes: ["search-icon", "search"], content: <span class="mdi mdi-magnify"></span> },
    { parent: elements[".left-container"], classes: ["search-bar", "search"], content: <input type="text" id="search_bar" name="search_bar"> },
    { parent: elements[".right-container"], classes: ["notification-icon", "right-div"], content: <span class="mdi mdi-bell-badge-outline"></span> },
    { parent: elements[".right-container"], classes: ["cat-head-image", "right-div"], content: <img src="./images/catmww.png" alt="cat head image"> },
    { parent: elements[".right-container"], classes: ["name-text", "right-div"], content: <span class="name-user">MorganOakley</span> },
    { parent: elements[".first-con"], classes: ["image-large"], content: <img src="./images/catmww.png" alt="cat head image"> },
    { parent: elements[".first-con"], classes: ["text-large"], content: <span class="greet-user">Hi there,</span><p class="name-morgan">Morgan Oakley (@morgan)</p> },
];

elementsToCreate.forEach(({ parent, classes, content }) =>
    createAndAppendElement("div", parent, classes, content)
);

// Buttons with text to create inside .second-con
const buttonTexts = ["New", "Upload", "Share"];
buttonTexts.forEach(text => {
    createAndAppendElement("button", elements[".second-con"], ["btn"], text);
});

// Sidebar icons and labels
iconsData.forEach(iconObj => {
    const sidebarIcon = createAndAppendElement("div", elements[".sidebar-container"], ["sidebar-icon"], iconObj.icon);
    createAndAppendElement("span", sidebarIcon, ["label-text"], iconObj.label);
});
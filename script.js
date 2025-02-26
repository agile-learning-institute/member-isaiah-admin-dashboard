function createAndAppendElement(tag, parent, classNames = [], innerHTML = "") {
    const element = document.createElement(tag);
    classNames.forEach((className) => element.classList.add(className));
    if (innerHTML) element.innerHTML = innerHTML;
    parent.appendChild(element);
    return element;
}

    const selectors = [
        ".second-con",
 ];
    const elements = {};
    selectors.forEach(selector => {
        elements[selector] = document.querySelector(selector);
});

const buttonTexts = ["New", "Upload", "Share"];
buttonTexts.forEach(text => {
    createAndAppendElement("button", elements[".second-con"], ["btn"], text);
});

const sidebarContainer = document.getElementById("sidebar");
iconsData.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    itemList.appendChild(listItem);
});
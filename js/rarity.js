// let rarityJSON = require('../data/rarity_attributes.json')
const rarity_attributes = "../data/rarity_attributes.json";

const rarityAttributes = ["background", "body", "feet", "clothing", "hair", "arms", "environment", "head"];

let mainElement = document.querySelector(".rarity__body");
let elementDiv = document.createElement('div');
let div = document.createElement('div');

window.addEventListener("DOMContentLoaded", () => {
    mainElement.textContent = "Loading...";
    mainElement.innerHTML = "";
    
    fetch(rarity_attributes).then(response => response.json()).then(data => {
        let count = 0;
        data.forEach(element => {
            elementDiv.innerHTML = `${rarityAttributes[count]}`;
            elementDiv.classList.add("rarity__background-header");
            mainElement.appendChild(elementDiv);
            jsonList(element);
            count++;
        });
    });
});

const jsonList = item => {
    let emptyDiv = document.createElement('div');
    let emptyDiv2 = document.createElement('div');
    
    
    for (const [key, value] of Object.entries(item)) {
        elementDiv = document.createElement('div');
        elementDiv.classList.add("rarity__item");
        
        elementDiv.innerHTML = `${value}/10,000 : ${key}`;
        mainElement.appendChild(elementDiv);
    }

    mainElement.appendChild(emptyDiv);
    mainElement.appendChild(emptyDiv2);

}

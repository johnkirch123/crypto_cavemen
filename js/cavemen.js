const presale_minted = "../data/presale_minted.json";

const mainElement = document.querySelector(".cavemen__body");

let div;
let side1;
let side2;
let image;
let anchor;


fetch(presale_minted).then(response => response.json()).then(data => {
    data.sort((a, b) => {
        return a.attributes[1]['rarity-rank'] - b.attributes[1]['rarity-rank'];
    });
    
    for (let i = 0; i < data.length; i++) {
        image = document.createElement('img');
        div = document.createElement('div');
        side1 = document.createElement('div');
        side2 = document.createElement('div');
        anchor = document.createElement('a');

        
        image.src = `https://caveman-images.s3.us-west-1.amazonaws.com/${data[i].caveman}.jpg`;
        image.alt = "Caveman Image";

        image.classList.add("cavemen__img");
        div.classList.add("cavemen__item", "card");
        anchor.classList.add("cavemen__link");
        anchor.href = `https://caveman-images.s3.us-west-1.amazonaws.com/${data[i].caveman}.jpg`;
        anchor.target = "_blank";
        
        div.setAttribute("style", `height: ${image.height}px`);
        side1.classList.add("card__side", "card__side--front");
        side1.setAttribute("style", `height: ${image.height}px`);
        side2.classList.add("card__side", "card__side--back");
        side2.setAttribute("style", `height: ${image.height}px`);

        side1.appendChild(image);
        side1.appendChild(frontOfCard(data[i]));
        side2.appendChild(backOfCard(data[i]));
        div.appendChild(side1);
        div.appendChild(side2);
        
        anchor.appendChild(div);
        mainElement.append(anchor);
    }

    console.log(image.width);
});

const frontOfCard = element => {
    let div = document.createElement('div');
    div.classList.add('card__number');
   
    div.innerHTML += `<h3 class="card__header">Caveman #</h3><p class="card__details">${JSON.stringify(element.caveman)}</p>`;

    return div;
}

const backOfCard = element => {
    const { attributes } = element;

    let div = document.createElement('div');
    div.classList.add('card__attribute');
    
    for(let i = 0; i < attributes.length - 2; i++) {
        let obj = attributes[i+2];

        for (const [key, value] of Object.entries(obj)) {
            div.innerHTML += `<h3 class="card__header">${JSON.stringify(key)}</h3><p class="card__details">${JSON.stringify(value)}</p>`;
        }
    }
    return div;
}

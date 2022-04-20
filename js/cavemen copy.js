const presale_minted = "../data/minted.json";

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

        image.classList.add("card__img");
        div.classList.add("cavemen__item", "card");
        anchor.classList.add("card__link");
        anchor.href = `https://caveman-images.s3.us-west-1.amazonaws.com/${data[i].caveman}.jpg`;
        anchor.target = "_blank";
        
        
        side1.appendChild(image);
        side1.appendChild(frontOfCard(data[i]));
        side2.appendChild(backOfCard(data[i]));
        side1.classList.add("card__side", "card__side--front");
        side2.classList.add("card__side", "card__side--back");
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
   
    div.innerHTML += `<h3 class="card__header">Caveman #</h3>
                        <p class="card__number--num">${JSON.stringify(element.caveman)}</p>
                        <span class="card__number--rank">${JSON.stringify(element.attributes[1])}</span>
                    `;

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

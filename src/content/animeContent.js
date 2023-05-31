export function animeContent(){
    const animeContainer = document.querySelector('.anime-container');
    const titles = ["Seasonal", "Trending", "Top Rated"];
    for (let title of titles) {
        let value = title.toLowerCase();

        let container = animeContainer.appendChild(document.createElement('div'));
        container.setAttribute('class', `${value}-container display-container d-flex flex-column justify-content-around align-items-start mx-3`);

        let label = container.appendChild(document.createElement('p'));
        label.setAttribute('class', `${value}-label pt-3 fs-4 mb-0`);
        label.textContent = title;

        let list = container.appendChild(document.createElement('div'));
        list.setAttribute('class', `${value}-anime anime-list h-25  bg-black bg-opacity-25 rounded mx-3`);
        
    }
}


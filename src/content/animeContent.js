export function animeContent(){
    const animeContainer = document.querySelector('.anime-container');
    const titles = ["Seasonal", "Trending", "Top Rated"];
    for (let title of titles) {
        console.log(title);
        let value = title.toLowerCase();

        let container = animeContainer.appendChild(document.createElement('div'));
        container.setAttribute('class', `${value}-container display-container d-flex flex-column justify-content-around align-items-start mx-3`);

        let label = container.appendChild(document.createElement('h3'));
        label.setAttribute('class', `${value}-label text-white pt-3`);
        label.textContent = title;

        let list = container.appendChild(document.createElement('div'));
        list.setAttribute('class', `${value}-anime anime-list bg-light rounded`);
    }
}


export function heroContent(){
    const hero = document.querySelector('.hero');
    const headlineContainer = hero.appendChild(document.createElement('div'));
    headlineContainer.setAttribute('class', 'headline-container w-50 py-2 bg-black bg-opacity-50 d-flex justify-content-center align-items-center ms-3');

    const searchContainer = hero.appendChild(document.createElement('div'));
    searchContainer.setAttribute('class','search-container w-50 h-25 d-flex flex-column justify-content-center align-items-center ms-3');
    
    const content = {
        headline: function(){
            const headline = headlineContainer.appendChild(document.createElement('h1'));
            headline.setAttribute("class", "headline-text text-white mb-0");
            headline.textContent = 'Find your Nakama'
        },
        search: function(){
            const input = searchContainer.appendChild(document.createElement('input'));
            input.setAttribute('type', 'text');
            input.setAttribute('class','search-input form-control w-100 rounded bg-opacaity-50 fs-2 border-3 border-black');
            input.setAttribute('placeholder', 'One Piece');
        },
        buttons: function(){
            const buttonsContainer = searchContainer.appendChild(document.createElement('div'));
            buttonsContainer.setAttribute('class', 'buttons-container w-100 h-25 pt-2');

            const anime = buttonsContainer.appendChild(document.createElement('button'));
            anime.setAttribute('class', 'btn btn-primary btn-lg w-50');
            anime.textContent = 'Anime'

            const manga = buttonsContainer.appendChild(document.createElement('button'));
            manga.setAttribute('class', 'btn btn-primary btn-lg w-50');
            manga.textContent = 'Manga'
        }
    }
    content.headline()
    content.search()
    content.buttons()
}
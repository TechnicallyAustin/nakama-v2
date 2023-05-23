export class Card {
    static all = [];
    constructor(title, image, info, rating, episodes, status, synopsis, users) {
        this.title = title;
        this.image = image;
        this.info = info;
        this.rating = rating;
        this.episodes = episodes;
        this.status = status;
        this.synopsis = synopsis;
        this.users = users;
    
        this.all.push(this);
    }
}

//export function domBuilder(animeObject){
    export const domBuilder = {
        card: null,
        createCard: function(){
            const card = document.createElement('div');
            card.setAttribute('class', `anime-card`);
            this.card = card;
        },
        title: function(title){
            const titleElement = this.card.appendChild(document.createElement('h2'));
            titleElement.setAttribute('class', ``);
            titleElement.textContent = title;
        },
        image: function(image){
            const imageElement = this.card.appendChild(document.createElement('img'));
            imageElement.setAttribute('class', ``);
            imageElement.setAttribute('src', image);
            imageElement.setAttribute('alt', ``);
        
        },
        info: function(info){
            const infoElement = this.card.appendChild(document.createElement('p'));
            infoElement.setAttribute('class', ``);
            infoElement.textContent = info;
        },
        rating: function(rating){
            const ratingElement = this.card.appendChild(document.createElement('p'));
            ratingElement.setAttribute('class', ``);
            ratingElement.textContent = rating;
        },
        episodes: function(episodes){
            const episodeElement = this.card.appendChild(document.createElement('p'));
            episodeElement.setAttribute('class', ``);
            episodeElement.textContent = episodes;
        },
        status: function(status){
            const statusElement = this.card.appendChild(document.createElement('p'));
            statusElement.setAttribute('class', ``);
            statusElement.textContent = status;
        },
        synopsis: function(synopsis){
            const synopsisElement = this.card.appendChild(document.createElement('p'));
            synopsisElement.setAttribute('class', ``);
            synopsisElement.textContent = synopsis;
        },
        users: function(users){
            const usersElement = this.card.appendChild(document.createElement('p'));
            usersElement.setAttribute('class', ``);
            usersElement.textContent = users;
        },
        build: function(title, image, info, rating, episodes, status, synopsis, users){
            this.createCard();
            this.title(title);
            this.image(image);
            this.info(info);
            this.rating(rating);
            this.episodes(episodes);
            this.status(status);
            this.synopsis(synopsis);
            this.users(users);
            return this.card;
        }
    }
//}
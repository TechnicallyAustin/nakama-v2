export class Card {

    constructor(title, image, info, rating, episodes, status, synopsis, users) {
        this.title = title;
        this.image = image;
        this.info = info;
        this.rating = rating;
        this.episodes = episodes;
        this.status = status;
        this.synopsis = synopsis;
        this.users = users;
        allCards.push(this);

    }
}

const allCards = []

export const domCard = (animeObject) => {
    const card = () => null;
    const createCard = () => {
        const newCard = document.createElement('div');
        card.setAttribute('class', `anime-card`);
        this.card = newCard;
    }
    const cardTitle = (title) => {
        const titleElement = this.card.appendChild(document.createElement('h2'));
        titleElement.setAttribute('class', ``);
        titleElement.textContent = title;
    }
    const cardImage = (image) => {
        const imageElement = this.card.appendChild(document.createElement('img'));
        imageElement.setAttribute('class', ``);
        imageElement.setAttribute('src', image);
        imageElement.setAttribute('alt', ``);
    }
    const cardInfo = (info) => {
        const infoElement = this.card.appendChild(document.createElement('p'));
        infoElement.setAttribute('class', ``);
        infoElement.textContent = info;
    }
    const cardRating = (rating) => {
        const ratingElement = this.card.appendChild(document.createElement('p'));
        ratingElement.setAttribute('class', ``);
        ratingElement.textContent = rating;
    }
    const cardEpisodes = (episodes) => {
        const episodesElement = this.card.appendChild(document.createElement('p'));
        episodesElement.setAttribute('class', ``);
        episodesElement.textContent = episodes;
    }
    const cardStatus = (status) => {
        const statusElement = this.card.appendChild(document.createElement('p'));
        statusElement.setAttribute('class', ``);
        statusElement.textContent = status;
    }
    const cardSynopsis = (synopsis) => {
        const synopsisElement = this.card.appendChild(document.createElement('p'));
        synopsisElement.setAttribute('class', ``);
        synopsisElement.textContent = synopsis;
    }
    const cardUsers = (users) => {
        const usersElement = this.card.appendChild(document.createElement('p'));
        usersElement.setAttribute('class', ``);
        usersElement.textContent = users;
    }
    const builder = (animeObject) => {
        createCard();
        cardTitle(animeObject.title);
        cardImage(animeObject.image);
        cardInfo(animeObject.info);
        cardRating(animeObject.rating);
        cardEpisodes(animeObject.episodes);
        cardStatus(animeObject.status);
        cardSynopsis(animeObject.synopsis);
        cardUsers(animeObject.users);
        return {card, createCard, cardTitle, cardImage, cardInfo, cardRating, cardEpisodes, cardStatus, cardSynopsis, cardUsers}
    }
    //return {card, cardTitle, cardImage, cardInfo, cardRating, cardEpisodes, cardStatus, cardSynopsis, cardUsers, builder}
    return {builder}
}

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
        build: function(object){
            this.createCard();
            console.log(title)
            this.title(object.title);
            this.image(object.image);
            this.info(object.info);
            this.rating(object.rating);
            this.episodes(object.episodes);
            this.status(object.status);
            this.synopsis(object.synopsis);
            this.users(object.users);
            return this.card;
        }
    }
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
        const imageElement = this.card.appendChild(document.createElement('image'));
        imageElement.setAttribute('class', `w-25 h-100`);
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
        console.log(object.title)
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

export const animeCard = {
    card: null,
    createCard: function(){
        const newCard = document.createElement('div');
        newCard.setAttribute('class', `anime-card card`);
        this.card = newCard;
    },
    overlay: function(title, rating){
        const container = this.card.appendChild(document.createElement('div'));
        container.setAttribute('class', `card-body bg-dark bg-opacity-75 d-flex justify-content-center align-items-center`);
        const elements = {
        label: function(title){
            const label = container.appendChild(document.createElement('p'));
            label.setAttribute('class', `card-title w-50 mb-0`);
            label.textContent = title;
        },
        rating: function(rating){
            const ratings = container.appendChild(document.createElement('p'));
            ratings.setAttribute('class', `card-text`);
            ratings.textContent = rating
        }}
        elements.label(title)
        elements.rating(rating)
    },
    cover: function(image){
        const cover = this.card.appendChild(document.createElement('img'));
        cover.setAttribute('class', `card-cover bg-black`);
        cover.setAttribute('src', image);
    },
    build: function(obj){
        this.createCard();
        this.overlay(obj.title, obj.rating)
        this.cover(obj.image);
        return this.card;
    }

}
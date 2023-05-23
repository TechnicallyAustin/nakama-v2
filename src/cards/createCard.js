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
        newCard.setAttribute('class', `anime-card w-25 h-100`);
        this.card = newCard;
    },
    cover: function(image){
        const cover = this.card.appendChild(document.createElement('img'));
        cover.setAttribute('class', `card-cover`);
        cover.setAttribute('src', `${image}`);
    },
    label: function(title){
        const label = this.card.appendChild(document.createElement('p'));
        label.setAttribute('class', ``);
        label.textContent = title;
    },
    rating: function(rating){
        const ratings = this.card.appendChild(document.createElement('p'));
        ratings.setAttribute('class', ``);
        ratings.textContent = rating
    },
    build: function(animeObject){
        this.createCard();
        this.cover(animeObject.cover);
        this.label(animeObject.label);
        this.rating(animeObject.rating);
        return this.card;
    }

}
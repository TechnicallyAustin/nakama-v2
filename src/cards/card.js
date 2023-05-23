class Card {
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

const domBuilder = {
    card: null,
    createCard: function(){
        const card = document.createElement('div');
        card.setAttribute('class', `anime-card`);
        this.card = card;
    },
    title: function(){
        const title = this.card.appendChild(document.createElement('h2'));
        title.setAttribute('class', ``);
    },
    image: function(){
        const image = this.card.appendChild(document.createElement('img'));
        image.setAttribute('class', ``);
        image.setAttribute('src', ``);
        image.setAttribute('alt', ``);

    },
    info: function(){
        const info = this.card.appendChild(document.createElement('p'));
        info.setAttribute('class', ``);
        info.textContent = ``;
    },
    rating: function(){
        const rating = this.card.appendChild(document.createElement('p'));
        rating.setAttribute('class', ``);
        rating.textContent = ``;
    },
    episodes: function(){
        const episodes = this.card.appendChild(document.createElement('p'));
        episodes.setAttribute('class', ``);
        episodes.textContent = ``;
    },
    status: function(){
        const status = this.card.appendChild(document.createElement('p'));
        status.setAttribute('class', ``);
        status.textContent = ``;
    },
    synopsis: function(){
        const synopsis = this.card.appendChild(document.createElement('p'));
        synopsis.setAttribute('class', ``);
        synopsis.textContent = ``;
    },
    users: function(){
        const users = this.card.appendChild(document.createElement('p'));
        users.setAttribute('class', ``);
        users.textContent = ``;
    }
}
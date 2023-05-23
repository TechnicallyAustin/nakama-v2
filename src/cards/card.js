
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
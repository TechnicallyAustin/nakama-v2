class Anime {
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
    }

    static find(name) {
        return Anime.all.find(anime => anime.name === name);
    }
    static findById(id) {
        return Anime.all.find(anime => anime.id === id);
    }
    static all() {
        return Anime.all;
    }
}
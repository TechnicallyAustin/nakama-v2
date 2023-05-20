class Anime {
    static all = [];
    constructor(name, type, status, url) {
        this.name = name;
        this.type = type;
        this.status = status;
        this.url = url;
        Anime.all.push(this);
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
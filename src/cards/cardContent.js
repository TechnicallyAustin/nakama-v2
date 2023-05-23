import { allAnime } from "../anime/anime";
import { getAnimes } from "../anime/getAnime";
import { Card, domBuilder } from "./card";

export async function cardContent(){
    const seasonal = document.querySelector('.seasonal-anime')
    const trending = document.querySelector('.trending-anime')
    const topRated = document.querySelector('.rated-anime') 

    await getAnimes()
    
    console.log("all Anime", allAnime, allAnime.length)
    for (let i = 0; i < allAnime.length; i++){
        let anime = allAnime[i]
        console.log(anime)
        let newCard = new Card(anime.title, anime.image, anime.info, anime.rating, anime.episodes, anime.status, anime.synopsis, anime.users)
        let newAnime = seasonal.appendChild(domBuilder.build(newCard));
        console.log("new Anime", newAnime)
    }
}
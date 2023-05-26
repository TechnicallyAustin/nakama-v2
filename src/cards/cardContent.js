import { allAnime } from "../anime/anime";
import { getAnimes } from "../anime/getAnime";
import { animeCard } from "./createCard";

export async function cardContent(){
    const seasonal = document.querySelector('.seasonal-anime')
    const trending = document.querySelector('.trending-anime')
    const topRated = document.querySelector('.rated-anime') 

    await getAnimes()
    console.log("all Anime", allAnime.length)
    allAnime.forEach(anime => {
        console.log(anime)
        //let newCard = domBuilder.build(anime)
        let newCard = animeCard.build(anime)
        seasonal.appendChild(newCard)
    })

}
import { allAnime } from "../anime/anime";
import { domBuilder } from "./card";

export function cardContent(){
    const seasonal = document.querySelector('.seasonal-anime')
    const trending = document.querySelector('.trending-anime')
    const topRated = document.querySelector('.rated-anime') 
    console.log(allAnime)
    console.log(domBuilder.build())
    for (let anime of allAnime){
        let newCard = seasonal.appendChild(domBuilder.build(anime))
    }
}
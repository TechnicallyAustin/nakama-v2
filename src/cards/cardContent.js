import { Anime } from "../anime/anime";
import { domBuilder } from "./card";

export function cardContent(){
    const seasonal = document.querySelector('.seasonal-anime')
    const trending = document.querySelector('.trending-anime')
    const topRated = document.querySelector('.rated-anime') 
    
    for (let anime of Anime.all){
        seasonal.appendChild(domBuilder.build())
    }
}
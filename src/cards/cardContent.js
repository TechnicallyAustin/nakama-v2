import { allAnime } from "../anime/anime";
import { getAnimes } from "../anime/getAnime";
import { getTrendingAnime } from "../anime/getTrendingAnime";
import { animeCard } from "./createCard";

export async function cardContent(){
    const seasonal = document.querySelector('.seasonal-anime')
    const trending = document.querySelector('.trending-anime')
    const topRated = document.querySelector('.rated-anime') 

    const load = {
        season: async function(){
            await getAnimes()
            //console.log("all Anime", allAnime.length)
            allAnime.forEach(anime => {
                let newCard = animeCard.build(anime)
                seasonal.appendChild(newCard)
            })
        },
        trending: async function(){
            await getTrendingAnime();
            //console.log("all Anime", allAnime.length)
            allAnime.forEach((anime) => {
              let newCard = animeCard.build(anime);
              trending.appendChild(newCard);
            });
        },
        topRated: function(){}
    }
    load.season()
    load.trending()
}
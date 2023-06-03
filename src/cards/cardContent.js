import { allAnime, seasonalAnime, trendingAnime } from "../anime/anime";

import { getAnimes } from "../anime/getAnime";
import { getSeasonalAnime } from "../anime/getSeasonalAnime";
import { getTrendingAnime } from "../anime/getTrendingAnime";
import { animeCard } from "./createCard";

export async function cardContent(){
    const seasonal = document.querySelector('.seasonal-anime')
    const trending = document.querySelector('.trending-anime')
    const topRated = document.querySelector('.rated-anime') 

    const load = {
        season: async function(){
            await getSeasonalAnime()
            //console.log("all Anime", allAnime.length)
            seasonalAnime.forEach(anime => {
                let newCard = animeCard.build(anime)
                seasonal.appendChild(newCard)
            })
        },
        trending: async function(){
            await getTrendingAnime();
            //console.log("all Anime", allAnime.length)
            trendingAnime.forEach((anime) => {
              let newCard = animeCard.build(anime);
              trending.appendChild(newCard);
            });
        },
        topRated: function(){}
    }
    load.season()
    load.trending()
}
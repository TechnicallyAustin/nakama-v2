import { Anime, seasonalAnime } from "./anime"
import { loadAnime } from "./loadAnime"


export async function getSeasonalAnime(){
    const url = process.env.URL
    const headers = {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
    }
    try{
        const response = await fetch(
          `${url}/anime?page[limit]=20&page[offset]=0?filter[seasonYear]=2023`,
          { mode: "cors" }
        );
        const anime = await response.json()
        console.log("seasonal",anime)
          for (let i = 0; i < anime.data.length; i++) {
    //console.log(anime.data[i]);
    //console.log(anime.data[i].attributes.canonicalTitle,anime.data[i]);
    //if (
    //  anime.data[i].attributes.canonicalTitle &&
    //  anime.data[i].coverImage !== null
    //) {
      //console.log("seasonal",anime.data[i]);
      let loadAnime = {
        title: anime.data[i].attributes.canonicalTitle,
        image: anime.data[i].attributes.coverImage.tiny,
        info: anime.data[i].attributes.description,
        rating: anime.data[i].attributes.averageRating,
        episodes: anime.data[i].attributes.episodeCount,
        status: anime.data[i].attributes.status,
        synopsis: anime.data[i].attributes.synopsis,
        users: anime.data[i].attributes.userCount,
      };
      //console.log(loadAnime.title,loadAnime.image,loadAnime.info,loadAnime.rating,loadAnime.episodes,loadAnime.status,loadAnime.synopsis,loadAnime.users);
      let newAnime = new Anime(
        loadAnime.title,
        loadAnime.image,
        loadAnime.info,
        loadAnime.rating,
        loadAnime.episodes,
        loadAnime.status,
        loadAnime.synopsis,
        loadAnime.users
      );
      seasonalAnime.push(newAnime);
     // console.log(newAnime);
    }
 // }
}
    catch(error){
        console.log(error)
    }
}
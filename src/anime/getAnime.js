import { Anime } from "./anime";

// contains fetch request to aqcuire animes
export async function getAnimes(){
    //const url = "https://kitsu.io/api/edge";
    const url = process.env.URL
    const apiKey = process.env.API_KEY;
    const options= {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await fetch(`${url}/anime?page[limit]=20&page[offset]=0`, {mode: 'cors'});
        const anime = await response.json();
            for (let i = 0; i < anime.data.length; i++) {
                //console.log(anime.data[i].attributes.canonicalTitle,anime.data[i]);
                if (anime.data[i].attributes.canonicalTitle && anime.data[i].coverImage){
                    let loadAnime = {
                        title: anime.data[i].attributes.canonicalTitle,
                        image: anime.data[i].attributes.coverImage,
                        info: anime.data[i].attributes.description,
                        rating: anime.data[i].attributes.averageRating,
                        episodes: anime.data[i].attributes.episodeCount,
                        status: anime.data[i].attributes.status,
                        synopsis: anime.data[i].attributes.synopsis,
                        users: anime.data[i].attributes.userCount,
                    }
                    console.log(loadAnime.title,loadAnime.image,loadAnime.info,loadAnime.rating,loadAnime.episodes,loadAnime.status,loadAnime.synopsis,loadAnime.users);
                    let newAnime = new Anime(loadAnime.title, loadAnime.image, loadAnime.info, loadAnime.rating, loadAnime.episodes, loadAnime.status, loadAnime.synopsis, loadAnime.users);
                    console.log("end if", newAnime);
                }
            };
    }   
    catch (error) {
        console.log(error);
    }
}
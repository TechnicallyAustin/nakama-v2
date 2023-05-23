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
        const response = await fetch(`${url}/anime`, {mode: 'cors'});
        const anime = await response.json();
        // build anime object
        //const animeList = [];
            for (let i = 0; i < anime.data.length; i++) {
                //console.log(anime.data[i].attributes.canonicalTitle,anime.data[i]);
                console.log(anime.data[i].attributes.coverImage)
                console.log(anime.data[i])
                let loadAnime = {
                    title: anime.data[i].attributes.canonicalTitle,
                    image: anime.data[i].attributes.coverImage,
                    info: anime.data[i].attributes.description,
                    rating: anime.data[i].attributes.averageRating,
                    episodes: anime.data[i].attributes.episodeCount,
                    status: anime.data[i].attributes.status,
                    synopsis: anime.data[i].attributes.synopsis,
                    users: anime.data[i].attributes.userCount
                }
                //animeList.push(loadAnime);
                let newAnime = new Anime(loadAnime.title, loadAnime.image, loadAnime.info, loadAnime.rating, loadAnime.episodes, loadAnime.status, loadAnime.synopsis, loadAnime.users);
                // create anime objects
                // when objects are created, they are added to static all in the anime class
            }
            console.log(Anime.all);
    }   
    catch (error) {
        console.log(error);
    }
}
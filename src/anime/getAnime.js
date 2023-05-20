// contains fetch request to aqcuire animes
export async function getAnimes(){
    //const url = "https://kitsu.io/api/edge";
    const url = process.env.URL
    console.log(url);
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
            for (let i = 0; i < anime.data.length; i++) {
                console.log(anime.data[i].attributes.canonicalTitle,anime.data[i]);
                let title = anime.data[i].attributes.canonicalTitle
                let image = anime.data[i].attributes.coverImage.small
                let info = anime.data[i].attributes.description
                let rating = anime.data[i].attributes.averageRating
                let episodes = anime.data[i].attributes.episodeCount
                let status = anime.data[i].attributes.status
                let synopsis = anime.data[i].attributes.synopsis
                let users =anime.data[i].attributes.userCount
                console.log(title,image,info,rating,episodes,status,synopsis,users);
            }}
    catch (error) {
        console.log(error);
    }

}
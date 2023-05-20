export async function getSeasonalAnime(){
    const url = process.env.URL
    const headers = {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
    }

    try{
        const response = await fetch(`${url}/anime?filter[seasonYear]=2023`, {mode: 'cors'})
        const anime = await response.json()
        for(let i = 0; i < anime.data.length; i++){
            console.log(anime.data[i].attributes.canonicalTitle)
            // build Anime object
        }
    }
    catch(error){
        console.log(error)
    }
}
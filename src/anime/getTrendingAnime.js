export async function getTrendingAnime(){
    const url = process.env.URL
    const response = await fetch(`${url}/trending/anime`, {mode: 'cors'})
    const trending = await response.json()

    for (let i = 0; i < trending.data.length; i++) {
        console.log(trending.data[i])
        // Build Anime object
    }
}
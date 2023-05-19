// contains fetch request to aqcuire animes
export async function getAnimes(){
    const url = "https://kitsu.io/api/edge";
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
        const response = await fetch(`${url}/anime`, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}
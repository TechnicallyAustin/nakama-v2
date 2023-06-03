export function mainContent(){
    const main = document.querySelector("main")
    const element = {
        hero: function (){
            const hero = main.appendChild(document.createElement("div"))
            hero.setAttribute("class", "hero bg-warning")
        },
        animeContainer: function (){
            const animeContainer = main.appendChild(document.createElement("div"))
            animeContainer.setAttribute("class", "anime-container bg-black d-flex flex-column justify-content-center align-items-center")
        }
    }
    element.hero()
    element.animeContainer()
}
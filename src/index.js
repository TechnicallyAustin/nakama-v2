import "bootstrap";
import "jquery";
import "popper.js";
import "../src/css/styles.css";
import { getAnimes } from "./anime/getAnime";
import { getSeasonalAnime } from "./anime/getSeasonalAnime";
import { getTrendingAnime } from "./anime/getTrendingAnime";
import { createPage } from "./page/createPage";
import { createContent } from "./content/createContent";

document.addEventListener("DOMContentLoaded", () => {
    createPage()
    createContent()
    //getAnimes()
    //getSeasonalAnime()
    getTrendingAnime()
});

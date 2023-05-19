import "bootstrap";
import "jquery";
import "popper.js";
import "../src/css/styles.css";
import { getAnimes } from "./anime/getAnime";

document.addEventListener("DOMContentLoaded", () => {
    //createPage()
    getAnimes()
});

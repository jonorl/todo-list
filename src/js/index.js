// Import other js modules and main CSS

import "../css/style.css";
import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js"

// Button selector

const topButtons = document.querySelectorAll("button")

// Event Listener

topButtons.forEach(topButton => {

    topButton.addEventListener("click",(event) => {
        let target = event.target;

        switch(target.id) {

            case "home":
                home();
                break;

            case "menu":
                menu();
                break;

            case "about":
                about();
                break;
        }
    })
});

// Console log as requested
console.log("hello restaurant")
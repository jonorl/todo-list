// Import all images from images directory

import waterImage from "../images/water.webp";
import fizzyWaterImage from "../images/fizzy_water.webp";
import coffeeImage from "../images/coffee.webp";
import saladImage from "../images/salad.webp";
import riceImage from "../images/rice.webp";
import eggsImage from "../images/poached_eggs.jpeg";
import pastaImage from "../images/prawn_pasta.jpeg";
import wrapsImage from "../images/wraps.webp";
import vitelImage from "../images/vitel_tone.jpg";
import gelatoImage from "../images/gelato.webp";

// Helper function for the menuImages object

function createImageElement(src) {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("menu-img");
    return img;
}

// menuImages object to better handle the images on the menu module

export const menuImages = {
    water: createImageElement(waterImage),
    fizzyWater: createImageElement(fizzyWaterImage),
    coffee: createImageElement(coffeeImage),
    salad: createImageElement(saladImage),
    rice: createImageElement(riceImage),
    eggs: createImageElement(eggsImage),
    pasta: createImageElement(pastaImage),
    wraps: createImageElement(wrapsImage),
    vitel: createImageElement(vitelImage),
    gelato: createImageElement(gelatoImage)
};
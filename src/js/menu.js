import "../css/menu.css";
import { menuImages } from "./menuImages.js";

export function menu() {
    // Clear previous content
    content.textContent = "";

    // Create and append the menu heading
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    content.appendChild(heading);

    // Beverages container
    const beveragesContainer = document.createElement("div");
    beveragesContainer.classList.add("beveragesContainer");

    const beveragesTitle = document.createElement("div");
    beveragesTitle.classList.add("beveragesTitle");
    beveragesTitle.textContent = "Beverages";
    beveragesContainer.appendChild(beveragesTitle);

    // Beverage one
    const beverageOne = document.createElement("div");
    beverageOne.classList.add("beverage-one");

    const beverageOneTitle = document.createElement("div");
    beverageOneTitle.classList.add("title");
    beverageOneTitle.textContent = "Water";
    beverageOne.appendChild(beverageOneTitle);

    const beverageOneContent = document.createElement("div");
    beverageOneContent.classList.add("content");
    beverageOneContent.textContent = "Tap water";
    beverageOne.appendChild(beverageOneContent);

    const beverageOnePrice = document.createElement("div");
    beverageOnePrice.classList.add("price");
    beverageOnePrice.textContent = "Free";
    beverageOne.appendChild(beverageOnePrice);

    const beverageOneImage = menuImages.water;
    beverageOneImage.classList.add("menu-img");
    beverageOne.appendChild(beverageOneImage);

    beveragesContainer.appendChild(beverageOne);

    // Beverage two
    const beverageTwo = document.createElement("div");
    beverageTwo.classList.add("beverage-two");

    const beverageTwoTitle = document.createElement("div");
    beverageTwoTitle.classList.add("title");
    beverageTwoTitle.textContent = "Fizzy Water";
    beverageTwo.appendChild(beverageTwoTitle);

    const beverageTwoContent = document.createElement("div");
    beverageTwoContent.classList.add("content");
    beverageTwoContent.textContent = "Tap water fizzied with CO2";
    beverageTwo.appendChild(beverageTwoContent);

    const beverageTwoPrice = document.createElement("div");
    beverageTwoPrice.classList.add("price");
    beverageTwoPrice.textContent = "£2";
    beverageTwo.appendChild(beverageTwoPrice);

    const beverageTwoImage = menuImages.fizzyWater;
    beverageTwoImage.classList.add("menu-img");
    beverageTwo.appendChild(beverageTwoImage);

    beveragesContainer.appendChild(beverageTwo);

    // Beverage three
    const beverageThree = document.createElement("div");
    beverageThree.classList.add("beverage-three");

    const beverageThreeTitle = document.createElement("div");
    beverageThreeTitle.classList.add("title");
    beverageThreeTitle.textContent = "Flat white";
    beverageThree.appendChild(beverageThreeTitle);

    const beverageThreeContent = document.createElement("div");
    beverageThreeContent.classList.add("content");
    beverageThreeContent.textContent = "Coffee with frothy milk";
    beverageThree.appendChild(beverageThreeContent);

    const beverageThreePrice = document.createElement("div");
    beverageThreePrice.classList.add("price");
    beverageThreePrice.textContent = "£3";
    beverageThree.appendChild(beverageThreePrice);

    const beverageThreeImage = menuImages.coffee;
    beverageThreeImage.classList.add("menu-img");
    beverageThree.appendChild(beverageThreeImage);

    beveragesContainer.appendChild(beverageThree);

    content.appendChild(beveragesContainer);

    // Sides container
    const sidesContainer = document.createElement("div");
    sidesContainer.classList.add("sidesContainer");

    const sidesTitle = document.createElement("div");
    sidesTitle.classList.add("sidesTitle");
    sidesTitle.textContent = "Sides";
    sidesContainer.appendChild(sidesTitle);

    // Side one
    const sidesOne = document.createElement("div");
    sidesOne.classList.add("sides-one");

    const sidesOneTitle = document.createElement("div");
    sidesOneTitle.classList.add("title");
    sidesOneTitle.textContent = "Salad";
    sidesOne.appendChild(sidesOneTitle);

    const sidesOneContent = document.createElement("div");
    sidesOneContent.classList.add("content");
    sidesOneContent.textContent = "Lettuce, tomatoes, carrots and ";
    sidesOneContent.appendChild(document.createElement("br")); 
    sidesOneContent.appendChild(document.createTextNode("avocado with balsamic, oil and salt"));
    sidesOne.appendChild(sidesOneContent);

    const sidesOnePrice = document.createElement("div");
    sidesOnePrice.classList.add("price");
    sidesOnePrice.textContent = "£8";
    sidesOne.appendChild(sidesOnePrice);

    const sidesOneImage = menuImages.salad;
    sidesOneImage.classList.add("menu-img");
    sidesOne.appendChild(sidesOneImage);

    sidesContainer.appendChild(sidesOne);

    // Side two
    const sidesTwo = document.createElement("div");
    sidesTwo.classList.add("sides-two");

    const sidesTwoTitle = document.createElement("div");
    sidesTwoTitle.classList.add("title");
    sidesTwoTitle.textContent = "Rice";
    sidesTwo.appendChild(sidesTwoTitle);

    const sidesTwoContent = document.createElement("div");
    sidesTwoContent.classList.add("content");
    sidesTwoContent.textContent = "White boiled rice";
    sidesTwo.appendChild(sidesTwoContent);

    const sidesTwoPrice = document.createElement("div");
    sidesTwoPrice.classList.add("price");
    sidesTwoPrice.textContent = "£6";
    sidesTwo.appendChild(sidesTwoPrice);

    const sidesTwoImage = menuImages.rice;
    sidesTwoImage.classList.add("menu-img");
    sidesTwo.appendChild(sidesTwoImage);

    sidesContainer.appendChild(sidesTwo);

    content.appendChild(sidesContainer);

    // Mains container
    const mainsContainer = document.createElement("div");
    mainsContainer.classList.add("mainsContainer");

    const mainsTitle = document.createElement("div");
    mainsTitle.classList.add("mainsTitle");
    mainsTitle.textContent = "Main Dishes";
    mainsContainer.appendChild(mainsTitle);

    // Main one
    const mainsOne = document.createElement("div");
    mainsOne.classList.add("mains-one");

    const mainsOneTitle = document.createElement("div");
    mainsOneTitle.classList.add("title");
    mainsOneTitle.textContent = "Poached Eggs";
    mainsOne.appendChild(mainsOneTitle);

    const mainsOneContent = document.createElement("div");
    mainsOneContent.classList.add("content");
    mainsOneContent.textContent = "Poached eggs on toast with avocado and salmon";
    mainsOne.appendChild(mainsOneContent);

    const mainsOnePrice = document.createElement("div");
    mainsOnePrice.classList.add("price");
    mainsOnePrice.textContent = "£14";
    mainsOne.appendChild(mainsOnePrice);

    const mainsOneImage = menuImages.eggs;
    mainsOneImage.classList.add("menu-img");
    mainsOne.appendChild(mainsOneImage);

    mainsContainer.appendChild(mainsOne);

    // Main two
    const mainsTwo = document.createElement("div");
    mainsTwo.classList.add("mains-two");

    const mainsTwoTitle = document.createElement("div");
    mainsTwoTitle.classList.add("title");
    mainsTwoTitle.textContent = "Prawn Pasta";
    mainsTwo.appendChild(mainsTwoTitle);

    const mainsTwoContent = document.createElement("div");
    mainsTwoContent.classList.add("content");
    mainsTwoContent.textContent = "Pasta with fried prawns and rocket";
    mainsTwo.appendChild(mainsTwoContent);

    const mainsTwoPrice = document.createElement("div");
    mainsTwoPrice.classList.add("price");
    mainsTwoPrice.textContent = "£16";
    mainsTwo.appendChild(mainsTwoPrice);

    const mainsTwoImage = menuImages.pasta;
    mainsTwoImage.classList.add("menu-img");
    mainsTwo.appendChild(mainsTwoImage);

    mainsContainer.appendChild(mainsTwo);

    // Main three
    const mainsThree = document.createElement("div");
    mainsThree.classList.add("mains-three");

    const mainsThreeTitle = document.createElement("div");
    mainsThreeTitle.classList.add("title");
    mainsThreeTitle.textContent = "Chicken Wraps";
    mainsThree.appendChild(mainsThreeTitle);

    const mainsThreeContent = document.createElement("div");
    mainsThreeContent.classList.add("content");
    mainsThreeContent.textContent = "Chicken wraps with avocado, cheese, salsa and soured cream";
    mainsThree.appendChild(mainsThreeContent);

    const mainsThreePrice = document.createElement("div");
    mainsThreePrice.classList.add("price");
    mainsThreePrice.textContent = "£18";
    mainsThree.appendChild(mainsThreePrice);

    const mainsThreeImage = menuImages.wraps;
    mainsThreeImage.classList.add("menu-img");
    mainsThree.appendChild(mainsThreeImage);

    mainsContainer.appendChild(mainsThree);

    // Main Four
    const mainsFour = document.createElement("div");
    mainsFour.classList.add("mains-Four");

    const mainsFourTitle = document.createElement("div");
    mainsFourTitle.classList.add("title");
    mainsFourTitle.textContent = "Argie Style Vitel Tonne";
    mainsFour.appendChild(mainsFourTitle);

    const mainsFourContent = document.createElement("div");
    mainsFourContent.classList.add("content");
    mainsFourContent.textContent = "Vitello Tonnato - only available at Xmas";
    mainsFour.appendChild(mainsFourContent);

    const mainsFourPrice = document.createElement("div");
    mainsFourPrice.classList.add("price");
    mainsFourPrice.textContent = "£16";
    mainsFour.appendChild(mainsFourPrice);

    const mainsFourImage = menuImages.vitel;
    mainsFourImage.classList.add("menu-img");
    mainsFour.appendChild(mainsFourImage);

    mainsContainer.appendChild(mainsFour);

    content.appendChild(mainsContainer);

    // Desserts container
    const dessertsContainer = document.createElement("div");
    dessertsContainer.classList.add("dessertsContainer");

    const dessertTitle = document.createElement("div");
    dessertTitle.classList.add("dessert");
    dessertTitle.textContent = "Dessert";
    dessertsContainer.appendChild(dessertTitle);

    // Dessert one
    const dessertOne = document.createElement("div");
    dessertOne.classList.add("desserts-one");

    const dessertOneTitle = document.createElement("div");
    dessertOneTitle.classList.add("title");
    dessertOneTitle.textContent = "Passion Fruit Gelato";
    dessertOne.appendChild(dessertOneTitle);

    const dessertOneContent = document.createElement("div");
    dessertOneContent.classList.add("content");
    dessertOneContent.textContent = "Home made";
    dessertOne.appendChild(dessertOneContent);

    const dessertOnePrice = document.createElement("div");
    dessertOnePrice.classList.add("price");
    dessertOnePrice.textContent = "£5";
    dessertOne.appendChild(dessertOnePrice);

    const dessertOneImage = menuImages.gelato;
    dessertOneImage.classList.add("menu-img");
    dessertOne.appendChild(dessertOneImage);

    dessertsContainer.appendChild(dessertOne);

    content.appendChild(dessertsContainer);
}
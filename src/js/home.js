import "../css/home.css";

const content = document.querySelector("#content");

export function home() {
    // Clear previous content
    content.textContent = "";

    // Create the top content section
    const contentTop = document.createElement("div");
    contentTop.classList.add("content-top");

    const heading = document.createElement("h1");
    heading.textContent = "Jon's Cooking";
    contentTop.appendChild(heading);

    // Create the top container section
    const topContainer = document.createElement("div");
    topContainer.classList.add("top-container");

    const quote = document.createElement("div");
    quote.classList.add("quote");
    quote.textContent = "Jon can only cook like 4 dishes. I guess"
    quote.appendChild(document.createElement("br")); 
    quote.appendChild(document.createTextNode("they're ok as long as your expectations are low."));
    topContainer.appendChild(quote);

    const quotedPerson = document.createElement("div");
    quotedPerson.classList.add("quoted-person");
    quotedPerson.textContent = "-Jon's best friend";
    topContainer.appendChild(quotedPerson);

    // Create the mid container section
    const midContainer = document.createElement("div");
    midContainer.classList.add("mid-container");

    const midContainerHeader = document.createElement("div");
    midContainerHeader.classList.add("mid-container-header");
    midContainerHeader.textContent = "Hours";
    midContainer.appendChild(midContainerHeader);

    const timeslots = document.createElement("div");
    timeslots.classList.add("timeslots");
    timeslots.textContent = "Monday: 6am to 9pm";
    timeslots.appendChild(document.createElement("br")); 
    timeslots.appendChild(document.createTextNode("Tuesday: 6am to 9pm"));
    timeslots.appendChild(document.createElement("br")); 
    timeslots.appendChild(document.createTextNode("Wednesday: 6am to 9pm"));
    timeslots.appendChild(document.createElement("br")); 
    timeslots.appendChild(document.createTextNode("Thursday: 6am to 9pm"));
    timeslots.appendChild(document.createElement("br")); 
    timeslots.appendChild(document.createTextNode("Friday: Breakfast and lunch only"));
    timeslots.appendChild(document.createElement("br")); 
    timeslots.appendChild(document.createTextNode("Saturday: Breakfast only"));
    timeslots.appendChild(document.createElement("br")); 
    timeslots.appendChild(document.createTextNode("Sunday: Breakfast only"));
    midContainer.appendChild(timeslots);

    // Create the bottom container section
    const bottomContainer = document.createElement("div");
    bottomContainer.classList.add("bottom-container");

    const bottomContainerHeader = document.createElement("div");
    bottomContainerHeader.classList.add("bottom-container-header");
    bottomContainerHeader.textContent = "Location";
    bottomContainer.appendChild(bottomContainerHeader);

    const location = document.createElement("div");
    location.classList.add("location");
    location.textContent = "Jon's house 123, Jon's Land, Jon's country";
    bottomContainer.appendChild(location);

    // Append everything to the content element
    content.appendChild(contentTop);
    content.appendChild(topContainer);
    content.appendChild(midContainer);
    content.appendChild(bottomContainer);
}



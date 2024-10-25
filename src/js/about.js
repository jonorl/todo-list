import "../css/about.css";

const content = document.querySelector("#content");

export function about() {
    // Clear previous content
    content.textContent = "";

    // Create the main about container
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    // About Us Title
    const aboutUsTitle = document.createElement("h1");
    aboutUsTitle.textContent = "About us";
    aboutContainer.appendChild(aboutUsTitle);

    // About Us Text
    const aboutUsText = document.createElement("div");
    aboutUsText.classList.add("about-us");
    aboutUsText.textContent = "There's no really 'us', it's just plain old me."
    aboutUsText.appendChild(document.createElement("br"));  
    aboutUsText.appendChild(document.createTextNode("This is all I can cook, and you should feel"));
    aboutUsText.appendChild(document.createElement("br")); 
    aboutUsText.appendChild(document.createTextNode("thankful about it."));
    aboutContainer.appendChild(aboutUsText);

    content.appendChild(aboutContainer);


    // Contact Us container
    const contactUsContainer = document.createElement("div");
    contactUsContainer.classList.add("contact-us-container");

    // Contact Us Title
    const contactUsTitle = document.createElement("h1");
    contactUsTitle.textContent = "Contact us";
    contactUsContainer.appendChild(contactUsTitle);
    

    // Contact 1
    const contact1Title = document.createElement("div");
    contact1Title.classList.add("contact1-title");
    contact1Title.textContent = "Jon";
    contactUsContainer.appendChild(contact1Title);

    const contact1Details = document.createElement("div");
    contact1Details.classList.add("contact1-details");
    contact1Details.textContent = "Chef, manager, waiter and dishwasher"
    contact1Details.appendChild(document.createElement("br"));
    contact1Details.appendChild(document.createTextNode("+1-555-5555"));
    contact1Details.appendChild(document.createElement("br"));
    contact1Details.appendChild(document.createTextNode("jon@jon.jon"));
    contactUsContainer.appendChild(contact1Details);

    // Contact 2
    const contact2Title = document.createElement("div");
    contact2Title.classList.add("contact2-title");
    contact2Title.textContent = "Complaints";
    contactUsContainer.appendChild(contact2Title);

    const contact2Details = document.createElement("div");
    contact2Details.classList.add("contact2-details");
    contact2Details.textContent = "Complaint Manager";
    contact2Details.appendChild(document.createElement("br"));
    contact2Details.appendChild(document.createTextNode("+1-800-WE-DONT-CARE")); 
    contact2Details.appendChild(document.createElement("br"));
    contact2Details.appendChild(document.createTextNode("(don't you have better things to do?)")); 
    contact2Details.appendChild(document.createElement("br"));
    contact2Details.appendChild(document.createTextNode("complaints@jon.jon"));
    contactUsContainer.appendChild(contact2Details);

    // Append the main container to the content div
    content.appendChild(contactUsContainer);
}

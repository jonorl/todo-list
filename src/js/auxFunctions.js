// Module import

import {todo} from "./constructors.js"
import {populateLeftPanel, legendName, projects, dialog} from "./DOMfunctions.js"

// Global variables

let todoArray = []; // This will store the individual todo task
export let storedArray; // This is the JSON saved in local storage

// Auxiliary functions

export function addNewProjectTodo(event){

    event.preventDefault();

    // Grab DOM variables

    let DOMElements = grabDOMElements(legendName);

    // Add new project if necessary and its new To-do list

    addTodoToJSON(
        DOMElements.title, 
        DOMElements.description, 
        DOMElements.dueDate, 
        DOMElements.priority, 
        DOMElements.notes, 
        legendName
        );

    populateLeftPanel();

    // Return the values inside the dialog to blank

    resetValues(
        DOMElements.title, 
        DOMElements.description, 
        DOMElements.dueDate, 
        DOMElements.priority, 
        DOMElements.notes,
        )

    dialog.close()
};

function grabDOMElements() {

    let title = document.querySelector(".title").value;
    let description = document.querySelector(".description").value
    let dueDate = document.querySelector(".dueDate").value
    let priority = document.querySelector(".priority").value
    let notes = document.querySelector(".notes").value

    return {title, description, dueDate, priority, notes}
};

function addTodoToJSON(title, description, dueDate, priority, notes) {

    let newID = `${Date.now()}`;
    
    // Add new Todo list to array
    let newTodo = new todo(newID, title, description, dueDate, priority, notes);
    todoArray.push(newTodo);

    // Check if project exists in projects object and adds it if not
    if (legendName in projects){
        projects[legendName].push(newTodo);
    }

    else {
        projects[legendName] = [];
        projects[legendName].push(newTodo);
    }

    // Adds Project/todo to localstorage as JSON
    localStorage.setItem("todoArrayJSON", JSON.stringify(projects));
    storedArray = JSON.parse(localStorage.getItem('todoArrayJSON'));
}

function resetValues(title, description, dueDate, priority, notes){
    title = "";
    description = "";
    dueDate = "";
    priority = "";
    notes = "";
    todoArray = [];
}

export function saveChanges(event){

    let buttonClasses = event.target.className.split(" ");
    let projectTitle = buttonClasses[0];

    let DOMElementsTask = grabDOMElementsTask(projectTitle);

    EditJSON(
        event,
        DOMElementsTask.title, 
        DOMElementsTask.description, 
        DOMElementsTask.dueDate, 
        DOMElementsTask.priority, 
        DOMElementsTask.notes,
        DOMElementsTask.checkbox,
        );
}

function grabDOMElementsTask(projectTitle) {

    let title = document.querySelector(".title-input").value;
    let description = document.querySelector(".description-input").value
    let dueDate = document.querySelector(".dueDate-input").value
    let priority = document.querySelector(".priority-input").value
    let notes = document.querySelector(".notes-input").value
    let checkbox = document.querySelector(".checkbox-input").checked

    return {title, description, dueDate, priority, notes, checkbox }
};


function EditJSON(event, title, description, dueDate, priority, notes, checkbox) {

    let buttonClasses = event.target.className.split(" ")
    let projectTitle = buttonClasses[0];
    let taskID = buttonClasses[1];
    let index = storedArray[projectTitle].findIndex(project => project.id === taskID);

    // Update values of stored JSON
    storedArray[projectTitle][index].title = title;
    storedArray[projectTitle][index].description = description;
    storedArray[projectTitle][index].dueDate = dueDate;
    storedArray[projectTitle][index].priority = priority;
    storedArray[projectTitle][index].notes = notes;
    storedArray[projectTitle][index].checkbox = checkbox;

    localStorage.setItem('todoArrayJSON', JSON.stringify(storedArray));
    storedArray = JSON.parse(localStorage.getItem('todoArrayJSON'));

    // Update the name of the task button as well
    document.querySelector(`#task.${projectTitle}[class*=" ${taskID}"]`).textContent = title;
}
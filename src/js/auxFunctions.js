// Module import

import {todo} from "./constructors.js"
import {populateLeftPanel, legendName, projects, removeTaskDetails, dialog} from "./DOMfunctions.js"

// Global variables

let todoArray = []; // This will store the individual todo task
export let storedArray; // This is the JSON saved in local storage

// Auxiliary functions

export function addNewProjectTodo(event){

    event.preventDefault();
    let idForCSS;

    // Grab DOM variables

    let DOMElements = grabDOMElements();

    // Add new project if necessary and its new To-do list

    addTodoToJSON(
        DOMElements.title, 
        DOMElements.description, 
        DOMElements.dueDate, 
        DOMElements.priority, 
        DOMElements.notes,
        );

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

    populateLeftPanel();
    manipulateCSSModal(newID);
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

    let DOMElementsTask = grabDOMElementsTask();

    EditJSON(
        event,
        DOMElementsTask.projectTitleName,
        DOMElementsTask.title, 
        DOMElementsTask.description, 
        DOMElementsTask.dueDate, 
        DOMElementsTask.priority, 
        DOMElementsTask.notes,
        DOMElementsTask.checkbox,
        );

    removeTaskDetails()
}

function grabDOMElementsTask() {

    let projectTitleName = document.querySelector(".projectTitle-input").value.replace(/[^a-zA-Z0-9-_]/g, '');
    let title = document.querySelector(".title-input").value;
    let description = document.querySelector(".description-input").value
    let dueDate = document.querySelector(".dueDate-input").value
    let priority = document.querySelector(".priority-input").value
    let notes = document.querySelector(".notes-input").value
    let checkbox = document.querySelector(".checkbox-input").checked

    return {projectTitleName, title, description, dueDate, priority, notes, checkbox }
};


function EditJSON(event, projectTitleName, title, description, dueDate, priority, notes, checkbox) {

    let buttonClasses = event.target.className.split(" ")
    let projectTitle = buttonClasses[0];
    let taskID = buttonClasses[1];
    let index = storedArray[projectTitle].findIndex(project => project.id === taskID);

    // Update values of projects Object
    projects[projectTitle][index].title = title;
    projects[projectTitle][index].description = description;
    projects[projectTitle][index].dueDate = dueDate;
    projects[projectTitle][index].priority = priority;
    projects[projectTitle][index].notes = notes;
    projects[projectTitle][index].checkbox = checkbox;

    // Update values of stored JSON
    storedArray[projectTitle][index].title = title;
    storedArray[projectTitle][index].description = description;
    storedArray[projectTitle][index].dueDate = dueDate;
    storedArray[projectTitle][index].priority = priority;
    storedArray[projectTitle][index].notes = notes;
    storedArray[projectTitle][index].checkbox = checkbox;

    // Update the name of the task button and their class names as well
    let taskButton = document.querySelector(`#task.${projectTitle}[class*=" ${taskID}"]`);
    let XButton = document.querySelector(`#X.${projectTitle}[class*=" ${taskID}"]`);
    taskButton.textContent = title;
    taskButton.className = ""
    taskButton.classList.add(projectTitleName);
    taskButton.classList.add(taskID);
    XButton.className = ""
    XButton.classList.add(projectTitleName);
    XButton.classList.add(taskID);

    projectTitle = projectTitleName;

    localStorage.setItem('todoArrayJSON', JSON.stringify(storedArray));
    storedArray = JSON.parse(localStorage.getItem('todoArrayJSON'));

    populateLeftPanel();
    manipulateCSS(event);
}

export function manipulateCSS(event) {
    let buttonClasses = event.target.className.split(" ")
    let projectTitle = buttonClasses[0];
    let taskID = buttonClasses[1];
    let index = parseInt(storedArray[projectTitle].findIndex(project => project.id === taskID));
    let buttons = document.querySelectorAll(`button:not([id*='modal']).${projectTitle}[class*=" ${taskID}"]`)
    buttons.forEach(btn => {
        switch (storedArray[projectTitle][index].priority){
            case "Low": 
                btn.style.backgroundColor  = "blue";
                btn.style.color  = "aliceblue";
                break;
            case "Medium": 
                btn.style.backgroundColor  = "yellow";
                btn.style.color  = "black";
                break;
            case "High": 
                btn.style.backgroundColor  = "red";
                btn.style.color  = "black";
                break;
            }
    })
}

function manipulateCSSModal(newID) {
    let projectTitle = legendName;
    let taskID = newID;

    let index = parseInt(storedArray[projectTitle].findIndex(project => project.id === taskID));
    let buttons = document.querySelectorAll(`button:not([id*='modal']).${projectTitle}[class*=" ${taskID}"]`);
    buttons.forEach(btn => {
        switch (storedArray[projectTitle][index].priority){
            case "Low": 
                btn.style.backgroundColor  = "blue";
                btn.style.color  = "aliceblue";
                break;
            case "Medium": 
                btn.style.backgroundColor  = "yellow";
                btn.style.color  = "black";
                break;
            case "High": 
                btn.style.backgroundColor  = "red";
                btn.style.color  = "black";
                break;
            }
    })
}
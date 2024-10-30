import {todo} from "./constructors.js"

// global variables

let todoArray = []; // This will store the individual todo task
let projects = {}; // This is the object that then will be passed as JSON
let storedArray; // This is the JSON saved in local storage
let legendName; // This stores the name of the project to verify if exists
export let dialog; // this is the modal to enter the todo(s)

// Functions

export function addNewProjectTodo(event){

    event.preventDefault();

    // Grab DOM variables

    let DOMElements = grabDOMElements(legendName);

    populateLeftPanel(DOMElements.numberOfTodos, DOMElements.title);

    // Add new project if necessary and its new To-do list

    addTodoToJSON(
        DOMElements.numberOfTodos, 
        DOMElements.title, 
        DOMElements.description, 
        DOMElements.dueDate, 
        DOMElements.priority, 
        DOMElements.notes, 
        legendName
        );

    // Return the values inside the dialog to blank

    resetValues(
        DOMElements.numberOfTodos, 
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
    let numberOfTodos = (legendName in projects) ? projects[legendName].length : 0;

    return {title, description, dueDate, priority, notes, numberOfTodos }
};

function addTodoToJSON(id, title, description, dueDate, priority, notes) {
    
    // Add new Todo list to array
    let newTodo = new todo(id, title, description, dueDate, priority, notes);
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
    console.table(storedArray);
}

function resetValues(title, description, dueDate, priority, notes){
    title = "";
    description = "";
    dueDate = "";
    priority = "";
    notes = "";
    todoArray = [];
}

// Function to display to-do back to the DOM

export function writeBackToDOM(event){

    let buttonClasses = event.target.className.split(" ") 
    let projectTitle = buttonClasses[0];
    let taskID = Number(buttonClasses[1]);
    let index = storedArray[projectTitle].findIndex(project => project.id === taskID);

    // Main Container
    const rightContainer = document.querySelector(".right-panel")

    // Form
    const form = document.createElement("form");
    form.classList.add("todo");
    form.setAttribute("onsubmit", "return false;");

    // Fieldset
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = projectTitle;

    // Container div
    const container = document.createElement("div")
    container.classList.add("todoContainer")

    // Title div
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title\u00A0";
    const titleInput = document.createElement("input");
    titleInput.classList.add("title-input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("value", storedArray[projectTitle][index].title)
    titleDiv.append(titleLabel, titleInput);

    // Description div
    const descDiv = document.createElement("div");
    descDiv.classList.add("description-div");
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "description");
    descLabel.textContent = "Description\u00A0";
    const descInput = document.createElement("input");
    descInput.classList.add("description-input");
    descInput.setAttribute("type", "text")
    descInput.setAttribute("value", storedArray[projectTitle][index].description)
    descDiv.append(descLabel, descInput);

    // Due Date div
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("dueDate-div");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due Date\u00A0";
    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("dueDate-input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("value", storedArray[projectTitle][index].dueDate);
    dueDateDiv.append(dueDateLabel, dueDateInput);

    // Priority div
    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("priority-div");
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority\u00A0";
    const prioritySelect = document.createElement("select");
    prioritySelect.classList.add("priority-input");
    prioritySelect.setAttribute("name", "Priority");
    prioritySelect.setAttribute("type", "range");

    const options = [
        { value: "Low", text: "Low" },
        { value: "Medium", text: "Medium"},
        { value: "High", text: "High" } 
    ];

    options.forEach(opt => {
        const option = document.createElement("option");
        let priority = storedArray[projectTitle][index].priority;
        option.value = opt.value;
        option.textContent = opt.text;
        if (priority === opt.value) {option.selected = true}
        prioritySelect.appendChild(option);
    });
    priorityDiv.append(priorityLabel, prioritySelect);

    // Notes div
    const notesDiv = document.createElement("div");
    notesDiv.classList.add("notes-div");
    const notesLabel = document.createElement("label");
    notesLabel.setAttribute("for", "notes");
    notesLabel.textContent = "Notes\u00A0";
    const notesInput = document.createElement("input");
    notesInput.classList.add("notes-input");
    notesInput.setAttribute("type", "text");
    notesInput.setAttribute("value", storedArray[projectTitle][index].notes)
    notesDiv.append(notesLabel, notesInput);

    // Buttons

    const saveButton = document.createElement("button");
    saveButton.id = "saveChanges";
    saveButton.classList.add("saveChanges");
    saveButton.textContent = "Save"; 

    const delButton = document.createElement("button");
    delButton.id = "delete";
    delButton.classList.add("delete");
    delButton.textContent = "Delete";

    // Remove all children
    let rightPanel = document.querySelector(".right-panel")
    let formExists = document.querySelector(".todo")
    formExists && rightPanel.removeChild(formExists);

    // Append all elements
    container.append(
        titleDiv,
        descDiv,
        dueDateDiv,
        priorityDiv,
        notesDiv,
        saveButton,
        delButton,
    );

    fieldset.appendChild(legend);
    fieldset.appendChild(container);
    form.appendChild(fieldset);

    rightContainer.appendChild(form);
}

// Function to create modal

export function createTodoDialog(event) {

    event.preventDefault();

    const existingDialog = document.querySelector(".data-modal");
    if (existingDialog) {
        existingDialog.remove();
    }

    dialog = document.createElement("dialog");
    dialog.setAttribute("data-modal", "");
    dialog.classList.add("data-modal");

    const form = document.createElement("form");
    form.classList.add("addNewTodo");
    form.setAttribute("onsubmit", "return false;");

    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legendName = document.querySelector(".projectName").value // Adds project name to legendName variable
    legend.textContent = legendName;

    const container = document.createElement("div");
    container.classList.add("addNewTodoContainer");

    // Title div
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title\u00A0";
    const titleInput = document.createElement("input");
    titleInput.classList.add("title");
    titleInput.setAttribute("type", "text");
    titleDiv.append(titleLabel, titleInput);

    // Description div
    const descDiv = document.createElement("div");
    descDiv.classList.add("description-div");
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "description");
    descLabel.textContent = "Description\u00A0";
    const descInput = document.createElement("input");
    descInput.classList.add("description");
    descInput.setAttribute("type", "text");
    descDiv.append(descLabel, descInput);

    // Due Date div
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("dueDate-div");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due Date\u00A0";
    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("dueDate");
    dueDateInput.setAttribute("type", "date");
    dueDateDiv.append(dueDateLabel, dueDateInput);

    // Priority div
    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("priority-div");
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority\u00A0";
    const prioritySelect = document.createElement("select");
    prioritySelect.classList.add("priority");
    prioritySelect.setAttribute("name", "Priority");
    prioritySelect.setAttribute("type", "range");

    const options = [
        { value: "Low", text: "Low" },
        { value: "Medium", text: "Medium", selected: true },
        { value: "High", text: "High" }
    ];

    options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.text;
        if (opt.selected) option.selected = true;
        prioritySelect.appendChild(option);
    });
    priorityDiv.append(priorityLabel, prioritySelect);

    // Notes div
    const notesDiv = document.createElement("div");
    notesDiv.classList.add("notes-div");
    const notesLabel = document.createElement("label");
    notesLabel.setAttribute("for", "notes");
    notesLabel.textContent = "Notes\u00A0";
    const notesInput = document.createElement("input");
    notesInput.classList.add("notes");
    notesInput.setAttribute("type", "text");
    notesDiv.append(notesLabel, notesInput);

    // Buttons
    const addButton = document.createElement("button");
    addButton.id = "add";
    addButton.classList.add("add");
    addButton.textContent = "Add";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.id = "cancel";
    cancelButton.textContent = "Cancel";
    cancelButton.setAttribute("type", "button");

    // Append all elements
    container.append(
        titleDiv,
        descDiv,
        dueDateDiv,
        priorityDiv,
        notesDiv,
        addButton,
        cancelButton
    );

    fieldset.appendChild(legend);
    fieldset.appendChild(container);
    form.appendChild(fieldset);
    dialog.appendChild(form);

    document.body.appendChild(dialog);

    dialog.showModal();
}

function populateLeftPanel(id, title) {

    // If the project exists add new task

    if (legendName in projects){

        // Select the right project name
        const projectDiv = document.querySelector("." + legendName);
        populateTaskDOM(id, title, projectDiv)
    }

    // If project doesn't exist, add it and the new task

    else {
        // Project Div
        const projectDiv = document.createElement("div");
        projectDiv.classList.add(legendName);
        projectDiv.textContent = legendName;
        populateTaskDOM(id, title, projectDiv)
    }
}

function populateTaskDOM(id, title, projectDiv){

    let leftPanel = document.querySelector(".projects");

    // Task Div
    const taskButton = document.createElement("button");
    taskButton.id = "task";
    taskButton.classList.add(legendName);
    taskButton.classList.add(id);
    taskButton.textContent = title;

    // Delete Task Button
    const XButton = document.createElement("button");
    XButton.id = "X";
    XButton.classList.add(legendName);
    XButton.classList.add(id);
    XButton.textContent = "X";

    //Append
    leftPanel.appendChild(projectDiv);
    projectDiv.appendChild(taskButton);
    projectDiv.appendChild(XButton);

}

export function XDelete(event){
    
    let buttonClasses = event.target.className.split(" ") 
    let projectTitle = buttonClasses[0];
    let taskID = Number(buttonClasses[1]);
    let index = storedArray[projectTitle].findIndex(project => project.id === taskID);
    
    storedArray[projectTitle].splice(index, 1);
    console.table(storedArray);
}
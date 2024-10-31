// Module import

import { storedArray, manipulateCSS } from "./auxFunctions.js";

// Global variables

export let projects = {}; // This is the object that then will be passed as JSON
export let legendName; // This stores the name of the project to verify if exists
export let dialog; // this is the modal to enter the todo(s)

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
    legendName = document.querySelector(".projectName").value.replace(/[^a-zA-Z0-9-_]/g, ''); // Adds project name to legendName variable
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

// Function to show task details

export function writeBackToDOM(event){

    let buttonClasses = event.target.className.split(" ") 
    let projectTitle = buttonClasses[0];
    let taskID = buttonClasses[1];
    let index = storedArray[projectTitle].findIndex(project => project.id === taskID);

    // Main Container
    const rightContainer = document.querySelector(".right-panel")

    // Form
    const form = document.createElement("form");
    form.classList.add("todo");
    form.setAttribute("onsubmit", "return false;");

    // Fieldset
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("input");
    legend.classList.add("projectTitle-input")
    legend.setAttribute("value", projectTitle);

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

    // Checklist
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox-div");
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", "checkbox");
    checkboxLabel.textContent = "Done?\u00A0";
    const checkbox = document.createElement("input");
    checkbox.classList.add("checkbox-input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = storedArray[projectTitle][index].checkbox;
    checkboxDiv.append(checkboxLabel, checkbox);

    // Buttons

    const saveButton = document.createElement("button");
    saveButton.id = "saveChanges";
    saveButton.classList.add(projectTitle);
    saveButton.classList.add(taskID);
    saveButton.textContent = "Save"; 

    const delButton = document.createElement("button");
    delButton.id = "delete";
    delButton.classList.add(projectTitle);
    delButton.classList.add(taskID);
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
        checkboxDiv,
        saveButton,
        delButton,
    );

    fieldset.appendChild(legend);
    fieldset.appendChild(container);
    form.appendChild(fieldset);

    rightContainer.appendChild(form);

    switch (storedArray[projectTitle][index].priority){
        case "Low": 
            fieldset.style.backgroundColor  = "blue";
            fieldset.style.color  = "aliceblue";
            break;
        case "Medium": 
            fieldset.style.backgroundColor  = "yellow";
            fieldset.style.color  = "black";
            break;
        case "High": 
            fieldset.style.backgroundColor  = "red";
            fieldset.style.color  = "black";
            break;
        }
}

// Function to delete task from storage

export function XDelete(event){
    
    let buttonClasses = event.target.className.split(" ");
    let projectTitle = buttonClasses[0];
    let taskID = buttonClasses[1];
    let index = parseInt(storedArray[projectTitle].findIndex(project => project.id === taskID));
    let buttons = document.querySelectorAll(`.${projectTitle}[class*=" ${taskID}"]`);
    buttons.forEach(button => button.remove());

    // I need to modify both projects and storedArray
    projects[projectTitle].splice(index, 1);
    storedArray[projectTitle].splice(index, 1);
    localStorage.setItem("todoArrayJSON", JSON.stringify(storedArray));

    removeTaskDetails();
}

export function removeTaskDetails(){

    // Remove main box with task details
    let rightPanel = document.querySelector(".right-panel")
    let formExists = document.querySelector(".todo")
    formExists && rightPanel.removeChild(formExists);
}

// Function to create the left panel with the projects and tasks from scratch

export function populateLeftPanel() {

    // Reset the left panel
    let projectsDiv = document.querySelector(".projects");

    if (projectsDiv) {
      while (projectsDiv.firstChild) {
        projectsDiv.removeChild(projectsDiv.firstChild);
      }
    }

    // Re-write the Projects title

    const projectDivTitle = document.createElement("div");
    projectDivTitle.classList.add("projects-title");
    projectDivTitle.textContent = "Projects";
    projectsDiv.appendChild(projectDivTitle)

    // Loop through each object project in storedArray and each of its todo's

    for (let project in storedArray){

        const projectDiv = document.createElement("div");
        projectDiv.classList.add(project);
        projectDiv.textContent = project;
        storedArray[project].forEach(todo =>{

            // Task Div
            const taskButton = document.createElement("button");
            taskButton.id = "task";
            taskButton.classList.add(project);
            taskButton.classList.add(todo.id);
            switch (todo.priority){
                case "Low": 
                    taskButton.style.backgroundColor  = "blue";
                    taskButton.style.color  = "aliceblue";
                    break;
                case "Medium": 
                    taskButton.style.backgroundColor  = "yellow";
                    taskButton.style.color  = "black";
                    break;
                case "High": 
                    taskButton.style.backgroundColor  = "red";
                    taskButton.style.color  = "black";
                    break;
                }
            taskButton.textContent = todo.title;
        
            // Delete Task Button
            const XButton = document.createElement("button");
            XButton.id = "X";
            XButton.classList.add(project);
            XButton.classList.add(todo.id);
            switch (todo.priority){
                case "Low": 
                    XButton.style.backgroundColor  = "blue";
                    XButton.style.color  = "aliceblue";
                    break;
                case "Medium": 
                    XButton.style.backgroundColor  = "yellow";
                    XButton.style.color  = "black";
                    break;
                case "High": 
                    XButton.style.backgroundColor  = "red";
                    XButton.style.color  = "black";
                    break;
                }
            XButton.textContent = "X";
        
            //Append
            projectDiv.appendChild(taskButton);
            projectDiv.appendChild(XButton);
            projectsDiv.appendChild(projectDiv);
        })
    }
}


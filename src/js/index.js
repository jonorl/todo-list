import "../css/style.css";


let todoArray = [];
let projects = {};
let storedArray;
let dialog;

const modalButton = document.querySelector("[data-open-modal]")

// Constructor function

class todo {
    constructor(id, title, description, dueDate, priority, notes) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

// Functions

function addTodo(id, title, description, dueDate, priority, notes, projectName) {
    
    let newTodo = new todo(id, title, description, dueDate, priority, notes);
    todoArray.push(newTodo);

    if (projectName in projects){
        projects[projectName].push(newTodo);
    }

    else {
        projects[projectName] = [];
        projects[projectName].push(newTodo);
    }

    localStorage.setItem("todoArrayJSON", JSON.stringify(projects));
    storedArray = JSON.parse(localStorage.getItem('todoArrayJSON'));
}


function addTodoToArray(event, projectName){

    event.preventDefault();

    let title = document.querySelector(".title").value;
    let description = document.querySelector(".description").value
    let dueDate = document.querySelector(".dueDate").value
    let priority = document.querySelector(".priority").value
    let notes = document.querySelector(".notes").value

    addTodo(todoArray.length, title, description, dueDate, priority, notes, projectName);

    // Return the values to blank

    title = "";
    description = "";
    dueDate = "";
    priority = "";
    notes = "";
    todoArray = [];

    dialog.close()
}



// Modals

modalButton.addEventListener("click", (event) => {
    createTodoDialog(event);
})

// DOM Function

function createTodoDialog(event) {

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
    const legendName = document.querySelector(".projectName").value
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
    addButton.classList.add("add");
    addButton.textContent = "Add";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
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

    let removeButton = document.querySelector(".cancel")

    dialog.showModal();

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        addTodoToArray(event, legendName);
    });
    
    removeButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        dialog.close();
    })
}


import "../css/style.css";


let todoArray = [];
let projects = {"Project 1" : []}
let storedArray;

const addTodoButton = document.querySelector(".add");
const cancelButton = document.querySelector(".cancel")
const modalButton = document.querySelector("[data-open-modal]")
const dialog = document.querySelector("dialog")
const modal = document.querySelector("[data-modal]")

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

function addTodo(id, title, description, dueDate, priority, notes) {
    let newTodo = new todo(id, title, description, dueDate, priority, notes);
    todoArray.push(newTodo);
    let indexingValue = Object.keys(projects);
    projects[indexingValue[indexingValue.length - 1]] = todoArray;
    localStorage.setItem("todoArrayJSON", JSON.stringify(todoArray));
    storedArray = JSON.parse(localStorage.getItem('todoArrayJSON'));
    console.log("stored JSON")
    console.table(storedArray);
    console.log("stored Object (projects)")
    console.table(projects);
}

function addTodoToArray(event){

    event.preventDefault();

    let title = document.querySelector(".title").value;
    let description = document.querySelector(".description").value
    let dueDate = document.querySelector(".dueDate").value
    let priority = document.querySelector(".priority").value
    let notes = document.querySelector(".notes").value

    addTodo(todoArray.length, title, description, dueDate, priority, notes);

    // Return the values to blank

    title = "";
    description = "";
    dueDate = "";
    priority = "";
    notes = "";

    dialog.close()
    console.log("stored Array")
    console.table(todoArray)
}

addTodoButton.addEventListener("click", addTodoToArray);

// Modals

modalButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("[data-open-modal]").blur();
    modal.showModal();
})

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
})

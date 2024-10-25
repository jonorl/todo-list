let todoArray = [];

const addBookButton = document.querySelector(".add");
const cancelButton = document.querySelector(".cancel")
const modalButton = document.querySelector("[data-open-modal]")
const dialog = document.querySelector("dialog")
const modal = document.querySelector("[data-modal]")

// Constructor function

class todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

// Functions

function addTodo(title, description, dueDate, priority, notes) {
    let newTodo = new todo(title, description, dueDate, priority, notes);
    todoArray.push(newTodo);
}

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

dialog.addEventListener("mousedown", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      e.preventDefault();
      dialog.close()
    }
  })
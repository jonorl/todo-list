let todoArray = [];

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


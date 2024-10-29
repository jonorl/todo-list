// Module import

import "../css/style.css";
import {addNewProjectTodo, createTodoDialog, writeBackToDOM, dialog} from "./functions"

// Event Listeners
const btns = document.querySelectorAll("button");

document.body.addEventListener("click", (event) => {

    let target = event.target;

    switch(target.id) {
        case "modal":
            createTodoDialog(event);
            break;

        case "add":
            event.preventDefault();
            addNewProjectTodo(event);
            break;

        case "cancel":
            event.preventDefault();
            event.stopPropagation();
            dialog.close();
            break;

        case "task":
            event.preventDefault();
            writeBackToDOM(event);
            break;
    }
});
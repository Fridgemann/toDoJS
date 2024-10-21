// clear input field after todo entry
// group checkbox and task so they're a row
// inputField.value for acessing input's value

const todos = document.querySelector('.todos');
const addBtn = document.querySelector('.add-btn');
const inputField = document.querySelector('.input-box');


addBtn.addEventListener('click', () => {
    // create a task-bundle
    // create a checkbox
    // create a taskTxt
    // create a cross
    // in order: checkbox - taskTxt - cross ; append these as
    // child elements to task-bundle
    // append final task bundle as a child to todos
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox-round");
    todos.appendChild(checkbox);
    
})

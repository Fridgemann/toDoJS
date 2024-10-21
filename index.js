// clear input field after todo entry
// group checkbox and task so they're a row
// inputField.value for acessing input's value

const todos = document.querySelector('.todos');
const addBtn = document.querySelector('.add-btn');
const inputField = document.querySelector('.input-box');
const cross = document.querySelector('.cross');


addBtn.addEventListener('click', () => {
    // create a task-bundle
    // create a checkbox
    // create a taskTxt
    // create a cross
    // in order: checkbox - taskTxt - cross ; append these as
    // child elements to task-bundle
    // append final task bundle as a child to todos
    let taskBundle = document.createElement('task-bundle');
    taskBundle.classList.add('task-bundle');

    let task = document.createElement('div');
    task.classList.add('task');

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox-round");

    let taskTxt = document.createElement('div');
    taskTxt.textContent = inputField.value;
    taskTxt.classList.add('task-text');

    let cross = document.createElement('div');
    cross.textContent = "X";
    cross.classList.add('cross');

    task.appendChild(checkbox);
    task.appendChild(taskTxt);

    taskBundle.appendChild(task);
    taskBundle.appendChild(cross);

    todos.appendChild(taskBundle);
    
    inputField.value = "";
})

cross.addEventListener('click', () => {
    // something something parent nodes
})
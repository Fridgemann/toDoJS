// clear input field after todo entry
// group checkbox and task so they're a row
// inputField.value for acessing input's value

const todos = document.querySelector('.todos');
const addBtn = document.querySelector('.add-btn');
const inputField = document.querySelector('.input-box');





function addTask() {

}


let taskDiv = document.createElement('div');
taskDiv.classList.add('task');

let checkBtn = document.createElement('input');
checkBtn.type = "checkbox";
checkBtn.classList.add('checkbox-round');

let taskTxt = document.createElement('div');
taskTxt.classList.add('task-text');
taskTxt.textContent = "sex";

taskDiv.appendChild(checkBtn);
taskDiv.appendChild(taskTxt);
todos.appendChild(taskDiv);

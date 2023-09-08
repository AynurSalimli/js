//Elementleri secmek

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todolist = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear-todos");

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addTodo);
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  console.log(newTodo);
  e.preventDefault();
}

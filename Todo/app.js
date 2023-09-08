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
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
}

function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.setAttribute("style", "display: none !important");
    } else {
      listItem.setAttribute("style", "display: block");
    }
  });
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    showAlert("success", "Todo is successfully deleted");
  }
}

function deleteTodoFromStorage(deletetodo) {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (todo === deleteTodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
function loadAllTodosToUI() {
  let todos = getTodosFromStorage();

  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

function addTodo(e) {
  e.preventDefault();
  const newTodo = todoInput.value.trim();
  console.log(newTodo);

  if (newTodo === "") {
    showAlert("danger", "Please enter a todo");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success", "Todo is successfully added");
  }
  console.log(newTodo);
}

function getTodosFromStorage() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}

function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);
  //setTimeout
  setTimeout(function () {
    alert.remove();
  }, 1000);
  console.log(alert);
}

function addTodoToUI(newTodo) {
  //stringi list item kimi elave edecek
  //List item yaratma
  const listItem = document.createElement("li");
  //Link yaratma
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  listItem.className = "list-group-item d-flex justify-content-between";
  //Text node ekleme
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todolist.appendChild(listItem);
  todoInput.value = "";
  console.log(listItem);
}

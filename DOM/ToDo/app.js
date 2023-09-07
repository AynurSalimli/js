// let value;
// const todolist = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardrow = document.querySelector(".card.row");
// value = todolist;
// value = todo;
// value = cardrow;
// //Child Nodes(text-daxil)
// value = todolist.childNodes[0];

// //Children
// value = todolist.children[todolist.children.length - 1].textContent = "2-ci";
// value = cardrow.children[0].textContent = "salam";
// value = todolist.lastElementChild;
// value = cardrow.parentElement.parentElement //body
// value = todo.nextElementSibling
// value = todo.previousElementSibling
// console.log(value);

//Yeni element

// const newElement = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];
// newElement.id = "clear-todos"
// newElement.className = "btn btn-danger"
// newElement.href = "https://www.google.com/";
// // cardbody.textContent = 'salam' // her sey silinir
// const text=document.createTextNode("naber")
// newElement.appendChild(document.createTextNode("go to the link"))
// cardbody.appendChild(newElement)
// cardbody.appendChild(text)
// console.log(cardbody);
// console.log(newElement);

//Dinamik element silmek

// const todolist = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");
// todos[2].remove(); //silmek

// todolist.removeChild(todolist.lastElementChild)

//replace

const cardbody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni todolar";

const oldElement = document.querySelector("#tasks-title");
cardbody.replaceChild(newElement, oldElement);

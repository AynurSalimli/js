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

const newElement = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];
newElement.id = "clear-todos"
newElement.className = "btn btn-danger"
newElement.href = "https://www.google.com/";
// cardbody.textContent = 'salam' // her sey silinir 
const text=document.createTextNode("naber")
newElement.appendChild(document.createTextNode("go to the link"))
cardbody.appendChild(newElement)
cardbody.appendChild(text)
console.log(cardbody);
console.log(newElement);

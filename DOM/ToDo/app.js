// let value;
// value = document.all.length;
// value = document.all[0];
// value = document.all[document.all.length - 1];

// const elements = document.all;
// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }

// const collections = Array.from(document.all);
// collections.forEach(function (collection) {
//   console.log(collection);
// });

// value = document.body;
// value = document.head;
// value = document.location.hostname; //127.0.0.1
// value = document.URL;
// value = document.characterSet;
// console.log(value);
// console.log(this.document);

// let value;
// value = document;
// value = document.scripts; //app.js en sonda olmalidir
// value = document.links;
// value = document.links[0].getAttribute("href");
// value = document.links[0].getAttribute("class");

// console.log(value);

let element;

element = document.getElementById("todo-form");
element = document.getElementById("title");

//Elementi class-a gore secme
element = document.getElementsByClassName("todo-list")[2]
element = document.getElementsByTagName("li")

//Query Selector
element = document.querySelector("li")
element = document.querySelector("#todo-form");
element = document.querySelectorAll("li")
element.forEach(function(a){
    console.log(a);
})


console.log(element);

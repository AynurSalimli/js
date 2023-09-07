//local storage
// localStorage.setItem("haraket", "burpee");
// localStorage.setItem("again", 50);

// const value = localStorage.getItem("again");
// console.log(+value); // value
// localStorage.clear(); //clear

// console.log(localStorage.getItem("sport")); //null

// if (localStorage.getItem("sport") === null) {
//   console.log("Data is not found");
// }
// else{
//     console.log("Data is found");
// }

//arrays

const todos = ["Todo 1", "Todo 2", "Todo 3"];
// console.log(localStorage.getItem("todos")); //string
// localStorage.setItem("todos", todos)
localStorage.setItem("dada", JSON.stringify(todos))
const value = JSON.parse(localStorage.getItem("todos"));
console.log(value);

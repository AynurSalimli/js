//function
function hey(a) {
  console.log("hello world", a);
}
hey("hey");

function sum(a, b) {
  console.log(a + b);
}

sum(3, 5);

function a(name, age) {
  if (typeof name === "undefined") name = "No info";
  if (typeof age === "undefined") age = "No age info";
  console.log(`Ad: ${name}, Yas: ${age}`);
}

a();


//Mathematical functions
function square(x){
    return (x*x); // if we don't use return we will get NaN
}
function cube(a){
    return (a*a*a);
    console.log("Heyhey"); // it will not shown on screen because of return
}

let c = square(3)
c = cube(c)
console.log(c);

//function expression

const merhaba = function(){
    console.log("Merhaba");
}
merhaba();


(function(name){
    console.log("Merhaba: " + name);
})("Aynur")

//object

const db = {
    host: "localhost",
    add: function(){
        console.log("Added");
    },
    get: function(){
        console.log("Get it");
    },
    update: function(){
        console.log("Updated");
    },
    delete: function(){
        console.log("Deleted");
    }
}

console.log(db.host);
db.get();
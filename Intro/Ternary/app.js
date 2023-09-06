//==
// ===
// !=
// !==
// >
// <
// >=
// <=
console.log(2 == 2); //true
console.log("js" == "javascript"); //false
console.log(2 == "2"); //true
console.log(2 === "2"); //false
console.log(2>4); //false
console.log(2 !== "2"); //true
console.log(!(2>4)); //true
console.log(!(3>=3)); //false
//AND(all should be true = true)
console.log((2!=2) && (4>2));
//OR (one of them should be true = true)
console.log((2 ===3) || (4>2));


//if else
const a = 5;

if (a>3){
    console.log("a is bigger than 3");
}
else if(a>2){
    console.log("a is smaller");
}
else{
    console.log("nothing is true");
}

console.log("yes");

//ternary operators

number = 2
console.log(number == 3 ? "It is equal to 3" : "It is not equal to 3");

//switch case
const process = 2;
if (process === 1) {
    console.log("Process is 1");
}
else if(process == 2){
    console.log("Process is 2");
}
else{
    console.log("Process is not true");
}
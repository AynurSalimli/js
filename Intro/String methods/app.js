let value;
let langs = "Java,C++,Python"
const firstName = "Louis"
const lastName = "ArmStrong"

value = firstName + lastName
value = firstName.concat(" ", lastName," ","Caz") // Louis Armstrong Caz
value = firstName.toLowerCase();
value = firstName.toUpperCase();
value = firstName[3] // i
value = firstName[4] // s

//Index Of
value = firstName.indexOf("i") //3 
value = firstName.indexOf("w") //-1
value = firstName.charAt(0); //L

//split
value = langs.split(",")
value = langs.replace("Python", "CSS")
value = langs.includes("Python")
value = langs.includes("Java")


console.log(value);
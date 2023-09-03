let value;
const programmer = {
    name: "Aynur",
    age: 20,
    email: "aynurs@gmail.com",
    langs: ["Javascript", "Python", "C#"],
    address: {
        country: 'Azerbaijan',
        city: 'Baku',
    },
    work: function(){
        console.log("Programmer is working");
    }
}




value = programmer
value = programmer.email
value = programmer["email"]
value = programmer.langs

console.log(value);

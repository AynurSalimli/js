//While
// let i = 0;
// while (i < 10) {
//   console.log(i++);
// }

// let a = 20;

// while(a>10){
//     if(a == 12){
//         break;
//     }
//     console.log(a--);
// }

//Do while

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 20);

//it continues between 0 and 20

const langs = ["Python", "Javascript", "Java"];

// let index = 0;

// while (index < langs.length){
//     console.log(langs[index]);
//     index++;
// }

// for (let index = 0; index < langs.length; index++)
//  [console.log(langs[index])];

//forEach

langs.forEach(function (lang, index) {
  console.log(lang, index);
});

const users = [
  {
    name: "Aynur",
    surname: "Salimli",
    age: "20",
  },
  {
    name: "Sarah",
    surname: "Mahmud",
    age: "19",
  },
];

const names = users.map(function (a) {
  return a.name;
});
console.log(names);

const user = {
    name: "Jessie",
    age: 25
}

for(let b in user){
    console.log(b, user[b]);
}
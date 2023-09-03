const name = "Aynur Salimli";
const department = "IT";
const salary = 2500;

const a = `Isim: ${name} \n Department: ${department} \n Salary: ${salary}`;
console.log(a);

// const html =
//   "<ol>" +
//   "<li>" + name + "</li>" +
//   "<li>" + department + "</li>" +
//   "<li>" + salary + "</li>" +
//   "</ol>";

const html = `<ol> 
  <li> 
  ${name} 
  </li> 
  <li> 
  ${department} 
  </li> 
  <li> 
  ${salary} 
  </li> 
  </ol>`;

document.body.innerHTML = html;

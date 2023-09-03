let value;

const numbers = [43, 56, 41, 99, 78, 76, 21]
const number2 = new Array(1, 2, 3, 4, 5, 6)
const langs = ["Pyhton", "C++", "Javascript"]
const mixed = ["Hey", 21, null, undefined, 3.14]
value = numbers[0]
value = numbers[numbers.length-1]
console.log(value);

//indexdeki deyeri deyisdirmek
numbers[2] = 51
value = numbers
value=numbers.indexOf(89) //3
numbers.reverse(); //deyerleri tersine cevirir
numbers.splice(0,2) // 0-ci ve 2-ci elementler arasindaki deyerleri silir [51,89,78]
numbers.push(2) // sonuna deyer elave edir
numbers.unshift(32); //evveline deyer elave edir
numbers.pop() //sonuncu elementi silir
numbers.shift() //birinci elementi silir
numbers.sort(function(x, y){
    return x-y //boyukden kiciye siralama metodu
})
value = numbers
console.log(value);
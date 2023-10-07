let age = true

// to convert from any datatype we can use the following syntax
let numberAge = Number(age)
// console.log(typeof numberAge);
// console.log(numberAge);

// "18" -> number -> 18
// "18axaxsx" ->number -> NaN (Not a Number)
//"Aditya"-> number -> NaN
// true -> 1 ; false -> 0;


let isLoggedIn = 1

let boolIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof boolIsLoggedIn);
// console.log(boolIsLoggedIn);

// 1 -> boolean -> true
// 0 -> boolean -> false

let score = 199
let stringScore = String(score)
console.log(typeof stringScore);
console.log(stringScore);

// 199 -> "199"

// Operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // This is used for power 2 raised to power 3
// console.log(2/2);
// console.log(2%2)

console.log("1"+2); // will consider as String
console.log(1 + "2"); // will consider as String
console.log("1" + 2 + 2); // will consider as String
console.log(1 + 2 + "2"); // 32
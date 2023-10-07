let name = "Aditya "
const age = 18;

// console.log(name + "is " + age + " years old"); //not recommended to concatenate strings

// Modern technique of concatenation
// String interpolation
console.log(`${name} is ${age} years old`);

let username = "Aditya@xyz"

console.log(username.length); // prints the length of a string

console.log(username.charAt(4)); // returns the character at index 2
console.log(username.indexOf('i')); // return the index of the character entered

console.log(username.includes('@')); // returns true if the character is present else false


// to take out substring from a string
console.log(username.substring(0,6)); // will print character from 0th index to 5th index the end index is not included


// slicing method also works same but also allown negative indexing
console.log(username.slice(-9,6)); // will print from 1st index to 5th index
// explaination : username length -> 10 , So 10-9 = 1

// to trim the extraspaces 
const name1 = "     Abcsd      "
console.log(`${name1} and its length : ${name1.length}`);
console.log(name1.trim());


// replacing the character form the string
console.log(username.replace('@','$'));

// spliting string based on some separator
const userId = "Aditya-K-0201"
console.log(userId.split('-'));
// return an array with separated strings



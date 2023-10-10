
// 1. For of loop
// For of loop is used to iterate over any js Object like array,string , etc

let myArr = [1,2,3,4,5]
let myString = "Aditya"

for (const i of myArr) {
    // console.log(i); // will print the elements of i
}

for (const char of myString) {
    // console.log(char); // will print each char of the string incl. spaces
}

// For of loop doesn't work on objects as objects are not iterable naturally
let obj = {
    userName : "sam",
    userAge : 19
}

// for (const keys of obj) {
//     console.log(keys);
// }


// For In loops
// for in loop iterates on all enumerable objects like arrays and objects, etc


for (const key in obj) {
    // console.log(` The value for key ${key} is ${obj[key]}`);
}

// For each Loops 
// The most used loop on arrays which iterates over each element of the array

let languages = ["java","python","javascript","cpp"]

languages.forEach( (i,index,arr)=>{  // callback funtion which allows 3 arg of value, index and array itself
    // console.log(i,index,arr);
} )

// for each with predefined func.

function printArr(i) {
    console.log(i);
}

languages.forEach(printArr) // just give the ref not the execution of function
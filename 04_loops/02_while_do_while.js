
let i = 1 // intialization
while (i<=10)  {   // condition
    console.log(`Value of i is ${i}`);
    i++ // increment
}


// while loop on array
let myArray = ["shaktiman","jawan","kantara"]

let index = 0

while (index<myArray.length) {
    console.log(`Value of index ${index} is ${myArray[index]}`);
    index++
}

// do while loop

// do while loop is a loop where it executes at least once in spite of condition is true or false
// the condition is checked at last

let j = 11

do {
    console.log(`${j}`);
    j++
} while (j<=10);

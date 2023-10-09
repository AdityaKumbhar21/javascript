// To repeat some task until a specific condition is matched we use loops 

// Basic for loop

for (let i = 0; i <= 10; i++) {
    const element =i  
    console.log(i);
}

// nested for loop

for (let i = 1; i <=5; i++) {
    console.log(`Table of ${i}: `);
    for (let j = 1; j <= 10; j++) { // for each ith value inner loop runs 10 times
        console.log(`${i} * ${j} = ${i*j}`);
    }console.log("\n");
}


// Loop with Array
let myArray = ["shaktiman","jawan","kantara"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// Loop with break and continue

// break is used to break the control flow of the block

for (let i = 0; i <=10; i++) {

    if (i == 5) {
        console.log("Detected 5 breaking from loop");
        break
    } // this loop will not contiue from i = 5

    console.log(`Value of i is : ${i}`);
    
}

// continue is used to skip one iteration and continue its execution
for (let i = 0; i <=10; i++) {

    if (i == 5) {
        console.log("Detected 5 contiuing the loop");
        continue
    } // this loop will not execute for i = 5 and continue execution from i = 6
    console.log(`Value of i is : ${i}`);
    
}


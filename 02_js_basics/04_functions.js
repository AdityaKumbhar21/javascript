
function helloMessage() {
    console.log("Welcome User");
}

// helloMessage // This is the refernce of a function
// helloMessage() // This will execute a function

// Creating a function with parameter
function addTwoNums(num1,num2) {
    // let res = num1+num2
    // return res // will return the value of the result
    return num1+num2
}

let ans = addTwoNums(3,4)
// ans = 7
// console.log(ans);

// Function with default value
function welcomeUser(username = "No Name") {
    return `${username} just entered the chat `
}

// console.log(welcomeUser()); // If no arguments are passed it will take default value, i.e. No Name
// console.log(welcomeUser("Aditya"));

// Function with rest opertator
function calcCartValue(...cartItems){
    return cartItems
}

const cartItems = calcCartValue(2002,122,123,221)  // ... operator will return an array of elements specified in arguments 
console.log(cartItems);

// We can add any datatype as a parameter in functions






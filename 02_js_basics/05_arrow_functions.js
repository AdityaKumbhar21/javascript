
// To understand arrow function we need to understand first this keyword

// this:
//      this is a keyword which refers to its own context

const user = {
    userName: "Aditya",
    location: "Pune",
    greetUser: function () {
        console.log(`${this.userName} , welcome to community`);
        // Here using this.userName will refer to the context of the user object itself
        // console.log("This is printed by this: \n ",this); // will print the object itself
    }
}

// user.greetUser()
// console.log(this); // will print empty object {}

// Arrow Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// way to declare a traditional function

// const addTwo = function (num1,num2) {
//     // console.log(this);
//     return num1+num2
// }


// Declaring arrow functions

// const addTwo = (num1,num2) =>{
//    console.log(this); // will return an empty object
//    console.log(this.num1); // will return undefined
//    return num1+num2
// }

// if we have only one line in our function

// const addTwo = (num1,num2) => (num1+num2)

// or

const addTwo = (num1,num2) => num1 +num2

// console.log(addTwo(3,2));

// IIFE
// Immediately Invoked Function Expression

// There may be pollution inside function due to global variables to avoid that pollution we use iife, it executes the function immediately after its declaration we don't need to call it explicitly

// To declare iife
    // named iife
(function newOne() {
    console.log("Welcome");
})(); // semicolon should be added as the iife doesn't know where to stop

// iife using arrow function

( () =>{
    console.log("Welcome User");
} )();


// we can also add parameters to iife
( (name) =>{
    console.log(`Welcome ${name}`);
})("Aditya");

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

console.log(addTwo(3,2));

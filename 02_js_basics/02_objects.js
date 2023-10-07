// singleton objects
// Object.create() // when we use constructor it creates a singelton object

// Object literals

// Interview ques
// create an symbol and add in an object as a key
const mySym = Symbol("keySym")

const user = {
    name: "Aditya",
    age: 19,
    location: "Pune",
    isLoggedIn: true,
    loginDays: ["Mon","Tue","Sat"],
    [mySym] : "Symbol value" // remember to add [] otherwise it will be not treated as symbol
}

// To access object elements
console.log(user.name)
console.log(user["age"])
// To access symbol
console.log(user[mySym])


// To change any value of key
user.isLoggedIn = false
console.log(user)
// we can also lock the object so that it will not allow modification
//  Object.freeze(user)
user.isLoggedIn = true
// console.log(user)

// we can also add function as a key in object
user.welcome = function () {
    console.log("Welcome User")
}

console.log(user.welcome())

// we can access elements of the same object using this keyword
user.welcome2 = function () {
    console.log(`Welcome ${this.name}`);
}

console.log(user.welcome2());

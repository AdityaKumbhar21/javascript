// Object Literal
let user = {
    userName: "Aditya",
    isLoggedIn: true,
    greetings: function (){
        console.log(`Welcome: ${this.userName}`);
    }
}

// console.log(user);  
// console.log(user.greetings());

// Constructor Function
function userDetails(userName,isLoggedIn,LoggedInCount) {
    // as in global context the this value is {}
    // using this. we can fill the key value pairs
    this.userName = userName
    this.isLoggedIn = isLoggedIn
    this.LoggedInCount = LoggedInCount
     this.greetings = function (){
        console.log(`Welcome: ${this.userName}`);
    }

    return this
    // this will return the objects with above values
}

// let user1 = userDetails("Aditya",true,10)
// let user2 = userDetails("Jay",false,1) // this will override the value of user1 
// console.log(userDetails);

// we can use new keyword to create a new object
let user1 = new userDetails("Aditya",true,10)
let user2 = new userDetails("Jay",false,1) 

console.log(user1);
console.log(user2);
// also we can access properties of function using .
user1.greetings()
const userId = 18293 // This is a constant, once declared cannot be reassigned
let userName = "Aditya" // This is block or functional scope oriented, which allows reassignment of the variable
var userCity = "Pune" // var is not used more coz it is not scope oriented 
userAge = 18 // not recommend to use variable like this

// userId = 12 // This will throw an error
console.log(userId);

// A new method to display all elements using table 
console.table([userId, userName , userCity ,userAge])



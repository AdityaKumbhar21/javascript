const score = 100

console.log(score);

console.log(score.toString()); // converts the number to the string

const balance = 10200.892
console.log(balance.toPrecision(6)); // Includes the number of character specified also before decimal
console.log(balance.toFixed(2)); // display the number of character after decimal specified in the bracket

// When we want to convert the hundred into the readable format
const hundred = 1000000000
console.log(hundred.toLocaleString('en-IN')); // converted based on Indian format by default it has US format

// -------------------------------------------- Maths --------------------------------------------------------

console.log(Math.abs(-1)); // converts negative value to positive
console.log(Math.sqrt(25)); // prints the sqrt of the number
console.log(Math.round(102.902)); // Rounds the number according to the decimal value
console.log(Math.floor(102.9)); // Rounds the number to the lower number 
console.log(Math.ceil(102.1)); // Rounds the number to the upper number 

console.log(Math.random()); // displays any random number between 0 to 1

// a formula for ranging a random number from minimum to maximum
const min = 10
const max = 20
// I want random number from 10 to 20
// This is the formula
console.log(Math.floor(Math.random() * (max-min) + min));
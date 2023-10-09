// To understand control flow we need to understand the comparators first:
 /* 
    >	greater than	
    <	less than		
    ==	equal to	
    >=	greater than or equal to	
    <=	less than or equal to
    ===	equal value and equal type	
    !=	not equal		
    !==	not equal value or not equal type	
 */

// If statement 
const score = 18

if (score<10) {
    console.log("Score is less than 10");
}
// If the condition is true then it enters if block else it enter else block
else{
    console.log("Score is greater than 10");
}

// Shorthand to write if statement
// if(score<10) console.log("Score is less than 10"); // This is not a good practice of coding

// if-else if

//  To check multiple conditions we use if - else if 

const age = 19

if(age === 18){
    console.log("User is 18 years old");
}
else if(age>18)
{
    console.log("User is Adult");
}
else{
    console.log("User is not an Adult");
}

// if else with logical operator
const passed = true
const distinction = false

if(passed && distinction) // if both conditions are true then executes
{
    console.log("User passed with distinction");
}
else{
    console.log("User passed");
}

const userLoggedInGoogle = true
const userLoggedInEmail = false

if(userLoggedInEmail || userLoggedInGoogle) // if any one condition is true it executes
{
    console.log("User logged In");
}
else{
    console.log("User is not logged in");
}

// Truthy values
// "0",1,'false',[],{},function(){},true," "

// Falsy values
// false,0,-0,BigInt 0n, null,undefined,NaN,""

// Nullish Coalescing operator (??) : null and undefined

let val1;
// val1 = 5 ?? 10 // here val1 = 5
val1 = null ?? 10 // here val1 = 10

console.log(val1);

// Ternary Operator
// condition ? true : false

const price = 100
price >=100 ? console.log("Price is greater than or equal to 100"):console.log("price is less than 100")
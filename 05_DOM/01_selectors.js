// To manipulate HTML using js we can use DOM

// To get element by ID 
console.log(document.getElementById("heading")); // getting element by id

// we can also store it in variable
let title = document.getElementById("heading")

console.log(title.getAttribute("class")); // we can get attribute value specified in the arg

title.setAttribute("class","heading demo") // we can also set attribute and its value

title.className // prints the class name

// Also mainpulate CSS using js
title.style.backgroundColor = "yellow"

title.style.color = "black"

title.style.borderRadius = "20px"

title.style.padding = "20px"

// The selector which we will be using the most
document.querySelector("h1") // will give the first h1 tag
document.querySelectorAll("h1") // will give all h1 tags in the document

document.querySelector("#title") // will select the element by its Id

document.querySelector(".heading") // will select the element by its class



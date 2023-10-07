let myDate = new Date()

console.log(myDate);
// This are the methods to make date more readable
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toTimeString())

let newDate = new Date(2023,2,10) // the month index starts from 0 
console.log(newDate);
newDate = new Date(2023,2,10,12,11) // date with hours and minute
console.log(newDate);
newDate = new Date("01-21-2023") // format -> mm-dd-yyyy 
console.log(newDate);

// More Methods
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1) // As there is 0 based indexing
console.log(newDate.getFullYear())

// Time
let myTimeStamp = Date.now()
console.log(myTimeStamp) // gives the time in msec format

// to convert msec into seconds 
console.log(Math.floor(myTimeStamp/1000)) 

// to get time from the date 
console.log(newDate.getTime());


// One more way to create date
let anotherDate = new Date() 
// More customized date format
anotherDate.toLocaleString('default',{
    day:"numeric",
    weekday: "long"
})


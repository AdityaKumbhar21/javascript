// Singelton Object
const instaUser = new Object() // singelton object is created

// to add values in the object
instaUser.id = "abc123"
instaUser.name = "Aditya"
instaUser.age = 10


// console.log(instaUser);

// To merge two objects 
const obj1 = {1:101,2:102,3:103}
const obj2 = {4:104,5:105,6:106}
const obj3 = {7:107,8:108,9:109}

// 1. 
// const obj4 = {obj1,obj2,obj3} // this will create an problem as it will take object as elements
// not recommended
// console.log(obj4);

//2. using assign method
// const obj4 = Object.assign({},obj1,obj2,obj3) // Here the 1st arg is the target object and other are source objects
// console.log(obj4);

// 3. using spread operator
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

// to get all keys 
console.log(instaUser);
// It returns the array of keys of specified objects
console.log(Object.keys(instaUser)); 

// It returns the array of values of specified objects
console.log(Object.values(instaUser));

// to covert the object in an array of arrays
console.log(Object.entries(instaUser));

// to check if the object has the property or not
console.log(instaUser.hasOwnProperty('id')); // returns true if the key is present else false

// Array of Objects
const objArr = [
    {
        1:"abc"
    },
    {
        1:"abc"
    },
    {
        1:"abc"
    },
    {
        1:"abc"
    },

]

// To access the elements
console.log(objArr[1][1]);

// De-structuring object
const animal = {
    type: "carnivorous",
    name: "lion",
    location: "South Africa"
}

const {type} = animal
console.log(type);

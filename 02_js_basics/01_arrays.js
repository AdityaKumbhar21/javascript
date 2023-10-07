const arr = [1,2,3,4,5] // creates an array

// Different ways to create an array
// const arr1 = new Array("Aditya",true,1,3,4)

// console.log(arr);
// to print the length of an array
// console.log(arr.length);

// array methods


arr.push(101) // Inserts the element at the end of the array
// console.log(arr)
arr.pop() // removes the last element of an array
// console.log(arr)

arr.unshift(10) // Inserts the element at the 0th index of an array
// costly operation as we need to shift each element of the array by 1
// console.log(arr)
arr.shift() // removes the element at the 0th index
// console.log(arr)

// console.log(arr.includes(5)) // returns true of the element is present in the array else returns false
// console.log(arr.indexOf(3)) // Retruns the index of element entered else returns -1 if element is not present

// Array slice Vs splice

// console.log("Org:" ,arr)

//slice operation
const slicedArr = arr.slice(1,4) // will slice array from index 1->3 4th index is not included
// console.log(slicedArr)
// console.log("A:", arr) 

const splicedArr = arr.splice(1,4) // will manipulate the original array, that is it will remove the elements from 1st index to 3rd
// The array after splicing => [1]
// console.log(splicedArr)
// console.log("B: ",arr) 

// Different ways to merge two or more array

let arr1 = [1,3,2,4,2,4]
let arr2 = [2,4,2,2,4,4]

// 1st way using push method
// arr1.push(arr2) // it will push arr2 as an entire element at the end, not element wise
// console.log(arr1)
// to access element of arr2
// console.log(arr1[6][2]) // As arr2 is the element at index 6 and we will access element at index 2 of arr2

// 2. Using concat method
// const all_arr = arr1.concat(arr2) // this will insert arr2 elements at the end of arr1
// console.log(all_arr)

// 3. Using spread operator
const total_arr = [...arr1,...arr2] // using this method we can add 2 or more arrays together
console.log(total_arr)

// to convert string to an array
console.log(Array.from("Aditya"))

// to convert multiple elements to array
let s1 = 100
let s2 = 101
let s3 = 102
console.log(Array.of(s1,s2,s3))

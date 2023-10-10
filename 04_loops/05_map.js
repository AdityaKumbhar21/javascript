// Arrray.map()
// returns a new array with the operations performed in the map func.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let nums = [1,2,3,5,6,7,8,9,10]

// let newNums = nums.map((n)=>{return n*10}) // will return each element *10

// function chaining
let newNums = nums
                .map((n)=>{return n*10})
                //n = [10, 20, 30,  50, 60,70, 80, 90, 100]
                .map((n)=>{return n+1})
                //n = [11, 21, 31,  51, 61,71, 81, 91, 101]
                .filter((n)=>{return n>=30})
                // n = [31,  51, 61,71, 81, 91, 101]

console.log(newNums);
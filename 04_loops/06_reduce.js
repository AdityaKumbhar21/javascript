// reduce
// reduce is used to travers throug array with the help of a reducer and perform operation

// Initially the reducer don't have a value so we need to explicitly give the value to reducer

// Sum of array 

let nums = [1,2,3,4]

let sum = nums.reduce((accumalator,currentValue)=>{
    console.log(`Accumalator: ${accumalator} and currentValue: ${currentValue}`);
    return accumalator+currentValue;
},0) // this is the initial value

console.log(`Sum is: ${sum}`);

//  Sum of prices in shooping cart

let shoopingCart = [
    {
        bookName:"Atomic Habits",
        bookPrice: 923
    },
    {
        bookName:"How to influence friends and people",
        bookPrice: 500
    },
    {
        bookName:"Rich Dad Poor Dad",
        bookPrice: 999
    },
    {
        bookName:"Wings of Fire",
        bookPrice: 800
    },
    {
        bookName:"Half-Girlfriend",
        bookPrice: 499
    }
]

let total = shoopingCart.reduce((acc,book)=>{
    return acc + book.bookPrice;
},0)

console.log(`The total of your cart is: ${total}`);
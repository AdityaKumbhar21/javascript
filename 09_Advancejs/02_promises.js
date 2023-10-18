// Promise represents eventual compeletion or failure of an asynchronous task

// Promise 1
let promiseOne = new Promise((resolve,reject)=>{  // takes a callback function to perform task with two parameter resolve and reject
    
    // Do any Async task
    // Like File handling,DB , crytography,etc.

    // perfomring Async Task
    setTimeout(() => {
        console.log("Async task 1 compeleted");
        // to consume the promise we need to call resolve()
        resolve()
    }, 1000);
    
})

// now promise is just created it need to be consumed so, we have to use then()
// when the promise is successfully compeleted, we can use its result in then()
promiseOne.then(()=>{
    console.log("Promise 1  Consumed");
})


// Promise 2 with accessong data
let promiseTwo = new Promise((resolve, reject) => {
    // suppose we are getting some data
    // the data in most of the cases is object
    let data 
    setTimeout(() => {
        data = {
            user:"Aditya",
            userEmail:"aditya@xyz.com"
        }
        // we can also pass the data to resolve() so that we can access it
        resolve(data)
    }, 1000);

})

promiseTwo.then((user)=>{
    // Here we get the user Object
    console.log(user);
})

// Promise 3 with error

let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){ // if there is no error then this will get executed
            let user = {
                userName :"Aditya",
                password: "123@23"
            }
            resolve(user)
        }
        else{
            // if there is an error then we need to catch that
            reject("ERROR: Not able to fetch data")
        }
    }, 1000);
})

// then() chaining
promiseThree
.then((user)=>{
    console.log(user);
    return user.userName
})
.then((username)=>{ // the value returned in the previous then can be accessed in the next then()
    console.log(username);
})
.catch((err)=>{ // if there is an error this will get executed
    console.log(err);
})
.finally(()=> console.log("Executing finally")) // finally will get executed compulsorily inspite of there is error or not

// Promise 4 async await

let promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){ // if there is no error then this will get executed
            let user = {
                userName :"Aditya(async await)",
                password: "123@23"
            }
            resolve(user)
        }
        else{
            // if there is an error then we need to catch that
            reject("ERROR: Not able to fetch data (Async await)")
        }
    }, 1000);
})

async function consumePromiseFour() {
    // // this will throw an error as there is not catch() function
    // let response = await promiseFour
    // console.log(response);

    // need to wrap this in try catch
    try {
        let response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour()

// acessing apis
let url = "https://api.github.com/users/hiteshchoudhary"

// acessing api using async await

// async function getUser() {
//     try {
//         let response = await fetch(url)
//         let data = await response.jons()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// acessing apis using fetch()
// fetch()  is used to access api data which returns promise


fetch(url)  // as this returns a promise we can use then() and catch()
.then((response)=>{
    let data = response.json()
    return data
    
})
.then((data)=>{
    console.log(data);
    return data.login;
})
.then((login)=>{
    console.log(`Username: ${login}`);
})
.catch((err)=>{
    console.log(err);
})
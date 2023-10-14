let clock = document.querySelector("#clock")
// declaring date first to oget current date
let today = new Date();
// this is to display static time
// let localTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
// clock.innerHTML = localTime

// to display continous watch
// setInterval() is used to run a program after a specific time
setInterval(()=>{
    let localTime = new Date().toLocaleTimeString()
    clock.innerHTML = localTime
},1000) // parameters are callback func and interval time in msec


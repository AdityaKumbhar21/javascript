let randomColor = ()=>{
    let hex = "0123456789ABCDEF"
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)]
 
    }
    return color;
}

let changeColor;

function changeBColor(){
    document.body.style.backgroundColor = randomColor();
    console.log(randomColor());
}

let startChanging = ()=>{
    if(!changeColor){
        changeColor = setInterval(changeBColor,1000)
    }
    
}
let stopChanging = ()=>{
    clearInterval(changeColor)
    changeColor = null;
}

document.querySelector("#start").addEventListener("click",startChanging)
document.querySelector("#stop").addEventListener("click",stopChanging)



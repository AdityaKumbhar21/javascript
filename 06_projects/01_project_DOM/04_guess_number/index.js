// First selecting a random nuber
let min = 1;
let max = 100;
let randomNum = Math.floor(Math.random() * (max - min) + min);
console.log(randomNum);

let form = document.querySelector("form")
let userInput = document.querySelector("#guessField")
let submit = document.querySelector("#subt")
let userGuesses = document.querySelector(".guesses")
let remainGuess = document.querySelector(".lastResult")
let hint = document.querySelector(".lowOrHi")
let resultParas = document.querySelector(".resultParas")

let p = document.createElement("p")

let prevGuess = []
let remainingGuess = 1

let playGame = true

if(playGame)
{
    submit.addEventListener("click",(event)=>{
        event.preventDefault()

        let userGuess = parseInt(userInput.value)
        validateGuess(userGuess)
    })
}


function validateGuess(guess) {
    if(isNaN(guess))
    {
        console.log(`Please enter a valid number`);
    }
    else if( guess <0 || guess>100){
        console.log(`Please enter a number between 1 to 100`);
    }
    else{
        prevGuess.push(guess)
        console.log(prevGuess);
        if(remainingGuess>10){
            displayGuess(guess)
            showMessage(`Game Over. The Number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkAnswer(guess)
        }
    }
}

function checkAnswer(guess) {
    if(guess === randomNum)
    {
        showMessage(`Congratulations! You guessed the number right!`)
    }
    else if(guess<randomNum)
    {
        showMessage(`The number is low`)
    }
    else{
        showMessage(`The number is high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    userGuesses.innerHTML += `${guess}, `
    remainingGuess++;
    remainGuess.innerHTML  = `${11-remainingGuess}`

}

function showMessage(message) {
    hint.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
   let newBtn = document.querySelector("#newGame")
   newBtn.addEventListener('click',(e)=>{
    userInput.value = ''
    randomNum = Math.floor(Math.random() * (max - min) + min);
    remainingGuess = 1
    prevGuess = []
    remainGuess.innerHTML  = `${11-remainingGuess}`
    userGuesses.innerHTML = ''
    userInput.removeAttribute('disabled')
    resultParas.removeChild(p)
    playGame = true;
   })
}


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start a new Game</h2>`
    resultParas.appendChild(p);
    playGame = false;
    newGame();
}
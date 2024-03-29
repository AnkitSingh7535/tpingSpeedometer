let wordInput = document.querySelector("#word-input")
let CurrentWord = document.querySelector("#current-word")
let scoreDisplay = document.querySelector("#score")
let timeDisplay = document.querySelector("#time")
let message = document.querySelector("#message")

let time=6
let score = 0


//Array of words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];

window.addEventListener("DOMContentLoaded",init)


    function init(){
        showWord(words)
        wordInput.addEventListener("input",startMatch)
        setInterval(countdown,1000)
        setInterval(checkStatus,50)
    
        
    }

    function showWord(words){
const randomIndex = Math.floor(Math.random()*words.length)
CurrentWord.innerHTML = words[randomIndex]
    }


    function startMatch(){
if(matchWords()){
    showWord(words)
    wordInput.value = ''
    message.innerHTML = "Correct!!"
    score++;
    time=6
}else{
    message.innerHTML = "InCorrect!!"
}
scoreDisplay.innerHTML = scores

}
    

    function matchWords(){
        if(CurrentWord.innerHTML === wordInput.value){
            return true;
        }else{
            return false
        }
        }

    function countdown(){
        if(time>0)
        time--
        timeDisplay.innerHTML = time
            
    }

    function checkStatus(){
        if(time===0){
            message.innerHTML = "GAME OVER!!"
        }
    }
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const addSpeedBtn = document.querySelector('#addSpeedBtn');
const reduceSpeedBtn = document.querySelector('#reduceSpeedBtn');
const startGameBtn = document.querySelector('#startGameBtn');
const speedText = document.querySelector('#speed');

let squareToClick = null;
let squareToClickId;
let squareClickedId;

let result = 0;
let timeLeftCounter = 60;

let speed = 100;

let start;

addSpeedBtn.addEventListener('click', setSpeed);
reduceSpeedBtn.addEventListener('click', setSpeed);

speedText.textContent = speed + 'ms';

function setSpeed(e){
    if(e.target.id == 'addSpeedBtn'){
        if(speed >= 100){
            speed -= 100;
        }else{
            return;
        }
        
        
    }
    if(e.target.id == 'reduceSpeedBtn'){
        speed += 100;
    }
    speedText.textContent = speed + 'ms';
    console.log(speed);
}

startGameBtn.addEventListener('click', startGame);

function startGame(){

        function randomSquare(){
            squares.forEach(square => {
                square.classList.remove('mole');
                square.addEventListener('click', addScore);
            })
        
            squareToClick = squares[Math.floor(Math.random() * 9)];
            squareToClick.classList.add('mole');
            squareToClickId = squareToClick.id;
        }
        
        const randomSquaree = setInterval(randomSquare, speed);
        
        function addScore(){
            squareClickedId = this.id;
            if(squareClickedId == squareToClickId){
                result++;
                score.textContent = result;
            }
        }
        
        function countDown(){
            if(timeLeftCounter == 0){
                clearInterval(randomSquaree);
            }else{
                timeLeftCounter--;
                timeLeft.textContent = timeLeftCounter;
            }
        }
        setInterval(countDown, 1000);
}




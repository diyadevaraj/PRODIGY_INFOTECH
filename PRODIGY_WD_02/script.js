const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const timerDisplay = document.getElementById('timer');

let elapsedTime = 0;
let timerInterval;
let isRunning = false; 

const formatTime = (time) => 
{
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes > 9 ? minutes : "0" + minutes) + ":" +
        (seconds > 9 ? seconds : "0" + seconds) + "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
};


const updateTime = () => {
    const currentTime = Date.now() - startTime + elapsedTime;
    timerDisplay.textContent = formatTime(currentTime);
};


const startTimer = () => {
    if (!isRunning) {
        startTime = Date.now();
        timerInterval = setInterval(updateTime, 10);
        isRunning = true;  
    }
};

const pauseTimer = () => {
    if (isRunning) {
        clearInterval(timerInterval);
        elapsedTime += Date.now() - startTime;
        isRunning = false;  
    }
};


const resetTimer = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    timerDisplay.textContent = "00:00:00.00";
};

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

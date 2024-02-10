let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

document.getElementById('startButton').addEventListener('click', startStopwatch);
document.getElementById('pauseButton').addEventListener('click', pauseStopwatch);
document.getElementById('resetButton').addEventListener('click', resetStopwatch);

function startStopwatch() {
 interval = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
    updateStopwatch();
 }, 1000);
}

function pauseStopwatch() {
 clearInterval(interval);
}

function resetStopwatch() {
 clearInterval(interval);
 hours = 0;
 minutes = 0;
 seconds = 0;
 updateStopwatch();
}

function updateStopwatch() {
 document.getElementById('hours').textContent = formatTime(hours);
 document.getElementById('minutes').textContent = formatTime(minutes);
 document.getElementById('seconds').textContent = formatTime(seconds);
}

function formatTime(time) {
 return time < 10 ? '0' + time : time;
}

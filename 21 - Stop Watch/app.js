// Constants for DOM elements
const displayTime = document.querySelector('.display');
const startButton = document.getElementById('startTimer');
const stopButton = document.getElementById('stopTimer');
const resetButton = document.getElementById('resetTimer');

// Initialize time variables
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

// Update the display with the current time
function updateDisplay() {
    displayTime.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Increment time and update display every second
function stopwatch() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
    }
    updateDisplay();
}

// Start the stopwatch
function startStopwatch() {
    if (!timer) {
        timer = setInterval(stopwatch, 1000);
    }
}

// Stop the stopwatch
function stopStopwatch() {
    clearInterval(timer);
    timer = null;
}

// Reset the stopwatch
function resetStopwatch() {
    stopStopwatch();
    [seconds, minutes, hours] = [0, 0, 0];
    updateDisplay();
}

// Event listeners for buttons
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

// Initial display update
updateDisplay();

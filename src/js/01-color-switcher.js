const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

startButton.addEventListener('click', handleChangeColorBodyClick);

stopButton.addEventListener('click', handleStopColorBodyClick);



// ==============================
// FUNCTION

function handleChangeColorBodyClick() {
    timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function handleStopColorBodyClick() {
    clearInterval(timerId);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

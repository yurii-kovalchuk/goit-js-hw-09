const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

stopBtn.setAttribute('disabled', '');

function onStart() {
  body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
}

function onStop() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');
}

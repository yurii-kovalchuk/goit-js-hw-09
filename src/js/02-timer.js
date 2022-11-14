import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
const input = document.querySelector('#datetime-picker');

startBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', onClick);

let fixedDate = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      startBtn.setAttribute('disabled', '');
      return;
    }
    fixedDate = selectedDates[0];
    startBtn.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function showTime() {
  const curTimer = convertMs(fixedDate - new Date());
  daysRef.textContent = addLeadingZero(curTimer.days);
  hoursRef.textContent = addLeadingZero(curTimer.hours);
  minutesRef.textContent = addLeadingZero(curTimer.minutes);
  secondsRef.textContent = addLeadingZero(curTimer.seconds);
}

let timerId = 0;
function onClick() {
  showTime();
  startBtn.setAttribute('disabled', '');
  input.setAttribute('disabled', '');

  timerId = setInterval(() => {
    if (fixedDate - new Date() > 0) {
      showTime();
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

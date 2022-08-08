import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() >= selectedDates[0]) {
      refs.dataButton.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    refs.dataButton.disabled = false;
    refs.dataButton.addEventListener('click', handleShowClockClick);

    selectedTime = selectedDates[0];
  },
};

const refs = {
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),

  dateTimePicker: document.querySelector('#datetime-picker'),
  dataButton: document.querySelector('button[data-start]'),
}

refs.dataButton.disabled = true;

inlineStyleTimer();

let selectedTime = null;

flatpickr(refs.dateTimePicker, options);





// =========================================
// FUNCTION

function inlineStyleTimer() {
  const timerRef = document.querySelector('.timer');
  const fieldRef = document.querySelectorAll('.field');
  const valueRef = document.querySelectorAll('.value');
  const labelRef = document.querySelectorAll('.label');

  timerRef.style.display = 'flex';
  timerRef.style.marginTop = '40px';

  fieldRef.forEach(el => {
    el.style.display = 'flex';
    el.style.flexDirection = 'column';
    el.style.alignItems = 'center';
    el.style.marginRight = '20px';
  });

  valueRef.forEach(el => {
    el.style.fontSize = '50px';
    el.style.fontFamily = 'Roboto, sans-serif';
  });

  labelRef.forEach(el => {
    el.style.textTransform = 'uppercase';
    el.style.fontSize = '16px';
    el.style.fontFamily = 'Roboto, sans-serif';
  });
}

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

function handleShowClockClick() {
  
  setInterval(TimerClock, 1000);
}

function TimerClock() {
  const differentTime = selectedTime - Date.now();
  const { days, hours, minutes, seconds } = convertMs(differentTime);
  
  refs.timerDays.textContent = addLeadingZero(days);
  refs.timerHours.textContent = addLeadingZero(hours);
  refs.timerMinutes.textContent = addLeadingZero(minutes);
  refs.timerSeconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}



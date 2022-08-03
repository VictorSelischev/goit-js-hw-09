import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

inlineStyleTimer();

let differentTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date() >= selectedDates[0]) {
      dataButton.disabled = true;
      window.alert('Please choose a date in the future');
      return;
    }

    dataButton.disabled = false;
    differentTime = selectedDates[0].getTime() - Date.now();
    
    dataButton.addEventListener('click', handleShowClockClick);
  },
};

const dateTimePicker = document.querySelector('#datetime-picker');
const dataButton = document.querySelector('button[data-start]');
dataButton.disabled = true;

flatpickr(dateTimePicker, options);

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
  
  setInterval(convertMs(differentTime), 1000);

  const timerDays = document.querySelector('[data-days]');
  const timerHours = document.querySelector('[data-hours]');
  const timerMinutes = document.querySelector('[data-minutes]');
  const timerSeconds = document.querySelector('[data-seconds]');

  // timerDays.textContent = timeClock.days;
  // timerHours.textContent = timeClock.hours;
  // timerMinutes.textContent = timeClock.minutes;
  // timerSeconds.textContent = timeClock.seconds;
}

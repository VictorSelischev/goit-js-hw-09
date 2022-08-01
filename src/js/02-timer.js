inlineStyleTimer();



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




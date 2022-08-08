const refs = {
  formRef: document.querySelector('.form'),
};

refs.formRef.addEventListener('submit', handleCreatePromisesSubmit);


// ======================================
// FUNCTION

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleCreatePromisesSubmit(event) {
  event.preventDefault();

  let delayRefs = +event.currentTarget.elements.delay.value;
  const amountRefs = +event.currentTarget.elements.amount.value;
  const stepRefs = +event.currentTarget.elements.step.value;

  for (let i = 1; i <= amountRefs; i += 1) {
    createPromise(i, delayRefs)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay} ms`);
      });

    // console.log(i);
    delayRefs += stepRefs;

  }
}

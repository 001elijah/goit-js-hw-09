const form = document.querySelector('form.form');

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
  
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        };
  
        reject({ position, delay });
      }, delay);
    });
};

function beginExperiment(evt) {
  evt.preventDefault();
  for (let i = 0; i < form.amount.value; i += 1) {
    createPromise(i, +form.delay.value + +form.step.value * i)
      .then(({ position, delay }) => {
        console.log(`%c✅ Fulfilled promise ${position} in ${delay}ms`, 'background-color: lightgreen');
      })
      .catch(({ position, delay }) => {
        console.log(`%c❌ Rejected promise ${position} in ${delay}ms`, 'background-color: #eb8c86');
      });
  };
};
form.addEventListener('submit', beginExperiment);
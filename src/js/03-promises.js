import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
  return promise;
}

const formRef = document.querySelector('.form');
const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector('[name="amount"]');

formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let delay = Number(delayRef.value);

  for (let i = 1; i <= Number(amountRef.value); i += 1) {
    createPromise(i, delay).then(onSuccess).catch(onError);
    delay += Number(stepRef.value);
  }

  e.currentTarget.reset();
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

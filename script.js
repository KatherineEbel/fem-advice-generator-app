import getAdvice from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const quote = document.querySelector('.quote span');
  const adviceEl = document.getElementById('advice');
  const dieButton = document.querySelector('.die-btn');
  async function generateAdvice() {
    try {
      let { id, advice } = await getAdvice();
      quote.parentElement.classList.toggle('changing');
      adviceEl.textContent = id;
      setTimeout(() => {
        quote.textContent = advice;
        quote.parentElement.classList.toggle('changing');
      }, 500);
    } catch (e) {
      quote.textContent = 'Out of advice. Check back later...';
    }
  }

  dieButton.addEventListener('click', generateAdvice);
});

import getAdvice from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const quote = document.querySelector('.quote span');
  const dieButton = document.querySelector('.die-btn');
  let fadeElements = document.querySelectorAll('.fade-in-out');
  const toggleChanging = (el) => el.parentElement.classList.toggle('changing');

  function fadeOut(newTexts) {
    fadeElements.forEach((el, idx) => {
      toggleChanging(el);
      setTimeout(() => {
        el.textContent = newTexts[idx];
        toggleChanging(el);
      }, 500);
    });
  }

  async function generateAdvice() {
    try {
      let advice = await getAdvice();
      dieButton.disabled = true;
      fadeOut(Object.values(advice));
    } catch (e) {
      quote.textContent = 'Out of advice. Check back later...';
    } finally {
      dieButton.disabled = false;
    }
  }

  dieButton.addEventListener('click', generateAdvice);
});

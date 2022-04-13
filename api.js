const URL = 'https://api.adviceslip.com/advice';

export default async function getAdvice() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', URL);
    xhr.responseType = 'json';
    xhr.send();
    xhr.addEventListener('load', () => {
      if (xhr.status !== 200) return reject({ error: true });
      resolve(xhr.response.slip);
    });
    xhr.addEventListener('error', () => reject('Something went wrong'));
  });
}

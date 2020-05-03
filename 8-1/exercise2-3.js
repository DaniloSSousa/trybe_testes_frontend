const btnCount = document.querySelector('button');
const pCount = document.querySelector('p');
let clickCount = 0;

btnCount.addEventListener('click', () => {
  clickCount++;
  pCount.innerText = clickCount;
});

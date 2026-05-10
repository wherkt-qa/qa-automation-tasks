function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const initialSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = initialSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  } }
  function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
// }

createBtn.addEventListener('click', () => {
  const amount = input.valueAsNumber;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);
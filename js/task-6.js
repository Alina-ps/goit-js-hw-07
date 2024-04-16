function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.removeEventListener('click', destroyBoxes);

function createBoxes() {
  boxesContainer.innerHTML = '';
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

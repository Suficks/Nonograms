import gameProcess from './gameProcess';
import data from './data';
import selectImage from './selectImage';
import { soundToggle } from './sounds';
import { timer } from './gameDuration';

const gridGenerator = (imageId, result, lastTime) => {
  const main = document.querySelector('.main');
  const {
    hints: { row: hintRows, column: hintColumns },
    cells: gridSize,
    side: oneSideSize,
  } = data[imageId];

  const template = `
    <div class="settings">
      <button class="repeat"></button>
      <div class="timer">${lastTime || '00:00'}</div>
      <button class="menu"></button>
      <button class="sound"></button>
      <button class="solution"></button>
    </div>
    <div class="grid">
        <div class="hint_column_container"></div>
        <div class="hint_row_container"></div>
    </div>
  `;
  main.innerHTML = '';
  main.insertAdjacentHTML('beforeend', template);

  const grid = document.querySelector('.grid');
  const hintColumnContainer = document.querySelector('.hint_column_container');
  const hintRowContainer = document.querySelector('.hint_row_container');
  const menuBtn = document.querySelector('.menu');
  const settings = document.querySelector('.settings');

  if (oneSideSize === 10) {
    grid.classList.add('grid10');
  }

  if (oneSideSize === 15) {
    grid.classList.add('grid15');
  }

  for (let i = 0; i < gridSize; i += 1) {
    grid.insertAdjacentHTML('beforeend', `<div class="cell" data-id="${i}"></div>`);
    if (i <= oneSideSize - 1) {
      hintColumnContainer.insertAdjacentHTML('beforeend', `<div class="hint_column">${hintColumns[i]}</div>`);
    }
    if (i % oneSideSize === 0) {
      hintRowContainer.insertAdjacentHTML('beforeend', `<div class="hint_row">${hintRows[i / oneSideSize]}</div>`);
    }
  }

  if (result) {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((item, index) => {
      if (result[index] === 1) {
        item.classList.add('cell_selected');
      }
    });
  }

  gameProcess(imageId, gridSize);
  soundToggle();

  menuBtn.addEventListener('click', () => {
    selectImage();
    settings.remove();
    clearInterval(timer);
  });
};

export default gridGenerator;

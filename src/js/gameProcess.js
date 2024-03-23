import data from './data';
import { setModal } from './modal';
import gridGenerator from './gridGeneration';
import gameDuration, { timer } from './gameDuration';
import { sounds } from './sounds';
import gameSolution from './gameSolution';
import saveResultsToLocalStorage from './saveResultsToLocalStorage';

const gameProcess = (imageId, gridSize) => {
  const repeatBtn = document.querySelector('.repeat');
  const cells = document.querySelectorAll('.cell');
  const solutionBtn = document.querySelector('.solution');
  console.log(JSON.parse(localStorage.getItem('lastGame'))?.result);
  const result = JSON.parse(localStorage.getItem('lastGame'))?.result || new Array(gridSize).fill(0);
  const currentImageSolution = data[imageId].solutionGrid;

  let clicked = false;

  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      gameDuration(clicked);
      clicked = true;
      cell.classList.remove('cell_cross');
      cell.classList.toggle('cell_selected');

      if (cell.classList.contains('cell_selected')) {
        sounds('black');
        result.splice(index, 1, 1);
        localStorage.setItem('lastGame', JSON.stringify({ imageId, result }));
      } else {
        sounds('white');
        result.splice(index, 1, 0);
        localStorage.setItem('lastGame', JSON.stringify({ imageId, result }));
      }

      if (result.toString() === currentImageSolution.toString()) {
        setModal();
        clearInterval(timer);
        sounds('win');
        saveResultsToLocalStorage(imageId);
        localStorage.removeItem('lastGame');
        localStorage.removeItem('lastTime');
      }
    });

    cell.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      sounds('cross');
      cell.classList.remove('cell_selected');
      cell.classList.toggle('cell_cross');
    });
  });

  repeatBtn.addEventListener('click', () => {
    gridGenerator(imageId);
    clearInterval(timer);
    localStorage.removeItem('lastTime');
  });

  solutionBtn.addEventListener('click', () => {
    gameSolution(currentImageSolution, cells);
  });
};

export default gameProcess;

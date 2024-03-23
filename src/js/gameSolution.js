import { timer } from './gameDuration';

const gameSolution = (currentImageSolution, cells) => {
  cells.forEach((item, index) => {
    if (currentImageSolution[index] === 1) {
      item.classList.add('cell_selected');
    } else if (currentImageSolution[index] !== 1 && item.classList.contains('cell_selected')) {
      item.classList.remove('cell_selected');
    }
  });
  clearInterval(timer);
  localStorage.removeItem('lastGame');
  localStorage.removeItem('lastTime');
};

export default gameSolution;

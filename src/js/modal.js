import selectImage from './selectImage';
import trophy from '../assets/trophy.png';
import createResultTable from './createResultTable';

let currentTime = '';

export const playAgain = () => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const settings = document.querySelector('.settings');
  const table = document.querySelector('table');
  const backBtn = document.querySelector('.back_btn');
  modal.remove();
  overlay.remove();
  settings?.remove();
  table?.remove();
  backBtn?.remove();
  selectImage();
};

export const setModal = () => {
  const main = document.querySelector('.main');
  const timer = document.querySelector('.timer')?.textContent || currentTime;
  currentTime = timer;

  const modal = `
    <div class="modal">
      <h2 class="modal_title">Great! You have solved the nonogram!</h2>
      <h3 class="result_time">Your time: ${timer}</h3>
      <img class="trophy" src=${trophy} alt="trophy"/>
      <button class="play_again">Play again</button>
      <button data-page="modal" class="results_btn">Result Table</button>
    </div>
    <div class="overlay"></div>
  `;
  main.insertAdjacentHTML('beforeend', modal);

  if (document.querySelector('.modal')) {
    const playAgainBtn = document.querySelector('.play_again');
    playAgainBtn.addEventListener('click', playAgain);
  }

  const resultsBtn = document.querySelector('.results_btn');

  resultsBtn.addEventListener('click', () => {
    createResultTable(resultsBtn);
  });
};

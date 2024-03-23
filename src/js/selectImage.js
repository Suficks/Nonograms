import gridGenerator from './gridGeneration';
import data from './data';
import setRandomGame from './randomGame';

const selectImage = () => {
  const main = document.querySelector('.main');
  const buttonsContainer = document.querySelector('.buttons_container');
  const gridContainer = document.querySelector('.grid');

  const imageSelection = document.createElement('div');
  imageSelection.className = 'image_selection';

  for (let i = 0; i < 15; i += 1) {
    const button = `<button class="select" data-id="${i}">${data[i].name} ${data[i].size}</button>`;
    imageSelection.insertAdjacentHTML('beforeend', button);
  }
  buttonsContainer?.remove();
  gridContainer?.remove();
  main.insertAdjacentHTML('afterbegin', '<button class="select_latest">Continue last game</button>');
  main.insertAdjacentHTML('afterbegin', '<button class="select_random">Random game</button>');
  main.insertAdjacentElement('beforeend', imageSelection);

  const selectButtons = document.querySelectorAll('.select');
  const randomGameBtn = document.querySelector('.select_random');
  const latestGameBtn = document.querySelector('.select_latest');

  selectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      imageSelection.remove();
      const imageId = button.getAttribute('data-id');
      localStorage.removeItem('lastTime');
      localStorage.removeItem('lastGame');
      gridGenerator(imageId);
    });
  });
  randomGameBtn.addEventListener('click', setRandomGame);

  const latestGameId = localStorage.getItem('lastGame');
  const latestGameResult = localStorage.getItem('lastGame');
  const latestGameTime = localStorage.getItem('lastTime');

  if (!latestGameId) latestGameBtn.classList.add('disabled');

  latestGameBtn.addEventListener('click', () => {
    gridGenerator(
      JSON.parse(latestGameId).imageId,
      JSON.parse(latestGameResult).result,
      latestGameTime,
    );
  });
};

export default selectImage;

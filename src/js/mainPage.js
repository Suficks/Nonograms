import createResultTable from './createResultTable';
import selectImage from './selectImage';

const setStartingPage = () => {
  const template = `
    <header class="header">
      <h1 class="title">Nonograms Game</h1>
      <button class="theme_btn"></button>
    </header>
    <main class="main">
      <div class="buttons_container">
        <button class="start_btn">Start</button>
        <button data-page="main" class="results_btn">Result Table</button>
      </div>
    </main>
  `;
  document.body.innerHTML = '';
  document.body.insertAdjacentHTML('beforeend', template);

  const startBtn = document.querySelector('.start_btn');
  const resultsBtn = document.querySelector('.results_btn');

  startBtn.addEventListener('click', selectImage);
  resultsBtn.addEventListener('click', () => {
    createResultTable(resultsBtn);
  });
};

setStartingPage();

const setTheme = () => {
  const html = document.documentElement;
  const themeBtn = document.querySelector('.theme_btn');
  html.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

  themeBtn.addEventListener('click', () => {
    let currentTheme = html.getAttribute('data-theme');
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  });
};

setTheme();

export default setStartingPage;

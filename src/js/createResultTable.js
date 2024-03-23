import setStartingPage from './mainPage';
import { setModal } from './modal';

const createResultTable = (resultsBtn) => {
  const main = document.querySelector('main');
  const table = document.createElement('table');
  const results = JSON.parse(localStorage.getItem('results'));

  main.innerHTML = '';
  table.innerHTML = '';

  table.insertAdjacentHTML(
    'beforeend',
    `<thead>
      <tr>
        <th>#</th><th>Name</th><th>Time</th>
      </tr>
    </thead>`,
  );

  if (!results) {
    table.insertAdjacentHTML('beforeend', '<tr><td colspan="3">No data</td></tr>');
  } else {
    results.forEach((item, index) => {
      const td1 = `<td>${index + 1}</td>`;
      const td2 = `<td>${item.name}</td>`;
      const td3 = `<td>${item.time}</td>`;
      const tr = td1 + td2 + td3;
      table.insertAdjacentHTML('beforeend', tr);
    });
  }

  main.insertAdjacentElement('beforeend', table);
  main.insertAdjacentHTML('beforeend', '<button class="back_btn">Back</button>');

  const backBtn = document.querySelector('.back_btn');

  backBtn.addEventListener('click', () => (resultsBtn.getAttribute('data-page') === 'main' ? setStartingPage() : setModal()));
};

export default createResultTable;

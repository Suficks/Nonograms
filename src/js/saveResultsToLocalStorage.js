import data from './data';

const results = JSON.parse(localStorage.getItem('results')) || [];

const timeToSeconds = (time) => {
  const [minutes, seconds] = time.split(':');
  return parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
};

const saveResultsToLocalStorage = (imageId) => {
  const currentImageName = data[imageId].name;
  const timeString = document.querySelector('.timer').textContent;

  const currentGame = {
    name: currentImageName,
    time: timeString,
  };

  if (results.length > 4) {
    results.pop();
    results.push(currentGame);
  } else results.push(currentGame);

  const sortedResults = results.sort((a, b) => {
    const timeA = timeToSeconds(a.time);
    const timeB = timeToSeconds(b.time);
    return timeA - timeB;
  });
  localStorage.setItem('results', JSON.stringify(sortedResults));
};

export default saveResultsToLocalStorage;

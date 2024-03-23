// eslint-disable-next-line import/no-mutable-exports
export let timer = '';

const gameDuration = (clicked) => {
  const timerContainer = document.querySelector('.timer');
  const latestGameTime = localStorage.getItem('lastTime');
  let minutes = Number(latestGameTime?.split(':')[0]) || 0;
  let seconds = Number(latestGameTime?.split(':')[1]) || 0;

  if (!clicked) {
    timer = setInterval(() => {
      seconds += 1;
      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }
      timerContainer.innerHTML = `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
      localStorage.setItem('lastTime', timerContainer.textContent);
    }, 1000);
  }
};

export default gameDuration;

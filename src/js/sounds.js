import win from '../assets/audio/win.mp3';
import black from '../assets/audio/black.mp3';
import white from '../assets/audio/white.mp3';
import cross from '../assets/audio/cross.mp3';

const winAudio = new Audio();
winAudio.src = win;
const blackCellAudio = new Audio();
blackCellAudio.src = black;
const whiteCellAudio = new Audio();
whiteCellAudio.src = white;
const crossCellAudio = new Audio();
crossCellAudio.src = cross;

const audios = [winAudio, blackCellAudio, whiteCellAudio, crossCellAudio];

export const soundToggle = () => {
  const soundBtn = document.querySelector('.sound');

  soundBtn.addEventListener('click', () => {
    if (audios[0].volume === 1) {
      audios.forEach((item) => {
        item.volume = 0;
      });
      soundBtn.classList.add('sound_mute');
    } else {
      audios.forEach((item) => {
        item.volume = 1;
      });
      soundBtn.classList.remove('sound_mute');
    }
  });
};

export const sounds = (action) => {
  switch (action) {
    case 'win':
      winAudio.play();
      break;
    case 'black':
      blackCellAudio.play();
      break;
    case 'white':
      whiteCellAudio.play();
      break;
    case 'cross':
      crossCellAudio.play();
      break;
    default:
  }
};

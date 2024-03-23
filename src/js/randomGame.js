import gridGenerator from './gridGeneration';

const setRandomGame = () => {
  const randomNumber = Math.floor(Math.random() * (14 + 1));
  gridGenerator(randomNumber);
};

export default setRandomGame;

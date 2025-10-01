const stormNumber = document.querySelector('#storm-number');
const manaNumber = document.querySelector('#mana-number');
const goFullscreenButton = document.querySelector('#go-fullscreen-button');

let fullscreenState = 0;

const handleChangeCount = (type, side) => {
  console.log('Args:', type, side);

  if (type === 'storm') {
    if (side === 'right') {
      if (stormNumber.textContent === '∞') {
        stormNumber.textContent = '0';
        return;
      }

      stormNumber.textContent = +stormNumber.textContent + 1;
      return;
    }

    stormNumber.textContent =
      +stormNumber.textContent > 0 ? +stormNumber.textContent - 1 : 0;
  }

  if (type === 'mana') {
    if (manaNumber.textContent === '∞') {
      manaNumber.textContent = '0';
      return;
    }

    if (side === 'right') {
      manaNumber.textContent = +manaNumber.textContent + 1;
      return;
    }

    manaNumber.textContent =
      +manaNumber.textContent > 0 ? +manaNumber.textContent - 1 : 0;
  }
};

const handleInfiniteChange = (type) => {
  if (type === 'storm') {
    stormNumber.textContent = '∞';
    return;
  }

  manaNumber.textContent = '∞';
};

const goFullscreen = () => {
  const el = document.documentElement;
  if (fullscreenState === 0) {
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen(); // Safari
    fullscreenState = 1;
    return;
  }

  document.exitFullscreen();
  fullscreenState = 0;
};

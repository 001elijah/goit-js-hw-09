const ref = {
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
    bodyElement: document.body,
};

const { startButton, stopButton, bodyElement} = ref;
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function paintBody() {
    const someColor = getRandomHexColor();
    bodyElement.style.backgroundColor = someColor;
}

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    timerId = setInterval(() => {
        paintBody();
    }, 1000);
});

stopButton.addEventListener('click', () => {
    startButton.disabled = false;
    clearInterval(timerId);
});
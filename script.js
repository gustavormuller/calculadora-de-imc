const weight = document.querySelector('#weight').value;
const height = document.querySelector('#height').value;
const weightValue = document.querySelector('#weight-value');
const heightValue = document.querySelector('#height-value');

function calculate() {
    weightValue.textContent = `${weight} Kg`;
    heightValue.textContent = `${height} cm`;
}

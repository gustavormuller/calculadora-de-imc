const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const weightValue = document.querySelector('#weight-value');
const heightValue = document.querySelector('#height-value');
const result = document.querySelector('#result');
const category = document.querySelector('#category');

function calculate() {
    let bmi;

    weightValue.textContent = `${weight.value} Kg`;
    heightValue.textContent = `${height.value} cm`;
    bmi = (weight.value / ((height.value / 100) ** 2)).toFixed(1);
    result.textContent = bmi;

    if(bmi < 18.5) {
        category.textContent = 'Magreza';
        result.style.color = '#ffc44d';
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        category.textContent = 'Normal';
        result.style.color = '#0be881';
    } else if(bmi >= 25 && bmi <= 29.9) {
        category.textContent = 'Sobrepeso';
        result.style.color = '#ff884d';
    } else{
        category.textContent = 'Obesidade';
        result.style.color = '#ff5e57';
    }
}

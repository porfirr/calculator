let calculation = localStorage.getItem('calc') || '';

document.querySelector('.display').innerText = calculation;

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  document.querySelector('.display').innerText = calculation;
  localStorage.setItem('calc', calculation);
}
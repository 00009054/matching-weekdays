var elMatchForm = document.querySelector('.js-form');
var elNumberInput = elMatchForm.querySelector('.number-input');

var elResult = document.querySelector('.result');
var message = '';

elMatchForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var number = Number(elNumberInput.value);
 
  if (number === 1){
    message = 'Monday';
  }
  if (number === 2){
    message = 'Tuesday';
  } 
  if (number === 3){
    message = 'Wednesday';
  } 
  if (number === 4){
    message = 'Thursday';
  } 
  if (number === 5){
    message = 'Friday';
  } 
  if (number === 6){
    message = 'Saturday';
  } 
  if (number === 7){
    message = 'Sunday';
  } 
  if (number <= 0 || number > 7){
    message = '404 Error. Not Found';
  }

  elResult.classList.remove('d-none');
  elResult.textContent = message;
});
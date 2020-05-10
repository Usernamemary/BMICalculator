var questionWeight = document.querySelector('#questionWeight');
var questionHeight = document.querySelector('#questionHeight');

// Popup CSS
var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
modalBtn.addEventListener('click', function () {
  modalBg.classList.add('bg-active');
  bmiCalculator(
    parseFloat(questionWeight.value),
    parseFloat(questionHeight.value)
  );
});

modalClose.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');
});

// Function BMI

function bmiCalculator(weight, height) {
  bmi = (weight / Math.pow(height, 2)).toFixed(2);
  if (bmi < 18.5) {
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' +
      bmi +
      ' so you are underweight.' +
      ' Please visit your doctor.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' + bmi + ' ¡Congrats! You are on your normal weight.';
  } else if (bmi > 24.9 && bmi < 30) {
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' +
      bmi +
      ' so you are overweight.' +
      ' Please visit your doctor. Check out some exercises or diets to apply in you everyday routine';
  } else if (bmi >= 30 && bmi < 35) {
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' +
      bmi +
      ' so you are obese.' +
      ' Please visit your doctor. Remember that there are multiple factors for obesity you might want to know the reason';
  } else if (bmi > 34) {
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' +
      bmi +
      ' so you are extremely obese.' +
      ' Please visit your doctor as soon as possible. There are multiple factors for obesity is not fun nor healthy, you might want to know the reason';
  } else {
    document.querySelector('#resultado').innerHTML =
      'Please enter your height in meters and height in kilograms';
    // document.querySelector('#image').style.visibility = 'visible';
  }
}

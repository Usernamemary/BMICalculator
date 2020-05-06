var questionWeight = document.querySelector('#questionWeight');
var questionHeight = document.querySelector('#questionHeight');
var buttonClick = document.querySelector('#buttonClick');

buttonClick.addEventListener('click', function () {
  alert(
    bmiCalculator(
      parseFloat(questionWeight.value),
      parseFloat(questionHeight.value)
    )
  );
});

function bmiCalculator(weight, height) {
  bmi = (weight / Math.pow(height, 2)).toFixed(2);
  if (bmi < 18.5) {
    return (
      'Your BMI is ' +
      bmi +
      ' so you are underweight.' +
      ' Please visit your doctor.'
    );
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Your BMI is ' + bmi + ' ¡Congrats! You are on your normal weight.';
  } else if (bmi > 24.9 && bmi < 30) {
    return (
      'Your BMI is ' +
      bmi +
      ' so you are overweight.' +
      ' Please visit your doctor. Check out some exercises or diets to apply in you everyday routine'
    );
  } else if (bmi >= 30 && bmi < 35) {
    return (
      'Your BMI is ' +
      bmi +
      ' so you are obese.' +
      ' Please visit your doctor. Remember that there are multiple factors for obesity you might want to know the reason'
    );
  } else if (bmi > 34) {
    return (
      'Your BMI is ' +
      bmi +
      ' so you are extremely obese.' +
      ' Please visit your doctor as soon as possible. There are multiple factors for obesity is not fun nor healthy, you might want to know the reason'
    );
  } else {
    return 'Please enter your height in meters and height in kilograms';
  }
}

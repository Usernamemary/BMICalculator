//Form var
var questionWeight = document.querySelector('#questionWeight');
var questionHeight = document.querySelector('#questionHeight');

// MODAL var
var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

//FUNCTINON MODAL JS
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
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi1.svg';

    //Color
    document.querySelector('#youColor').style.color = '#ffea2c';

    //Weight

    document.querySelector('#weight').innerHTML = 'UNDERWEIGHT';
    document.querySelector('#weight').style.color = '#ffea2c';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' +
      bmi +
      '. Being thin is not always healthy. Please visit your doctor.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi2.svg';

    //Color
    document.querySelector('#youColor').style.color = '#f29f05';

    //Weight
    document.querySelector('#weight').innerHTML = 'NORMAL';
    document.querySelector('#weight').style.color = '#f29f05';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' +
      bmi +
      ' ¡Congrats! You are on your normal weight. Remember to eat healthy and exercise';
  } else if (bmi > 24.9 && bmi < 30) {
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi3.svg';
    //Color
    document.querySelector('#youColor').style.color = '#ff781d';
    //Weight
    document.querySelector('#weight').innerHTML = 'OVERWEIGHT';
    document.querySelector('#weight').style.color = '#ff781d';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' +
      bmi +
      '. Please visit your doctor. Check out some exercises or healthy diets to apply in you everyday routine.';
  } else if (bmi >= 30 && bmi < 35) {
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi4.svg';
    //Color
    document.querySelector('#youColor').style.color = '#ff4715';

    //Weight
    document.querySelector('#weight').innerHTML = 'OBESE';
    document.querySelector('#weight').style.color = '#ff4715';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' +
      bmi +
      '. Please visit your doctor. Remember that there are multiple factors for obesity you might want to know the reason.';
  } else if (bmi > 34) {
    //Image
    var image = document.querySelector('#image');
    image.style.display = 'block';
    image.src = 'img/bmi5.svg';
    //Color
    document.querySelector('#youColor').style.color = '#ff0000';

    //Weight
    document.querySelector('#weight').innerHTML = 'EXTREMELY OBESE';
    document.querySelector('#weight').style.color = '#ff0000';

    //bmi
    document.querySelector('#resultado').innerHTML =
      'Your BMI is ' +
      bmi +
      '. Please visit your doctor as soon as possible. There are multiple factors for obesity is not fun nor healthy, you might want to know the reason.';
  } else {
    document.querySelector('#resultado').innerHTML =
      'Please enter your height in meters and height in kilograms.';
  }
}

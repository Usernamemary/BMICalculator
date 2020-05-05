var questionWeight = document.querySelector('#questionWeight');
var questionHeight = document.querySelector('#questionHeight');
var buttonClick = document.querySelector('#buttonClick');

buttonClick.addEventListener('click', function () {
  alert(questionWeight.value);
});

// var questions = [
//   {
//     question: "What's your weight in kilograms? (Example: 65)",
//     pattern: /^[+-]?\d+(\.\d+)?$/,
//   },
//   {
//     question: "What's your height in meters? (Example: 1.80) ",
//     pattern: /^[+-]?\d+(\.\d+)?$/,
//   },
// ];

// /**********

//  **********/

// (function () {
//   var tTime = 100; // transition transform time from #register in ms
//   var wTime = 200; // transition width time from #register in ms
//   var eTime = 1000; // transition width time from inputLabel in ms

//   // init
//   // --------------
//   var position = 0;

//   putQuestion();

//   progressButton.addEventListener('click', validate);
//   inputField.addEventListener('keyup', function (e) {
//     transform(0, 0); // ie hack to redraw
//     if (e.keyCode == 13) validate();
//   });

//   // functions
//   // --------------

//   // load the next question
//   function putQuestion() {
//     inputLabel.innerHTML = questions[position].question;
//     inputField.value = '';
//     inputField.type = questions[position].type || 'text';
//     inputField.focus();
//     showCurrent();
//   }

//   function bmiCalculator(weight, height) {
//     bmi = (weight / Math.pow(height, 2)).toFixed(2);
//     if (bmi < 18.5) {
//       return (
//         'Your BMI is ' +
//         bmi +
//         ' so you are underweight.' +
//         ' Please visit your doctor.'
//       );
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//       return (
//         'Your BMI is ' + bmi + ' ¡Congrats! You are on your normal weight.'
//       );
//     } else if (bmi > 24.9 && bmi < 30) {
//       return (
//         'Your BMI is ' +
//         bmi +
//         ' so you are overweight.' +
//         ' Please visit your doctor. Check out some exercises or diets to apply in you everyday routine'
//       );
//     } else if (bmi >= 30 && bmi < 35) {
//       return (
//         'Your BMI is ' +
//         bmi +
//         ' so you are obese.' +
//         ' Please visit your doctor. Remember that there are multiple factors for obesity you might want to know the reason'
//       );
//     } else if (bmi > 34) {
//       return (
//         'Your BMI is ' +
//         bmi +
//         ' so you are extremely obese.' +
//         ' Please visit your doctor as soon as possible. There are multiple factors for obesity is not fun nor healthy, you might want to know the reason'
//       );
//     } else {
//       return 'Please enter your height in meters and height in kilograms';
//     }
//   }

//   // when all the questions have been answered
//   function done() {
//     // remove the box if there is no next question
//     register.className = 'close';

//     // add the h1 at the end with the welcome text

//     var h1 = document.createElement('h1');

//     h1.appendChild(
//       document.createTextNode(
//         bmiCalculator(questions[0].value, questions[1].value)
//       )
//     );
//     setTimeout(function () {
//       register.parentElement.appendChild(h1);
//       setTimeout(function () {
//         h1.style.opacity = 1;
//       }, 50);
//     }, eTime);
//   }

//   // when submitting the current question
//   function validate() {
//     // set the value of the field into the array
//     questions[position].value = inputField.value;

//     // check if the pattern matches
//     if (!inputField.value.match(questions[position].pattern || /.+/)) wrong();
//     else
//       ok(function () {
//         // set the progress of the background
//         progress.style.width = (++position * 100) / questions.length + 'vw';

//         // if there is a new question, hide current and load next
//         if (questions[position]) hideCurrent(putQuestion);
//         else hideCurrent(done);
//       });
//   }

//   // helper
//   // --------------

//   function hideCurrent(callback) {
//     inputContainer.style.opacity = 0;
//     inputProgress.style.transition = 'none';
//     inputProgress.style.width = 0;
//     setTimeout(callback, wTime);
//   }

//   function showCurrent(callback) {
//     inputContainer.style.opacity = 1;
//     inputProgress.style.transition = '';
//     inputProgress.style.width = '100%';
//     setTimeout(callback, wTime);
//   }

//   function transform(x, y) {
//     register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)';
//   }

//   function ok(callback) {
//     register.className = '';
//     setTimeout(transform, tTime * 0, 0, 10);
//     setTimeout(transform, tTime * 1, 0, 0);
//     setTimeout(callback, tTime * 2);
//   }

//   function wrong(callback) {
//     register.className = 'wrong';
//     for (
//       var i = 0;
//       i < 6;
//       i++ // shaking motion
//     )
//       setTimeout(transform, tTime * i, ((i % 2) * 2 - 1) * 20, 0);
//     setTimeout(transform, tTime * 6, 0, 0);
//     setTimeout(callback, tTime * 7);
//   }
// })();

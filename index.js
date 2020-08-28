/* eslint no-eval: 0 */

var notEmpty = false;

window.reset = function () {
  let expression = document.querySelector(".phrase");
  expression.value = "";
  console.log("reset is pressed!");
};

window.addValue = function (element) {
  let expression = document.querySelector(".phrase");
  if (notEmpty === false) {
    if (expression.innerText !== "invalid value") {
      expression.value += element.innerText;
    } else {
      expression.value = element.innerText;
    }
  } else {
    window.reset();
    notEmpty = false;
    expression.value += element.innerText;
  }
};

window.result = function () {
  let expression = document.querySelector(".phrase");
  try {
    let result = expression.value;
    expression.value = eval(result);
    notEmpty = true;
  } catch (e) {
    expression.value = "invalid value";
  }
  console.log("result is pressed!");
};

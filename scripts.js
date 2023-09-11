const buttons = document.querySelectorAll("#calculator button.number");
// const operatorButton = document.querySelectorAll("#calculator .operator");
const result = document.querySelector("#calculator .result");
let currentNumber = "0";
let currentOperator = null;
let previousNumber = null;


function handleNumbers() {
  if (currentNumber === "0" || currentOperator === "=") {
    currentNumber = this.textContent;
  } else {
    currentNumber += this.textContent;
  }
  result.textContent = currentNumber;
}

// function handleOperators() {
//   if (currentOperator === "=") {
//     currentOperator = this.textContent;
//   } else {
//     currentOperator += this.textContent;
//   }
//   result.textContent = currentOperator;
// }
// operatorButton.forEach((button) => {
//   button.addEventListener("click", handleOperators);
// });

buttons.forEach((button) => {
  button.addEventListener("click", handleNumbers);
});


function reset() {
  currentNumber = "0";
  currentOperator = null;
  previousNumber = null;
  result.textContent = "0";
}

const operatorButtons = document.querySelectorAll("#calculator button.operator:not(:last-child)");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (previousNumber !== null) {
      calculateResult();
    }
    currentOperator = button.textContent;
    previousNumber = currentNumber;
    currentNumber = "0";
    result.textContent = previousNumber + " " + currentOperator;
  });
});


function calculateResult() {
  if (previousNumber !== null && currentOperator !== null) {
    switch (currentOperator) {
      case "+":
        currentNumber = String(parseFloat(previousNumber) + parseFloat(currentNumber));
        break;
      case "-":
        currentNumber = String(parseFloat(previousNumber) - parseFloat(currentNumber));
        break;
      case "*":
        currentNumber = String(parseFloat(previousNumber) * parseFloat(currentNumber));
        break;
      case "/":
        currentNumber = String(parseFloat(previousNumber) / parseFloat(currentNumber));
        break;
      case "%":
        currentNumber = String(parseFloat(previousNumber) % parseFloat(currentNumber));
        break;
    }
    result.textContent = currentNumber;
  }
  currentOperator = "=";
}

const equalButton = document.querySelector("#calculator button.operator.equ");
equalButton.addEventListener("click", calculateResult);

const clearButton = document.querySelector("#calculator button.operator.row1");
clearButton.addEventListener("click", reset);

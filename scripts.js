const buttons = document.querySelectorAll("#calculator button.number");
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

let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let clearButton = document.getElementById("clear");
let equalButton = document.getElementById("equal");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
  button.addEventListener("click", function () {
    let value = button.innerText;

    if (value === "=") {
      // If there's an operator and two operands, evaluate the result
      if (previousInput && currentInput && operator) {
        currentInput = evaluate(previousInput, currentInput, operator);
        display.innerText = currentInput;
        previousInput = "";
        operator = "";
      }
    } else if (value === "C") {
      // Clear the input and reset
      currentInput = "";
      previousInput = "";
      operator = "";
      display.innerText = "0";
    } else if (["/", "*", "-", "+"].includes(value)) {
      // Handle operator input
      if (currentInput) {
        previousInput = currentInput;
        currentInput = "";
        operator = value;
        display.innerText = "0";
      }
    } else {
      // Append the value to the current input
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});

function evaluate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error";
      }
      return num1 / num2;
    default:
      return 0;
  }
}

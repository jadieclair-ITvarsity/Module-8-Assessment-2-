// Saving display id to variable
let display = document.getElementById("display");

// Boolean variable to determine if use is typing on a new line
let newLine = true;

let firstValue;
let currentOperator;

// Function to handle the display screen output
const showToDisplay = (input) => {
  if (newLine) {
    display.value = input;
    newLine = false;
  } else {
    display.value += input;
  }
};

// Function for when C button is clicked
const clearDisplay = () => {
  display.value = "0";
  newLine = true;
};

// Function for operator buttons
const operatorButton = (operator) => {
  currentOperator = operator;
  firstValue = parseFloat(display.value);
  newLine = true;
};

// Function nad switch statement for total calculations
const calculate = () => {
  let secondValue = parseFloat(display.value);
  let total;

  switch (currentOperator) {
    case "+":
      total = firstValue + secondValue;
      break;
    case "-":
      total = firstValue - secondValue;
      break;
    case "x":
      total = firstValue * secondValue;
      break;
    case "/":
      total = firstValue / secondValue;
      break;
    default:
      return;
  }

  // Limit the number of decimal places
  if (!isFinite(total)) {
    display.value = "Error";
  } else {
    display.value = parseFloat(total.toPrecision(5));
  }

  // Output total to screen
  display.value = total;

  // Update newLine variable
  firstValue = 0;
  newLine = true;
};

// Store the current input
let currentInput = '';

// Function to append value to the display
function appendValue(value) {
  currentInput += value;
  document.getElementById('result').value = currentInput;
}

// Function to clear the input field
function clearResult() {
  currentInput = '';
  document.getElementById('result').value = '';
}

// Function to calculate the result
function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('result').value = currentInput;
  } catch (e) {
    document.getElementById('result').value = 'Error';
    currentInput = '';
  }
}
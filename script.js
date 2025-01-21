// Get the display element
const display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluate the mathematical expression
    } catch {
        display.value = 'Error'; // Handle invalid expressions
    }
}

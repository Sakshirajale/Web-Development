let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(op) {
    displayValue += ` ${op} `;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

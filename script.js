let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate() {
    try {
        expression = eval(expression).toString();
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateModulo() {
    try {
        expression = (eval(expression) % 1 === 0) ? eval(expression) : eval(expression).toFixed(2);
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquare() {
    try {
        expression = Math.pow(eval(expression), 2).toString();
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
    }
}

let display = document.getElementById('ansDisplay');
let expression = '';

function appendValue(value) {
    expression += value;
    display.value = expression;
}

function calculate() {
    try {
        expression = expression.replace(/π/g, Math.PI)
                               .replace(/√/g, 'Math.sqrt')
                               .replace(/²/g, '**2');
        expression = eval(expression);
        display.value = expression;
        expression = expression.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function clearAll() {
    expression = '';
    display.value = '';
}

function backspace() {
    expression = expression.slice(0, -1);
    display.value = expression;
}
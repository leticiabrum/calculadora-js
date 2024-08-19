let display = document.getElementById('display');

function appendToDisplay(input) {
    
    let lastChar = display.value.slice(-1);

    if (display.value === '' && ['+', '-', '*', '/'].includes(input)) {
        return;
    }

    if (['+', '-', '*', '/', '%'].includes(lastChar) && ['+', '-', '*', '/', '%'].includes(input)) {
        return;
    }

    display.value += input;
}

function calculate() {
    let expression = display.value;



    try {
        if (expression.includes('%')) {
            expression = eval(expression.replace('%', '/100'));
        } else {
            expression = eval(expression);
        }
        display.value = expression;
    }
    catch (error) {
        alert('error');
        display.value = '';
    }

}


function clearDisplay() {
    display.value = '';
}

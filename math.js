let storedString1 = "";
let storedNumber1 = 0;
let storedFunc = "";
let lastButtonClicked = "start";
let hasCalcBeenPressed = "no";
let equalsJustClicked = "no";

function add(a, b) {
    return a+b}

function subtract(a, b) {
    return a-b}


function multiply(a, b) {
    return a*b}

function divide(a,b) {
    return a/b}

function operate(operator, number1, number2) {
    return operator(number1, number2)}   

let container = document.querySelector('container');
container = document.createElement('div');
container.id = "main"

let display = document.createElement('div');
display.className = "display";
display.textContent = "0";

document.getElementById('container').appendChild(display);

buttonClear.addEventListener('click', (e) => {
    display.textContent = "0";
    lastButtonClicked = "start";
    hasCalcBeenPressed = "no";
})

/* storedNumber1 != "" meaning a number has been entered and a calc button has been pressed 
lastButtonClicked = "num" makes it so that it will not reset display and will continue adding numbers*/

button0.addEventListener('click', (e) => {
    if (display.textContent === "0" || lastButtonClicked === "calc") {
        display.textContent = "0";
    } else {
    display.textContent += "0";
    }
    lastButtonClicked = "num";
})

button1.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "1";
    } else if (lastButtonClicked === "calc") {
        display.textContent = "";
        display.textContent += "1";
    } else {
        display.textContent += "1";
    }
    lastButtonClicked = "num";
})

button2.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "2";
    }  else if (lastButtonClicked === "calc") {
        display.textContent = "";
        display.textContent += "2";
    } else {
        display.textContent += "2";
    }
    lastButtonClicked = "num";
})

button3.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "3";
    } else if (lastButtonClicked === "calc") {
        display.textContent = "";
        display.textContent += "3";
    } else {
        display.textContent += "3";
    }
    lastButtonClicked = "num";
})

button4.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "4";
    } else if (lastButtonClicked === "calc") {
        display.textContent = "";
        display.textContent += "4";
    } else {
        display.textContent += "4";
    }
    lastButtonClicked = "num";
})

button5.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "5";
    } else if (lastButtonClicked === "calc") {
        display.textContent = "";
        display.textContent += "5";
    } else {
        display.textContent += "5";
    }
    lastButtonClicked = "num";
})

button6.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "6";
    } else if (lastButtonClicked === "calc") {
        display.textContent = "";
        display.textContent += "6";
    } else {
        display.textContent += "6";
    }
    lastButtonClicked = "num";
})

button7.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "7";
    } else if (lastButtonClicked === "calc") {
        display.textContent = "";
        display.textContent += "7";
    } else {
        display.textContent += "7";
    }
    lastButtonClicked = "num";
})

button8.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "8";
    } else if (lastButtonClicked === "calc") {
        display.textContent = "";
        display.textContent += "8";
    } else {
        display.textContent += "8";
    }
    lastButtonClicked = "num";
})

button9.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "9";
    } else if (lastButtonClicked === "calc") {
        display.textContent = "";
        display.textContent += "9";
    } else {
        display.textContent += "9";
    }
    lastButtonClicked = "num";
})

calcAdd.addEventListener('click', (e) => {
    if (lastButtonClicked === "start") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    } else if (equalsJustClicked === "yes") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
        equalsJustClicked = "no";
    } else if (hasCalcBeenPressed === "no") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    } else {
        display.textContent = operate(storedFunc, storedNumber1, Number(display.textContent));
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    }
    storedFunc = add;
    lastButtonClicked = "calc";
    hasCalcBeenPressed = "yes";
})

calcSubtract.addEventListener('click', (e) => {
    if (lastButtonClicked === "start") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    } else if (equalsJustClicked === "yes") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
        equalsJustClicked = "no";
    } else if (hasCalcBeenPressed === "no") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    } else {
        display.textContent = operate(storedFunc, storedNumber1, Number(display.textContent));
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    }
    storedFunc = subtract;
    lastButtonClicked = "calc";
    hasCalcBeenPressed = "yes";
})

calcMultiply.addEventListener('click', (e) => {
    if (lastButtonClicked === "start") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    } else if (equalsJustClicked === "yes") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
        equalsJustClicked = "no";
    } else if (hasCalcBeenPressed === "no") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    } else {
        display.textContent = operate(storedFunc, storedNumber1, Number(display.textContent));
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    }
    storedFunc = multiply;
    lastButtonClicked = "calc";
    hasCalcBeenPressed = "yes";
})

calcDivide.addEventListener('click', (e) => {
    if (lastButtonClicked === "start") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    } else if (equalsJustClicked === "yes") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
        equalsJustClicked = "no";
    } else if (hasCalcBeenPressed === "no") {
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    } else {
        display.textContent = operate(storedFunc, storedNumber1, Number(display.textContent));
        storedString1 = display.textContent;
        storedNumber1 = Number(storedString1);
    }
    storedFunc = divide;
    lastButtonClicked = "calc";
    hasCalcBeenPressed = "yes";
})

calcEquals.addEventListener('click', (e) => {
    if (hasCalcBeenPressed === "no" || lastButtonClicked === "calc") {
        return;
    } else {
        display.textContent = operate(storedFunc, storedNumber1, Number(display.textContent));
        lastButtonClicked = "calc";
        hasCalcBeenPressed = "yes";
        equalsJustClicked = "yes";
    }
})



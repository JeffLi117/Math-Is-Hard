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

let storedNumber1 = 0;
let storedFunc = "";

let container = document.querySelector('container');
container = document.createElement('div');
container.id = "main"

let display = document.createElement('div');
display.className = "display";
display.textContent = "80085";

document.getElementById('container').appendChild(display);

buttonClear.addEventListener('click', (e) => {
    display.textContent = "0";
})

button0.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "0";
    } else {
    display.textContent += "0";
    storedNumber1 = display.textContent;
    }
})

button1.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "1";
        storedNumber1 = display.textContent;
    } else {
    display.textContent += "1";
    storedNumber1 = display.textContent;
    }
})

button2.addEventListener('click', (e) => {
    if (display.textContent === "0") {
        display.textContent = "2";
        storedNumber1 = display.textContent;
    } else {
    display.textContent += "2";
    storedNumber1 = display.textContent;
    }
})

button3.addEventListener('click', (e) => {
    display.textContent += "3";
})

button4.addEventListener('click', (e) => {
    display.textContent += "4";
})

button5.addEventListener('click', (e) => {
    display.textContent += "5";
})

button6.addEventListener('click', (e) => {
    display.textContent += "6";
})

button7.addEventListener('click', (e) => {
    display.textContent += "7";
})

button8.addEventListener('click', (e) => {
    display.textContent += "8";
})

button9.addEventListener('click', (e) => {
    display.textContent += "9";
})

calcAdd.addEventListener('click', (e) => {
    storedFunc = add;
    console.log(typeof storedFunc);
})

//clicking on numbers adds to display.textContent and stores each inputted number on said display into storedNumber1
//click on calculation symbol needs to store function into storedFunc
//next click on numbers should reset display.textContent to "" and then fill 



/* Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step. */



/* let belowDisplay = document.createElement('div');
belowDisplay.className = "belowDisplay";
belowDisplay.textContent = "test";

function numberGrid(t) {
    for (i = 0; i < 3; i++) {
        let row = document.createElement('div');
        row.className = "row";
        row.id = "row" + i;

        for (j = 0; j < 3; j++) {
            let box = document.createElement('div');
            box.className = "box";
            box.id = "box" + i;
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    t.appendChild(container)
}
document.body.appendChild(belowDisplay);
numberGrid(document.body); */

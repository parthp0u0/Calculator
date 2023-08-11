// array where numbers are stored before the operator is selected 
let firstNum = [];

// boolean var used to transition from numbers before the operator and after the operator
let operatorClick = false;

// where the operator is stored
let operator = [];

// array where numbers are stored after the operator is selected
let secondNum = [];

// add takes num1 and adds num2
function add(num1, num2){
    return num1 + num2;
}

// subtracts num2 from num1
function subtract(num1, num2){
    return num1 - num2;
}

// multiply num1 by num2
function multiply(num1, num2){
    return num1 * num2;
}

// divide num1 by num2
function divide(num1, num2){
    return num1 / num2;
}

// takes numbers and the operator and calls one of the four functions
function operate(firstNum, operator, secondNum){

    const a = firstNum;
    const b = secondNum;

    if(operator == '+'){
        return add(a, b);
    }else if(operator == '-'){
        return subtract(a, b);
    }else if(operator == '*'){
        return multiply(a, b);
    }else if(operator == '/'){
        return divide(a, b);
    }
}

// Making '|' blink in the title
const blinkingCursor = document.getElementById("blinkingCursor");

function toggleVisibility() {
    blinkingCursor.style.color = "rgb(255, 241, 223)";
    blinkingCursor.style.paddingBottom = '15px';
    blinkingCursor.style.marginLeft = '-10px';
    blinkingCursor.style.fontSize = '45px';

    blinkingCursor.style.visibility = blinkingCursor.style.visibility === "hidden" ? "visible" : "hidden";
}

setInterval(toggleVisibility, 500);


const numButton = document.querySelector(".numbers");

// sets up buttons ==> prints number and period on those buttons ==> listens for click 
for(let i = 0; i <= 10; i++){
    const number = document.createElement('button')
    
    // Event listener 
    // operatorClick is false in the beginning 
    // ==> when operatorClick is false ==> send the numbers to firstNum 
    // ==> when operatorClick is true ==> send the numbers to secondNum
    number.addEventListener('click', clickNum = function(){

        if(operatorClick === true){
            secondNum.push(i);
        }else if(operatorClick === false){
            firstNum.push(i);
        }

        console.log(firstNum)
    });

    number.style.minHeight = '100px';
    number.style.minWidth = '100px';
    number.style.flex = '1';
    number.style.fontSize = "30px";
    number.style.fontFamily = 'Roboto Mono';
    number.style.backgroundColor = 'rgb(255, 241, 223)';

    // shows the number and period on the button    
    if(i === 10){
        number.textContent = '.';
    }else{
        number.textContent = i;
    }
    
    // changing position
    // ==> 0 to second-last position 
    // ==> '.' to the last position
    if (i === 0) {
        number.style.order = '1'; // Move the element with i=0 to the end
    }else if(i === 10){
        number.style.order = '1';
        number.style.flexGrow = '0';
    } else {
        number.style.order = '0';
    }

    numButton.appendChild(number);
}

const signSet = document.querySelector('.operators');

// sets up buttons ==> prints operator signs on those buttons ==> listens for click  
for(let i = 0; i < 4; i++){
    const sign = document.createElement('button');

    sign.style.minHeight = '100px';
    sign.style.minWidth = '100px';
    sign.style.flex = '1';
    sign.style.fontSize = "30px";
    sign.style.fontFamily = 'Roboto Mono';
    sign.style.backgroundColor = 'rgb(255, 241, 223)';

    if (i === 0) {
        sign.style.bond
        sign.textContent = '+';
    } else if(i === 1){
        sign.textContent = '−';
    } else if(i === 2){
        sign.textContent = '×';
    } else if(i === 3){
        sign.textContent = '÷';
    }

    signSet.appendChild(sign);
}
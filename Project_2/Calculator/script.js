// Кнопки операций
const field = document.querySelector('.value_field');
const clean = document.querySelector('.clean');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const equel = document.querySelector('.equel');

// Цифры и точка
const dot = document.querySelector('.dot');
const num0 = document.querySelector('.num-0');
const num1 = document.querySelector('.num-1');
const num2 = document.querySelector('.num-2');
const num3 = document.querySelector('.num-3');
const num4 = document.querySelector('.num-4');
const num5 = document.querySelector('.num-5');
const num6 = document.querySelector('.num-6');
const num7 = document.querySelector('.num-7');
const num8 = document.querySelector('.num-8');
const num9 = document.querySelector('.num-9');

const numbers = [
    num0, num1, num2, num3, num4, num5, num6, num7, num8, num9
]


let currOperator = null;
let currResult = null;
let operatorClicked = true;
let numClicked = true;
let percentClicked = true;

numbers.forEach(elem => elem.addEventListener('click', function () {
    if (numClicked) {
        const currNum = +elem.innerHTML;
        operatorClicked = true;
        if (field.innerHTML === '0' || field.innerHTML == currResult) {
            field.innerHTML = +currNum;
        } else {
            if (field.innerHTML.length < 9) {
                field.innerHTML = field.innerHTML + currNum;
            }
        }
    }
    
}))

dot.addEventListener('click', () => {
    const currNum = field.innerHTML;
    if (field.innerHTML.length < 8) {
        if (!currNum.includes('.')) {
            field.innerHTML = currNum + '.';
        }
    }
})

clean.addEventListener('click', () => {
    field.innerHTML = '0';
    currOperator = null;
    currResult = null;
    numClicked = true;
})

percent.addEventListener('click', () => {
    if (operatorClicked && percentClicked) {
        let currNum = +field.innerHTML;
        let newValue = currNum / 100;
        field.innerHTML = newValue;
    }
    percentClicked = false;
    numClicked = false;
})

function operatorClick(operator) {
    if (operatorClick) {
     
        let currNum = parseFloat(field.innerHTML);
        if (!currResult) {
            
            currResult = currNum;
            currOperator = operator;
            return;
        }
        console.log(currResult, currOperator)
        currResult = getResult();
        currOperator = operator;
        field.innerHTML = currResult;
    }

}

function getResult() {
    let currNum = parseFloat(field.innerHTML);
    let newCurrNum;
    let currResultNum = parseFloat(currResult);

    
    let afterDotResult = currResultNum.toString().split( '.' ).pop().length;
    let afterDotNum = currNum.toString().split( '.' ).pop().length;

    let bigger = Math.max(afterDotResult, afterDotNum);

    if (currOperator === 'plus') {
        newCurrNum = (currResultNum*(Math.pow(10,bigger)) + currNum*(Math.pow(10,bigger)))/Math.pow(10, bigger);
        currResult = newCurrNum;
    } else if (currOperator === 'minus') {
        newCurrNum = (currResultNum*(Math.pow(10,bigger)) - currNum*(Math.pow(10,bigger)))/Math.pow(10, bigger);
    } else if (currOperator === 'multiply') {
        newCurrNum = (currResultNum*currNum).toFixed(afterDotResult+afterDotNum);
        console.log(currResultNum)
    } else if (currOperator === 'divide') {
        newCurrNum = (currResultNum*(Math.pow(10,afterDotResult)) / currNum*(Math.pow(10,afterDotNum)))/Math.pow(10, (afterDotResult+afterDotNum));
    }
    return newCurrNum;
}

divide.addEventListener('click', () => {
    if (operatorClicked) {
        operatorClick('divide')
    }
    operatorClicked = false;
    numClicked = true;
})

plus.addEventListener('click', () => {
    if (operatorClicked) {
        operatorClick('plus')
    }
    operatorClicked = false;
    numClicked = true;
    percentClicked = true;
})

minus.addEventListener('click', () => {
    if (operatorClicked) {
        operatorClick('minus')
    }
    operatorClicked = false;
    numClicked = true;
    percentClicked = true;
})

multiply.addEventListener('click', () => {
    if (operatorClicked) {
        operatorClick('multiply')
    }
    operatorClicked = false;
    numClicked = true;
    percentClicked = true;
})

equel.addEventListener('click', () => {
    operatorClicked = true;
    numClicked = false;
    if (currResult) {
        field.innerHTML = getResult();
        currResult = null;
        currOperator = null;
        percentClicked = true;
    }
})
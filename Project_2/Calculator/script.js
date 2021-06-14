const field = document.querySelector('.value_field');
const clean = document.querySelector('.clean');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const equel = document.querySelector('.equel');
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


numbers.forEach(elem => elem.addEventListener('click', function () {
    const currNum = +elem.innerHTML;
    if (field.innerHTML === '0' || field.innerHTML ==currResult) {
        field.innerHTML = +currNum;
    } else {
        if (field.innerHTML.length < 9) {
            field.innerHTML = field.innerHTML + currNum;
        }
    }
}))

dot.addEventListener('click', () => {
    const currNum = field.innerHTML;
    if (field.innerHTML.length < 9) {
        if (!currNum.includes('.')) {
            field.innerHTML = currNum + '.';
        }
    }
})

clean.addEventListener('click', () => {
    field.innerHTML = '0';
    currOperator = null;
    currResult = null;
})

percent.addEventListener('click', () => {
    let currNum = +field.innerHTML;
    let newValue = currNum / 100;
    field.innerHTML = newValue;
})

function operatorClick(operator) {
    let currNum = parseFloat(field.innerHTML);
    if (!currResult) {
        currResult = currNum;
        currOperator = operator;
        return;
    }
    currResult = getResult();
    currOperator = operator;
    field.innerHTML = currResult;
}

function getResult() {
    let currNum = parseFloat(field.innerHTML);
    let newCurrNum;
    let currResultNum = parseFloat(currResult);
    if (currOperator=== 'plus') {
        newCurrNum = currResultNum + currNum;
        currResult = newCurrNum;
    } else if (currOperator === 'minus') {
        newCurrNum = currResultNum - currNum;
    } else if (currOperator === 'multiply') {
        newCurrNum = currResultNum * currNum;
    } else if (currOperator === 'divide') {
        newCurrNum = currResultNum/currNum;
    }
    return newCurrNum;
}

divide.addEventListener('click', () => {
    operatorClick('divide')
})

plus.addEventListener('click', () => {
    operatorClick('plus')
})

minus.addEventListener('click', () => {
    operatorClick('minus')
})

multiply.addEventListener('click', () => {
    operatorClick('multiply')
})

equel.addEventListener('click', () => {
    if (currResult) {
        field.innerHTML = getResult();
        currResult = null;
        currOperator = null;
    }
})
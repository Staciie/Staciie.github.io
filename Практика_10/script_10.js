// Задание №1. Проверка на пустоту

/*
function isEmpty(obj) {
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    };
    return true;
};

let object = {};
console.log(isEmpty(object));
*/

// Задание №2. Умножаем все числовые свойства на 2

/*
function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
};
let object = {
    name: "Ioann",
    surname: "Leon",
    age: 24,
    weight: 80,
    height: 190,
};
multiplyNumeric(object);
console.log(object);
*/

// Задание №3. Ввод числового значения

/*
function readNumber() {
    let userInput;
    do {
        userInput = prompt('Введите любое число:', 0);
        console.log('nono')
    }  while (!isFinite(userInput));
    if (userInput === null || userInput === "") {
        return `null`;
    }
    return `${userInput}`;
};

alert(readNumber());
*/

// Задание №4. Случайное число от min до max

/*
function random(min, max) {
    let num = min + Math.random()*(max-min);
    return num;
};

console.log(random(1, 4));
*/

// Задание №5. Случайное целое число от min до max

/*
function randomInteger(min, max) {
    let num = Math.floor(min + Math.random()*(max-min + 1));
    return num;
}
console.log(randomInteger(1, 4))
*/

// Задание №6. Сделать первый символ заглавным

/*
function ucFirst(str) {
    let first = str[0].toUpperCase();
    str = first +  str.slice(1);
    console.log(str)
};
ucFirst("вася");
*/

// Задание №7. Проверка на спам

/*
function checkSpam(str) {
    str = str.toLowerCase();
    if ( str.indexOf('xxx') !== -1 || str.indexOf('viagra') !== -1 ) {
        return true;
    };
    return false;
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
*/

// Задание №8. Усечение строки

/*
function  truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    } else {
        str = str.slice(0, maxlength -1) + '...';
        return str;
    }
};

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
*/

// Задание №9. Выделить число

/*
function extractCurrencyValue(str) {
        if (typeof str[0] != 'number') {
            str = str.slice(1);
        };
        return parseInt(str);
};

console.log( extractCurrencyValue('$120')); 
*/

// Задание №10. Сумма введённых чисел

/*
function sumInput() {
    let sum = 0, userInput, arr = [];

    while(true) {
        userInput = prompt('Введите число:');
        if (!isFinite(userInput) || userInput === "" || userInput === null ) {
            break;
        }
        arr.push(userInput);
        // console.log(arr);
    };
    for (i = 0; i < arr.length; i++) {
        sum += +arr[i];
    };
    alert(sum);
}

sumInput();
*/

// Задание №11. Подмассив наибольшей суммы

/*
function getMaxSubSum(arr) {
    let sum, maxSum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = 0;
        for (j = i; j < arr.length; j++) {
            sum += +arr[j];
            maxSum = Math.max(sum, maxSum)
        };
    };
    console.log(maxSum)
};

arr = [1, 2, 3];
getMaxSubSum(arr);
*/

// Задание №12. Обязателен ли "else"?

/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}

// Будет ли эта функция работать как - то иначе, если убрать else ? - нет, отличий не будет, если возраст больше 18, то функция вернет true и остановится, т.к. функция прекращается после первого return. Если условие (age > 18) не выполнится, то функция перейдет ко второму return хоть с else, хоть без.

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}

let age = +prompt("Ваш возраст?");
checkAge(age);
*/

// Задание №13. Перепишите функцию, используя оператор '?' или '||'

/*
//Используя оператор ?

function checkAge(age) {
    return age > 18 ? true :  confirm('Родители разрешили?');
}

//Используя оператор ||

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

let age = +prompt("Ваш возраст?");
console.log(checkAge(age));
*/

// Задание №14. Функция min(a, b)

/*
function min(a,b) {
    return Math.min(a,b)
};

console.log(min(-5,-5));
*/

// Задание №15. Функция pow(x,n)

/*
function pow(x,n) {
    return Math.pow(x,n)
};

console.log(pow(3,3))
*/

// Задание №16. Перепишите с использованием функции-стрелки

/*
function ask (question, yes, no) {
    if (confirm(question)) yes()
    else no();
};
   
ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
);
*/

// Задание №17. Робинзон Крузо

/*
function count(salary, costs, price) {
    let months = Math.round(price/(salary-costs))
    return months;
};

console.log(count(3333, 1750, 8000));
*/

// Задание №18. Вопросы пользователю

/*
function countSum(nums) {
    let arr = nums.split(" ");
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i]) < 0) {
            sum += parseFloat(arr[i]);
        }
    }
    return `Сумма отрицательных чисел: ${sum}`;
}
let nums = prompt("Введите 10 чисел:", "1, -6, 5, -10, 2, 6, 2, 0, -87, -8.5");
alert(countSum(nums));
*/
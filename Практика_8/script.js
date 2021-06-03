//Задание №1. Переменные

/*
function myName(n) {
    let admin, name;
    name = 'Anastasiia';
    admin = name;
    return admin;
}
console.log(myName());
*/

//Задание №2. Константы

/*
В имени BIRTHDAY можно использовать заглавные буквы, так как значение этой переменной известно нам изначально, при этом переменная AGE вычисляется лишь в процессе исполнения кода, поэтому ее корректней будет записать в нижнем регистре.
*/

//Задание №3. Строки

/*
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); //hello Ilya
*/

//Задание №4. Преобразования типов

/*
"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
" -9" + 5 // -95
" -9 " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
*/

//Задание №5. Постфиксная и префиксная формы

/*
let a = 1, b = 1;
let c = ++a; // c = 2
let d = b++; // b = 1
*/

//Задание №6. Результат присваивания

/*
let a = 2;
let x = 1 + (a *= 2) // x = 5
*/

//Задание №7. Операторы сравнения

/*
5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" //false
*/

//Задание №8. Операторы взаимодействия

/*
let userName = prompt("Как Вас зовут?");
alert(`Добрый день, ${userName}`);
*/

//Задание №9. Условные операторы

/*
if ("0") {
 alert( 'Привет' );  // Alert выведется, т.к. "0" преобразуется в true (не пустая строка)
}
*/

//Задание №10. Условные операторы

/*
let userAnswer = prompt("Каково официальное название JavaScript ?");

if (userAnswer == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!")
}
*/

//Задание №11. Покажите знак числа

/*
let userNum = prompt("Введите любое число:");

if (userNum < 0) {
    alert(-1);
} else if (userNum > 0){
    alert(1);
} else if (userNum == 0) {
    alert(0);
} else {
    alert("Что за число такое?!");
}
*/

//Задание №12. Перепишите 'if' в '?'

/*
function count(a, b) {
    let result = (a + b < 4) ? 'Мало' : 'Много';
    return result;
}

console.log(count(2,1));
*/

//Задание №13. Перепишите 'if..else' в '?'

/*
function ckeckLogin(login) {
    let message =   (login == 'Сотрудник') ? 'Привет':
                    (login == 'Директор') ? 'Здравствуйте':
                    (login == '') ? 'Нет логина':
                    '';
    return message;
}

console.log(ckeckLogin());
*/

//Задание №14. Что выведет код ниже?

/*
alert( null || 2 || undefined ); // Выведет 2, т.к. 2 даст true первым
*/

//Задание №15.Что выведет код ниже?

/*
alert( alert(1) || 2 || alert(3) ); // Сначала выведет 1, так как выполнит alert(1), получит undefined и выведет 2. 2 преобразуется в true, поэтому тут код остановится.
*/

//Задание №16. Что выведет код ниже?

/*
alert( 1 && null && 2 ) // выведет null, т.к. это первое значение, которое преобразуется в false
*/

//Задание №17. Что выведет код ниже?

/*
alert( alert(1) && alert(2) ); // выведет 1 и затем undefined, после чего остановится, т.к. alert дает undefined, что проебразуется в false
*/

//Задание №18. Что выведет код ниже?

/*
alert( null || 2 && 3 || 4 ) // выведет 3. Потому что это первое истинное значение после выполнения логического оператора И, у которого выше приоритет.
*/

//Задание №19. Проверка значения из диапазона

/*
function checkAge(age) {
    if (14 <= age && age <= 90) {
        console.log("Welcome to the party, buddy!")
    } else {
        console.log("Sorry, but you're too young/too old, no offence!")
    }
}

checkAge(101)
*/

//Задание №20. Проверка значения вне диапазона

/*
function checkAge(age) {
    if (!(age >= 14 && age <= 90)) {
        console.log("Sorry, but you're too young/too old, no offence!")
    } else {
        console.log("Welcome to the party, buddy!")
    }
}
*/

/*
function checkAge(age) {
    if (age < 14 || age > 90) {
        console.log("Sorry, but you're too young/too old, no offence!")
    } else {
        console.log("Welcome to the party, buddy!")
    }
}
*/

// checkAge(17);

//Задание №21. If

/*
if (-1 || 0) alert( 'first' ); // выполнится:  -1 => true, а оператор || требует одно true
if (-1 && 0) alert( 'second' ); // не выполнится:  0 => false,  ведь оператор && требует все true
if (null || -1 && 1) alert( 'third' ) // выполнится:  -1 => true, 1 => true (false или (true и true))
*/

//Задание №22. Проверка логина

/*
let login = prompt("Введите Ваш логин:");

if (login == "Админ") {
    let pass = prompt("Введите Ваш пароль:");
    if (pass == "Я главный") {
        alert("Здравствуйте!");
    } else if (pass == null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (login == "" || login == null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю")
}
*/

//Задание №23. Напишите "if", аналогичный "switch"

/*
function checkBrowser(browser) {
    if (browser == 'Edge') {
        console.log("You've got the Edge!");
    } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
        console.log('Okay we support these browsers too');
    } else {
        console.log('We hope that this page looks ok!');
    }
}

checkBrowser("Firefox");
*/

//Задание №24. Переписать условия "if" на "switch"

/*
function checkNum(a) {
    switch (+a) {
        case 0:
            console.log(0);
            break;
        case 1:
            console.log(1);
            break;
        case 2:
        case 3:
            console.log(2, 3);
            break;
        default:
            console.log("Нет значений")
    }
}

checkNum(2)
*/

//Задание №25.

/*
function getNum(a) {
    if (a > 0) {
        return ++a;
    } else {
        return a;
    }
}

console.log(getNum(43))
*/

//Задание №26.

/*
function getNum(a) {
    if (a > 0) {
        return ++a;
    } else {
        return (a - 2);
    }
}

console.log(getNum(0))
*/

//Задание №27.

/*
function getNum(a) {
    if (a > 0) {
        return ++a;
    } else if (a < 0) {
        return (a - 2);
    } else {
        return (a - 10);
    }
}

console.log(getNum(9))
*/

//Задание №28.

/*
function findAmount(num1, num2, num3) {
    let amount = 0;
    if (num1 > 0) {
        amount++;
    };
    if (num2 > 0) {
        amount++;
    };
    if (num3 > 0) {
        amount++;
    };
    return amount;
}

console.log(findAmount(2,-1,0));
*/

//Задание №29. 
/*
function findAmount(num1, num2, num3) {
    let positiveAmount = 0, negativeAmount = 0;

    if (num1 > 0) {
        positiveAmount++;
    } else if (num1 < 0){
        negativeAmount++;
    };

    if (num2 > 0) {
        positiveAmount++;
    } else if (num2 < 0){
        negativeAmount++;
    };

    if (num3 > 0) {
        positiveAmount++;
    } else if (num3 < 0){
        negativeAmount++;
    };

    return `Количество положительный чисел - ${positiveAmount}, отрицательный - ${negativeAmount}`
}

console.log(findAmount(0, 0, 0))
*/

//Задание №30. 

/*
function getBiggerNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return "Невозможно определить"
    }
}

console.log(getBiggerNum(-2,2));
*/

//Задание №31. Даны два числа. Вывести порядковый номер меньшего из них.

/*
function getSmallerNum(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 < num2) {
        return 2;
    } else {
        return "Невозможно определить";
    }
}

console.log(getSmallerNum(2, 2))
*/

//Задание №32.  Даны два числа. Вывести вначале большее, а затем меньшее из них.

/*
function getNum(num1, num2) {
    if (num1 > num2) {
        return `${num1}, ${num2}`;
    } else if (num1 < num2) {
        return `${num2}, ${num1}`;
    } else {
        return "Невозможно определить";
    }
}

console.log(getNum(-2, -1))
*/

//Задание №33. Даны две переменные вещественного типа: A, B. Перераспределить значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B — большее. Вывести новые значения переменных A и B.

/*
function getNums(A, B) {
    let bigger;
    if (A < B) {
        return `${A}, ${B}`
    } else if (A > B) {
        bigger = A;
        A = B;
        B = bigger;
        return `${A}, ${B}`
    } else {
        return "Невозможно определить";
    }
}

console.log(getNums(2,2))
*/

//Задание №34. Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить каждой переменной сумму этих значений, а если равны, то присвоить переменным нулевые значения. Вывести новые значения переменных A и B.

/*
function getNums(A, B) {
 if (A !== B) {
     summ = A + B;
    A = summ;
    B = summ;
    return `${A}, ${B}`;
 } else {
    A = 0;
    B = 0;
    return `${A}, ${B}`
 }
}

console.log(getNums(5,6))
*/

// Задание №35.Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить каждой переменной большее из этих значений, а если равны, то присвоить переменным нулевые значения. Вывести новые значения переменных A и B.

/*
function getNums(A, B) {
    if (A !== B) {
        if (A > B) {
            B = A;
            return `${A}, ${B}`;
        } else {
            A = B;
            return `${A}, ${B}`;
        }
    } else {
       A = 0;
       B = 0;
       return `${A}, ${B}`
    }
   }
   
   console.log(getNums(6,6))
*/

// Задание №36. Даны три числа. Найти наименьшее из них.

/*
function getSmallerNum(num1, num2, num3) {
    let smaller = num1;
    if (smaller > num2) {
        smaller = num2;
    };

    if (smaller > num3) {
        smaller = num3;
    };

    return smaller;
}

console.log(getSmallerNum(5, -3, -2));
*/

// Задание №37. Даны три числа. Найти среднее из них (то есть число, расположенное между наименьшим и наибольшим).

/*
function getMiddle(num1, num2, num3) {
    if (num1 == num2 || num1 == num3 || num2 == num3) {
        return "Невозможно определить";
    } else if (num1 < num2 && num1 > num3 || num1 < num3 && num1 > num2) {
        return num1;
    } else if (num1 < num2 && num2 < num3 || num3 < num2 && num2 < num1) {
        return num2;
    } else {
        num3;
    }
};

console.log(getMiddle(-2, 7,-10))
*/

//Задание №38. Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел

/*
function getNum(num1, num2, num3) {
    let smaller, bigger;

    if (num1 < num2 && num1 < num3) {
        smaller = num1;
    } else if (num2 < num1 && num2 < num3) {
        smaller = num2;
    } else {
        smaller = num3;
    };

    if (num1 > num2 && num1 > num3) {
        bigger = num1;
    } else if (num2 > num1 && num2 > num3) {
        bigger = num2;
    } else {
        bigger = num3;
    };

    return `${smaller}, ${bigger}`;
}

console.log(getNum(4, 2, 8))
*/

//Задание №39. Даны три числа. Найти сумму двух наибольших из них.

/*
function getNum(num1, num2, num3) {
    let smaller;

    if (num1 < num2 && num1 < num3) {
        smaller = num1;
    } else if (num2 < num1 && num2 < num3) {
        smaller = num2;
    } else {
        smaller = num3;
    };

    let summ = num1 + num2 + num3 - smaller;
    return `${summ}`;
}

console.log(getNum(4, 2, -8))
*/

// Задание №40. Даны три целых числа, одно из которых отлично от двух других, равных между собой. Определить порядковый номер числа, отличного от остальных.

/*
function getNum(num1, num2, num3) {
    if (num1 == num2 && num2 == num3) {
        return "Невозможно определить";
    } else if (num1 == num2) {
        return 3;
    } else if (num2 == num3) {
        return 1;
    } else {
        return 2;
    }
};

console.log(getNum(8,2,8))
*/

// Задание №1. Последнее значение цикла

/*
let i = 3;
while (i) {
 alert( i-- );     // Последнее значение - 1, так как 0 в условии даст false
}
*/

// Задание №2. Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию, то удвоить их; в противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C

/*
function getNums(A, B, C) {
    if (A < B && B < C) {
        return `${A*2}, ${B*2}, ${C*2}`
    } else {
        return `${A*(-1)}, ${B*(-1)}, ${C*(-1)}`
    }
}

console.log(getNums(2,10,7))
*/

// Задание №3.Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию или убыванию, то удвоить их; в противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C

/*
function getNums(A, B, C) {
    if ((A < B && B < C) || (C < B && B < A)) {
        return `${A*2}, ${B*2}, ${C*2}`
    } else {
        return `${A*(-1)}, ${B*(-1)}, ${C*(-1)}`
    }
}

console.log(getNums(226,18,15))
*/

// Задание №4. На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.

/*
function getDistance(A, B, C) {
    if (B - A == C - A) {
        return "Невозможно определить"
    } else if (B - A > C - A) {
        return `B - ${B-A}`
    } else {
        return `C - ${C-A}`
    }
}

console.log(getDistance(2, 6, 45))
*/

// Задание №5.Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом координат, то вывести 0. Если точка не совпадает с начало координат, но лежит на оси OX или OY, то вывести соответственно 1 или 2. Если точка не лежит на координатных осях, то вывести 3.

/*
function getPosition(x,y) {
 if (x === 0 && y === 0) {
     return 0;
 } else if (x === 0) {
    return 1;
 } else if (y === 1) {
     return 2;
 } else {
     return 3;
 }
} 

console.log(getPosition(4,7))
*/

//Задание №6. Даны координаты точки, не лежащей на координатных осях OX и OY. Определить номер координатной четверти, в которой находится данная точка.

/*
function getQuarter(x,y) {
    if (x > 0 && y > 0) {
        return 'I';
    } else if (x > 0 && y < 0) {
        return 'IV';
    } else if (x < 0 && y < 0) {
        return 'III';
    } else if (x < 0 && y > 0) {
        return 'II'
    }
}

console.log(getQuarter(-3,5))
*/

// Задание №7. Даны целочисленные координаты трех вершин прямоугольника, стороны которого параллельны координатным осям. Найти координаты его четвертой вершины.

/*
function findCoordinates(ax, ay, bx, by, cx, cy) {
    let dx, dy;
    if (ax === bx) {
        dx = cx;
    } else if (ax === cx) {
        dx = bx;
    } else {
        dx = ax;
    };

    if (ay === cy) {
        dy = by;
    } else if (by === cy) {
        dy = ay;
    } else {
        dy = cy;
    }

    return `${dx}, ${dy}`;
};

console.log(findCoordinates(3,5,3,-8,-10,-8))
*/

//Задание №8. Дан номер года (положительное целое число). Определить количество дней в этом году, учитывая, что обычный год насчитывает 365 дней, а високосный — 366 дней. Високосным считается год, делящийся на 4, за исключением тех годов, которые делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются високосными, а 1200 и 2000 — являются).

/*
function ifLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 4 !== 0) {
            return `Not a leap year`;
        } else {
            return `A leap year`;
        }
    } else {
        return `Not a leap year`;
    }
}

console.log(ifLeapYear(2000))
*/

//Задание №9. Дано целое число. Вывести его строку-описание вида «отрицательное четное число», «нулевое число», «положительное нечетное число» и т. д.

/*
function describeNum(num) {
    let ifPositive = ['нулевое', 'положительное', 'отрицательное'];
    let ifEven = ['четное', 'нечетное'];
    let desc ="";
    if (num === 0) {
        desc+=ifPositive[0];
        return `${desc} число`;
    } else if (num > 0) {
        desc+= ifPositive[1];
    } else if (num < 0) {
        desc+= ifPositive[2];
    };
    
    desc+= " ";
    if (num % 2 === 0) {
        desc+= ifEven[0];
    } else {
        desc+= ifEven[1]
    };

    return `${desc} число`;
}

console.log(describeNum(-7))
*/

//Задание №10. Дано целое число, лежащее в диапазоне 1–999. Вывести его строку- описание вида «четное двузначное число», «нечетное трехзначное число» и т. д.
/*
function describeNum(num) {
    let desc = "";
    if (num % 2 === 0) {
        desc += "четное ";
    } else {
        desc += "нечетное ";
    };

    if (num/ 10 < 1) {
        desc+= "однозначное число"
    } else if (num/100 < 1) {
        desc+= "двузначное число"
    } else {
        desc+= "трехзначное число"
    };
    
    return desc;
}

console.log(describeNum(21))
*/

//Задание №10. Задание №11. Какие значения выведет цикл while? Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом. Оба цикла выводят alert с одинаковыми значениями или нет?

/*
//Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i );     // 1, 2, 3, 4 - сначала увеличивает, потом сравнивает и выводит

//Постфиксный вариант i++
let i = 0;
while (i++ < 5) console.log( i );  // 1, 2, 3, 4, 5 - увеличивает, но сначала выводит старое значение (на сравнении), на alert выводит уже новое
*/

//Задание №12. Какие значения выведет цикл for? Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.Оба цикла выведут alert с одинаковыми значениями или нет?
// Постфиксная форма:

/*
for (let i = 0; i < 5; i++) console.log( i ); // 0, 1, 2, 3, 4
// Префиксная форма:
for (let i = 0; i < 5; ++i) console.log( i ); // 0, 1, 2, 3, 4 - одинаково, потому что в цикле сначала задается значение переменной, потом сравнивается, выполняется тело и на следующую итерацию увеличивается значение i.
*/

// Задание №13. Выведите чётные числа. При помощи цикла for выведите чётные числа от 2 до 10.

/*
for (i = 2; i <= 10; i+=2) {
    console.log(i)
}
*/

//Задание №14. Замените for на while. Перепишите код, заменив цикл for на while, без изменения поведения цикла.

/*
let i = 0;
while (i < 3) {
    console.log( `number ${i}!` );
    i++;
}
*/

//Задание №15. Повторять цикл, пока ввод неверен

/*
let num;
do {
    num = +prompt('Введите числоб меньшее 100:', 0);
} while (num <= 100 && num !== 0);
*/

// Задание №16. Вывести простые числа

/*
function getPrimes(n) {
  point: for (i = 2; i <= n; i++) {
       for (j = 2; j < i; j++) {
           if (i % j == 0 ) {
               continue point;
           }
       }
       console.log(i)
   }
}
getPrimes(17)
*/

//Задание №17. Вычислить среднее арифметическое 2-ух чисел, введенных пользователем.

/*
let a = +prompt('Введите первое число:');
let b = +prompt('Введите второе число:');
let func = (a,b) => {alert(`Среднее арифметическое: ${(a+b)/2}`)};

func(a,b);
*/

//Задание №18 Напишите скрипт, который вычислит квадрат любого введённого числа.

/*
let calcPow = (num) => {console.log(Math.pow(num, 2))};
calcPow(12);
*/

//Задание №19. Примите от пользователя 3 числа. Выведите на экран разницу большего и меньшего из них.

/*
function getDifference() {
    let a = +prompt("Ваше число:");
    let b = +prompt("Ваше число:");
    let d = +prompt("Ваше число:");
    let c = +prompt("Ваше число:");
    let max = Math.max(a,b,c,d);
    let min = Math.min(a,b,c,d);
    alert(`Разница большего и меньшего: ${max - min}`)
}
getDifference();
*/

//Задание №20. Напишите программу, проверяющую число, введенное с клавиатуры на четность.

/*
function checkEven() {
    let num = +prompt("Введите число, которое нужно проверить на четность:");
    if (num%2 === 0) {
        alert(`Число ${num} - четное`)
    } else {
        alert(`Число ${num} - нечетное`)
    }
}
checkEven();
*/

//Задание №21.Дано натуральное число а (a<100). Напишите программу, выводящую на экран количество цифр в этом числе и сумму этих цифр

/*
function getNum(a) {
    let sum, ammount;
    if (a/10 < 1) {
        ammount = 1;
        sum = a;
    } else {
        ammount = 2;
        let lastNum = Math.round((a/10 - Math.floor(a/10))*10);
        sum = lastNum + Math.floor(a/10);
    }
    
    return `Количество цифр: ${ammount}, сумма цифр: ${smm}`
}

console.log(getNum(19))
*/

//Задание №22. Известно, что 1 дюйм равен 2.54 см. Разработать скрипт, переводящий дюймы в  сантиметры и наоборот. Диалог с пользователем реализовать через браузер

/*
function convertTo() {
    let convert = + prompt("См в дюймы (1) или дюймы в см (2)?");
    if (convert === 1) {
        let amm = +prompt("См:");
        alert (`${amm} см в дюймах: ${(amm/2.54).toFixed(3)}`);
    } else if (convert === 2) {
        let amm = +prompt("Дюймы:");
        alert (`${amm} дюйма(ов) в см: ${(amm*2.54).toFixed(3)}`);
    }
};
convertTo();
*/

// Задание №23. Напишите скрипт, реализующий телевизионную игру «Кто хочет стать миллионером».
// Пока слишком элементарно, чтобы еще сильнее не задерживать сроки домашки)

/*
let questions = ['Кто 1-м получил Нобелевскую премию по литературе?', 'С какой буквы начинаются слова, опубликованные в 16-м томе последнего издания Большой советской энциклопедии?'];
let answers = {
    0: {
        A: 'Поэт',
        B: 'Драматург',
        C: 'Эссеист',
        D: 'Романист'
    },
    1: {
        A: 'М',
        B: 'Н',
        C: 'О',
        D: 'П'
    }
}
function giveQuestion() {
    let question = Math.round(Math.random()*1);
    let userAnswer = +prompt(`${questions[question]} \n Варианты ответа: \n 1 - ${answers[question].A} \n 2 - ${answers[question].B} \n 3 - ${answers[question].C}\n 4 - ${answers[question].D}`);

    if (userAnswer === 1) {
        alert (`Верно!`);
    } else {
        alert (`Вы ошиблись!`)
    }
};

giveQuestion();
*/

// Задание №24. Найти сумму или произведение цифр трехзначного числа

/*
function getNum(num) {
    let first = Math.trunc(num / 100);
    let second = Math.trunc((num - (first * 100)) / 10);
    let third = Math.round(((num/10) - Math.floor(num/10))*10);
    if (num % 2 === 0) {
        return (`${first + second + third}`);
    } else {
        return (`${first*second*third}`)
    }
}

let num = +prompt('Введите трехзначное число:');
alert(getNum(num));
*/

// Задание №25. Определить существование треугольника по трем сторонам

/*
function checkTriangle(a, b, c) {
    if (a + b > c) {
        return ("Такой треугольник можно построить");
    } else {
        return ("Такой треугольник нельзя построить");
    }
};
let a = +prompt('Первая сторона:');
let b = +prompt('Вторая сторона:');
let c = +prompt('Третья сторона:');

alert(checkTriangle(a, b, c));
*/

// Задание №26. Принадлежность точки окружности

/*
function checkCoordinates(x,y,r) {
    let h = Math.sqrt((x*x)+(y*y));
    if (h < r) {
        console.log("Точка лежит внутри окружности");
    } else {
        console.log("Точка лежит за пределами окружности");
    }
};

checkCoordinates(4,9,10);
*/

// Задание №27. Объекты

/*
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
*/

//Задание №28. Объекты-константы

/*
const user = {
    name: "John"
   };
   user.name = "Pete"; // это будет работать, т.к. можно изменять войства массива, созданного с помощью const
*/

// Задание №29. Сумма свойств объекта

/*
let salaries = {
    John: 100,
    Ann: 160, 
    Pete: 130
};

let sum = 0;

for (key in salaries) {
    sum += salaries[key];
};

console.log(sum)
*/

// Задание №30. Бесконечный цикл по ошибке

/*
let i = 0;
while (i != 10) {           // i никогда не будет равно 10 из-за неточности при добавлении 0.2
 i += 0.2;
}
*/
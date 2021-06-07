// Задание No1. Скопировать и отсортировать массив

/*
function copySorted(arr) {
    return arr.slice(-1).concat(arr.slice(0,-1));
};

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);
*/

// Задание No2. Трансформировать в массив имён

/*
let vasya = {
    name: "Вася",
    age: 25
};
let petya = {
    name: "Петя",
    age: 30
};
let masha = {
    name: "Маша",
    age: 28
};
let users = [vasya, petya, masha];
let names = users.map(item => item.name);
console.log(names);
*/

//Задание No3. Получить средний возраст

/*
function getAverageAge(users) {
    let sum = 0;
    users.map(item => sum += item.age);
    return sum/users.length;
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];
console.log(getAverageAge(arr));
*/

//Задание No4. Оставить уникальные элементы массива

/*
function unique(arr) {
    return new Set(arr);
};

let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O" ];
console.log(unique(strings));
*/

//Задание No5. Сумма с помощью замыканий

/*
function sum(a) {
    return function(b) {
        return a+b;
    }
};

console.log(sum(1)(2))
*/

// Задание No6. Фильтрация с помощью функции

/*
function inBetween(a, b) {
    return function(item) {
        return item >= a && item <= 6;
    }
};
*/

/*
function inArray(arr) {
    return function(item) {
        return arr.includes(item);
    }
};
*/

//let arr = [1,2,3,4,5,6,7,8,9,10];
//console.log(arr.filter(inBetween(3,6)));
//console.log(arr.filter(inArray([1,2,3])));

// Задание No7. Вычислить факториал

/*
function factorial(n) {
    if (n!=1) {
        return n*factorial(n-1);
    } else {
        return n*1;
    }
};

console.log(factorial(4));
*/

// Задание No8. Числа Фибоначчи

/*
function fib(n) {
    let num1 = 1;
    let num2 = 1;
    for (i = 3; i <= n; i++) {
        let num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    };

    return num2;
};

console.log(fib(7))
*/
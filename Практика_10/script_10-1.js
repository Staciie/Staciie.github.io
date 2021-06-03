// 10-1

//Задание №10-1. Скопирован ли массив?

/*
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
console.log( fruits.length ); // код выведет 4, shoppingCart и fruits - ссылки на один массив.
*/

//Задание №10-2. Операции с массивами

/*
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
let middle = Math.floor(styles.length/2);
styles[middle] = "Классика";
let first = styles.shift();
console.log(first);
styles.unshift("Рэп", "Регги");
console.log(styles);
*/

// Задание №10-3. Вызов в контексте массива

/*
let arr = ["a", "b"];
arr.push(function() {
 console.log( this);
})
arr[2]();               // a, b, function - вызов функции как метода объекта arr, this - сам объект arr
*/


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
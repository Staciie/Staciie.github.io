// Задание No1. Дочерние элементы в DOM

document.querySelector('#task_1').onclick = () => {
    let div = document.querySelector('div>div');
    let ul = document.querySelector('ul');
    let li = document.querySelectorAll('li')[1];
    console.log(div, ul, li);
};

// Задание No2. Выделите ячейки по диагонали

document.querySelector('#task_2').onclick = () => {
    let rows = document.querySelectorAll('tr');
    for (let i = 0; i < rows.length; i++) {
        (rows[i].querySelectorAll('td')[i]).style.backgroundColor = 'red';
    }
};

// Задание No3. Поиск элементов

document.querySelector('#task_3').onclick = () => {
    let ageTable = document.querySelector('#age-table');
    let label = ageTable.querySelectorAll('label');
    let firstTd = ageTable.querySelector(`[id*='age']`);
    let form = document.querySelector(`[name='search']`);
    let firstInput = form.querySelector('input');
    let lastInput = form.querySelector('form>input:last-of-type');
    console.log(ageTable, label, firstTd, form, firstInput, lastInput)
};

// Задание No4. Подсчет потомков

document.querySelector('#task_4').onclick = () => {
    let liElem = document.querySelectorAll('.task_box_4  li');
    for (i = 0; i < liElem.length; i++) {
        console.log(liElem[i].firstChild.data);
    };
    console.log(liElem.length);
};

// Задание No5. Очистите элемент

document.querySelector('#task_5').onclick = () => {
    let ol = document.querySelector('#elem');
    ol.innerHTML = "";
    console.log(ol)
};

// Задание No6. Создайте список

document.querySelector('#task_6').onclick = () => {
    let ul = document.querySelector('.task_box_6 ul');
    let item = prompt('Пункт списка:');
    while (item != null && item != 0) {
        let liItem = document.createElement('li');
        liItem.textContent = item;
        ul.append(liItem);
        item = prompt('Пункт списка:');
    };

    console.log(ul)
};

// Задание No7. Выведите список потомков в дереве

document.querySelector('#task_7').onclick = () => {
    let liItems = document.querySelectorAll('.task_box_7 li');
    // console.log(liItems)
    for (let li of liItems) {
        let innerLis = li.querySelectorAll('li').length;
        if (!innerLis) continue;

        li.firstChild.data += `[${innerLis}]` ;
    }
};

// Задание No8. Создайте календарь в виде таблицы

document.querySelector('#task_8').onclick = () => {
    let cont = document.querySelector('.task_box_8');
    let table = document.createElement('table');
    cont.append(table);
    table.append()
};

// Задание No9. Вставьте HTML в список

document.querySelector('#task_9').onclick = () => {
    let firstLi = document.querySelector('.task_box_9 #one');
    let middleLi = document.createElement(`li`);
    middleLi.innerHTML = `<li>2</li><li>3</li>`;
    firstLi.after(middleLi);
};
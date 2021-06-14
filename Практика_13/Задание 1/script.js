// Задание No1. Создать уведомление

function showNotification(options){
    let div = document.createElement('div');
    div.classList.add(options.className);
    div.style.top = `${options.top}px`;
    div.style.right = `${options.right}px`;
    div.innerHTML = options.html;
    document.querySelector(".task_1").append(div);

    setTimeout(()=> {
        div.remove();
    }, 1500)
}


document.querySelector("#task_1").addEventListener('click', function() {
    showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
    })});
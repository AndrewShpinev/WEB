// функция on
//.on(event, handler);
// функция one
//.one(events, handler);

// events - собыытие или список событий через пробел, при
//наступлении которых необходимо выполнить обработчик (handler)
// handler - функция (обработчик события)
// $('.btn').click(function() {
//     // действия, которые будут выполнены при наступлении события...
//     console.log('Меня нажали!');
// });
// $('.btn').on('click', function(e) {
    // e - объект Event, содержащий дополнительную информацию о произошедшем событии
    // часто используемые свойства объекта Event
    // e.preventDefault(); //отменить выполнение действия по умолчанию
    // e.stopPropagation(); //остановить дальнейшее всплытие события
    // e.type - получить тип события
    // e.target - ссылка на элемент, на котором произошло событие
    // e.currentTarget - ссылка на 
// });
function countRabbits() {
    for(let i = 1; i <= 3; i++) {
        alert("Кролик номер " + i);
    }
}

// let elements = document.getElementById('pagination');

// Array.from(elements).forEach((elem) => {

//     elem.addEventListener('click', functionName, {
//         capture: false,
//         once: true,
//         passive: false
//     });
// });

function functionName(event) {
    let test = event.target;

    if(test.id == "about") {
        console.log("heheheheheheh");
    }
    test.text = "Спасибо!";
}
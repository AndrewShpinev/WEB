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

$('#idName').on('keyup keypress blur change', function(e) {
    console.log(e.type); //тип события
});

//или так
var myFunction = function() {

}

$('idName')
    .keyup(myFunction)
    .keypress(myFunction)
    .blur(myFunction)
    .change(myFunction);
$('#id').on({
    mouseenter: function() {
        // обработчик события mousenter...
    },
    click: function() {
        // обработчик события click...
    }
});
// trigger - вызывает указанное событие у элемента.
//triggerHandler - вызывает обработчик события, при этом само события не происходит.

$('#header').on('click', function() {
    console('Произошёл клик на элементе #header');
});

// программный вызов события click элемента
$('#header').trigger('click');
// короткая запись данного вызова
$('#header').click();
// вызов обработчика события click у выбранного элемента
$('#header').triggerHandler('click');

$(function() {
    // действия, которые необходимо выполнить после загрузки документа...

});

$(document).ready(function() {
    // действия, которые необходимо выполнить после загрузки документа...
});

$(window).on('load', function() {
    // действия после полной загрузки страницы...
});

$('#image').on('load', function() {
    console.log('Изображение загружено');
});

//hover
//mousemove
//wheel
//keydown
//keypress
//keyup
//focus
//change
//select
//submit
//scroll
//resize

$(document).on(eventName, selector, handler);
// document или любой другой существующий родительский элемент
// eventName - имя события
// selector - селектор осуществляющий фильтрацию потомков, для которых необходимо запустить обработчик события
// handler - обработчик события

$('.link').off();
$('.link').off('click');


// добавляем ко всем жлементам p пользовательское событие, которое будет изменять цвет текста и его содержимое
// получения данных, переданных методом trigger, осуществим посредством аргументов color и title
$('.module p').on('highlight', function(e, color, title) {
    $(this).css('color', color);
    $(this).text('Вызвано пользовательское событие highlight ' + title);
});

// при нажатии на элемент с классом success вызвать кастомное событие highlight и передать ему параметры
$('.success').click(function() {
    // используя второй аргумент передадим данные в обработчик события
    $(this).closest('.module').find('p').trigger('highlight', ['green','(цвет зелёный)']);
});

// при нажатии на элемент с классом error вызвать кастомное событие highlight и передать ему параметр
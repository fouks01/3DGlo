'use strict';

let date = new Date();
let time = date.toLocaleTimeString('en');
let dateDay = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];
let greetings;

let newYear = new Date(2022, 11, 31).getTime();
let dateNow = date.getTime();
let timeRemaining = Math.floor((newYear - dateNow) / 1000 / 60 / 60 / 24);


if (date.getHours() > 21 || date.getHours() < 4) {
    greetings = 'Доброй ночи';
} else if (date.getHours() > 4 || date.getHours() < 12) {
    greetings = 'Доброе утро';
} else if (date.getHours() > 12 || date.getHours() < 16) {
    greetings = 'Добрый день';
} else if (date.getHours() > 16 || date.getHours() < 21) {
    greetings = 'Добрый вечер';
}

document.body.innerHTML = `<p>
 ${greetings}!
 <br>
Сегодня: ${dateDay[date.getDay()]} <br>
Текущее время: ${time} <br>
До нового года осталось ${timeRemaining} дней
</p>`;
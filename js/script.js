/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adverb = document.querySelectorAll('.promo__adv img'),
    header = document.querySelector('.promo__genre'),
    bg = document.querySelector('.promo__bg'),
    list = document.querySelector('.promo__interactive-list'),
    items = document.querySelectorAll('.promo__interactive-item');

adverb.forEach(item => {
    item.remove();
});

header.innerHTML = "драма";

bg.style.background = "url(img/bg.jpg) center center/cover no-repeat";

items.forEach(item => {
    item.remove();
});

// или 
// list.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((item, index) => {
    const div = document.createElement('li');
    div.classList.add('promo__interactive-item');
    div.innerHTML = `${index + 1} ${item} <div class="delete"></div>`;
    list.append(div);
    // или
    // list.innerHTML += `
    //     <li class="promo__interactive-item">${index + 1} ${item}
    //         <div class="delete"></div>
    //     </li>
    // `;
});


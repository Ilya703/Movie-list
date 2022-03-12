/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        input = document.querySelector('.adding__input'),
        form = document.querySelector('form.add'),
        favorite = document.querySelector('[type="checkbox"]');
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(adverb);

    const makeChanges = (header, bg) => {
        header.innerHTML = "драма";
    
        bg.style.background = "url(img/bg.jpg) center center/cover no-repeat";
    };

    makeChanges(header, bg);

    const sortArray = (arr) => {
        arr.sort();
    };
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let val = input.value;
        const check = favorite.checked;
        if (val) {
            if (val.length > 21) {
                val = `${val.slice(0, 21)} ...`;
            }
            if (check) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(val);
            SortFilms(movieDB.movies, list);

            e.target.reset();
        }
    });
    
    function SortFilms(films, parent) {
        sortArray(films);
        parent.innerHTML = "";

        films.forEach((item, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1} ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                delete movieDB.movies[i];
                // или
                // movieDB.movies.splice(i, 1);
                SortFilms(films, parent);
            });
        });
    }

    SortFilms(movieDB.movies, list);
});
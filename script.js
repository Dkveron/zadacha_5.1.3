var seeAll = document.querySelector('.see_all');
var hide = document.querySelector('.hide');
var img = seeAll.querySelector('img');
var hiddenElements = document.querySelectorAll('.slider__item--hidden');


seeAll.onclick = function () {
    seeAll.classList.toggle('active');
    if (seeAll.classList.contains('active')) {
        hide.textContent = 'Скрыть';
        img.src = 'image/expand_up.png';
        hiddenElements.forEach(function (element) {
            element.classList.remove('slider__item--hidden');
        });
      } else {
        hide.textContent = 'Показать все';
        img.src = 'image/expand.png';
        hiddenElements.forEach(function (element) {
            element.classList.add('slider__item--hidden');
        });
      }
}
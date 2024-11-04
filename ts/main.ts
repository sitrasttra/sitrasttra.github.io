let lastScrollTop = 0; // Храним позицию последнего скролла
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Прокручиваем вниз
        header!.style.top = "-75px"; // Скрываем заголовок
    } else {
        // Прокручиваем вверх
        header!.style.top = "0"; // Показываем заголовок
    }
    lastScrollTop = scrollTop; // Обновляем позицию скролла
});
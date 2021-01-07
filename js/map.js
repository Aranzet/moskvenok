var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Браслет Москвёнок - Широкая ул., 28, Москва',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<div class="shop-data"> <p>Адрес:<span>Широкая ул., 28, Москва</span></p> <p>Телефон:<span><b>+7 (495) 066-72-17</b></span></p> <p>Режим работы:<span>Ежедневно с 8:00 до 22:00</span></p> <div class="shop-data-gallery"> <img src="img/shop-data-gallery1.jpg" alt=""> <img src="img/shop-data-gallery2.jpg" alt=""> <img src="img/shop-data-gallery3.jpg" alt=""> </div> </div>',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-marker.png',
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    

    myMap.geoObjects
    .add(myPlacemark);
}
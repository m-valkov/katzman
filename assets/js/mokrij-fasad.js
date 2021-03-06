var nextArrow = '<div class="control-next-arrow">▶▶</div>';
var prevArrow = '<div class="control-prev-arrow">◀◀</div>';
var maxSlidePosition = 11;

var control = {
    0: {
        id: "first-promo",
        title: "Мокрый фасад: предложение",
        prev: "",
        next: "Виды покрытий" + nextArrow,
    },
    1: {
        id: "vid",
        title: "Мокрый фасад: виды покрытий",
        prev: prevArrow + "Предложение",
        next: "Палитра цветов" + nextArrow,
    },
    2: {
        id: "palitra",
        title: "Мокрый фасад: палитра цветов",
        prev: prevArrow + "Виды покрытий",
        next: "Плюсы и минусы" + nextArrow,
    },
    3: {
        id: "plus-minus",
        title: "Мокрый фасад: плюсы и минусы",
        prev: prevArrow + "Палитра цветов",
        next: "Технология монтажа" + nextArrow,
    },
    4: {
        id: "schema",
        title: "Мокрый фасад: технология монтажа",
        prev: prevArrow + "Плюсы и минусы",
        next: "Устройство откосов" + nextArrow,
    },
    5: {
        id: "otkos",
        title: "Мокрый фасад: устройство откосов",
        prev: prevArrow + "Технология монтажа",
        next: "Как мы работаем" + nextArrow,
    },
    6: {
        id: "how-we-work",
        title: "Мокрый фасад: как мы работаем",
        prev: prevArrow + "Устройство откосов",
        next: "Цены" + nextArrow,
    },
    7: {
        id: "prices",
        title: "Мокрый фасад: цены",
        prev: prevArrow + "Как мы работаем",
        next: "Портфолио" + nextArrow,
    },
    8: {
        id: "portfolio",
        title: "Мокрый фасад: портфолио",
        prev: prevArrow + "Цены",
        next: "Видео обзор" + nextArrow,
    },
    9: {
        id: "video",
        title: "Мокрый фасад: видео обзор",
        prev: prevArrow + "Портфолио",
        next: "Рассрочка" + nextArrow,
    },
    10: {
        id: "credit-promo",
        title: "Мокрый фасад: рассрочка",
        prev: prevArrow + "Видео",
        next: "Предложение" + nextArrow,
    },
    11: {
        id: "last-promo",
        title: "Мокрый фасад: звоните!",
        prev: prevArrow + "Рассрочка",
        next: "",
    },

}

var maxPortfolioPosition = 7;

var portfolio = {
    0: 'url(/assets/img/mokrij-fasad/portfolio/1.jpg)',
    1: 'url(/assets/img/mokrij-fasad/portfolio/2.jpg)',
    2: 'url(/assets/img/mokrij-fasad/portfolio/3.jpg)',
    3: 'url(/assets/img/mokrij-fasad/portfolio/4.jpg)',
    4: 'url(/assets/img/mokrij-fasad/portfolio/5.jpg)',
    5: 'url(/assets/img/mokrij-fasad/portfolio/6.jpg)',
    6: 'url(/assets/img/mokrij-fasad/portfolio/7.jpg)',
    7: 'url(/assets/img/mokrij-fasad/portfolio/8.jpg)',
}
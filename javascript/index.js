import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper1 = new Swiper('.swiper1', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
    effect: 'fade',
    lazy: true,
});

const swiper2 = new Swiper('.swiper2', {
    effect: 'coverflow',
    grabCursor: true,
    spaceBetween: 70,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    initialSlide: 1,
    loop: true,
    lazy: true,
});

const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 5,
    spaceBetween: 30,
    grabCursor: true,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,
    lazy: true,
});

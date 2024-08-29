const swiper = new Swiper('.card-wrapper', {
    slidesPerView: 3,  // تعداد ستون‌ها در دسکتاپ
    spaceBetween: 30,  // فاصله بین اسلایدها
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,  // تاخیر 3 ثانیه بین تغییر اسلایدها
        disableOnInteraction: false,  // اسلایدر بعد از تعامل کاربر هم ادامه می‌دهد
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

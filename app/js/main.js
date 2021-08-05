$(function () {
    $('.slider-message__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991.90,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.brends__items').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991.90,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 767.90,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 479.90,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $('.btn-burger').on('click', function () {
        $('.btn-burger__line').addClass('btn-burger__line--active');
        $('.menu').addClass('menu--active');
        $('body').addClass('lock');
    });

    $('.menu__close').on('click', function () {
        $('.btn-burger__line').removeClass('btn-burger__line--active');
        $('.menu').removeClass('menu--active');
        $('body').removeClass('lock');
    });

    $('.header__user-link--search').on('click', function () {
        $('.header__search').toggleClass('header__search--active');
    });

    $('.header__user-link--cart').on('click', function () {
        $('.basket').toggleClass('basket--active');
    });

    $('.basket__exit').on('click', function () {
        $('.basket').removeClass('basket--active');
    }); 

    let containerEl1 = document.querySelector('[data-ref="container-1"]');
    let containerEl2 = document.querySelector('[data-ref="container-2"]');

    let config = {
        controls: {
            scope: 'local'
        }
    };

    let mixer1 = mixitup(containerEl1, config);
    let mixer2 = mixitup(containerEl2, config);

});
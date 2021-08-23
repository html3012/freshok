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


    $('.product__slider').slick({
        responsive: [
            {
                breakpoint: 479.90,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.product__slider-popup').slick({
        responsive: [
            {
                breakpoint: 479.90,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

    $('.interesting__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 991.90,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767.90,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 374.90,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $('.overlay').on('click', function(){
        $('.overlay').removeClass('overlay--active');
        $('body, html').removeClass('lock');
        $('.menu').removeClass('menu--active');
        $('.basket').removeClass('basket--active');
        $('.filter').removeClass('filter--active');
    });

    $('.btn-burger').on('click', function () {
        $('.menu').addClass('menu--active');
        $('.overlay').addClass('overlay--active');
        $('body, html').addClass('lock');
    });

    $('.menu__close').on('click', function () {
        $('.menu').removeClass('menu--active');
        $('.overlay').removeClass('overlay--active');
        $('body, html').removeClass('lock');
    });

    $('.header__user-link--search').on('click', function () {
        $('.header__search').toggleClass('header__search--active');
    });

    $('.dropdown').on('click', function () {
        $('.dropdown').toggleClass('dropdown--active');
    });

    $('.filter__name').on('click', function () {
        if ($(this).parent().hasClass('filter__categories--open')){
            $(this).parent().removeClass('filter__categories--open')
        }
             else {
                  $(this).parent().addClass('filter__categories--open')
            }
    });
   
    $('.header__user-link--cart').on('click', function () {
        $('.basket').addClass('basket--active');
        $('.overlay').addClass('overlay--active');
        $('body, html').addClass('lock');
    });

    $('.basket__exit').on('click', function () {
        $('.basket').removeClass('basket--active');
        $('.overlay').removeClass('overlay--active'); 
        $('body, html').removeClass('lock');      
    }); 

    $('.btn-grid').on('click', function () {
        $('.btn-list').removeClass('selects__btn--active');
        $(this).addClass('selects__btn--active');
        $('.catalog__content--list').addClass('catalog__content--hidden');
        $('.catalog__content--grid').removeClass('catalog__content--hidden');
    });

    $('.btn-list').on('click', function() {
        $('.btn-grid').removeClass('selects__btn--active');
        $(this).addClass('selects__btn--active');
        $('.catalog__content--list').removeClass('catalog__content--hidden');
        $('.catalog__content--grid').addClass('catalog__content--hidden');
    });

    $('.selects__btn--filter').on('click', function () {
        $('.filter').addClass('filter--active');
        $('.overlay').addClass('overlay--active');
        $('body, html').addClass('lock');
    });

    $('.filter__close').on('click', function () {
        $('.filter').removeClass('filter--active');
        $('.overlay').removeClass('overlay--active');
        $('body, html').removeClass('lock');
    }); 

    $('.tabs__link').on('click', function (e){
        e.preventDefault();
        $('.tabs__link').removeClass('tabs__link--active');
        $(this).addClass('tabs__link--active');

        $('.tabs__block').removeClass('tabs__block--active');
        $($(this).attr('href')).addClass('tabs__block--active');
    })

    $('.filter__range-slider').ionRangeSlider({
        type: "double",

        onStart: function(data) {
            $('.filter__from').prop('value', data.from);
            $('.filter__to').prop('value', data.to);
        },
        
        onChange: function(data) {
            $('.filter__from').prop('value', data.from);
            $('.filter__to').prop('value', data.to);
        },
    });

    $('.product__img').on('click', function(){
        $('.product__overlay').css('transform','scale(1)');
    });

    $('.product__popup-btn').on('click', function(){
        $('.product__overlay').css('transform','scale(0)');
    });

    $('.selects__select').styler();

    
    $('.tabs__rate, .product__rate').rateYo({
        starWidth: "16px",
        normalFill: "#c1c1c1",
        ratedFill: "#ffb800",
        spacing: "5px",
        starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M0.0229731 5.79566C0.0780973 5.62595 0.224753 5.50226 0.401315 5.47663L5.36139 4.75586L7.57966 0.26128C7.6586 0.101281 7.82157 0 7.99997 0C8.17841 0 8.34135 0.101281 8.42032 0.26128L10.6387 4.75586L15.5987 5.47663C15.7752 5.50226 15.9219 5.62595 15.977 5.79563C16.0322 5.96535 15.9862 6.15163 15.8584 6.27616L12.2694 9.77471L13.1165 14.7148C13.1467 14.8907 13.0744 15.0683 12.9301 15.1733C12.8484 15.2326 12.7517 15.2628 12.6545 15.2628C12.5799 15.2628 12.505 15.245 12.4365 15.2089L8 12.8765L3.56374 15.2089C3.40577 15.2919 3.21443 15.2781 3.07009 15.1732C2.92574 15.0683 2.8534 14.8906 2.88356 14.7147L3.73096 9.77471L0.141566 6.27613C0.0138168 6.15163 -0.0322151 5.96535 0.0229731 5.79566Z"/>' +
       '</svg>',
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
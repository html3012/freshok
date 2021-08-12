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


    $('.product__slider').slick();

    $('.product__interesting').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });

    $('.btn-burger').on('click', function () {
        $('.btn-burger__line').addClass('btn-burger__line--active');
        $('.menu').addClass('menu--active');
        $('.header').addClass('header--active');
        $('body, html').addClass('lock');
    });

    $('.menu__close').on('click', function () {
        $('.btn-burger__line').removeClass('btn-burger__line--active');
        $('.menu').removeClass('menu--active');
        $('.header').removeClass('header--active');
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
        $('.header').addClass('header--active');
        $('body, html').addClass('lock');
    });

    $('.basket__exit').on('click', function () {
        $('.basket').removeClass('basket--active');
        $('.header').removeClass('header--active'); 
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
        $('.catalog__filters').addClass('catalog__filters--active');
        $('.header').addClass('header--active');
    });

    $('.catalog__close').on('click', function () {
        $('.catalog__filters').removeClass('catalog__filters--active');
        $('.header').removeClass('header--active');
    }); 

    $('.filter__range-slider').ionRangeSlider({
        type: "double",

        onStart: function(data) {
            $('.filter__from').prop("value", data.from);
            $('.filter__to').prop("value", data.to);
        },
        
        onChange: function(data) {
            $('.filter__from').prop("value", data.from);
            $('.filter__to').prop("value", data.to);
        },
    });

    $('.selects__select').styler();

    
    // $("#rateYo").rateYo({
    //     starWidth: "40px"
    //   });


    //   var gallery = [
    //     {
    //       src: "../../img/dragonfruit.jpg/id/2/800x600",
    //       thumb: "../../img/dragonfruit.jpg/id/2/80x80",
    //       caption: "First image",
    //     },
    //     {
    //       src: "../../img/cards/pitaya.jpg/3/800x600",
    //       thumb: "../../img/cards/pitaya.jpg/3/80x80",
    //       caption: "Second image",
    //     },
    //     {
    //       src: "../../img/dragonfruit.jpg/4/800x600",
    //       thumb: "../../img/dragonfruit.jpg/4/80x80",
    //       caption: "Third image",
    //     },
    //   ];
      
    //   Fancybox.show(gallery, {
    //     Image: {
    //         click: 'close',
    //         maxScale: 1,
    //     },
    //   });



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
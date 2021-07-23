$(function(){
    $('.slider__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        autoplay: true,
    });

    let mixer = mixitup('.top__cards');

});
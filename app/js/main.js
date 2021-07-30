$(function(){
    $('.slider-message__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        autoplay: true,
    });

    $('.brends__items').slick({
       
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
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
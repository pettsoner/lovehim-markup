$(document).ready(function() {

     $('.b-gallery__slider').bxSlider({
        maxSlides: 5,
        slideWidth: 186,
        adaptiveHeight: true,
        slideMargin: 5,
        pager: false,
        infiniteLoop: false,
     });

     $('.b-quotes__slider').bxSlider({
        maxSlides: 1,
        slideWidth: 630,
        adaptiveHeight: true,
        pager: false,
        infiniteLoop: false,        
     });
});
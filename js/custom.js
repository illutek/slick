/**
 * Created by Stefan on 8/03/2015.
 */

$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});

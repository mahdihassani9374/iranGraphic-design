$(function () {
    new WOW().init();

    $(window).on("load", function () {
        $('.loading').fadeOut();
    })
})
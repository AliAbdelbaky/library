$(document).ready(function () {
    $('.click-one').on('click', function () {
        'use srtict';
        $('.p-one').toggle(200);
        $('.i-one').toggleClass("fa fa-angle-right fa fa-angle-down");
        $('.p-two').slideUp(200);
        $('.p-three').slideUp(200);
        $('.i-two').addClass("fa fa-angle-right ");
        $('.i-three').addClass("fa fa-angle-right ");
    });
    $('.click-two').on('click', function () {
        'use srtict';
        $('.p-two').toggle(200);
        $('.i-two').toggleClass("fa fa-angle-right fa fa-angle-down");
        $('.p-one').slideUp(200);
        $('.p-three').slideUp(200);
        $('.i-one').addClass("fa fa-angle-right");
        $('.i-three').addClass("fa fa-angle-right");
    });
    $('.click-three').on('click', function () {
        'use srtict';
        $('.p-three').toggle(200);
        $('.i-three').toggleClass("fa fa-angle-right fa fa-angle-down");
        $('.p-one').slideUp(200);
        $('.p-two').slideUp(200);
        $('.i-one').addClass(" fa fa-angle-right ");
        $('.i-two').addClass("fa fa-angle-right ");
    });
});


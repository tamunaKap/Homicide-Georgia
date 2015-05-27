$(document).ready(function () {

    $(".parts p:not(:first-child)").click(function () {

        var choosedItemId = $(this).data("id")
        $('html, body').animate({ scrollTop: $('#' + choosedItemId).offset().top }, 'slow');
    });
    $(".start_reading").click(function () {

        $('html, body').animate({ scrollTop: $('#part1').offset().top }, 'slow');
    });
})
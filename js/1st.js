$(document).ready(function () {

    var headers = ["Cop sentenced for shooting his ex-wife", "Policeman who killed his domestic partner pleaded temporary insanity", "After a woman meets her ex-husband she’s killed", "Nine shots below the waist kills the women", "Confession after the murder"]
    $(".parts p:not(:first-child)").click(function () {

        var choosedItemId = $(this).data("id")
        $('html, body').animate({ scrollTop: $('#' + choosedItemId).offset().top }, 'slow');
    });
    $(".start_reading").click(function () {

        $('html, body').animate({ scrollTop: $('#part1').offset().top }, 'slow');
    });

    $(".parts p:not(:first-child)").mouseenter(function () {
     
        $(".title").text("")
        $(".title").text(headers[$(this).text() - 1])
    });
})
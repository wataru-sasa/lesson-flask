$(function () {
    $('.hum_menu').on('click', function () {
        $('header').toggleClass('open');
    });
    $("#big_btn").on('click', function () {
        $("img").toggleClass("picture");
    });
    $("#big_btn").on('click', function () {
        $("img").css('width', '600px');
    });
    $("#change_btn").on('click', function () {
        $("img").attr('src', './img/hawk.jpg');
    });


    $("#lng-ja").on('click', function () {
        $("#menu-sec1").text("見出しのエリア");
    });
    $("#lng-ja").on('click', function () {
        $("#menu-sec2").text("flexのエリア");
    });
    $("#lng-ja").on('click', function () {
        $("#menu-sec3").text("センタリングエリア");
    });
    $("#lng-ja").on('click', function () {
        $("#menu-sec4").text("制作実績");
    });

    $("#lng-en").on('click', function () {
        $("#menu-sec1").text("Heading_area");
    });
    $("#lng-en").on('click', function () {
        $("#menu-sec2").text("flex_area");
    });
    $("#lng-en").on('click', function () {
        $("#menu-sec3").text("centering_area");
    });
    $("#lng-en").on('click', function () {
        $("#menu-sec4").text("Production_results_area");
    });

    $("#append").on('click', function () {
        var appendDiv = '<div class="flex_area_text"> <h2>flexを使って左から詰めていく</h2> <p>ここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入りますここにflexに関してのテキストが入ります</p> </div>'
        $(".flex_area").append(appendDiv)
    });





})

function triangle(a, b) {
    result = a * b / 2;
    return result;
}
console.log(triangle(10, 12));
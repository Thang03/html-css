const box = document.getElementsByClassName("header");
const heightInner = window.innerHeight;

box[0].style.height = `${heightInner}px`;

$(".navbar a").click(function() {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)

})
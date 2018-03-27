$('nav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 900);
    return false;
});


$('main a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 900);
    return false;
});


function blabla() {
    alert("Dziękuję za wiadomość! Z pewnością odpiszę.");
} 
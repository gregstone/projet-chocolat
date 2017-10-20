

//Ancre ateliers

$("#lien-ateliers").click(function() {
    $('html, body').animate({
        scrollTop: $("#ancre-ateliers").offset().top
    }, 2000);
});


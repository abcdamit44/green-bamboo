$('#navbar').hide()
$('.ks-banner-content').hide()
$('.ks-banner-img').hide()
setTimeout(function() {
    $('#navbar').fadeIn('slow');
    $('.ks-banner-content').fadeIn('slow');
    $('.ks-banner-img').fadeIn('slow');
}, 3000);
$(document).click(function() {
    $('#navbar').fadeIn('slow');
    $('.ks-banner-content').fadeIn('slow');
    $('.ks-banner-img').fadeIn('slow');
})

let main = document.querySelector('.ks-main');
// let scroll = main.offsetTop;

$('.ks-main').hide()
addEventListener('scroll', function() {
    if (window.pageYOffset >= "400") {
        $('.ks-main').fadeIn('slow')
    }
})
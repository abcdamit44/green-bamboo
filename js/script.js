$('#navbar').hide()
$('.ks-banner-content').hide()
$('.ks-banner-img').hide()
$('.ks-main-container').hide()
setTimeout(function() {
    $('#navbar').fadeIn('slow');
    $('.ks-banner-content').fadeIn('slow');
    $('.ks-banner-img').fadeIn('slow');
    $('.ks-main-container').show()
    $('.ks-video-banner').css('height', '70vh')
    $('.ks-main').fadeIn('slow')

}, 3000);
$(document).click(function() {
    $('#navbar').fadeIn('slow');
    $('.ks-banner-content').fadeIn('slow');
    $('.ks-banner-img').fadeIn('slow');
    $('.ks-video-banner').css('height', '70vh')
    $('.ks-main').fadeIn('slow')

})

let main = document.querySelector('.ks-main');
// let scroll = main.offsetTop;

$('.ks-main').hide()
addEventListener('scroll', function() {
    // if (window.pageYOffset >= "400") {
    //     $('.ks-main').fadeIn('slow')
    // } else {
    //     $('.ks-main').fadeOut('slow')
    // }

    if (window.pageYOffset == "0") {
        $('#navbar').css('background', 'transparent')
    } else {
        $('#navbar').css('background', 'rgba(0,0,0,0.5)')

    }

})
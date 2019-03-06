$(function () {
    let mainImage = $('.main-image');

    mainImage.height($window.height() - 80);

    $window.on('resize', () => mainImage.height($window.height() - 80));

    if (mainImage.length) {
        $('.topmenu__submenu').css('border-bottom', 'none');
    }
});
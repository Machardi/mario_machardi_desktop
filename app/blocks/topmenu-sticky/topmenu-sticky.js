$(function () {
    $window.on('scroll', function () {
        if ($('.topmenu-sticky').length) {
            if ($window.scrollTop() > $('.topmenu').offset().top + $('.topmenu').outerHeight()) {
                $('.topmenu-sticky').addClass('topmenu-sticky_open');
            } else {
                $('.topmenu-sticky').removeClass('topmenu-sticky_open');
            }
        }
    });

    $('[scrolltotopmenu]').on('click', function () {
        $body.animate({
            scrollTop: $('.topmenu').offset().top
        }, 500)
    });
});
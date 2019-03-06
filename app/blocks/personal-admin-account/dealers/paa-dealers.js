$(function () {
    $('.paa-dealers [add-comment]').on('click', function (e) {
        e.preventDefault();

        $('.paa-dealers__modal').css({
            'visibility': 'visible',
            'opacity': 1
        });
    });
    $('.paa-dealers [close-modal-comment]').on('click', function (e) {
        e.preventDefault();

        $('.paa-dealers__modal').css({
            'visibility': 'hidden',
            'opacity': 0
        });
    });
});
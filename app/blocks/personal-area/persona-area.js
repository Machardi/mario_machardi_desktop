$(function () {
    $('.personal-area__tabs_link').click(function (e) {
        e.preventDefault()

        if (history) {
            history.pushState(null, null, $(this).attr('href'));
        }
    });

    let linkElems = Array.prototype.slice.call($('.personal-area__tabs_link'));

    linkElems.forEach(function (elem) {
        if (location.hash == $(elem).attr('href')) {
            $('.personal-area__tabs_link[href="' + $(elem).attr('href') + '"]').tab('show');
        }
    });

    if (!location.hash) {
        $('.personal-area__tabs_link:first').tab('show');
    }
});
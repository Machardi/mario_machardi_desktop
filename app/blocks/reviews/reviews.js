$(function () {
    let reviewsRow = $('.reviews__row'),
        resizedRow = function () {
            reviewsRow.each(function (index, element) {
                $(element).height($(element).height());
            });
        };


    if (reviewsRow.length) {
        resizedRow();

        $window.on('resize', () => resizedRow());

        delayEventsResizing({
            callback: function () {
                reviewsRow.removeAttr('style');

                setTimeout(function () {
                    resizedRow();
                }, 0);
            }
        });
    }
});
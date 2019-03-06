$(function () {
    let contactsColumn = $('.contacts__column_wrapper'),
        arrayHeightsColumn = [],
        resizedColumns = function () {
            arrayHeightsColumn.length = 0;

            contactsColumn.each(function (index, element) {
                arrayHeightsColumn.push($(element).outerHeight());
            });

            contactsColumn.css('min-height', Math.max.apply(null, arrayHeightsColumn));
        };

    if (contactsColumn.length) {
        resizedColumns();

        $window.on('resize', () => resizedColumns());

        delayEventsResizing({
            callback: function () {
                contactsColumn.removeAttr('style');

                setTimeout(function () {
                    resizedColumns();
                }, 0);
            }
        });
    }
});
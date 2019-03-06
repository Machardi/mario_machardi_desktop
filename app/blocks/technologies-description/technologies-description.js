$(function () {
    let technologiesColumn = $('.technologies-description__column_wrapper'),
        arrayHeightsColumn = [],
        resizedColumns = function () {
            arrayHeightsColumn.length = 0;

            technologiesColumn.each(function (index, element) {
                arrayHeightsColumn.push($(element).outerHeight());
            });

            technologiesColumn.css('min-height', Math.max.apply(null, arrayHeightsColumn));
        };

    if (technologiesColumn.length) {
        resizedColumns();

        $window.on('resize', () => resizedColumns());

        delayEventsResizing({
            callback: function () {
                technologiesColumn.removeAttr('style');

                setTimeout(function () {
                    resizedColumns();
                }, 0);
            }
        });
    }
});
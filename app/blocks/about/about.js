$(function () {
    let aboutTopColumn = $('.about__about-company_top-item'),
        aboutBottomColumn = $('.about__about-company_bottom-item .about__about-company_column_wrapper'),
        resizedColumnsMethod = function (options) {
            if (options.removeHeights == true) {
                options['resized_element'].removeAttr('style');
            }

            let arrayHeightsColumn = [],
                resizedColumns = function (resElem) {
                    arrayHeightsColumn.length = 0;

                    resElem.each(function (index, element) {
                        arrayHeightsColumn.push($(element).outerHeight());
                    });

                    resElem.css('height', Math.max.apply(null, arrayHeightsColumn));
                };

            resizedColumns(options.resized_element);
        };

    if (aboutBottomColumn.length || aboutTopColumn.length) {
        resizedColumnsMethod({
            resized_element: aboutTopColumn
        });
        resizedColumnsMethod({
            resized_element: aboutBottomColumn
        });

        $window.on('resize', () => {
            resizedColumnsMethod({
                resized_element: aboutTopColumn
            });
            resizedColumnsMethod({
                resized_element: aboutBottomColumn
            });
        });

        delayEventsResizing({
            callback: function () {
                resizedColumnsMethod({
                    resized_element: aboutTopColumn,
                    removeHeights: true
                });
                resizedColumnsMethod({
                    resized_element: aboutBottomColumn,
                    removeHeights: true
                });
            }
        });
    }
});
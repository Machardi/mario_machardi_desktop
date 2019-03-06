$(function () {
    $('.products__slider').slick({
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 5,
        prevArrow: '<button type="button" class="products__slider_prev-arrow"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="products__slider_next-arrow"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1280 + 1,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4
                }
            }
        ]
    });


    let productsGroup = $('.products__group'),
        arrayHeightsColumn = [],
        resizedColumns = function () {
            arrayHeightsColumn.length = 0;

            productsGroup.each(function (index, element) {
                $(element).find('.products__slider_image img').each(function (innerIndex, innerElement) {
                    arrayHeightsColumn.push($(innerElement).outerHeight());

                    if (innerIndex + 1 == $(element).find('.products__slider_image').length) {
                        $(element).find('.products__slider_image').css('height', Math.max.apply(null, arrayHeightsColumn));

                        arrayHeightsColumn.length = 0;
                    }
                });
            });
        };

    if (productsGroup.length) {
        $document.on('ready', () => {
            setTimeout(function () {
                resizedColumns();
            }, 100);
        });

        $window.on('load', () => {
            resizedColumns();
        });

        $window.on('resize', () => resizedColumns());

        delayEventsResizing({
            callback: function () {
                productsGroup.find('.products__slider_image').removeAttr('style');

                setTimeout(function () {
                    resizedColumns();
                }, 0);
            }
        });
    }


    $('.products__slider').on('beforeChange', function(event, slick, direction){
        resizedColumns();
    });
});
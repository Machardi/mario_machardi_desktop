$(function () {
    let popularGoodsDropdownBtn = $('.popular-goods__dropdown_button');

    $('[data-option="dropdown-item"]').on('click', function () {
        let self = $(this),
            itemName = self.text();

        popularGoodsDropdownBtn.find('span').text(itemName);
    });


    $('.popular-goods__slider').slick({
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 5,
        prevArrow: '<button type="button" class="popular-goods__slider_prev-arrow"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="popular-goods__slider_next-arrow"><i class="fa fa-angle-right"></i></button>',
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


    let popularGoodsSliderImage = $('.popular-goods__slider_image'),
        arrayHeightsColumn = [],
        resizedColumns = function () {
            arrayHeightsColumn.length = 0;

            popularGoodsSliderImage.each(function (index, element) {
                arrayHeightsColumn.push($(element).outerHeight());
            });

            popularGoodsSliderImage.css('height', Math.max.apply(null, arrayHeightsColumn));
        };

    if (popularGoodsSliderImage.length) {
        resizedColumns();

		$window.on('load', function () {
            popularGoodsSliderImage.removeAttr('style');

			resizedColumns();
		});
    }

    $('.popular-goods__slider').on('beforeChange', function(event, slick, direction){
        resizedColumns();
    });
});

function initGridProduct () {
    let $fotoramaDiv = $('.catalog-items__popup_slider-preview').fotorama({
            width: '100%',
            height: 190,
            arrows: 'always',
            nav: 'thumbs',
            navwidth: 220,
            thumbwidth: 40,
            thumbheight: 70,
            thumbratio: 'auto',
            thumbmargin: 15,
            thumbborderwidth: 0,
            transition: 'crossfade',
            loop: true,
            click: false,
            shadows: false
        }),
        fotorama = $fotoramaDiv.data('fotorama');
}

window.initGridProduct = initGridProduct;

$(function () {
    let catalogItems = $('.catalog-items__items');

    if (catalogItems.length) {
        delayEventsResizing({
            callback: function () {
                catalogItems.find('.catalog-items__items_image').removeAttr('style');

                setTimeout(function () {
                    window.initGridProduct();
                }, 0);
            }
        });
    }

    $document.on('ready', function () {
        window.initGridProduct();

        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $document.on('mouseenter', '.catalog-items__items_item', function () {
                let self = $(this),
                    imageWrapper = self.find('.catalog-items__items_image'),
                    imageWrapperHeight = imageWrapper.height();

                imageWrapper.css({
                    'height': 'auto',
                    'margin-bottom': -imageWrapperHeight
                });

                self.find('.fotorama__nav-wrap').css({
                    'visibility': 'initial',
                    'height': 'auto'
                });

                self.addClass('catalog-items__items_item_open-popup');
                self.find('.catalog-items__popup').addClass('catalog-items__popup_open');

                self.find('.catalog-items__popup_slider-preview').data('fotorama').resize({width: '100%'});

                if (self.find('.catalog-items__popup').offset().left < 0 ||
                    self.find('.catalog-items__popup').offset().left + self.find('.catalog-items__popup').outerWidth() > $window.width()) {

                    if (self.find('.catalog-items__popup').offset().left < 0) {
                        self.find('.catalog-items__popup').css({
                            'left': -999 - self.find('.catalog-items__popup').offset().left + 15
                        });

                        let positionOffset = (self.find('.catalog-items__items_image').outerWidth() - self.outerWidth()) - (self.find('.catalog-items__popup').outerWidth() - self.find('.catalog-items__items_image').outerWidth());

                        self.find('.catalog-items__items_image').css({
                            'left': -positionOffset,
                            'right': -positionOffset
                        });
                    }

                    if (self.find('.catalog-items__popup').offset().left + self.find('.catalog-items__popup').outerWidth() > $window.width()) {
                        self.find('.catalog-items__popup').css({
                            'right': -999 + (self.find('.catalog-items__popup').offset().left + self.find('.catalog-items__popup').outerWidth() - $window.width() + 15)
                        });

                        let positionOffset = (self.find('.catalog-items__items_image').outerWidth() - self.outerWidth()) - (self.find('.catalog-items__popup').outerWidth() - self.find('.catalog-items__items_image').outerWidth());

                        self.find('.catalog-items__items_image').css({
                            'right': -positionOffset / 2
                        });
                    }

                } else {
                    let positionOffset = self.find('.catalog-items__items_image').outerWidth() - self.outerWidth() / 2;

                    self.find('.catalog-items__items_image').css({
                        'left': -positionOffset,
                        'right': -positionOffset
                    });
                }
            });

            $document.on('mouseleave', '.catalog-items__items_item', function () {
                let self = $(this),
                    imageWrapper = self.find('.catalog-items__items_image');

                self.find('.fotorama__nav-wrap').removeAttr('style');

                imageWrapper.removeAttr('style');

                self.removeClass('catalog-items__items_item_open-popup');
                self.find('.catalog-items__popup').removeClass('catalog-items__popup_open').removeAttr('style');

                self.find('.catalog-items__popup_slider-preview').data('fotorama').resize({width: '100%'});
            });
        }
    });

	$('.catalog-items__popup_like').on('click', function () {
		let self = $(this);

		self.find('.icons').toggleClass('icons__like').toggleClass('icons__like-active');

        self.toggleClass('favorite-product');

        if (self.hasClass('favorite-product')) {
            addLikeNatify();
        } else {
            removeLikeNatify();
        }
	});
});
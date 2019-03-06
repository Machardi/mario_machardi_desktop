$(function () {
    let catalogRightPanel = $('.catalog-right-panel'),
        initCatalogPanelPosition = function () {
            if ($('.catalog-right-panel').length) {
                if ($window.width() >= 1500) {
                    catalogRightPanel.css({
                        'height': $window.height(),
                        'position': 'fixed',
                        'top': 0,
                        'margin-top': 0
                    });
                } else {
                    if ($window.scrollTop() > $('.topmenu').offset().top + $('.topmenu').outerHeight()) {
                        catalogRightPanel.css({
                            'height': $window.height() - $('.topmenu-sticky').outerHeight(),
                            'position': 'fixed',
                            'top': 0,
                            'margin-top': $('.topmenu-sticky').outerHeight()
                        });
                    } else {
                        catalogRightPanel.css({
                            'height': $window.height(),
                            'position': 'absolute',
                            'top': $('.header').outerHeight(true) + $('.topmenu').outerHeight(),
                            'margin-top': 0
                        });
                    }
                }
            }
        };

    $document.on('ready', () => initCatalogPanelPosition());
    $window.on('scroll resize', () => initCatalogPanelPosition());

    let countViewedSliderSlidesToShow = ($('[viewed-slider]').find('.catalog-right-panel__slider_item').length > 1) ? 2 : 1;

    $('[viewed-slider]').slick({
        dots: false,
        infinite: false,
        slidesToShow: countViewedSliderSlidesToShow,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="catalog-right-panel__slider_prev-arrow"><i class="fa fa-angle-up"></i></button>',
        nextArrow: '<button type="button" class="catalog-right-panel__slider_next-arrow"><i class="fa fa-angle-down"></i></button>',
        vertical: true,
        verticalSwiping: true
    });

    let time,
        addOpenInitScroll = function (parentElem, scrollElem) {
            parentElem.addClass('catalog-right-panel_open');

            scrollElem.nanoScroller({
                iOSNativeScrolling: true,
                preventPageScrolling: true
            });
        },
        removeOpenDestroyScroll = function (parentElem, scrollElem) {
            if ($('.catalog-right-panel_open').length) {
                //console.log(1);
                parentElem.removeClass('catalog-right-panel_open');

                scrollElem.nanoScroller({destroy: true});
            }
        };

    $('.catalog-right-panel').on('mouseenter mouseleave', function (event) {
        let self = $(this);

        if (event.type == 'mouseenter') {
            if (time) {
                clearTimeout(time);
            }

            time = setTimeout(function () {
                addOpenInitScroll(self, self.find('.catalog-right-panel__open-wrapper'));
            }, 500);
        } else if (event.type == 'mouseleave') {
            if (time) {
                clearTimeout(time);
            }

            time = setTimeout(function () {
                removeOpenDestroyScroll(self, self.find('.catalog-right-panel__open-wrapper'));
            }, 1000);
        }
    });

    $('[open-panel], [close-panel]').on('click', function (event) {
        let self = $(this);

        if ($(event.target).closest('[open-panel]').length) {
            addOpenInitScroll(
                self.closest('.catalog-right-panel'),
                self.closest('.catalog-right-panel').find('.catalog-right-panel__open-wrapper')
            );
        } else if ($(event.target).closest('[close-panel]').length) {
            removeOpenDestroyScroll(
                self.closest('.catalog-right-panel'),
                self.closest('.catalog-right-panel').find('.catalog-right-panel__open-wrapper')
            );
        }
    });

    $document.on('click', function (event) {
        if ($(event.target).closest('.catalog-right-panel').length) return;

        removeOpenDestroyScroll($('.catalog-right-panel'), $('.catalog-right-panel__open-wrapper'));
        event.stopPropagation();
    });
    
    
    $('[wishlist-slider-btn]').on('click', function (event) {
        let self = $(this);

        if ($('[viewed-slider-btn]').hasClass('catalog-right-panel__list_link_active')) {
            $('[viewed-slider-btn]').removeClass('catalog-right-panel__list_link_active');
        }

        event.preventDefault();

        self.toggleClass('catalog-right-panel__list_link_active');

        self.find('.icons').toggleClass('icons__like').toggleClass('icons__like-active');

        $('[viewed-slider]').toggleClass('catalog-right-panel__viewed-slider_open');
        $('[wishlist-slider]').toggleClass('catalog-right-panel__wishlist-slider_open');

        if (self.hasClass('catalog-right-panel__list_link_active')) {
            let countWishlistSliderSlidesToShow = ($('[wishlist-slider]').find('.catalog-right-panel__slider_item').length > 1) ? 2 : 1;

            if (!$('[wishlist-slider]').hasClass('catalog-right-panel__wishlist-slider_init')) {
                $('[wishlist-slider]').slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: countWishlistSliderSlidesToShow,
                    slidesToScroll: 2,
                    prevArrow: '<button type="button" class="catalog-right-panel__slider_prev-arrow"><i class="fa fa-angle-up"></i></button>',
                    nextArrow: '<button type="button" class="catalog-right-panel__slider_next-arrow"><i class="fa fa-angle-down"></i></button>',
                    vertical: true,
                    verticalSwiping: true
                })
                    .addClass('catalog-right-panel__wishlist-slider_init');
            }
        } else {

        }
    });

    $('[viewed-slider-btn]').on('click', function (event) {
        var self = $(this);
        if ($('[wishlist-slider-btn]').hasClass('catalog-right-panel__list_link_active')) {
            $('[wishlist-slider-btn]').removeClass('catalog-right-panel__list_link_active');
            $('#like_icon').removeClass('icons__like-active');
            $('#like_icon').addClass('icons__like');
        }

        event.preventDefault();

        self.toggleClass('catalog-right-panel__list_link_active');

        self.find('.icons').toggleClass('icons__like').toggleClass('icons__like-active');

        $('[viewed-slider]').toggleClass('catalog-right-panel__viewed-slider_open');
        $('[wishlist-slider]').toggleClass('catalog-right-panel__wishlist-slider_open');

        if (self.hasClass('catalog-right-panel__list_link_active')) {
            var countWishlistSliderSlidesToShow = $('[viewed-slider]').find('.catalog-right-panel__slider_item').length > 1 ? 2 : 1;

            if (!$('[viewed-slider]').hasClass('catalog-right-panel__wishlist-slider_init')) {
                $('[viewed-slider]').slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: countWishlistSliderSlidesToShow,
                    slidesToScroll: 2,
                    prevArrow: '<button type="button" class="catalog-right-panel__slider_prev-arrow"><i class="fa fa-angle-up"></i></button>',
                    nextArrow: '<button type="button" class="catalog-right-panel__slider_next-arrow"><i class="fa fa-angle-down"></i></button>',
                    vertical: true,
                    verticalSwiping: true
                }).addClass('catalog-right-panel__wishlist-slider_init');
            }
        } else {

        }
    });

    $('.catalog-right-panel__slider_like').on('click', function () {
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
$(function () {
    let $mensUnderwearSliderFotoramaDiv = $('.mens-underwear__slider').fotorama({
            height: 670,
            arrows: 'always',
            transition: 'crossfade',
            nav: false,
            width: '100%'
        }),
        mensUnderwearSliderFotorama = $mensUnderwearSliderFotoramaDiv.data('fotorama'),
        $fotoramaDiv = $('.product-info__slider').fotorama({
            width: '100%',
            maxheight: 500,
            arrows: 'always',
            nav: 'thumbs',
            thumbwidth: 80,
            thumbheight: 105,
            thumbratio: 'auto',
            thumbmargin: 25,
            thumbborderwidth: 0,
            transition: 'crossfade',
            loop: true,
            click: false
        }),
        fotorama = $fotoramaDiv.data('fotorama');

    $('[active="active"] .product-info__slider_item').zoom();

    $('[slider-active]').on('click', function (e) {
        let self = $(this),
            sliderId = self.attr('href'),
            thisSlider = $(sliderId).find('.product-info__slider');

        self.parent().find('.product-info__info_color_item').removeClass('product-info__info_color_item_active');
        self.addClass('product-info__info_color_item_active');

        $(sliderId).parent().find('.product-info__sliders_wrapper').removeAttr('active', 'active');
        $(sliderId).attr('active', 'active');

        thisSlider.data('fotorama').resize({
            height: thisSlider.data('fotorama').activeFrame.$stageFrame.find('img').height()
        });

        $('.product-info__slider_item').trigger('zoom.destroy');
        $('[active="active"] .product-info__slider_item').zoom();

        e.preventDefault();
    });

    $('.product-info__slider').on('fotorama:showend', function (e, fotorama, extra) {
        fotorama.resize({height: fotorama.activeFrame.$stageFrame.find('img').height()});

        $('.product-info__slider_item').trigger('zoom.destroy');
        $('[active="active"] .product-info__slider_item').zoom();
    });

    $('.product-info__select').chosen({width: '130px'}).change(function (e) {
        console.log(e);
    });

    $('.product-info__sliders_like').on('click', function () {
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
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));
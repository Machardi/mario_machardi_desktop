$(function () {
    $('[hide-preview-photo]').on('click', function () {
        let self = $(this),
            status = self.attr('hide-preview-photo');

        self.find('.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up');

        if (status == 'false') {
            self.attr('hide-preview-photo', 'true');
            $('.basket__good_photo').hide();
        } else {
            self.attr('hide-preview-photo', 'false');
            $('.basket__good_photo').show();
        }
    });

    $('.basket__select').chosen({width: '130px'}).change(function (e) {
        console.log(e);
    });

    $('.basket__select-control').chosen({width: '250px'}).change(function (e) {
        console.log(e);
    });

    $window.on('scroll', function () {
        if ($('.basket').length) {
            if ($window.scrollTop() > $('.topmenu').offset().top + $('.topmenu').outerHeight()) {
                $('.basket__steps').addClass('basket__steps_sticky');
            } else {
                $('.basket__steps').removeClass('basket__steps_sticky');
            }
        }
    });

    $('[mm-next-step]').on('click', function () {
        let self = $(this),
            nextStep = self.attr('mm-next-step'),
            nextStepElem = $('[mm-step-content="' + nextStep + '"]'),
            stepIndicator = $('[mm-step="' + nextStep + '"]');

        nextStepElem.slideDown().attr('mm-step-status', 'active');

        $('.basket__steps_item_active').removeClass('basket__steps_item_active');
        stepIndicator.addClass('basket__steps_item_active');

        $body.animate({
            scrollTop: nextStepElem.offset().top - $('.topmenu').outerHeight()
        }, 300)
    });

    $('[mm-back-step]').on('click', function () {
        let self = $(this),
            backStep = self.attr('mm-back-step'),
            nextStepElem = $('[mm-step-content="' + backStep + '"]'),
            stepIndicator = $('[mm-step="' + backStep + '"]');

        $('.basket__steps_item_active').removeClass('basket__steps_item_active');
        stepIndicator.addClass('basket__steps_item_active');

        $body.animate({
            scrollTop: nextStepElem.offset().top - $('.topmenu').outerHeight()
        }, 300)
    });
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

inputNumber($('.input-number2'));